import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Clock, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { getFeaturedCourses, Course } from '@/data/courses';
import { cn } from '@/lib/utils';

interface CourseCardProps {
  course: Course;
  language: 'ar' | 'en';
  isRTL: boolean;
}

function CourseCard({ course, language, isRTL }: CourseCardProps) {
  const { t } = useLanguage();
  
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

  return (
    <div className="group bg-card border-4 border-border hover:border-primary transition-all hover:shadow-lg">
      {/* Icon & Category */}
      <div className="p-6 border-b-2 border-border bg-secondary/30">
        <div className="flex items-start justify-between">
          <span className="text-4xl">{course.icon}</span>
          <span className={cn(
            'px-2 py-1 text-xs font-medium border-2',
            levelColors[course.level]
          )}>
            {levelLabels[course.level]}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
          {language === 'ar' ? course.titleAr : course.titleEn}
        </h3>
        <p className="text-muted-foreground text-sm line-clamp-2">
          {language === 'ar' ? course.descriptionAr : course.descriptionEn}
        </p>

        {/* Meta */}
        <div className="flex items-center justify-between pt-4 border-t-2 border-border">
          <div className="flex items-center gap-1 text-muted-foreground">
            <Clock className="w-4 h-4" />
            <span className="text-sm font-medium">{course.hours} {t.courses.hours}</span>
          </div>
          <div className="flex items-center gap-1 text-primary font-bold">
            <DollarSign className="w-4 h-4" />
            <span>{course.price}</span>
          </div>
        </div>

        {/* CTA */}
        <Button asChild className="w-full group/btn">
          <Link to={`/courses/${course.id}`}>
            {t.courses.details}
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

export function CoursesSection() {
  const { t, language, isRTL } = useLanguage();
  const featuredCourses = getFeaturedCourses();
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t.courses.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.courses.subtitle}
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {featuredCourses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              language={language}
              isRTL={isRTL}
            />
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg" className="border-2 group">
            <Link to="/courses">
              {t.courses.viewAll}
              <ArrowIcon className={`w-5 h-5 ${isRTL ? 'mr-2' : 'ml-2'} transition-transform group-hover:${isRTL ? '-translate-x-1' : 'translate-x-1'}`} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
