import { Target, Lightbulb, Users, Award, Code, BookOpen, Zap, Globe, Brain, Sparkles, Shield, Heart } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import logo from '@/assets/logo.png';

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

  const founderSkills = [
    {
      icon: Code,
      titleEn: 'Laravel & PHP',
      titleAr: 'Laravel و PHP',
      descEn: 'Expert in building scalable web systems using Laravel framework, PHP, MySQL, and APIs.',
      descAr: 'خبيرة في بناء أنظمة ويب قابلة للتوسع باستخدام Laravel و PHP و MySQL و APIs.',
    },
    {
      icon: Brain,
      titleEn: 'AI & Forecasting',
      titleAr: 'الذكاء الاصطناعي والتنبؤ',
      descEn: 'Working on AI projects including predictive models for decision support and performance optimization.',
      descAr: 'العمل على مشاريع الذكاء الاصطناعي بما في ذلك النماذج التنبؤية لدعم القرار وتحسين الأداء.',
    },
    {
      icon: Shield,
      titleEn: 'Quality Assurance',
      titleAr: 'ضمان الجودة',
      descEn: 'Focus on building robust systems with quality, security, and excellent user experience.',
      descAr: 'التركيز على بناء أنظمة قوية من حيث الجودة والأمان وتجربة المستخدم الممتازة.',
    },
    {
      icon: Sparkles,
      titleEn: 'Innovation & Research',
      titleAr: 'الابتكار والبحث',
      descEn: 'Early experience in innovation including alternative energy and solar storage solutions.',
      descAr: 'خبرة مبكرة في الابتكار بما في ذلك حلول الطاقة البديلة وتخزين الطاقة الشمسية.',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="bg-primary text-primary-foreground py-16 md:py-24">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
            <img 
              src={logo} 
              alt="ASA Software Logo" 
              className="h-24 md:h-32 w-auto bg-white p-3 rounded-lg"
            />
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.about.title}</h1>
              <p className="text-xl text-primary-foreground/80 max-w-2xl">
                {language === 'ar' 
                  ? 'منصة أمريكية رائدة تجمع بين التعليم والتطوير البرمجي في نظام واحد متكامل.'
                  : 'A leading American platform combining education and software development in one integrated system.'}
              </p>
            </div>
          </div>
        </section>

        {/* Founder Section */}
        <section className="py-16 md:py-24 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-primary rounded-full mb-6">
                  <Heart className="w-10 h-10 text-primary-foreground" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  {language === 'ar' ? 'مديرة المنصة' : 'Platform Director'}
                </h2>
                <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2">
                  {language === 'ar' ? 'م. سوار محمود أعيده' : 'Eng. SEWAR MAHMOUD I\'AYADEH'}
                </h3>
                <p className="text-lg text-muted-foreground">
                  {language === 'ar' 
                    ? 'مهندسة برمجيات ومطوّرة أنظمة ويب'
                    : 'Software Engineer & Web Systems Developer'}
                </p>
              </div>

              <div className="bg-card border-4 border-border p-8 md:p-10 mb-8">
                <p className="text-lg leading-relaxed text-foreground mb-6">
                  {language === 'ar' 
                    ? 'سوار محمود أعيده هي مديرة منصة American Sewar Academy for Programming and Engineering، ومهندسة برمجيات ومطوّرة أنظمة ويب متخصصة في بناء الحلول الرقمية القابلة للتوسع. تجمع بين الخبرة التقنية في تطوير تطبيقات الويب باستخدام Laravel وPHP وMySQL وبناء واجهات APIs، وبين عقلية ريادية تركّز على تحويل الأفكار إلى منتجات تعليمية وتقنية ذات أثر ملموس.'
                    : 'Sewar Mahmoud Aida is the director of American Sewar Academy for Programming and Engineering, a software engineer and web systems developer specializing in building scalable digital solutions. She combines technical expertise in web application development using Laravel, PHP, MySQL, and API building, with an entrepreneurial mindset focused on transforming ideas into impactful educational and technical products.'}
                </p>
                <p className="text-lg leading-relaxed text-foreground mb-6">
                  {language === 'ar'
                    ? 'تنطلق سوار من توجهٍ تطويري قائم على التحسين المستمر، وتحرص على بناء منظومات قوية من حيث الجودة والأمان وتجربة المستخدم، مع اهتمام واضح بتوثيق العمل، وتنظيم فرق التنفيذ، ورفع موثوقية المنتج عبر ممارسات ضمان الجودة (QA) والاختبار.'
                    : 'Sewar operates from a developmental approach based on continuous improvement, ensuring the building of robust systems in terms of quality, security, and user experience, with clear attention to work documentation, team organization, and enhancing product reliability through QA practices and testing.'}
                </p>
                <p className="text-lg leading-relaxed text-foreground mb-6">
                  {language === 'ar'
                    ? 'إلى جانب مسارها البرمجي، تملك سوار تجربة مبكرة في الابتكار والاختراع؛ حيث جرى تناول إنجاز لها مرتبطًا بالطاقة البديلة وتخزين طاقة الشمس، بما يعكس توجهًا هندسيًا بحثيًا يدعم رؤيتها نحو حلول تقنية ذات قيمة واقعية.'
                    : 'Alongside her programming career, Sewar has early experience in innovation and invention; her achievement related to alternative energy and solar storage was recognized, reflecting a research-oriented engineering approach that supports her vision for technical solutions with real-world value.'}
                </p>
                <p className="text-lg leading-relaxed text-foreground">
                  {language === 'ar'
                    ? 'وعلى مستوى الرؤية المستقبلية، تعمل سوار على مشاريع ريادية وتطويرية تتقاطع مع الذكاء الاصطناعي، بما في ذلك بناء نماذج/مقاربات تنبوئية (AI Forecasting) تُستخدم لدعم اتخاذ القرار وتحسين الأداء—سواء في السياقات التعليمية أو التقنية—مع التركيز على تطبيقات عملية قابلة للقياس وليست مجرد أفكار نظرية.'
                    : 'Looking ahead, Sewar is working on entrepreneurial and developmental projects that intersect with artificial intelligence, including building predictive models/approaches (AI Forecasting) used to support decision-making and improve performance—whether in educational or technical contexts—with a focus on measurable practical applications rather than just theoretical ideas.'}
                </p>
              </div>

              {/* Founder Skills */}
              <div className="grid md:grid-cols-2 gap-6">
                {founderSkills.map((skill, index) => (
                  <div key={index} className="bg-card border-4 border-border p-6 hover:border-primary transition-all group">
                    <div className="w-12 h-12 bg-primary/10 group-hover:bg-primary flex items-center justify-center mb-4 transition-colors">
                      <skill.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <h4 className="text-lg font-bold text-foreground mb-2">
                      {language === 'ar' ? skill.titleAr : skill.titleEn}
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {language === 'ar' ? skill.descAr : skill.descEn}
                    </p>
                  </div>
                ))}
              </div>
            </div>
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
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-accent" />
                    {language === 'ar' ? 'شهادات معتمدة دولياً' : 'Internationally Accredited Certificates'}
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
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary" />
                    {language === 'ar' ? 'المنصات التعليمية' : 'Educational Platforms'}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-accent/10 border-y-2 border-border">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {language === 'ar' ? 'تواصل معنا' : 'Get in Touch'}
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              {language === 'ar'
                ? 'للتسجيل في الدورات أو طلب خدمات البرمجيات، تواصل معنا عبر الهاتف أو الواتساب أو البريد الإلكتروني.'
                : 'To register for courses or request software services, contact us via phone, WhatsApp, or email.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="https://wa.me/962770715872" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-colors"
              >
                <span>📱</span>
                <span dir="ltr">00962770715872</span>
              </a>
              <a 
                href="mailto:info@sewaracademy.online"
                className="inline-flex items-center gap-2 px-6 py-3 bg-card border-4 border-border text-foreground font-bold hover:border-primary transition-colors"
              >
                <span>✉️</span>
                <span>info@sewaracademy.online</span>
              </a>
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
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <span className="px-4 py-2 bg-primary-foreground/10 font-bold">AIAE</span>
              <span className="px-4 py-2 bg-primary-foreground/10 font-bold">EOQM</span>
              <span className="px-4 py-2 bg-primary-foreground/10 font-bold">Apostille</span>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;