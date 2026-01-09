import { useParams, Link } from 'react-router-dom';
import { Clock, DollarSign, Award, Users, CheckCircle, Phone, Mail, MessageCircle, ArrowRight, ArrowLeft } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { getCourseById, courses, Course } from '@/data/courses';
import { cn } from '@/lib/utils';

const CourseDetailsPage = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const { language, isRTL } = useLanguage();
  
  const course = getCourseById(courseId || '');
  
  if (!course) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20">
          <div className="container mx-auto px-4 py-20 text-center">
            <h1 className="text-4xl font-bold mb-4">
              {language === 'ar' ? 'الدورة غير موجودة' : 'Course Not Found'}
            </h1>
            <p className="text-muted-foreground mb-8">
              {language === 'ar' 
                ? 'عذراً، الدورة التي تبحث عنها غير متوفرة.' 
                : 'Sorry, the course you are looking for is not available.'}
            </p>
            <Button asChild>
              <Link to="/courses">
                {language === 'ar' ? 'عرض جميع الدورات' : 'View All Courses'}
              </Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const levelColors = {
    beginner: 'bg-success/10 text-success border-success',
    intermediate: 'bg-accent/10 text-accent-foreground border-accent',
    advanced: 'bg-primary/10 text-primary border-primary',
  };

  const levelLabels = {
    beginner: language === 'ar' ? 'مبتدئ' : 'Beginner',
    intermediate: language === 'ar' ? 'متوسط' : 'Intermediate',
    advanced: language === 'ar' ? 'متقدم' : 'Advanced',
  };

  const categoryLabels = {
    programming: language === 'ar' ? 'البرمجة' : 'Programming',
    web: language === 'ar' ? 'تطوير الويب' : 'Web Development',
    mobile: language === 'ar' ? 'تطبيقات الموبايل' : 'Mobile Apps',
    data: language === 'ar' ? 'البيانات والذكاء الاصطناعي' : 'Data & AI',
    erp: language === 'ar' ? 'أنظمة ERP' : 'ERP Systems',
  };

  // Course-specific learning outcomes
  const getLearningOutcomes = (course: Course) => {
    const outcomes: { [key: string]: { en: string[]; ar: string[] } } = {
      'python-basic': {
        en: ['Python fundamentals and syntax', 'Variables, data types, and operators', 'Control flow and loops', 'Functions and modules', 'File handling', 'Basic OOP concepts'],
        ar: ['أساسيات Python وبنيتها', 'المتغيرات وأنواع البيانات', 'التحكم في التدفق والحلقات', 'الدوال والوحدات', 'التعامل مع الملفات', 'مفاهيم البرمجة الكائنية الأساسية']
      },
      'python-data': {
        en: ['Advanced Python programming', 'Data analysis with pandas', 'Numerical computing with NumPy', 'Data visualization with Matplotlib', 'Statistical analysis', 'Real-world data projects'],
        ar: ['برمجة Python المتقدمة', 'تحليل البيانات مع pandas', 'الحوسبة الرقمية مع NumPy', 'تصور البيانات مع Matplotlib', 'التحليل الإحصائي', 'مشاريع بيانات حقيقية']
      },
      'python-ai': {
        en: ['Complete Python mastery', 'Machine Learning algorithms', 'Deep Learning with TensorFlow', 'Neural Networks', 'Computer Vision basics', 'Natural Language Processing'],
        ar: ['إتقان Python الكامل', 'خوارزميات التعلم الآلي', 'التعلم العميق مع TensorFlow', 'الشبكات العصبية', 'أساسيات الرؤية الحاسوبية', 'معالجة اللغة الطبيعية']
      },
      'java-basic': {
        en: ['Java syntax and fundamentals', 'Object-Oriented Programming', 'Classes and inheritance', 'Exception handling', 'Collections framework', 'Basic GUI development'],
        ar: ['بنية Java وأساسياتها', 'البرمجة كائنية التوجه', 'الفئات والوراثة', 'معالجة الاستثناءات', 'إطار المجموعات', 'تطوير واجهات رسومية أساسية']
      },
      'android': {
        en: ['Android Studio setup', 'Kotlin/Java for Android', 'UI/UX design', 'Activities and Fragments', 'Database integration', 'Publishing to Google Play'],
        ar: ['إعداد Android Studio', 'Kotlin/Java لـ Android', 'تصميم واجهات المستخدم', 'الأنشطة والـ Fragments', 'دمج قواعد البيانات', 'النشر على Google Play']
      },
      'php-basic': {
        en: ['PHP syntax and fundamentals', 'MySQL database integration', 'Form handling', 'Session management', 'Security best practices', 'Dynamic website creation'],
        ar: ['بنية PHP وأساسياتها', 'دمج قواعد بيانات MySQL', 'معالجة النماذج', 'إدارة الجلسات', 'أفضل ممارسات الأمان', 'إنشاء مواقع ديناميكية']
      },
      'php-backend': {
        en: ['Laravel framework mastery', 'RESTful API development', 'Authentication systems', 'Database migrations', 'Eloquent ORM', 'Testing and deployment'],
        ar: ['إتقان إطار Laravel', 'تطوير RESTful APIs', 'أنظمة المصادقة', 'ترحيل قواعد البيانات', 'Eloquent ORM', 'الاختبار والنشر']
      },
      'fullstack-web': {
        en: ['HTML5, CSS3, JavaScript', 'React.js framework', 'Node.js backend', 'Database design', 'REST API development', 'Deployment and DevOps'],
        ar: ['HTML5، CSS3، JavaScript', 'إطار React.js', 'خلفية Node.js', 'تصميم قواعد البيانات', 'تطوير REST APIs', 'النشر و DevOps']
      },
      'fullstack-dotnet': {
        en: ['C# programming', 'ASP.NET Core framework', 'Entity Framework', 'SQL Server', 'Azure deployment', 'Enterprise patterns'],
        ar: ['برمجة C#', 'إطار ASP.NET Core', 'Entity Framework', 'SQL Server', 'نشر Azure', 'أنماط المؤسسات']
      },
      'web-dev-8types': {
        en: ['Corporate websites', 'E-commerce platforms', 'Educational sites', 'Portfolio websites', 'Booking systems', 'Blog platforms', 'Landing pages', 'Social platforms'],
        ar: ['مواقع الشركات', 'منصات التجارة الإلكترونية', 'المواقع التعليمية', 'مواقع تعريفية', 'أنظمة الحجز', 'منصات المدونات', 'صفحات الهبوط', 'المنصات الاجتماعية']
      },
      'mobile-8types': {
        en: ['Social media apps', 'E-commerce apps', 'Educational apps', 'Fitness apps', 'Delivery apps', 'Booking apps', 'News apps', 'Business apps'],
        ar: ['تطبيقات التواصل الاجتماعي', 'تطبيقات التجارة الإلكترونية', 'التطبيقات التعليمية', 'تطبيقات اللياقة', 'تطبيقات التوصيل', 'تطبيقات الحجز', 'تطبيقات الأخبار', 'تطبيقات الأعمال']
      },
      'erp-systems': {
        en: ['HR management modules', 'Financial systems', 'Inventory management', 'CRM integration', 'Reporting dashboards', 'Business automation'],
        ar: ['وحدات إدارة الموارد البشرية', 'الأنظمة المالية', 'إدارة المخزون', 'تكامل CRM', 'لوحات التقارير', 'أتمتة الأعمال']
      },
    };
    
    return outcomes[course.id] || {
      en: ['Comprehensive course content', 'Hands-on projects', 'Industry best practices', 'Professional certificate'],
      ar: ['محتوى دورة شامل', 'مشاريع تطبيقية', 'أفضل ممارسات الصناعة', 'شهادة احترافية']
    };
  };

  const outcomes = getLearningOutcomes(course);

  // Related courses
  const relatedCourses = courses.filter(c => c.category === course.category && c.id !== course.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="bg-primary text-primary-foreground py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-2 text-primary-foreground/70 mb-4 text-sm">
              <Link to="/courses" className="hover:text-accent transition-colors">
                {language === 'ar' ? 'الدورات' : 'Courses'}
              </Link>
              <span>/</span>
              <span>{categoryLabels[course.category]}</span>
            </div>
            
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-6xl">{course.icon}</span>
                  <span className={cn(
                    'px-3 py-1 text-sm font-medium border-2',
                    levelColors[course.level]
                  )}>
                    {levelLabels[course.level]}
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  {language === 'ar' ? course.titleAr : course.titleEn}
                </h1>
                <p className="text-xl text-primary-foreground/80 max-w-2xl">
                  {language === 'ar' ? course.descriptionAr : course.descriptionEn}
                </p>
              </div>

              {/* Quick Info Card */}
              <div className="bg-card text-foreground border-4 border-border p-6 w-full lg:w-80">
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-4 border-b-2 border-border">
                    <span className="text-muted-foreground">{language === 'ar' ? 'السعر' : 'Price'}</span>
                    <span className="text-3xl font-bold text-primary">${course.price}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">{language === 'ar' ? 'المدة' : 'Duration'}</span>
                    <span className="font-bold">{course.hours} {language === 'ar' ? 'ساعة' : 'hours'}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">{language === 'ar' ? 'المستوى' : 'Level'}</span>
                    <span className="font-bold">{levelLabels[course.level]}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">{language === 'ar' ? 'الشهادة' : 'Certificate'}</span>
                    <span className="font-bold text-success">{language === 'ar' ? 'معتمدة دولياً' : 'Internationally Accredited'}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Course Content */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* What You'll Learn */}
                <div className="bg-card border-4 border-border p-8">
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <Award className="w-6 h-6 text-accent" />
                    {language === 'ar' ? 'ماذا ستتعلم' : "What You'll Learn"}
                  </h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {(language === 'ar' ? outcomes.ar : outcomes.en).map((outcome, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Course Details */}
                <div className="bg-card border-4 border-border p-8">
                  <h2 className="text-2xl font-bold mb-6">
                    {language === 'ar' ? 'تفاصيل الدورة' : 'Course Details'}
                  </h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      {language === 'ar' 
                        ? `دورة ${course.titleAr} هي برنامج تدريبي متكامل يتضمن ${course.hours} ساعة من التدريب العملي والنظري. تُقدم الدورة من خلال محاضرات مباشرة ومسجلة، مع اختبارات دورية ومشاريع تطبيقية لضمان الفهم الكامل.`
                        : `The ${course.titleEn} course is a comprehensive training program that includes ${course.hours} hours of practical and theoretical training. The course is delivered through live and recorded lectures, with periodic exams and practical projects to ensure complete understanding.`}
                    </p>
                    <p>
                      {language === 'ar'
                        ? 'عند اجتياز الدورة بنجاح، ستحصل على شهادة معتمدة دولياً من AIAE تحت إشراف EOQM مع اعتراف Apostille.'
                        : 'Upon successful completion of the course, you will receive an internationally accredited certificate from AIAE under EOQM supervision with Apostille recognition.'}
                    </p>
                  </div>
                </div>

                {/* Accreditation */}
                <div className="bg-secondary/30 border-4 border-border p-8">
                  <h2 className="text-2xl font-bold mb-6">
                    {language === 'ar' ? 'الاعتماد والشهادات' : 'Accreditation & Certificates'}
                  </h2>
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2 bg-card px-4 py-2 border-2 border-border">
                      <Award className="w-5 h-5 text-primary" />
                      <span className="font-medium">AIAE</span>
                    </div>
                    <div className="flex items-center gap-2 bg-card px-4 py-2 border-2 border-border">
                      <Award className="w-5 h-5 text-primary" />
                      <span className="font-medium">EOQM</span>
                    </div>
                    <div className="flex items-center gap-2 bg-card px-4 py-2 border-2 border-border">
                      <Award className="w-5 h-5 text-primary" />
                      <span className="font-medium">Apostille</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar - Contact */}
              <div className="space-y-6">
                {/* Enroll Now Card */}
                <div className="bg-primary text-primary-foreground border-4 border-border p-6 sticky top-24">
                  <h3 className="text-xl font-bold mb-4">
                    {language === 'ar' ? 'سجل الآن' : 'Enroll Now'}
                  </h3>
                  <p className="text-primary-foreground/80 mb-6 text-sm">
                    {language === 'ar'
                      ? 'تواصل معنا للتسجيل في الدورة والحصول على المزيد من المعلومات.'
                      : 'Contact us to enroll in the course and get more information.'}
                  </p>

                  <div className="space-y-3">
                    {/* WhatsApp */}
                    <a
                      href="https://wa.me/962770715872"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 bg-success text-success-foreground p-4 hover:opacity-90 transition-opacity w-full"
                    >
                      <MessageCircle className="w-5 h-5" />
                      <div>
                        <div className="font-bold text-sm">
                          {language === 'ar' ? 'واتساب' : 'WhatsApp'}
                        </div>
                        <div className="text-xs opacity-80" dir="ltr">00962770715872</div>
                      </div>
                    </a>

                    {/* Phone Call */}
                    <a
                      href="tel:00962770715872"
                      className="flex items-center gap-3 bg-primary-foreground/10 p-4 hover:bg-primary-foreground/20 transition-colors w-full"
                    >
                      <Phone className="w-5 h-5" />
                      <div>
                        <div className="font-bold text-sm">
                          {language === 'ar' ? 'اتصل بنا' : 'Call Us'}
                        </div>
                        <div className="text-xs opacity-80" dir="ltr">00962770715872</div>
                      </div>
                    </a>

                    {/* Email */}
                    <a
                      href="mailto:info@sewaracademy.online"
                      className="flex items-center gap-3 bg-primary-foreground/10 p-4 hover:bg-primary-foreground/20 transition-colors w-full"
                    >
                      <Mail className="w-5 h-5" />
                      <div>
                        <div className="font-bold text-sm">
                          {language === 'ar' ? 'البريد الإلكتروني' : 'Email'}
                        </div>
                        <div className="text-xs opacity-80">info@sewaracademy.online</div>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="bg-card border-4 border-border p-6">
                  <h3 className="text-lg font-bold mb-4">
                    {language === 'ar' ? 'معلومات سريعة' : 'Quick Info'}
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-3">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <span>{course.hours} {language === 'ar' ? 'ساعة تدريبية' : 'training hours'}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <DollarSign className="w-4 h-4 text-muted-foreground" />
                      <span>${course.price} {language === 'ar' ? 'رسوم الدورة' : 'course fee'}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="w-4 h-4 text-muted-foreground" />
                      <span>{language === 'ar' ? 'محاضرات مباشرة ومسجلة' : 'Live & recorded lectures'}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Award className="w-4 h-4 text-muted-foreground" />
                      <span>{language === 'ar' ? 'شهادة معتمدة' : 'Accredited certificate'}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Courses */}
        {relatedCourses.length > 0 && (
          <section className="py-12 bg-secondary/30 border-t-2 border-border">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl md:text-3xl font-bold mb-8">
                {language === 'ar' ? 'دورات ذات صلة' : 'Related Courses'}
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedCourses.map((relCourse) => (
                  <Link
                    key={relCourse.id}
                    to={`/courses/${relCourse.id}`}
                    className="bg-card border-4 border-border hover:border-primary transition-all p-6 group"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-3xl">{relCourse.icon}</span>
                      <h3 className="font-bold group-hover:text-primary transition-colors">
                        {language === 'ar' ? relCourse.titleAr : relCourse.titleEn}
                      </h3>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">{relCourse.hours} {language === 'ar' ? 'ساعة' : 'hours'}</span>
                      <span className="text-primary font-bold">${relCourse.price}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {language === 'ar' ? 'جاهز للبدء؟' : 'Ready to Start?'}
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              {language === 'ar'
                ? 'تواصل معنا الآن للتسجيل في الدورة وابدأ رحلتك في عالم البرمجة.'
                : 'Contact us now to enroll in the course and start your journey in the world of programming.'}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" variant="secondary">
                <a href="https://wa.me/962770715872" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  {language === 'ar' ? 'واتساب' : 'WhatsApp'}
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/10">
                <a href="tel:00962770715872">
                  <Phone className="w-5 h-5 mr-2" />
                  {language === 'ar' ? 'اتصل الآن' : 'Call Now'}
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CourseDetailsPage;
