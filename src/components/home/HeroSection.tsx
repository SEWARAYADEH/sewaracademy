import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Play, Award, Users, BookOpen, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

export function HeroSection() {
  const { t, language, isRTL } = useLanguage();
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const stats = [
    { icon: BookOpen, value: '12+', label: t.hero.stats.courses },
    { icon: Users, value: '500+', label: t.hero.stats.students },
    { icon: Award, value: '100+', label: t.hero.stats.projects },
    { icon: Clock, value: '2000+', label: t.hero.stats.hours },
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/30" />
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className={`space-y-6 md:space-y-8 ${isRTL ? 'lg:order-2' : ''}`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border-2 border-accent text-accent-foreground">
              <Award className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium">
                {language === 'ar' ? 'معتمد دولياً – AIAE | EOQM | Apostille' : 'Internationally Accredited – AIAE | EOQM | Apostille'}
              </span>
            </div>

            {/* Title */}
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                {t.hero.title}
              </h1>
              <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary">
                {t.hero.subtitle}
              </p>
            </div>

            {/* Description */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              {t.hero.description}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="group text-base">
                <Link to="/courses">
                  {t.hero.cta}
                  <ArrowIcon className={`w-5 h-5 ${isRTL ? 'mr-2' : 'ml-2'} transition-transform group-hover:${isRTL ? '-translate-x-1' : 'translate-x-1'}`} />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-2 text-base">
                <Link to="/services">
                  {t.hero.ctaSecondary}
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t-2 border-border">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-10 h-10 bg-primary/10 mb-2">
                    <stat.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-xs md:text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className={`relative ${isRTL ? 'lg:order-1' : ''}`}>
            {/* Main Card */}
            <div className="relative bg-card border-4 border-border shadow-xl p-6 md:p-8">
              {/* Code Window Header */}
              <div className="flex items-center gap-2 mb-6 pb-4 border-b-2 border-border">
                <div className="w-3 h-3 bg-destructive" />
                <div className="w-3 h-3 bg-accent" />
                <div className="w-3 h-3 bg-success" />
                <span className="ml-4 text-xs text-muted-foreground font-mono">asa-software.js</span>
              </div>

              {/* Code Content */}
              <div className="font-mono text-sm md:text-base space-y-2">
                <div>
                  <span className="text-primary">const</span>{' '}
                  <span className="text-foreground">academy</span> = {'{'}
                </div>
                <div className={`${isRTL ? 'pr-6' : 'pl-6'}`}>
                  <span className="text-muted-foreground">name:</span>{' '}
                  <span className="text-accent">"ASA Software"</span>,
                </div>
                <div className={`${isRTL ? 'pr-6' : 'pl-6'}`}>
                  <span className="text-muted-foreground">type:</span>{' '}
                  <span className="text-accent">"LMS + Software House"</span>,
                </div>
                <div className={`${isRTL ? 'pr-6' : 'pl-6'}`}>
                  <span className="text-muted-foreground">location:</span>{' '}
                  <span className="text-accent">"USA → Jordan"</span>,
                </div>
                <div className={`${isRTL ? 'pr-6' : 'pl-6'}`}>
                  <span className="text-muted-foreground">courses:</span>{' '}
                  <span className="text-primary">12</span>,
                </div>
                <div className={`${isRTL ? 'pr-6' : 'pl-6'}`}>
                  <span className="text-muted-foreground">languages:</span>{' '}
                  <span className="text-accent">["AR", "EN"]</span>,
                </div>
                <div>{'}'}</div>
                <div className="pt-4">
                  <span className="text-primary">await</span>{' '}
                  <span className="text-foreground">academy</span>.
                  <span className="text-primary">startLearning</span>()
                  <span className="animate-pulse">▌</span>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 border-4 border-accent -z-10" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 border-4 border-primary -z-10" />
            </div>

            {/* Floating Cards */}
            <div className={`absolute top-4 ${isRTL ? '-left-4' : '-right-4'} bg-accent text-accent-foreground px-4 py-2 shadow-lg animate-float`}>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5" />
                <span className="font-bold text-sm">AIAE Certified</span>
              </div>
            </div>

            <div className={`absolute -bottom-2 ${isRTL ? '-right-4' : '-left-4'} bg-primary text-primary-foreground px-4 py-2 shadow-lg animate-float`} style={{ animationDelay: '2s' }}>
              <div className="flex items-center gap-2">
                <Play className="w-5 h-5" />
                <span className="font-bold text-sm">100% Online</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
