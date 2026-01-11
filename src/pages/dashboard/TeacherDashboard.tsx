import { useEffect, useState } from 'react';
import { BookOpen, Users, FileText, Upload } from 'lucide-react';
import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
import { StatsCard } from '@/components/dashboard/StatsCard';
import { useLanguage } from '@/contexts/LanguageContext';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface TeacherStats {
  totalCourses: number;
  totalStudents: number;
  totalFiles: number;
  recentFiles: any[];
}

export default function TeacherDashboard() {
  const { language } = useLanguage();
  const { user } = useAuth();
  const [stats, setStats] = useState<TeacherStats>({
    totalCourses: 0,
    totalStudents: 0,
    totalFiles: 0,
    recentFiles: [],
  });
  const [courses, setCourses] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (user) {
      fetchStats();
    }
  }, [user]);

  const fetchStats = async () => {
    try {
      // Fetch teacher's courses
      const { data: coursesData } = await supabase
        .from('courses')
        .select(`
          *,
          course_enrollments(count)
        `)
        .eq('teacher_id', user?.id);

      setCourses(coursesData || []);

      // Count total students
      const totalStudents = coursesData?.reduce((acc, course) => {
        return acc + (course.course_enrollments?.[0]?.count || 0);
      }, 0) || 0;

      // Fetch files uploaded by teacher
      const { data: filesData } = await supabase
        .from('files')
        .select('*')
        .eq('uploader_id', user?.id)
        .order('created_at', { ascending: false })
        .limit(5);

      setStats({
        totalCourses: coursesData?.length || 0,
        totalStudents,
        totalFiles: filesData?.length || 0,
        recentFiles: filesData || [],
      });
    } catch (error) {
      console.error('Error fetching stats:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const statsCards = [
    {
      title: language === 'ar' ? 'دوراتي' : 'My Courses',
      value: stats.totalCourses,
      icon: <BookOpen className="w-6 h-6" />,
    },
    {
      title: language === 'ar' ? 'طلابي' : 'My Students',
      value: stats.totalStudents,
      icon: <Users className="w-6 h-6" />,
    },
    {
      title: language === 'ar' ? 'ملفاتي' : 'My Files',
      value: stats.totalFiles,
      icon: <FileText className="w-6 h-6" />,
    },
  ];

  return (
    <DashboardLayout 
      title="Teacher Dashboard" 
      titleAr="لوحة تحكم المدرس"
    >
      <div className="space-y-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {statsCards.map((stat, index) => (
            <StatsCard key={index} {...stat} />
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* My Courses */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                {language === 'ar' ? 'دوراتي' : 'My Courses'}
              </CardTitle>
              <Link to="/dashboard/teacher/courses">
                <Button variant="outline" size="sm">
                  {language === 'ar' ? 'عرض الكل' : 'View All'}
                </Button>
              </Link>
            </CardHeader>
            <CardContent>
              {courses.length === 0 ? (
                <p className="text-center text-muted-foreground py-8">
                  {language === 'ar' 
                    ? 'لم يتم تعيين أي دورات لك بعد'
                    : 'No courses assigned to you yet'}
                </p>
              ) : (
                <div className="space-y-4">
                  {courses.slice(0, 4).map((course) => (
                    <div 
                      key={course.id}
                      className="flex items-center justify-between py-3 border-b border-border last:border-0"
                    >
                      <div>
                        <p className="font-medium text-foreground">
                          {language === 'ar' ? course.title_ar || course.title : course.title}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {course.course_enrollments?.[0]?.count || 0} {language === 'ar' ? 'طالب' : 'students'}
                        </p>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        course.is_active 
                          ? 'bg-success/10 text-success' 
                          : 'bg-muted text-muted-foreground'
                      }`}>
                        {course.is_active 
                          ? (language === 'ar' ? 'نشط' : 'Active')
                          : (language === 'ar' ? 'غير نشط' : 'Inactive')}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Recent Files */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5" />
                {language === 'ar' ? 'الملفات الأخيرة' : 'Recent Files'}
              </CardTitle>
              <Link to="/dashboard/teacher/files">
                <Button variant="outline" size="sm">
                  <Upload className="w-4 h-4 mr-2" />
                  {language === 'ar' ? 'رفع ملف' : 'Upload'}
                </Button>
              </Link>
            </CardHeader>
            <CardContent>
              {stats.recentFiles.length === 0 ? (
                <p className="text-center text-muted-foreground py-8">
                  {language === 'ar' ? 'لا توجد ملفات بعد' : 'No files yet'}
                </p>
              ) : (
                <div className="space-y-4">
                  {stats.recentFiles.map((file) => (
                    <div 
                      key={file.id}
                      className="flex items-center justify-between py-3 border-b border-border last:border-0"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                          <FileText className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">{file.file_name}</p>
                          <p className="text-sm text-muted-foreground">{file.file_type}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
