import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';
import logo from '@/assets/logo.png';
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t, isRTL } = useLanguage();
  const location = useLocation();

  const navItems = [
    { href: '/', label: t.nav.home },
    { href: '/courses', label: t.nav.courses },
    { href: '/services', label: t.nav.services },
    { href: '/about', label: t.nav.about },
    { href: '/accreditation', label: t.nav.accreditation },
    { href: '/contact', label: t.nav.contact },
  ];

  const isActive = (path: string) => location.pathname === path;

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b-2 border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <img 
              src={logo} 
              alt="ASA Software Logo" 
              className="h-10 md:h-14 w-auto transition-transform group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  'px-4 py-2 text-sm font-medium transition-all border-2 border-transparent',
                  isActive(item.href)
                    ? 'bg-primary text-primary-foreground'
                    : 'text-foreground hover:bg-secondary'
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 md:gap-3">
            {/* Language Toggle */}
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 border-2"
            >
              <Globe className="w-4 h-4" />
              <span className="hidden sm:inline">{language === 'en' ? 'العربية' : 'English'}</span>
            </Button>

            {/* Auth Buttons - Desktop */}
            <div className="hidden md:flex items-center gap-2">
              <Button variant="outline" size="sm" className="border-2">
                {t.nav.login}
              </Button>
              <Button size="sm">
                {t.nav.register}
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="outline"
              size="sm"
              className="lg:hidden border-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t-2 border-border py-4">
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={cn(
                    'px-4 py-3 text-sm font-medium transition-all border-2 border-transparent',
                    isActive(item.href)
                      ? 'bg-primary text-primary-foreground'
                      : 'text-foreground hover:bg-secondary'
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex gap-2 mt-4 px-4">
                <Button variant="outline" size="sm" className="flex-1 border-2">
                  {t.nav.login}
                </Button>
                <Button size="sm" className="flex-1">
                  {t.nav.register}
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
