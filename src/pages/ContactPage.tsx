import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from '@/hooks/use-toast';

const ContactPage = () => {
  const { language, isRTL } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: language === 'ar' ? 'تم الإرسال بنجاح!' : 'Message Sent!',
      description: language === 'ar' 
        ? 'سنتواصل معك قريباً.'
        : 'We will get back to you soon.',
    });
    
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const contactInfo = [
    {
      icon: MapPin,
      titleEn: 'Address',
      titleAr: 'العنوان',
      valueEn: 'Amman, Jordan',
      valueAr: 'عمّان، الأردن',
    },
    {
      icon: Phone,
      titleEn: 'Phone',
      titleAr: 'الهاتف',
      valueEn: '+962 79 XXX XXXX',
      valueAr: '+962 79 XXX XXXX',
    },
    {
      icon: Mail,
      titleEn: 'Email',
      titleAr: 'البريد الإلكتروني',
      valueEn: 'info@asasoftware.com',
      valueAr: 'info@asasoftware.com',
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
              {language === 'ar' ? 'اتصل بنا' : 'Contact Us'}
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-2xl">
              {language === 'ar'
                ? 'نحن هنا لمساعدتك. تواصل معنا لأي استفسار أو طلب.'
                : 'We are here to help. Reach out to us for any inquiries or requests.'}
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Contact Info */}
              <div className="lg:col-span-1 space-y-6">
                <h2 className="text-2xl font-bold mb-6">
                  {language === 'ar' ? 'معلومات التواصل' : 'Contact Information'}
                </h2>
                
                {contactInfo.map((info, index) => (
                  <div key={index} className="bg-card border-4 border-border p-6 hover:border-primary transition-all">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground">
                          {language === 'ar' ? info.titleAr : info.titleEn}
                        </h3>
                        <p className="text-muted-foreground" dir={info.valueEn.includes('+') ? 'ltr' : undefined}>
                          {language === 'ar' ? info.valueAr : info.valueEn}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Working Hours */}
                <div className="bg-secondary/50 border-4 border-border p-6">
                  <h3 className="font-bold text-foreground mb-4">
                    {language === 'ar' ? 'ساعات العمل' : 'Working Hours'}
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex justify-between">
                      <span>{language === 'ar' ? 'الأحد - الخميس' : 'Sunday - Thursday'}</span>
                      <span dir="ltr">9:00 AM - 6:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>{language === 'ar' ? 'الجمعة - السبت' : 'Friday - Saturday'}</span>
                      <span>{language === 'ar' ? 'مغلق' : 'Closed'}</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-card border-4 border-border p-8">
                  <h2 className="text-2xl font-bold mb-6">
                    {language === 'ar' ? 'أرسل لنا رسالة' : 'Send us a Message'}
                  </h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          {language === 'ar' ? 'الاسم الكامل' : 'Full Name'} *
                        </label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="border-2"
                          placeholder={language === 'ar' ? 'أدخل اسمك' : 'Enter your name'}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          {language === 'ar' ? 'البريد الإلكتروني' : 'Email'} *
                        </label>
                        <Input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="border-2"
                          placeholder={language === 'ar' ? 'أدخل بريدك الإلكتروني' : 'Enter your email'}
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          {language === 'ar' ? 'رقم الهاتف' : 'Phone Number'}
                        </label>
                        <Input
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          className="border-2"
                          placeholder={language === 'ar' ? 'أدخل رقم هاتفك' : 'Enter your phone'}
                          dir="ltr"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          {language === 'ar' ? 'الموضوع' : 'Subject'} *
                        </label>
                        <Input
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="border-2"
                          placeholder={language === 'ar' ? 'موضوع الرسالة' : 'Message subject'}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        {language === 'ar' ? 'الرسالة' : 'Message'} *
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="border-2 resize-none"
                        placeholder={language === 'ar' ? 'اكتب رسالتك هنا...' : 'Write your message here...'}
                      />
                    </div>

                    <Button type="submit" size="lg" disabled={isSubmitting} className="w-full md:w-auto">
                      {isSubmitting ? (
                        <>
                          <span className="animate-spin mr-2">⏳</span>
                          {language === 'ar' ? 'جاري الإرسال...' : 'Sending...'}
                        </>
                      ) : (
                        <>
                          <Send className={`w-5 h-5 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                          {language === 'ar' ? 'إرسال الرسالة' : 'Send Message'}
                        </>
                      )}
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
