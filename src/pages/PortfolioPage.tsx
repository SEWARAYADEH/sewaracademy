import { Link } from 'react-router-dom';
import { ExternalLink, Phone, MessageCircle, Mail } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const PortfolioPage = () => {
  const { language, isRTL } = useLanguage();

  const projects = [
    {
      id: 1,
      titleEn: 'E-Commerce Platform',
      titleAr: 'منصة تجارة إلكترونية',
      descEn: 'A complete e-commerce solution with payment integration, inventory management, and admin dashboard.',
      descAr: 'حل تجارة إلكترونية متكامل مع تكامل الدفع وإدارة المخزون ولوحة تحكم المدير.',
      category: language === 'ar' ? 'تجارة إلكترونية' : 'E-Commerce',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    },
    {
      id: 2,
      titleEn: 'Educational Platform',
      titleAr: 'منصة تعليمية',
      descEn: 'LMS system with live classes, course management, and progress tracking for students.',
      descAr: 'نظام LMS مع فصول مباشرة وإدارة الدورات وتتبع تقدم الطلاب.',
      category: language === 'ar' ? 'منصة تعليمية' : 'Educational',
      tech: ['Laravel', 'Vue.js', 'MySQL', 'WebRTC'],
    },
    {
      id: 3,
      titleEn: 'Hospital Management System',
      titleAr: 'نظام إدارة مستشفى',
      descEn: 'Comprehensive ERP for hospital operations including patient records, appointments, and billing.',
      descAr: 'نظام ERP شامل لعمليات المستشفى بما في ذلك سجلات المرضى والمواعيد والفواتير.',
      category: language === 'ar' ? 'أنظمة ERP' : 'ERP Systems',
      tech: ['ASP.NET', 'SQL Server', 'Angular'],
    },
    {
      id: 4,
      titleEn: 'Delivery Mobile App',
      titleAr: 'تطبيق توصيل',
      descEn: 'Food delivery application with real-time tracking, driver management, and customer app.',
      descAr: 'تطبيق توصيل طعام مع تتبع فوري وإدارة السائقين وتطبيق العملاء.',
      category: language === 'ar' ? 'تطبيقات موبايل' : 'Mobile Apps',
      tech: ['Flutter', 'Firebase', 'Google Maps'],
    },
    {
      id: 5,
      titleEn: 'Corporate Website',
      titleAr: 'موقع شركة',
      descEn: 'Professional corporate website with multi-language support and CMS for content management.',
      descAr: 'موقع شركة احترافي مع دعم متعدد اللغات ونظام إدارة المحتوى.',
      category: language === 'ar' ? 'مواقع شركات' : 'Corporate',
      tech: ['React', 'Tailwind CSS', 'Strapi'],
    },
    {
      id: 6,
      titleEn: 'Booking System',
      titleAr: 'نظام حجوزات',
      descEn: 'Online booking system for hotels and restaurants with calendar integration.',
      descAr: 'نظام حجز أونلاين للفنادق والمطاعم مع تكامل التقويم.',
      category: language === 'ar' ? 'أنظمة حجز' : 'Booking Systems',
      tech: ['Next.js', 'MongoDB', 'Stripe'],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="bg-primary text-primary-foreground py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {language === 'ar' ? 'أعمالنا' : 'Our Portfolio'}
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-2xl">
              {language === 'ar'
                ? 'نماذج من المشاريع التي قمنا بتطويرها لعملائنا في مختلف المجالات.'
                : 'Examples of projects we have developed for our clients in various fields.'}
            </p>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="bg-card border-4 border-border hover:border-primary transition-all group"
                >
                  {/* Placeholder Image */}
                  <div className="h-48 bg-secondary/30 border-b-2 border-border flex items-center justify-center">
                    <span className="text-6xl opacity-50">📱</span>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-primary font-medium px-2 py-1 bg-primary/10 border border-primary">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {language === 'ar' ? project.titleAr : project.titleEn}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {language === 'ar' ? project.descAr : project.descEn}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-2 py-1 bg-secondary text-secondary-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {language === 'ar' ? 'هل لديك مشروع؟' : 'Have a Project?'}
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              {language === 'ar'
                ? 'تواصل معنا الآن للحصول على استشارة مجانية وعرض سعر لمشروعك.'
                : 'Contact us now for a free consultation and quote for your project.'}
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
                  00962770715872
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/10">
                <a href="mailto:info@sewaracademy.online">
                  <Mail className="w-5 h-5 mr-2" />
                  {language === 'ar' ? 'راسلنا' : 'Email Us'}
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

export default PortfolioPage;
