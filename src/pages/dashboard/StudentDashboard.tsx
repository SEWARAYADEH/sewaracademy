import { useEffect, useState } from 'react';
import { BookOpen, FileText, Clock, Award } from 'lucide-react';
import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
import { StatsCard } from '@/components/dashboard/StatsCard';
import { useLanguage } from '@/contexts/LanguageContext';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Progress } from '@/components/ui/progress';

interface StudentStats {
  enrolledCourses: number;
  totalFiles: number;
  totalHours: number;
}

interface EnrolledCourse {
  id: string;
  title: string;
  title_ar: string | null;
  duration_hours: number;
  teacher_name?: string;
}

export default function StudentDashboard() {
  const { language } = useLanguage();
  const { user, profile } = useAuth();
  const [stats, setStats] = useState<StudentStats>({
    enrolledCourses: 0,
    totalFiles: 0,
    totalHours: 0,
  });
  const [courses, setCourses] = useState<EnrolledCourse[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (user) {
      fetchStats();
    }
  }, [user]);

  const fetchStats = async () => {
    try {
      // Fetch enrolled courses
      const { data: enrollments } = await supabase
        .from('course_enrollments')
        .select(`
          course_id,
          courses (
            id,
            title,
            title_ar,
            duration_hours,
            teacher_id
          )
        `)
        .eq('student_id', user?.id);

      const enrolledCourses = enrollments?.map(e => ({
        id: e.courses?.id || '',
        title: e.courses?.title || '',
        title_ar: e.courses?.title_ar,
        duration_hours: e.courses?.duration_hours || 0,
      })) || [];

      setCourses(enrolledCourses);

      const totalHours = enrolledCourses.reduce((acc, course) => acc + course.duration_hours, 0);

      // Fetch files in enrolled courses
      const courseIds = enrolledCourses.map(c => c.id);
      let totalFiles = 0;
      
      if (courseIds.length > 0) {
        const { data: files } = await supabase
          .from('files')
          .select('id')
          .in('course_id', courseIds);
        
        totalFiles = files?.length || 0;
      }

      setStats({
        enrolledCourses: enrolledCourses.length,
        totalFiles,
        totalHours,
      });
    } catch (error) {
      console.error('Error fetching stats:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const statsCards = [
    {
      title: language === 'ar' ? 'الدورات المسجلة' : 'Enrolled Courses',
      value: stats.enrolledCourses,
      icon: <BookOpen className="w-6 h-6" />,
    },
    {
      title: language === 'ar' ? 'إجمالي الساعات' : 'Total Hours',
      value: stats.totalHours,
      icon: <Clock className="w-6 h-6" />,
    },
    {
      title: language === 'ar' ? 'الملفات المتاحة' : 'Available Files',
      value: stats.totalFiles,
      icon: <FileText className="w-6 h-6" />,
    },
  ];

  return (
    <DashboardLayout 
      title="Student Dashboard" 
      titleAr="لوحة تحكم الطالب"
    >
      <div className="space-y-6">
        {/* Welcome Message */}
        <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-none">
          <CardContent className="py-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-2xl font-bold">
                {profile?.name?.charAt(0).toUpperCase() || 'S'}
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground">
                  {language === 'ar' ? `مرحباً، ${profile?.name}!` : `Welcome, ${profile?.name}!`}
                </h2>
                <p className="text-muted-foreground">
                  {language === 'ar' 
                    ? 'استمر في التعلم وحقق أهدافك'
                    : 'Keep learning and achieve your goals'}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {statsCards.map((stat, index) => (
            <StatsCard key={index} {...stat} />
          ))}
        </div>

        {/* My Courses */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              {language === 'ar' ? 'دوراتي' : 'My Courses'}
            </CardTitle>
            <Link to="/dashboard/student/courses">
              <Button variant="outline" size="sm">
                {language === 'ar' ? 'عرض الكل' : 'View All'}
              </Button>
            </Link>
          </CardHeader>
          <CardContent>
            {courses.length === 0 ? (
              <div className="text-center py-8">
                <BookOpen className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground mb-4">
                  {language === 'ar' 
                    ? 'لم تسجل في أي دورة بعد'
                    : 'You are not enrolled in any courses yet'}
                </p>
                <Link to="/courses">
                  <Button>
                    {language === 'ar' ? 'تصفح الدورات' : 'Browse Courses'}
                  </Button>
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {courses.map((course) => (
                  <div 
                    key={course.id}
                    className="p-4 rounded-lg border border-border bg-card hover:border-primary/50 transition-colors"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-semibold text-foreground">
                          {language === 'ar' ? course.title_ar || course.title : course.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {course.duration_hours} {language === 'ar' ? 'ساعة' : 'hours'}
                        </p>
                      </div>
                      <Award className="w-5 h-5 text-accent" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">
                          {language === 'ar' ? 'التقدم' : 'Progress'}
                        </span>
                        <span className="font-medium">0%</span>
                      </div>
                      <Progress value={0} className="h-2" />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
