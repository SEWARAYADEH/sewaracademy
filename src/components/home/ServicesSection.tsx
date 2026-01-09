import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { getFeaturedServices, Service } from '@/data/services';

interface ServiceCardProps {
  service: Service;
  language: 'ar' | 'en';
  isRTL: boolean;
}

function ServiceCard({ service, language, isRTL }: ServiceCardProps) {
  const { t } = useLanguage();
  
  return (
    <div className="group bg-card border-4 border-border hover:border-accent transition-all hover:shadow-lg flex flex-col h-full">
      {/* Header */}
      <div className="p-6 border-b-2 border-border bg-primary text-primary-foreground">
        <span className="text-4xl block mb-3">{service.icon}</span>
        <h3 className="text-xl font-bold">
          {language === 'ar' ? service.titleAr : service.titleEn}
        </h3>
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        <p className="text-muted-foreground text-sm mb-4 flex-1">
          {language === 'ar' ? service.descriptionAr : service.descriptionEn}
        </p>

        {/* Features */}
        <ul className="space-y-2 mb-6">
          {(language === 'ar' ? service.features.ar : service.features.en).slice(0, 3).map((feature, index) => (
            <li key={index} className="flex items-center gap-2 text-sm text-foreground">
              <span className="w-1.5 h-1.5 bg-accent flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>

        {/* Price */}
        <div className="pt-4 border-t-2 border-border mb-4">
          <div className="flex items-center gap-1 text-lg font-bold text-primary">
            <span className="text-muted-foreground text-sm font-normal">{t.services.starting}</span>
            <DollarSign className="w-5 h-5" />
            <span>{service.priceMin}</span>
            {service.priceMax !== service.priceMin && (
              <>
                <span className="text-muted-foreground">–</span>
                <span>${service.priceMax}</span>
              </>
            )}
          </div>
        </div>

        {/* CTA */}
        <Button asChild variant="outline" className="w-full border-2 group/btn">
          <Link to={`/services/${service.id}`}>
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
  );
}

export function ServicesSection() {
  const { t, language, isRTL } = useLanguage();
  const featuredServices = getFeaturedServices();
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t.services.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.services.subtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredServices.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              language={language}
              isRTL={isRTL}
            />
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-12">
          <Button asChild size="lg" className="group">
            <Link to="/services">
              {t.services.viewAll}
              <ArrowIcon className={`w-5 h-5 ${isRTL ? 'mr-2' : 'ml-2'} transition-transform group-hover:${isRTL ? '-translate-x-1' : 'translate-x-1'}`} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
