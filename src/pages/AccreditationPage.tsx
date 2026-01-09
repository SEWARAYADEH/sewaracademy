import { Shield, CheckCircle, Globe, Award, FileCheck, QrCode } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { useLanguage } from '@/contexts/LanguageContext';

const AccreditationPage = () => {
  const { t, language, isRTL } = useLanguage();

  const accreditations = [
    {
      icon: Shield,
      title: 'AIAE',
      fullNameEn: 'American Industrial Academy of Engineering',
      fullNameAr: 'الأكاديمية الأمريكية للهندسة الصناعية والتطبيقية',
      descriptionEn: 'AIAE is an American accreditation body that certifies professional training programs in engineering and technology. Our partnership ensures that all ASA Software certificates meet rigorous international standards.',
      descriptionAr: 'AIAE هي هيئة اعتماد أمريكية تعتمد برامج التدريب المهني في الهندسة والتكنولوجيا. شراكتنا تضمن أن جميع شهادات ASA Software تلبي معايير دولية صارمة.',
      features: {
        en: ['Professional Training Certification', 'Industry-Recognized Standards', 'Continuous Quality Monitoring', 'Global Employer Recognition'],
        ar: ['اعتماد التدريب المهني', 'معايير معترف بها في الصناعة', 'مراقبة الجودة المستمرة', 'اعتراف أصحاب العمل عالمياً']
      }
    },
    {
      icon: CheckCircle,
      title: 'EOQM',
      fullNameEn: 'European Organization for Quality Management',
      fullNameAr: 'المنظمة الأوروبية لإدارة الجودة',
      descriptionEn: 'EOQM provides quality assurance supervision for our training programs, ensuring adherence to European quality standards. This supervision guarantees consistent excellence across all our courses.',
      descriptionAr: 'EOQM تقدم إشرافاً على ضمان الجودة لبرامجنا التدريبية، مما يضمن الالتزام بمعايير الجودة الأوروبية. هذا الإشراف يضمن التميز المستمر في جميع دوراتنا.',
      features: {
        en: ['Quality Assurance Standards', 'European Recognition', 'Regular Audits', 'Process Excellence'],
        ar: ['معايير ضمان الجودة', 'الاعتراف الأوروبي', 'تدقيق منتظم', 'التميز في العمليات']
      }
    },
    {
      icon: Globe,
      title: 'Apostille',
      fullNameEn: 'Hague Convention Recognition',
      fullNameAr: 'اعتراف اتفاقية لاهاي',
      descriptionEn: 'Apostille authentication makes our certificates legally valid in over 120 countries that are signatories to The Hague Convention. This international recognition opens doors for our graduates worldwide.',
      descriptionAr: 'توثيق Apostille يجعل شهاداتنا صالحة قانونياً في أكثر من 120 دولة موقعة على اتفاقية لاهاي. هذا الاعتراف الدولي يفتح الأبواب لخريجينا حول العالم.',
      features: {
        en: ['120+ Countries Recognition', 'Legal Validity', 'Document Authentication', 'International Mobility'],
        ar: ['اعتراف +120 دولة', 'صلاحية قانونية', 'توثيق المستندات', 'التنقل الدولي']
      }
    },
  ];

  const certificateFeatures = [
    {
      icon: Award,
      titleEn: 'Professional Certificate',
      titleAr: 'شهادة احترافية',
      descEn: 'Beautifully designed certificates with your name, course, and achievements.',
      descAr: 'شهادات مصممة بشكل جميل تحمل اسمك والدورة وإنجازاتك.',
    },
    {
      icon: QrCode,
      titleEn: 'QR Verification',
      titleAr: 'تحقق بـ QR',
      descEn: 'Every certificate includes a QR code for instant online verification.',
      descAr: 'كل شهادة تتضمن رمز QR للتحقق الفوري عبر الإنترنت.',
    },
    {
      icon: FileCheck,
      titleEn: 'Digital & Print',
      titleAr: 'رقمية ومطبوعة',
      descEn: 'Receive both digital PDF and optional printed certificate.',
      descAr: 'احصل على نسخة PDF رقمية وخيار الطباعة.',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="bg-primary text-primary-foreground py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.accreditation.title}</h1>
            <p className="text-xl text-primary-foreground/80 max-w-2xl">
              {t.accreditation.subtitle}
            </p>
          </div>
        </section>

        {/* Accreditation Bodies */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="space-y-8">
              {accreditations.map((acc, index) => (
                <div
                  key={index}
                  className="bg-card border-4 border-border hover:border-primary transition-all"
                >
                  <div className="grid lg:grid-cols-3">
                    {/* Header */}
                    <div className="bg-primary text-primary-foreground p-8 lg:p-10">
                      <div className="w-16 h-16 bg-accent flex items-center justify-center mb-6">
                        <acc.icon className="w-8 h-8 text-accent-foreground" />
                      </div>
                      <h2 className="text-3xl font-bold mb-2">{acc.title}</h2>
                      <p className="text-primary-foreground/80">
                        {language === 'ar' ? acc.fullNameAr : acc.fullNameEn}
                      </p>
                    </div>

                    {/* Content */}
                    <div className="lg:col-span-2 p-8 lg:p-10">
                      <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                        {language === 'ar' ? acc.descriptionAr : acc.descriptionEn}
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        {(language === 'ar' ? acc.features.ar : acc.features.en).map((feature, fIndex) => (
                          <div key={fIndex} className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-accent flex-shrink-0" />
                            <span className="text-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certificate Features */}
        <section className="py-16 bg-secondary/30 border-y-2 border-border">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              {language === 'ar' ? 'مميزات شهاداتنا' : 'Certificate Features'}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {certificateFeatures.map((feature, index) => (
                <div key={index} className="bg-card border-4 border-border p-8 text-center hover:border-accent transition-all group">
                  <div className="w-16 h-16 bg-accent/10 group-hover:bg-accent flex items-center justify-center mx-auto mb-6 transition-colors">
                    <feature.icon className="w-8 h-8 text-accent-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {language === 'ar' ? feature.titleAr : feature.titleEn}
                  </h3>
                  <p className="text-muted-foreground">
                    {language === 'ar' ? feature.descAr : feature.descEn}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Verification Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {language === 'ar' ? 'تحقق من شهادتك' : 'Verify Your Certificate'}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              {language === 'ar'
                ? 'استخدم رمز التحقق الموجود على شهادتك للتحقق من صحتها عبر الإنترنت.'
                : 'Use the verification code on your certificate to verify its authenticity online.'}
            </p>
            <div className="bg-card border-4 border-border p-8 max-w-md mx-auto">
              <p className="text-muted-foreground text-sm mb-4">
                {language === 'ar' ? 'صفحة التحقق قريباً...' : 'Verification page coming soon...'}
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AccreditationPage;
