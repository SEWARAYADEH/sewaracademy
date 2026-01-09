import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, Phone, MessageCircle, Mail } from "lucide-react";
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const NotFound = () => {
  const location = useLocation();
  const { language } = useLanguage();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-20 text-center">
          <div className="text-9xl font-bold text-primary mb-4">404</div>
          <h1 className="text-4xl font-bold mb-4">
            {language === 'ar' ? 'الصفحة غير موجودة' : 'Page Not Found'}
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-md mx-auto">
            {language === 'ar'
              ? 'عذراً، الصفحة التي تبحث عنها غير موجودة. يمكنك العودة للرئيسية أو التواصل معنا.'
              : 'Sorry, the page you are looking for does not exist. You can return to home or contact us.'}
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button asChild size="lg">
              <Link to="/">
                <Home className="w-5 h-5 mr-2" />
                {language === 'ar' ? 'الرئيسية' : 'Home'}
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/courses">
                {language === 'ar' ? 'الدورات' : 'Courses'}
              </Link>
            </Button>
          </div>

          {/* Contact Options */}
          <div className="bg-card border-4 border-border p-8 max-w-md mx-auto">
            <h2 className="text-xl font-bold mb-4">
              {language === 'ar' ? 'تحتاج مساعدة؟ تواصل معنا' : 'Need help? Contact us'}
            </h2>
            <div className="space-y-3">
              <a
                href="https://wa.me/962770715872"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-success text-success-foreground p-3 hover:opacity-90 transition-opacity"
              >
                <MessageCircle className="w-5 h-5" />
                <span dir="ltr">00962770715872</span>
              </a>
              <a
                href="mailto:info@sewaracademy.online"
                className="flex items-center justify-center gap-2 bg-primary text-primary-foreground p-3 hover:opacity-90 transition-opacity"
              >
                <Mail className="w-5 h-5" />
                info@sewaracademy.online
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
