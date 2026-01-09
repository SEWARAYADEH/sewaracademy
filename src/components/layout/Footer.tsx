import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Youtube, Instagram } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export function Footer() {
  const { t, language, isRTL } = useLanguage();
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: '/', label: t.nav.home },
    { href: '/courses', label: t.nav.courses },
    { href: '/services', label: t.nav.services },
    { href: '/about', label: t.nav.about },
    { href: '/accreditation', label: t.nav.accreditation },
    { href: '/contact', label: t.nav.contact },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        {/* Main Footer */}
        <div className="py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-accent flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-xl">ASA</span>
              </div>
              <div>
                <div className="font-bold text-lg">
                  {language === 'ar' ? 'أكاديمية سوار' : 'ASA Software'}
                </div>
              </div>
            </Link>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              {t.footer.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 pb-2 border-b-2 border-primary-foreground/20">
              {t.footer.quickLinks}
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4 pb-2 border-b-2 border-primary-foreground/20">
              {t.footer.contact}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-primary-foreground/80">
                <MapPin className="w-4 h-4 text-accent flex-shrink-0" />
                <span>{language === 'ar' ? 'عمّان، الأردن' : 'Amman, Jordan'}</span>
              </li>
              <li>
                <a 
                  href="https://wa.me/962770715872" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                  <span dir="ltr">00962770715872</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:info@sewaracademy.online"
                  className="flex items-center gap-3 text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                  <span>info@sewaracademy.online</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-bold text-lg mb-4 pb-2 border-b-2 border-primary-foreground/20">
              {t.footer.followUs}
            </h3>
            <div className="flex flex-wrap gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            
            {/* Accreditation Badges */}
            <div className="mt-6">
              <p className="text-xs text-primary-foreground/60 mb-2">
                {language === 'ar' ? 'معتمد من:' : 'Accredited by:'}
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-2 py-1 bg-primary-foreground/10 text-xs font-medium">AIAE</span>
                <span className="px-2 py-1 bg-primary-foreground/10 text-xs font-medium">EOQM</span>
                <span className="px-2 py-1 bg-primary-foreground/10 text-xs font-medium">Apostille</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-4 border-t-2 border-primary-foreground/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-primary-foreground/80">
            © {currentYear} ASA Software. {t.footer.rights}
          </p>
          <div className="flex gap-4 text-sm">
            <Link to="/privacy" className="text-primary-foreground/80 hover:text-accent transition-colors">
              {t.footer.privacy}
            </Link>
            <Link to="/terms" className="text-primary-foreground/80 hover:text-accent transition-colors">
              {t.footer.terms}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
