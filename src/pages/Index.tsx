import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/home/HeroSection';
import { CoursesSection } from '@/components/home/CoursesSection';
import { ServicesSection } from '@/components/home/ServicesSection';
import { AboutSection } from '@/components/home/AboutSection';
import { AccreditationSection } from '@/components/home/AccreditationSection';
import { CTASection } from '@/components/home/CTASection';
import { useLanguage } from '@/contexts/LanguageContext';

const Index = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <CoursesSection />
        <AboutSection />
        <ServicesSection />
        <AccreditationSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
