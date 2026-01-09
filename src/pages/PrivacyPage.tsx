import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { useLanguage } from '@/contexts/LanguageContext';

const PrivacyPage = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {language === 'ar' ? 'سياسة الخصوصية' : 'Privacy Policy'}
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
                    <h2 className="text-2xl font-bold mb-4">جمع المعلومات</h2>
                    <p className="text-muted-foreground">
                      نقوم بجمع المعلومات التي تقدمها لنا طوعاً عند التسجيل في دوراتنا أو طلب خدماتنا. تشمل هذه المعلومات الاسم والبريد الإلكتروني ورقم الهاتف.
                    </p>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-4">استخدام المعلومات</h2>
                    <p className="text-muted-foreground">
                      نستخدم معلوماتك للتواصل معك بشأن الدورات والخدمات، وتحسين تجربتك على منصتنا، وإرسال تحديثات وعروض قد تهمك.
                    </p>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-4">حماية المعلومات</h2>
                    <p className="text-muted-foreground">
                      نلتزم بحماية معلوماتك الشخصية باستخدام أحدث تقنيات الأمان. لن نشارك بياناتك مع أطراف ثالثة بدون موافقتك.
                    </p>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-4">تواصل معنا</h2>
                    <p className="text-muted-foreground">
                      للاستفسارات المتعلقة بالخصوصية، تواصل معنا عبر:
                    </p>
                    <ul className="mt-2 space-y-1 text-muted-foreground">
                      <li>البريد الإلكتروني: info@sewaracademy.online</li>
                      <li dir="ltr" className="text-right">الهاتف: 00962770715872</li>
                    </ul>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Information Collection</h2>
                    <p className="text-muted-foreground">
                      We collect information that you voluntarily provide to us when registering for our courses or requesting our services. This information includes name, email, and phone number.
                    </p>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Use of Information</h2>
                    <p className="text-muted-foreground">
                      We use your information to communicate with you about courses and services, improve your experience on our platform, and send updates and offers that may interest you.
                    </p>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Information Protection</h2>
                    <p className="text-muted-foreground">
                      We are committed to protecting your personal information using the latest security technologies. We will not share your data with third parties without your consent.
                    </p>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                    <p className="text-muted-foreground">
                      For privacy-related inquiries, contact us via:
                    </p>
                    <ul className="mt-2 space-y-1 text-muted-foreground">
                      <li>Email: info@sewaracademy.online</li>
                      <li>Phone: 00962770715872</li>
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

export default PrivacyPage;
