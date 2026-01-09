import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, translations, getDirection } from '@/lib/i18n';

type Translations = typeof translations.en | typeof translations.ar;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
  dir: 'ltr' | 'rtl';
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('asa-language');
      if (saved === 'ar' || saved === 'en') return saved;
      const browserLang = navigator.language.toLowerCase();
      if (browserLang.startsWith('ar')) return 'ar';
    }
    return 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('asa-language', lang);
  };

  const dir = getDirection(language);
  const isRTL = language === 'ar';
  const t = translations[language] as Translations;

  useEffect(() => {
    document.documentElement.dir = dir;
    document.documentElement.lang = language;
    if (isRTL) {
      document.body.style.fontFamily = "'Cairo', 'Space Grotesk', sans-serif";
    } else {
      document.body.style.fontFamily = "'Space Grotesk', 'Cairo', sans-serif";
    }
  }, [language, dir, isRTL]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
