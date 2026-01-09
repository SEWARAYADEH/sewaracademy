import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, DollarSign, CheckCircle } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { services, erpSubscription } from '@/data/services';

const ServicesPage = () => {
  const { t, language, isRTL } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="bg-primary text-primary-foreground py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.services.title}</h1>
            <p className="text-xl text-primary-foreground/80 max-w-2xl">
              {t.services.subtitle}
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="group bg-card border-4 border-border hover:border-accent transition-all hover:shadow-lg flex flex-col h-full"
                >
                  {/* Header */}
                  <div className="p-6 border-b-2 border-border bg-secondary/30">
                    <div className="flex items-center gap-4">
                      <span className="text-4xl">{service.icon}</span>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {language === 'ar' ? service.titleAr : service.titleEn}
                      </h3>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <p className="text-muted-foreground text-sm mb-6">
                      {language === 'ar' ? service.descriptionAr : service.descriptionEn}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2 mb-6 flex-1">
                      {(language === 'ar' ? service.features.ar : service.features.en).map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm text-foreground">
                          <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Price */}
                    <div className="pt-4 border-t-2 border-border mb-4">
                      <div className="text-lg font-bold text-primary">
                        <span className="text-muted-foreground text-sm font-normal block mb-1">
                          {t.services.starting}
                        </span>
                        <div className="flex items-center gap-1">
                          <DollarSign className="w-5 h-5" />
                          <span>{service.priceMin}</span>
                          {service.priceMax !== service.priceMin && (
                            <>
                              <span className="text-muted-foreground mx-1">–</span>
                              <span>${service.priceMax}</span>
                            </>
                          )}
                        </div>
                        {service.category === 'erp' && (
                          <span className="text-xs text-muted-foreground mt-1 block">
                            {language === 'ar' 
                              ? `أو $${erpSubscription.annual}/سنة اشتراك`
                              : `or $${erpSubscription.annual}/year subscription`}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* CTA */}
                    <Button asChild className="w-full group/btn">
                      <Link to="/contact">
                        {t.services.request}
                        {isRTL ? (
                          <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover/btn:-translate-x-1" />
                        ) : (
                          <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                        )}
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-secondary/30 border-t-2 border-border">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {language === 'ar' ? 'هل لديك مشروع في ذهنك؟' : 'Have a Project in Mind?'}
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              {language === 'ar' 
                ? 'تواصل معنا للحصول على استشارة مجانية وعرض سعر مخصص لمشروعك.'
                : 'Contact us for a free consultation and a custom quote for your project.'}
            </p>
            <Button asChild size="lg">
              <Link to="/contact">
                {t.common.contactUs}
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
