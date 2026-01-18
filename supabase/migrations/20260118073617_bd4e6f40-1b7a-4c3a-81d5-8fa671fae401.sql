-- Fix security issue: Prevent users from self-assigning admin/teacher roles
-- Only allow 'student' role to be inserted by non-admins

-- Drop existing insert policies on user_roles that might allow self-assignment
DROP POLICY IF EXISTS "Admins can manage roles" ON public.user_roles;

-- Create new policies for user_roles
-- Allow admins full access to manage roles
CREATE POLICY "Admins can manage all roles"
ON public.user_roles
FOR ALL
USING (public.has_role(auth.uid(), 'admin'::app_role));

-- Allow new users to insert ONLY student role for themselves
CREATE POLICY "Users can self-assign student role only"
ON public.user_roles
FOR INSERT
WITH CHECK (
    auth.uid() = user_id 
    AND role = 'student'::app_role
);

-- Fix profiles table: Ensure no public access
-- Drop any potentially permissive policies and recreate with proper restrictions
DROP POLICY IF EXISTS "Admins can view all profiles" ON public.profiles;
DROP POLICY IF EXISTS "Admins can update all profiles" ON public.profiles;
DROP POLICY IF EXISTS "Admins can delete profiles" ON public.profiles;
DROP POLICY IF EXISTS "Admins can insert profiles" ON public.profiles;
DROP POLICY IF EXISTS "Users can view their own profile" ON public.profiles;
DROP POLICY IF EXISTS "Users can update their own profile" ON public.profiles;
DROP POLICY IF EXISTS "Teachers can view student profiles in their courses" ON public.profiles;

-- Recreate profiles policies as PERMISSIVE (default) for proper access control
CREATE POLICY "Users can view own profile"
ON public.profiles
FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

CREATE POLICY "Admins can view all profiles"
ON public.profiles
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Teachers can view enrolled student profiles"
ON public.profiles
FOR SELECT
TO authenticated
USING (
    public.has_role(auth.uid(), 'teacher'::app_role) 
    AND EXISTS (
        SELECT 1 FROM course_enrollments ce
        JOIN courses c ON ce.course_id = c.id
        WHERE ce.student_id = profiles.user_id 
        AND c.teacher_id = auth.uid()
    )
);

CREATE POLICY "Users can update own profile"
ON public.profiles
FOR UPDATE
TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Admins can update all profiles"
ON public.profiles
FOR UPDATE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "System can insert profiles"
ON public.profiles
FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = user_id OR public.has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can delete profiles"
ON public.profiles
FOR DELETE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'::app_role));

-- Fix activity_logs: Restrict access properly
DROP POLICY IF EXISTS "Admins can view all activity logs" ON public.activity_logs;
DROP POLICY IF EXISTS "Authenticated users can insert activity logs" ON public.activity_logs;

-- Only admins can view activity logs (containing IP addresses)
CREATE POLICY "Only admins can view activity logs"
ON public.activity_logs
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'::app_role));

-- Authenticated users can insert their own activity logs
CREATE POLICY "Users can insert own activity logs"
ON public.activity_logs
FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = user_id);