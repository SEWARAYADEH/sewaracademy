import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, LogIn, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/hooks/useAuth';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from '@/hooks/use-toast';

export function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { signIn, role } = useAuth();
  const { language, isRTL } = useLanguage();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const { error } = await signIn(email, password);

    if (error) {
      toast({
        variant: 'destructive',
        title: language === 'ar' ? 'خطأ في تسجيل الدخول' : 'Login Error',
        description: error.message,
      });
      setIsLoading(false);
      return;
    }

    toast({
      title: language === 'ar' ? 'تم تسجيل الدخول بنجاح' : 'Login Successful',
      description: language === 'ar' ? 'مرحباً بك!' : 'Welcome back!',
    });

    // Redirect based on role
    setTimeout(() => {
      if (role === 'admin') {
        navigate('/dashboard/admin');
      } else if (role === 'teacher') {
        navigate('/dashboard/teacher');
      } else {
        navigate('/dashboard/student');
      }
    }, 500);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-card rounded-xl border border-border p-8 shadow-lg">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <LogIn className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-2xl font-bold text-foreground">
            {language === 'ar' ? 'تسجيل الدخول' : 'Sign In'}
          </h1>
          <p className="text-muted-foreground mt-2">
            {language === 'ar' 
              ? 'أدخل بياناتك للوصول إلى حسابك'
              : 'Enter your credentials to access your account'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
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

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin mr-2" />
                {language === 'ar' ? 'جاري التحميل...' : 'Loading...'}
              </>
            ) : (
              <>
                <LogIn className="w-4 h-4 mr-2" />
                {language === 'ar' ? 'تسجيل الدخول' : 'Sign In'}
              </>
            )}
          </Button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-muted-foreground">
            {language === 'ar' ? 'ليس لديك حساب؟' : "Don't have an account?"}{' '}
            <Link to="/register" className="text-primary hover:underline font-medium">
              {language === 'ar' ? 'سجل الآن' : 'Register Now'}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
