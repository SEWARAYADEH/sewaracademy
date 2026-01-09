import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { useLanguage } from '@/contexts/LanguageContext';

const TermsPage = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {language === 'ar' ? 'شروط الخدمة' : 'Terms of Service'}
            </h1>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-card border-4 border-border p-8 md:p-12 space-y-6">
              {language === 'ar' ? (
                <>
                  <div>
                    <h2 className="text-2xl font-bold mb-4">قبول الشروط</h2>
                    <p className="text-muted-foreground">
                      باستخدام منصة ASA Software، فإنك توافق على الالتزام بهذه الشروط والأحكام. إذا لم توافق على أي من هذه الشروط، يرجى عدم استخدام خدماتنا.
                    </p>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-4">الخدمات المقدمة</h2>
                    <p className="text-muted-foreground">
                      نقدم دورات تدريبية في البرمجة والهندسة، بالإضافة إلى خدمات تطوير البرمجيات. جميع الأسعار والمحتوى قابلة للتغيير بدون إشعار مسبق.
                    </p>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-4">الدفع والاسترداد</h2>
                    <p className="text-muted-foreground">
                      يتم الدفع عند التسجيل في الدورة. سياسة الاسترداد تعتمد على المرحلة التي وصل إليها المتدرب في الدورة. للتفاصيل، تواصل معنا مباشرة.
                    </p>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-4">الشهادات</h2>
                    <p className="text-muted-foreground">
                      يتم إصدار الشهادات فقط للمتدربين الذين أكملوا جميع متطلبات الدورة بنجاح، بما في ذلك الاختبارات والمشاريع.
                    </p>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-4">للاستفسارات</h2>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>البريد الإلكتروني: info@sewaracademy.online</li>
                      <li dir="ltr" className="text-right">الهاتف / واتساب: 00962770715872</li>
                    </ul>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Acceptance of Terms</h2>
                    <p className="text-muted-foreground">
                      By using the ASA Software platform, you agree to be bound by these terms and conditions. If you do not agree to any of these terms, please do not use our services.
                    </p>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Services Provided</h2>
                    <p className="text-muted-foreground">
                      We provide training courses in programming and engineering, as well as software development services. All prices and content are subject to change without prior notice.
                    </p>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Payment and Refunds</h2>
                    <p className="text-muted-foreground">
                      Payment is due upon course registration. Refund policy depends on the stage the trainee has reached in the course. For details, contact us directly.
                    </p>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Certificates</h2>
                    <p className="text-muted-foreground">
                      Certificates are issued only to trainees who have successfully completed all course requirements, including exams and projects.
                    </p>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-4">For Inquiries</h2>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>Email: info@sewaracademy.online</li>
                      <li>Phone / WhatsApp: 00962770715872</li>
                    </ul>
                  </div>
                </>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TermsPage;
