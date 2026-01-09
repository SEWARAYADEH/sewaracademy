import { Target, Lightbulb, Users, Award, Code, BookOpen, Zap, Globe } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { useLanguage } from '@/contexts/LanguageContext';

const AboutPage = () => {
  const { t, language, isRTL } = useLanguage();

  const values = [
    {
      icon: Award,
      titleEn: 'Excellence',
      titleAr: 'التميز',
      descEn: 'We strive for excellence in every course, project, and service we deliver.',
      descAr: 'نسعى للتميز في كل دورة ومشروع وخدمة نقدمها.',
    },
    {
      icon: Code,
      titleEn: 'Innovation',
      titleAr: 'الابتكار',
      descEn: 'We embrace the latest technologies and methodologies in our training and development.',
      descAr: 'نتبنى أحدث التقنيات والمنهجيات في التدريب والتطوير.',
    },
    {
      icon: Users,
      titleEn: 'Community',
      titleAr: 'المجتمع',
      descEn: 'We build a strong community of learners and professionals who support each other.',
      descAr: 'نبني مجتمعاً قوياً من المتعلمين والمحترفين الذين يدعمون بعضهم البعض.',
    },
    {
      icon: Zap,
      titleEn: 'Practical Learning',
      titleAr: 'التعلم العملي',
      descEn: 'Real projects and hands-on experience are at the core of our training philosophy.',
      descAr: 'المشاريع الحقيقية والخبرة العملية هي جوهر فلسفتنا التدريبية.',
    },
  ];

  const team = [
    {
      role: language === 'ar' ? 'المؤسس والمدير التنفيذي' : 'Founder & CEO',
      descEn: 'Leading the vision and strategy of ASA Software.',
      descAr: 'قيادة رؤية واستراتيجية ASA Software.',
    },
    {
      role: language === 'ar' ? 'مدير التدريب' : 'Training Director',
      descEn: 'Overseeing curriculum development and instructor quality.',
      descAr: 'الإشراف على تطوير المناهج وجودة المدربين.',
    },
    {
      role: language === 'ar' ? 'مدير التطوير' : 'Development Lead',
      descEn: 'Managing software projects and technical excellence.',
      descAr: 'إدارة المشاريع البرمجية والتميز التقني.',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="bg-primary text-primary-foreground py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.about.title}</h1>
            <p className="text-xl text-primary-foreground/80 max-w-2xl">
              {language === 'ar' 
                ? 'منصة أمريكية رائدة تجمع بين التعليم والتطوير البرمجي في نظام واحد متكامل.'
                : 'A leading American platform combining education and software development in one integrated system.'}
            </p>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Vision */}
              <div className="bg-primary text-primary-foreground p-8 md:p-12 border-4 border-border">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-accent flex items-center justify-center">
                    <Target className="w-8 h-8 text-accent-foreground" />
                  </div>
                  <h2 className="text-3xl font-bold">{t.about.vision}</h2>
                </div>
                <p className="text-primary-foreground/90 text-lg leading-relaxed">
                  {t.about.visionText}
                </p>
              </div>

              {/* Mission */}
              <div className="bg-card border-4 border-border p-8 md:p-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-primary flex items-center justify-center">
                    <Lightbulb className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground">{t.about.mission}</h2>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {t.about.missionText}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 bg-secondary/30 border-y-2 border-border">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              {language === 'ar' ? 'قيمنا' : 'Our Values'}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div key={index} className="bg-card border-4 border-border p-6 hover:border-primary transition-all group">
                  <div className="w-14 h-14 bg-primary/10 group-hover:bg-primary flex items-center justify-center mb-4 transition-colors">
                    <value.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {language === 'ar' ? value.titleAr : value.titleEn}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {language === 'ar' ? value.descAr : value.descEn}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What We Offer */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              {language === 'ar' ? 'ماذا نقدم' : 'What We Offer'}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* LMS */}
              <div className="bg-card border-4 border-border p-8 group hover:border-accent transition-all">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-accent flex items-center justify-center">
                    <BookOpen className="w-8 h-8 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">{t.about.features.lms}</h3>
                    <p className="text-muted-foreground">
                      {language === 'ar' ? 'المسار التدريبي' : 'Training Track'}
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">{t.about.features.lmsDesc}</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-accent" />
                    {language === 'ar' ? 'محاضرات مباشرة ومسجلة' : 'Live & Recorded Lectures'}
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-accent" />
                    {language === 'ar' ? 'اختبارات ومشاريع تطبيقية' : 'Exams & Practical Projects'}
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-accent" />
                    {language === 'ar' ? 'تتبع التقدم الأكاديمي' : 'Academic Progress Tracking'}
                  </li>
                </ul>
              </div>

              {/* Software House */}
              <div className="bg-card border-4 border-border p-8 group hover:border-primary transition-all">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-primary flex items-center justify-center">
                    <Code className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">{t.about.features.softwareHouse}</h3>
                    <p className="text-muted-foreground">
                      {language === 'ar' ? 'مسار التطوير' : 'Development Track'}
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">{t.about.features.softwareHouseDesc}</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary" />
                    {language === 'ar' ? 'مواقع ومتاجر إلكترونية' : 'Websites & E-Commerce'}
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary" />
                    {language === 'ar' ? 'تطبيقات الموبايل' : 'Mobile Applications'}
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary" />
                    {language === 'ar' ? 'أنظمة ERP مخصصة' : 'Custom ERP Systems'}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Global Presence */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <Globe className="w-16 h-16 mx-auto mb-6 text-accent" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {language === 'ar' ? 'حضور عالمي' : 'Global Presence'}
            </h2>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              {language === 'ar'
                ? 'منصة أمريكية الهوية تُدار من الأردن، تستهدف السوق الأردني والخليجي بمعايير عالمية وشهادات معترف بها دولياً.'
                : 'An American-identity platform managed from Jordan, targeting the Jordanian and Gulf market with global standards and internationally recognized certificates.'}
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-accent">🇺🇸</div>
                <div className="text-sm mt-2">{language === 'ar' ? 'هوية أمريكية' : 'US Identity'}</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent">🇯🇴</div>
                <div className="text-sm mt-2">{language === 'ar' ? 'إدارة من الأردن' : 'Managed from Jordan'}</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent">🌍</div>
                <div className="text-sm mt-2">{language === 'ar' ? 'اعتماد عالمي' : 'Global Accreditation'}</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
