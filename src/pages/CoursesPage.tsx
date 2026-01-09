import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Clock, DollarSign, Search, Filter } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useLanguage } from '@/contexts/LanguageContext';
import { courses, Course } from '@/data/courses';
import { cn } from '@/lib/utils';

type Category = 'all' | Course['category'];

const CoursesPage = () => {
  const { t, language, isRTL } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<Category>('all');

  const categories: { value: Category; labelEn: string; labelAr: string }[] = [
    { value: 'all', labelEn: 'All Courses', labelAr: 'جميع الدورات' },
    { value: 'programming', labelEn: 'Programming', labelAr: 'البرمجة' },
    { value: 'web', labelEn: 'Web Development', labelAr: 'تطوير الويب' },
    { value: 'mobile', labelEn: 'Mobile Apps', labelAr: 'تطبيقات الموبايل' },
    { value: 'data', labelEn: 'Data & AI', labelAr: 'البيانات والذكاء الاصطناعي' },
    { value: 'erp', labelEn: 'ERP Systems', labelAr: 'أنظمة ERP' },
  ];

  const filteredCourses = courses.filter(course => {
    const matchesCategory = activeCategory === 'all' || course.category === activeCategory;
    const searchLower = searchQuery.toLowerCase();
    const matchesSearch = 
      course.titleEn.toLowerCase().includes(searchLower) ||
      course.titleAr.includes(searchQuery) ||
      course.descriptionEn.toLowerCase().includes(searchLower) ||
      course.descriptionAr.includes(searchQuery);
    return matchesCategory && matchesSearch;
  });

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
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="bg-primary text-primary-foreground py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.courses.title}</h1>
            <p className="text-xl text-primary-foreground/80 max-w-2xl">
              {t.courses.subtitle}
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 border-b-2 border-border bg-card sticky top-16 md:top-20 z-40">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              {/* Search */}
              <div className="relative w-full md:w-80">
                <Search className={`absolute top-1/2 -translate-y-1/2 ${isRTL ? 'right-3' : 'left-3'} w-5 h-5 text-muted-foreground`} />
                <Input
                  type="text"
                  placeholder={language === 'ar' ? 'ابحث عن دورة...' : 'Search courses...'}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={`${isRTL ? 'pr-10' : 'pl-10'} border-2`}
                />
              </div>

              {/* Categories */}
              <div className="flex flex-wrap gap-2 justify-center">
                {categories.map((cat) => (
                  <Button
                    key={cat.value}
                    variant={activeCategory === cat.value ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setActiveCategory(cat.value)}
                    className="border-2"
                  >
                    {language === 'ar' ? cat.labelAr : cat.labelEn}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Courses Grid */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            {filteredCourses.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-xl text-muted-foreground">
                  {language === 'ar' ? 'لا توجد دورات تطابق البحث' : 'No courses match your search'}
                </p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCourses.map((course) => (
                  <div
                    key={course.id}
                    className="group bg-card border-4 border-border hover:border-primary transition-all hover:shadow-lg"
                  >
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

                      {/* CTAs */}
                      <div className="flex gap-2">
                        <Button asChild variant="outline" className="flex-1 border-2">
                          <Link to={`/courses/${course.id}`}>
                            {t.courses.details}
                          </Link>
                        </Button>
                        <Button asChild className="flex-1">
                          <Link to={`/courses/${course.id}`}>
                            {t.courses.enroll}
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CoursesPage;
