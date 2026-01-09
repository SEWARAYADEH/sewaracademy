// Internationalization System for ASA Software
// Supports Arabic (RTL) and English (LTR)

export type Language = 'ar' | 'en';

export const translations = {
  en: {
    // Navigation
    nav: {
      home: 'Home',
      about: 'About Us',
      courses: 'Courses',
      services: 'Services',
      portfolio: 'Portfolio',
      accreditation: 'Accreditation',
      contact: 'Contact',
      login: 'Login',
      register: 'Register',
    },
    // Hero Section
    hero: {
      title: 'American Sewar Academy',
      subtitle: 'For Programming and Engineering',
      description: 'A leading American platform managed from Jordan, combining a certified digital training academy with a professional software house in one dynamic system.',
      cta: 'Explore Courses',
      ctaSecondary: 'Our Services',
      stats: {
        courses: 'Training Courses',
        students: 'Active Students',
        projects: 'Completed Projects',
        hours: 'Training Hours',
      }
    },
    // About Section
    about: {
      title: 'About ASA Software',
      vision: 'Our Vision',
      visionText: 'Building a leading American platform that provides professional programming and engineering training solutions with digital development services, targeting the Jordanian and Gulf market with global standards.',
      mission: 'Our Mission',
      missionText: 'Empowering individuals and companies to acquire practical programming skills through direct applied training, real digital solutions, and marketable software products.',
      features: {
        lms: 'Integrated LMS System',
        lmsDesc: 'Live and recorded lectures, periodic exams, practical projects, and academic progress tracking.',
        softwareHouse: 'Software House',
        softwareHouseDesc: 'Professional development services for websites, e-commerce, mobile apps, and ERP systems.',
        certificates: 'International Certificates',
        certificatesDesc: 'AIAE accreditation, EOQM supervision, and Apostille recognition.',
      }
    },
    // Courses Section
    courses: {
      title: 'Our Training Courses',
      subtitle: 'Practical programming skills with real-world applications',
      viewAll: 'View All Courses',
      enroll: 'Enroll Now',
      details: 'View Details',
      hours: 'Hours',
      price: 'Price',
      categories: {
        programming: 'Programming',
        web: 'Web Development',
        mobile: 'Mobile Apps',
        data: 'Data & AI',
        erp: 'ERP Systems',
      }
    },
    // Services Section
    services: {
      title: 'Software Development Services',
      subtitle: 'Professional digital solutions for your business',
      viewAll: 'View All Services',
      request: 'Request Quote',
      starting: 'Starting from',
      categories: {
        corporate: 'Corporate Websites',
        ecommerce: 'E-Commerce',
        educational: 'Educational Platforms',
        mobile: 'Mobile Applications',
        erp: 'ERP Systems',
        booking: 'Booking Systems',
        portfolio: 'Portfolio Websites',
      }
    },
    // Accreditation
    accreditation: {
      title: 'International Accreditation',
      subtitle: 'Globally recognized certificates with professional validation',
      aiae: 'AIAE Accreditation',
      eoqm: 'EOQM Supervision',
      apostille: 'Apostille Recognition',
    },
    // Footer
    footer: {
      description: 'American Sewar Academy for Programming and Engineering - Your gateway to professional software development and training.',
      quickLinks: 'Quick Links',
      contact: 'Contact Us',
      followUs: 'Follow Us',
      rights: 'All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
    },
    // Common
    common: {
      learnMore: 'Learn More',
      getStarted: 'Get Started',
      contactUs: 'Contact Us',
      currency: '$',
    }
  },
  ar: {
    // Navigation
    nav: {
      home: 'الرئيسية',
      about: 'من نحن',
      courses: 'الدورات',
      services: 'الخدمات',
      portfolio: 'أعمالنا',
      accreditation: 'الاعتماد',
      contact: 'اتصل بنا',
      login: 'تسجيل الدخول',
      register: 'التسجيل',
    },
    // Hero Section
    hero: {
      title: 'أكاديمية سوار الأمريكية',
      subtitle: 'للبرمجة والهندسة',
      description: 'منصة أمريكية رائدة تُدار من الأردن، تجمع بين الأكاديمية التدريبية الرقمية المعتمدة وشركة تطوير برمجيات احترافية في نظام ديناميكي واحد.',
      cta: 'استكشف الدورات',
      ctaSecondary: 'خدماتنا',
      stats: {
        courses: 'دورة تدريبية',
        students: 'طالب نشط',
        projects: 'مشروع منجز',
        hours: 'ساعة تدريبية',
      }
    },
    // About Section
    about: {
      title: 'عن ASA Software',
      vision: 'رؤيتنا',
      visionText: 'بناء منصة أمريكية رائدة تقدم حلول تدريب برمجي وهندسي احترافية مع خدمات تطوير رقمية، تستهدف السوق الأردني والخليجي بمعايير عالمية.',
      mission: 'رسالتنا',
      missionText: 'تمكين الأفراد والشركات من امتلاك مهارات برمجية عملية عبر تدريب تطبيقي مباشر، وحلول رقمية حقيقية، ومنتجات برمجية قابلة للبيع.',
      features: {
        lms: 'نظام تعليم متكامل',
        lmsDesc: 'محاضرات مباشرة ومسجلة، اختبارات دورية، مشاريع تطبيقية، وتتبع التقدم الأكاديمي.',
        softwareHouse: 'شركة برمجيات',
        softwareHouseDesc: 'خدمات تطوير احترافية للمواقع والمتاجر الإلكترونية وتطبيقات الموبايل وأنظمة ERP.',
        certificates: 'شهادات دولية',
        certificatesDesc: 'اعتماد AIAE، إشراف EOQM، واعتراف Apostille.',
      }
    },
    // Courses Section
    courses: {
      title: 'الدورات التدريبية',
      subtitle: 'مهارات برمجية عملية مع تطبيقات واقعية',
      viewAll: 'عرض جميع الدورات',
      enroll: 'سجل الآن',
      details: 'التفاصيل',
      hours: 'ساعة',
      price: 'السعر',
      categories: {
        programming: 'البرمجة',
        web: 'تطوير الويب',
        mobile: 'تطبيقات الموبايل',
        data: 'البيانات والذكاء الاصطناعي',
        erp: 'أنظمة ERP',
      }
    },
    // Services Section
    services: {
      title: 'خدمات تطوير البرمجيات',
      subtitle: 'حلول رقمية احترافية لأعمالك',
      viewAll: 'عرض جميع الخدمات',
      request: 'اطلب عرض سعر',
      starting: 'يبدأ من',
      categories: {
        corporate: 'مواقع الشركات',
        ecommerce: 'التجارة الإلكترونية',
        educational: 'المنصات التعليمية',
        mobile: 'تطبيقات الموبايل',
        erp: 'أنظمة ERP',
        booking: 'أنظمة الحجز',
        portfolio: 'مواقع تعريفية',
      }
    },
    // Accreditation
    accreditation: {
      title: 'الاعتماد الدولي',
      subtitle: 'شهادات معترف بها عالمياً مع توثيق احترافي',
      aiae: 'اعتماد AIAE',
      eoqm: 'إشراف EOQM',
      apostille: 'اعتراف Apostille',
    },
    // Footer
    footer: {
      description: 'أكاديمية سوار الأمريكية للبرمجة والهندسة - بوابتك لتطوير البرمجيات والتدريب المهني.',
      quickLinks: 'روابط سريعة',
      contact: 'اتصل بنا',
      followUs: 'تابعنا',
      rights: 'جميع الحقوق محفوظة.',
      privacy: 'سياسة الخصوصية',
      terms: 'شروط الخدمة',
    },
    // Common
    common: {
      learnMore: 'اعرف المزيد',
      getStarted: 'ابدأ الآن',
      contactUs: 'اتصل بنا',
      currency: '$',
    }
  }
} as const;

export type TranslationKey = keyof typeof translations.en;

export function getDirection(lang: Language): 'ltr' | 'rtl' {
  return lang === 'ar' ? 'rtl' : 'ltr';
}

export function getLocale(lang: Language): string {
  return lang === 'ar' ? 'ar-JO' : 'en-US';
}
