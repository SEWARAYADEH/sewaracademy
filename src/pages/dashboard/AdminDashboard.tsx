import { useEffect, useState } from 'react';
import { Users, BookOpen, GraduationCap, Activity, TrendingUp, TrendingDown } from 'lucide-react';
import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
import { StatsCard } from '@/components/dashboard/StatsCard';
import { useLanguage } from '@/contexts/LanguageContext';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface Stats {
  totalUsers: number;
  totalTeachers: number;
  totalStudents: number;
  totalCourses: number;
  activeCourses: number;
  recentActivities: any[];
}

export default function AdminDashboard() {
  const { language } = useLanguage();
  const [stats, setStats] = useState<Stats>({
    totalUsers: 0,
    totalTeachers: 0,
    totalStudents: 0,
    totalCourses: 0,
    activeCourses: 0,
    recentActivities: [],
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      // Fetch user counts by role
      const { data: roles } = await supabase
        .from('user_roles')
        .select('role');

      const teachers = roles?.filter(r => r.role === 'teacher').length || 0;
      const students = roles?.filter(r => r.role === 'student').length || 0;

      // Fetch courses
      const { data: courses } = await supabase
        .from('courses')
        .select('is_active');

      const activeCourses = courses?.filter(c => c.is_active).length || 0;

      // Fetch recent activities
      const { data: activities } = await supabase
        .from('activity_logs')
        .select('*, profiles:user_id(name)')
        .order('created_at', { ascending: false })
        .limit(10);

      setStats({
        totalUsers: (roles?.length || 0),
        totalTeachers: teachers,
        totalStudents: students,
        totalCourses: courses?.length || 0,
        activeCourses,
        recentActivities: activities || [],
      });
    } catch (error) {
      console.error('Error fetching stats:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const statsCards = [
    {
      title: language === 'ar' ? 'إجمالي المستخدمين' : 'Total Users',
      value: stats.totalUsers,
      icon: <Users className="w-6 h-6" />,
      trend: { value: 12, isPositive: true },
    },
    {
      title: language === 'ar' ? 'المدرسين' : 'Teachers',
      value: stats.totalTeachers,
      icon: <GraduationCap className="w-6 h-6" />,
    },
    {
      title: language === 'ar' ? 'الطلاب' : 'Students',
      value: stats.totalStudents,
      icon: <Users className="w-6 h-6" />,
      trend: { value: 8, isPositive: true },
    },
    {
      title: language === 'ar' ? 'الدورات النشطة' : 'Active Courses',
      value: `${stats.activeCourses}/${stats.totalCourses}`,
      icon: <BookOpen className="w-6 h-6" />,
    },
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(language === 'ar' ? 'ar-JO' : 'en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <DashboardLayout 
      title="Admin Dashboard" 
      titleAr="لوحة تحكم المسؤول"
    >
      <div className="space-y-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsCards.map((stat, index) => (
            <StatsCard key={index} {...stat} />
          ))}
        </div>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="w-5 h-5" />
              {language === 'ar' ? 'النشاط الأخير' : 'Recent Activity'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {stats.recentActivities.length === 0 ? (
              <p className="text-center text-muted-foreground py-8">
                {language === 'ar' ? 'لا يوجد نشاط حتى الآن' : 'No activity yet'}
              </p>
            ) : (
              <div className="space-y-4">
                {stats.recentActivities.map((activity, index) => (
                  <div 
                    key={activity.id || index}
                    className="flex items-center justify-between py-3 border-b border-border last:border-0"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <Activity className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{activity.action}</p>
                        <p className="text-sm text-muted-foreground">
                          {activity.model && `${activity.model}`}
                        </p>
                      </div>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {formatDate(activity.created_at)}
                    </span>
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
