import { Shield, CheckCircle, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export function AccreditationSection() {
  const { t, language, isRTL } = useLanguage();

  const accreditations = [
    {
      icon: Shield,
      title: 'AIAE',
      subtitle: t.accreditation.aiae,
      description: language === 'ar' 
        ? 'الأكاديمية الأمريكية للهندسة الصناعية والتطبيقية - اعتماد دولي للتدريب والتطوير المهني.'
        : 'American Industrial Academy of Engineering - International accreditation for professional training and development.',
    },
    {
      icon: CheckCircle,
      title: 'EOQM',
      subtitle: t.accreditation.eoqm,
      description: language === 'ar'
        ? 'المنظمة الأوروبية لإدارة الجودة - إشراف ومراقبة جودة البرامج التدريبية.'
        : 'European Organization for Quality Management - Quality supervision and monitoring of training programs.',
    },
    {
      icon: Globe,
      title: 'Apostille',
      subtitle: t.accreditation.apostille,
      description: language === 'ar'
        ? 'اعتراف دولي بالشهادات وفق اتفاقية لاهاي - صالحة في أكثر من 120 دولة.'
        : 'International certificate recognition under The Hague Convention - Valid in over 120 countries.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {t.accreditation.title}
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            {t.accreditation.subtitle}
          </p>
        </div>

        {/* Accreditation Cards */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {accreditations.map((acc, index) => (
            <div
              key={index}
              className="bg-primary-foreground/5 border-4 border-primary-foreground/20 p-6 md:p-8 hover:border-accent transition-all group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                  <acc.icon className="w-7 h-7 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{acc.title}</h3>
                  <p className="text-sm text-primary-foreground/70">{acc.subtitle}</p>
                </div>
              </div>
              <p className="text-primary-foreground/80 leading-relaxed">
                {acc.description}
              </p>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-12 pt-12 border-t-2 border-primary-foreground/20">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent">100%</div>
              <div className="text-sm text-primary-foreground/70">
                {language === 'ar' ? 'شهادات معتمدة' : 'Certified'}
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent">120+</div>
              <div className="text-sm text-primary-foreground/70">
                {language === 'ar' ? 'دولة معترفة' : 'Countries'}
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent">QR</div>
              <div className="text-sm text-primary-foreground/70">
                {language === 'ar' ? 'تحقق إلكتروني' : 'Verification'}
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent">PDF</div>
              <div className="text-sm text-primary-foreground/70">
                {language === 'ar' ? 'شهادات رقمية' : 'Digital Certs'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
