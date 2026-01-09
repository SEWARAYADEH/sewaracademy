import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Rocket, Users, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

export function CTASection() {
  const { t, language, isRTL } = useLanguage();
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {/* For Students */}
          <div className="bg-card border-4 border-border p-8 md:p-10 hover:border-primary transition-all group">
            <div className="w-16 h-16 bg-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Users className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              {language === 'ar' ? 'للمتدربين والطلاب' : 'For Students & Learners'}
            </h3>
            <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
              {language === 'ar' 
                ? 'ابدأ رحلتك البرمجية مع دورات تدريبية احترافية، مشاريع تطبيقية، وشهادات معتمدة دولياً.'
                : 'Start your programming journey with professional courses, practical projects, and internationally accredited certificates.'}
            </p>
            <Button asChild size="lg" className="group/btn">
              <Link to="/courses">
                {language === 'ar' ? 'استكشف الدورات' : 'Explore Courses'}
                <ArrowIcon className={`w-5 h-5 ${isRTL ? 'mr-2' : 'ml-2'} transition-transform group-hover/btn:${isRTL ? '-translate-x-1' : 'translate-x-1'}`} />
              </Link>
            </Button>
          </div>

          {/* For Businesses */}
          <div className="bg-primary text-primary-foreground p-8 md:p-10 border-4 border-border group">
            <div className="w-16 h-16 bg-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Code className="w-8 h-8 text-accent-foreground" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              {language === 'ar' ? 'للشركات والأعمال' : 'For Businesses'}
            </h3>
            <p className="text-primary-foreground/90 mb-6 text-lg leading-relaxed">
              {language === 'ar'
                ? 'احصل على حلول برمجية متكاملة من مواقع الويب والتطبيقات إلى أنظمة ERP المخصصة.'
                : 'Get complete software solutions from websites and apps to custom ERP systems.'}
            </p>
            <Button asChild size="lg" variant="secondary" className="group/btn">
              <Link to="/services">
                {language === 'ar' ? 'اطلب عرض سعر' : 'Request a Quote'}
                <ArrowIcon className={`w-5 h-5 ${isRTL ? 'mr-2' : 'ml-2'} transition-transform group-hover/btn:${isRTL ? '-translate-x-1' : 'translate-x-1'}`} />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
