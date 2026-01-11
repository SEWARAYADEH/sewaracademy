import { Bell, Globe, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useLanguage } from '@/contexts/LanguageContext';

interface DashboardHeaderProps {
  title: string;
  titleAr?: string;
}

export function DashboardHeader({ title, titleAr }: DashboardHeaderProps) {
  const { language, setLanguage } = useLanguage();

  return (
    <header className="h-16 bg-card border-b border-border px-6 flex items-center justify-between sticky top-0 z-10">
      <div className="flex items-center gap-4">
        <h1 className="text-xl font-bold text-foreground">
          {language === 'ar' && titleAr ? titleAr : title}
        </h1>
      </div>

      <div className="flex items-center gap-4">
        {/* Search */}
        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder={language === 'ar' ? 'بحث...' : 'Search...'}
            className="pl-10 w-64 bg-background"
          />
        </div>

        {/* Language Toggle */}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
          title={language === 'ar' ? 'Switch to English' : 'التحويل للعربية'}
        >
          <Globe className="w-5 h-5" />
        </Button>

        {/* Notifications */}
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full" />
        </Button>
      </div>
    </header>
  );
}
