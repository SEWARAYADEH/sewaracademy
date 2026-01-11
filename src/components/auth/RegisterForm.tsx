import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, UserPlus, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useAuth, AppRole } from '@/hooks/useAuth';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from '@/hooks/use-toast';

export function RegisterForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState<AppRole>('student');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { signUp } = useAuth();
  const { language, isRTL } = useLanguage();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      toast({
        variant: 'destructive',
        title: language === 'ar' ? 'خطأ' : 'Error',
        description: language === 'ar' 
          ? 'كلمات المرور غير متطابقة'
          : 'Passwords do not match',
      });
      return;
    }

    if (password.length < 6) {
      toast({
        variant: 'destructive',
        title: language === 'ar' ? 'خطأ' : 'Error',
        description: language === 'ar' 
          ? 'كلمة المرور يجب أن تكون 6 أحرف على الأقل'
          : 'Password must be at least 6 characters',
      });
      return;
    }

    setIsLoading(true);

    const { error } = await signUp(email, password, name, role);

    if (error) {
      toast({
        variant: 'destructive',
        title: language === 'ar' ? 'خطأ في التسجيل' : 'Registration Error',
        description: error.message,
      });
      setIsLoading(false);
      return;
    }

    toast({
      title: language === 'ar' ? 'تم التسجيل بنجاح' : 'Registration Successful',
      description: language === 'ar' 
        ? 'تم إنشاء حسابك بنجاح. يمكنك الآن تسجيل الدخول.'
        : 'Your account has been created. You can now sign in.',
    });

    navigate('/login');
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-card rounded-xl border border-border p-8 shadow-lg">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <UserPlus className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-2xl font-bold text-foreground">
            {language === 'ar' ? 'إنشاء حساب جديد' : 'Create Account'}
          </h1>
          <p className="text-muted-foreground mt-2">
            {language === 'ar' 
              ? 'انضم إلى أكاديمية سوار الأمريكية'
              : 'Join American Sewar Academy'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="name">
              {language === 'ar' ? 'الاسم الكامل' : 'Full Name'}
            </Label>
            <Input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={language === 'ar' ? 'أدخل اسمك الكامل' : 'Enter your full name'}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">
              {language === 'ar' ? 'البريد الإلكتروني' : 'Email'}
            </Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={language === 'ar' ? 'أدخل بريدك الإلكتروني' : 'Enter your email'}
              required
              dir="ltr"
              className="text-left"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="role">
              {language === 'ar' ? 'نوع الحساب' : 'Account Type'}
            </Label>
            <Select value={role} onValueChange={(value) => setRole(value as AppRole)}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="student">
                  {language === 'ar' ? 'طالب' : 'Student'}
                </SelectItem>
                <SelectItem value="teacher">
                  {language === 'ar' ? 'مدرس' : 'Teacher'}
                </SelectItem>
                <SelectItem value="admin">
                  {language === 'ar' ? 'مسؤول' : 'Admin'}
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">
              {language === 'ar' ? 'كلمة المرور' : 'Password'}
            </Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={language === 'ar' ? 'أدخل كلمة المرور' : 'Enter your password'}
                required
                dir="ltr"
                className={`text-left ${isRTL ? 'pl-10' : 'pr-10'}`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className={`absolute top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground ${
                  isRTL ? 'left-3' : 'right-3'
                }`}
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirmPassword">
              {language === 'ar' ? 'تأكيد كلمة المرور' : 'Confirm Password'}
            </Label>
            <Input
              id="confirmPassword"
              type={showPassword ? 'text' : 'password'}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder={language === 'ar' ? 'أعد إدخال كلمة المرور' : 'Confirm your password'}
              required
              dir="ltr"
              className="text-left"
            />
          </div>

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin mr-2" />
                {language === 'ar' ? 'جاري التسجيل...' : 'Registering...'}
              </>
            ) : (
              <>
                <UserPlus className="w-4 h-4 mr-2" />
                {language === 'ar' ? 'إنشاء الحساب' : 'Create Account'}
              </>
            )}
          </Button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-muted-foreground">
            {language === 'ar' ? 'لديك حساب بالفعل؟' : 'Already have an account?'}{' '}
            <Link to="/login" className="text-primary hover:underline font-medium">
              {language === 'ar' ? 'تسجيل الدخول' : 'Sign In'}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
