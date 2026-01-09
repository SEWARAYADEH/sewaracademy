import { Target, Lightbulb, BookOpen, Code, Award } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export function AboutSection() {
  const { t, language, isRTL } = useLanguage();

  const features = [
    {
      icon: BookOpen,
      title: t.about.features.lms,
      description: t.about.features.lmsDesc,
    },
    {
      icon: Code,
      title: t.about.features.softwareHouse,
      description: t.about.features.softwareHouseDesc,
    },
    {
      icon: Award,
      title: t.about.features.certificates,
      description: t.about.features.certificatesDesc,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t.about.title}
          </h2>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
          {/* Vision */}
          <div className="bg-primary text-primary-foreground p-8 md:p-10 border-4 border-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-accent flex items-center justify-center">
                <Target className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-bold">{t.about.vision}</h3>
            </div>
            <p className="text-primary-foreground/90 leading-relaxed text-lg">
              {t.about.visionText}
            </p>
          </div>

          {/* Mission */}
          <div className="bg-card border-4 border-border p-8 md:p-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary flex items-center justify-center">
                <Lightbulb className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">{t.about.mission}</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed text-lg">
              {t.about.missionText}
            </p>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card border-4 border-border p-6 md:p-8 hover:border-accent transition-all group"
            >
              <div className="w-14 h-14 bg-accent/10 group-hover:bg-accent flex items-center justify-center mb-6 transition-colors">
                <feature.icon className="w-7 h-7 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
