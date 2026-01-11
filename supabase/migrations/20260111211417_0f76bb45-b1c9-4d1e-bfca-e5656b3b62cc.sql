-- Fix the permissive RLS policy for activity_logs
DROP POLICY IF EXISTS "System can insert activity logs" ON public.activity_logs;

-- Create a more secure policy for activity log insertion
CREATE POLICY "Authenticated users can insert activity logs"
ON public.activity_logs FOR INSERT
WITH CHECK (auth.uid() IS NOT NULL);

-- Create storage bucket for course files
INSERT INTO storage.buckets (id, name, public)
VALUES ('course-files', 'course-files', false);

-- Storage policies for course files
CREATE POLICY "Users can view files in their courses"
ON storage.objects FOR SELECT
USING (
    bucket_id = 'course-files' AND
    (
        -- Admin can see all
        public.has_role(auth.uid(), 'admin')
        OR
        -- User uploaded the file
        auth.uid()::text = (storage.foldername(name))[1]
        OR
        -- User is enrolled in the course or is the teacher
        EXISTS (
            SELECT 1 FROM public.files f
            JOIN public.courses c ON f.course_id = c.id
            LEFT JOIN public.course_enrollments ce ON ce.course_id = c.id
            WHERE f.file_path = name
            AND (c.teacher_id = auth.uid() OR ce.student_id = auth.uid())
        )
    )
);

CREATE POLICY "Teachers can upload files"
ON storage.objects FOR INSERT
WITH CHECK (
    bucket_id = 'course-files' AND
    (
        public.has_role(auth.uid(), 'admin')
        OR public.has_role(auth.uid(), 'teacher')
        OR public.has_role(auth.uid(), 'student')
    )
);

CREATE POLICY "Users can delete their own files"
ON storage.objects FOR DELETE
USING (
    bucket_id = 'course-files' AND
    (
        auth.uid()::text = (storage.foldername(name))[1]
        OR public.has_role(auth.uid(), 'admin')
    )
);