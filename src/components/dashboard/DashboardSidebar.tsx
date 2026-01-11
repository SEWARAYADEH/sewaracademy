import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  BookOpen, 
  FileText, 
  Activity, 
  Settings, 
  LogOut,
  GraduationCap,
  Upload,
  MessageSquare,
  FolderOpen,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useAuth, AppRole } from '@/hooks/useAuth';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

interface NavItem {
  icon: React.ElementType;
  label: string;
  labelAr: string;
  href: string;
  roles: AppRole[];
}

const navItems: NavItem[] = [
  // Admin items
  { icon: LayoutDashboard, label: 'Dashboard', labelAr: 'لوحة التحكم', href: '/dashboard/admin', roles: ['admin'] },
  { icon: Users, label: 'Users', labelAr: 'المستخدمين', href: '/dashboard/admin/users', roles: ['admin'] },
  { icon: BookOpen, label: 'Courses', labelAr: 'الدورات', href: '/dashboard/admin/courses', roles: ['admin'] },
  { icon: Activity, label: 'Activity Log', labelAr: 'سجل الأنشطة', href: '/dashboard/admin/activity', roles: ['admin'] },
  
  // Teacher items
  { icon: LayoutDashboard, label: 'Dashboard', labelAr: 'لوحة التحكم', href: '/dashboard/teacher', roles: ['teacher'] },
  { icon: BookOpen, label: 'My Courses', labelAr: 'دوراتي', href: '/dashboard/teacher/courses', roles: ['teacher'] },
  { icon: GraduationCap, label: 'Students', labelAr: 'الطلاب', href: '/dashboard/teacher/students', roles: ['teacher'] },
  { icon: Upload, label: 'Files', labelAr: 'الملفات', href: '/dashboard/teacher/files', roles: ['teacher'] },
  
  // Student items
  { icon: LayoutDashboard, label: 'Dashboard', labelAr: 'لوحة التحكم', href: '/dashboard/student', roles: ['student'] },
  { icon: BookOpen, label: 'My Courses', labelAr: 'دوراتي', href: '/dashboard/student/courses', roles: ['student'] },
  { icon: FolderOpen, label: 'Files', labelAr: 'الملفات', href: '/dashboard/student/files', roles: ['student'] },
  { icon: MessageSquare, label: 'Comments', labelAr: 'التعليقات', href: '/dashboard/student/comments', roles: ['student'] },
  
  // Common items (all roles)
  { icon: Settings, label: 'Settings', labelAr: 'الإعدادات', href: '/dashboard/settings', roles: ['admin', 'teacher', 'student'] },
];

export function DashboardSidebar() {
  const { role, profile, signOut } = useAuth();
  const { language, isRTL } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);

  const filteredItems = navItems.filter(item => role && item.roles.includes(role));

  const handleLogout = async () => {
    await signOut();
    navigate('/');
  };

  const getRoleBadge = () => {
    const roleLabels = {
      admin: { en: 'Admin', ar: 'مسؤول', color: 'bg-destructive' },
      teacher: { en: 'Teacher', ar: 'مدرس', color: 'bg-accent' },
      student: { en: 'Student', ar: 'طالب', color: 'bg-success' },
    };
    
    if (!role) return null;
    const roleInfo = roleLabels[role];
    
    return (
      <span className={cn('px-2 py-0.5 rounded-full text-xs font-medium text-primary-foreground', roleInfo.color)}>
        {language === 'ar' ? roleInfo.ar : roleInfo.en}
      </span>
    );
  };

  return (
    <aside 
      className={cn(
        'h-screen bg-sidebar text-sidebar-foreground flex flex-col transition-all duration-300 sticky top-0',
        collapsed ? 'w-20' : 'w-64'
      )}
    >
      {/* Header */}
      <div className="p-4 border-b border-sidebar-border">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-sidebar-primary rounded-lg flex items-center justify-center flex-shrink-0">
            <span className="text-sidebar-primary-foreground font-bold text-lg">A</span>
          </div>
          {!collapsed && (
            <div>
              <h1 className="font-bold text-sm">ASA Software</h1>
              <p className="text-xs text-sidebar-foreground/70">
                {language === 'ar' ? 'منصة التعليم' : 'Learning Platform'}
              </p>
            </div>
          )}
        </Link>
      </div>

      {/* User Info */}
      {!collapsed && (
        <div className="p-4 border-b border-sidebar-border">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-sidebar-accent rounded-full flex items-center justify-center">
              <span className="text-sidebar-accent-foreground font-semibold">
                {profile?.name?.charAt(0).toUpperCase() || 'U'}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">{profile?.name || 'User'}</p>
              {getRoleBadge()}
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
        {filteredItems.map((item) => {
          const isActive = location.pathname === item.href;
          return (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                'flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors',
                isActive 
                  ? 'bg-sidebar-primary text-sidebar-primary-foreground' 
                  : 'hover:bg-sidebar-accent text-sidebar-foreground hover:text-sidebar-accent-foreground'
              )}
            >
              <item.icon className="w-5 h-5 flex-shrink-0" />
              {!collapsed && (
                <span className="text-sm font-medium">
                  {language === 'ar' ? item.labelAr : item.label}
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-3 border-t border-sidebar-border space-y-2">
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="w-full flex items-center justify-center gap-3 px-3 py-2 rounded-lg hover:bg-sidebar-accent transition-colors"
        >
          {isRTL ? (
            collapsed ? <ChevronLeft className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />
          ) : (
            collapsed ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />
          )}
          {!collapsed && (
            <span className="text-sm">
              {language === 'ar' ? 'طي القائمة' : 'Collapse'}
            </span>
          )}
        </button>
        
        <Button 
          variant="ghost" 
          onClick={handleLogout}
          className="w-full justify-start gap-3 text-destructive hover:text-destructive hover:bg-destructive/10"
        >
          <LogOut className="w-5 h-5" />
          {!collapsed && (
            <span className="text-sm">
              {language === 'ar' ? 'تسجيل الخروج' : 'Logout'}
            </span>
          )}
        </Button>
      </div>
    </aside>
  );
}
