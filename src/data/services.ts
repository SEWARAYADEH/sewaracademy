// Real services data from ASA Software House
// All prices are in USD

export interface Service {
  id: string;
  titleEn: string;
  titleAr: string;
  descriptionEn: string;
  descriptionAr: string;
  priceMin: number;
  priceMax: number;
  category: 'corporate' | 'ecommerce' | 'educational' | 'mobile' | 'erp' | 'booking' | 'portfolio';
  features: {
    en: string[];
    ar: string[];
  };
  icon: string;
  featured?: boolean;
}

export const services: Service[] = [
  {
    id: 'corporate-websites',
    titleEn: 'Corporate Websites',
    titleAr: 'مواقع الشركات',
    descriptionEn: 'Professional corporate websites with modern design, responsive layout, and content management.',
    descriptionAr: 'مواقع شركات احترافية بتصميم حديث، تخطيط متجاوب، ونظام إدارة محتوى.',
    priceMin: 70,
    priceMax: 1500,
    category: 'corporate',
    features: {
      en: ['Responsive Design', 'SEO Optimized', 'Contact Forms', 'Admin Panel', 'Analytics'],
      ar: ['تصميم متجاوب', 'محسّن لمحركات البحث', 'نماذج اتصال', 'لوحة تحكم', 'تحليلات']
    },
    icon: '🏛️',
    featured: true
  },
  {
    id: 'ecommerce',
    titleEn: 'E-Commerce Platforms',
    titleAr: 'منصات التجارة الإلكترونية',
    descriptionEn: 'Full-featured online stores with payment integration, inventory management, and order tracking.',
    descriptionAr: 'متاجر إلكترونية متكاملة مع تكامل الدفع، إدارة المخزون، وتتبع الطلبات.',
    priceMin: 100,
    priceMax: 3000,
    category: 'ecommerce',
    features: {
      en: ['Payment Gateway', 'Inventory System', 'Order Management', 'Customer Portal', 'Multi-currency'],
      ar: ['بوابة دفع', 'نظام مخزون', 'إدارة طلبات', 'بوابة عملاء', 'عملات متعددة']
    },
    icon: '🛒',
    featured: true
  },
  {
    id: 'educational-platforms',
    titleEn: 'Educational Platforms',
    titleAr: 'المنصات التعليمية',
    descriptionEn: 'Complete LMS solutions with course management, student tracking, exams, and certificates.',
    descriptionAr: 'حلول LMS متكاملة مع إدارة الدورات، تتبع الطلاب، الاختبارات، والشهادات.',
    priceMin: 100,
    priceMax: 5000,
    category: 'educational',
    features: {
      en: ['Course Builder', 'Student Dashboard', 'Live Classes', 'Exam Engine', 'Certificates'],
      ar: ['منشئ دورات', 'لوحة طالب', 'فصول مباشرة', 'محرك اختبارات', 'شهادات']
    },
    icon: '📚',
    featured: true
  },
  {
    id: 'mobile-apps',
    titleEn: 'Mobile Applications',
    titleAr: 'تطبيقات الموبايل',
    descriptionEn: 'Native and cross-platform mobile apps for iOS and Android with modern UI/UX.',
    descriptionAr: 'تطبيقات موبايل أصلية ومتعددة المنصات لـ iOS و Android بتصميم حديث.',
    priceMin: 800,
    priceMax: 8000,
    category: 'mobile',
    features: {
      en: ['iOS & Android', 'Push Notifications', 'Offline Mode', 'App Store Submission', 'Analytics'],
      ar: ['iOS و Android', 'إشعارات فورية', 'وضع بدون إنترنت', 'رفع للمتاجر', 'تحليلات']
    },
    icon: '📱',
    featured: true
  },
  {
    id: 'erp-systems',
    titleEn: 'ERP Systems',
    titleAr: 'أنظمة ERP',
    descriptionEn: 'Enterprise resource planning solutions for complete business management and automation.',
    descriptionAr: 'حلول تخطيط موارد المؤسسات لإدارة الأعمال الشاملة والأتمتة.',
    priceMin: 7000,
    priceMax: 7000,
    category: 'erp',
    features: {
      en: ['HR Management', 'Finance Module', 'Inventory Control', 'CRM Integration', 'Reporting'],
      ar: ['إدارة الموارد البشرية', 'وحدة المالية', 'مراقبة المخزون', 'تكامل CRM', 'التقارير']
    },
    icon: '🏢'
  },
  {
    id: 'booking-systems',
    titleEn: 'Booking & Reservation',
    titleAr: 'أنظمة الحجوزات',
    descriptionEn: 'Online booking and appointment scheduling systems for various industries.',
    descriptionAr: 'أنظمة حجز المواعيد عبر الإنترنت لمختلف الصناعات.',
    priceMin: 150,
    priceMax: 500,
    category: 'booking',
    features: {
      en: ['Calendar Integration', 'Email Reminders', 'Payment Processing', 'Multi-location', 'Reports'],
      ar: ['تكامل التقويم', 'تذكيرات بريدية', 'معالجة الدفع', 'مواقع متعددة', 'تقارير']
    },
    icon: '📅'
  },
  {
    id: 'portfolio-websites',
    titleEn: 'Portfolio Websites',
    titleAr: 'مواقع تعريفية',
    descriptionEn: 'Professional portfolio and personal branding websites with stunning visuals.',
    descriptionAr: 'مواقع محفظة أعمال وعلامة تجارية شخصية احترافية بمظهر مذهل.',
    priceMin: 50,
    priceMax: 300,
    category: 'portfolio',
    features: {
      en: ['Modern Design', 'Gallery System', 'Contact Form', 'Social Links', 'Blog'],
      ar: ['تصميم حديث', 'نظام معرض', 'نموذج اتصال', 'روابط اجتماعية', 'مدونة']
    },
    icon: '🎨'
  }
];

export function getServiceById(id: string): Service | undefined {
  return services.find(service => service.id === id);
}

export function getServicesByCategory(category: Service['category']): Service[] {
  return services.filter(service => service.category === category);
}

export function getFeaturedServices(): Service[] {
  return services.filter(service => service.featured);
}

// Annual subscription option for ERP
export const erpSubscription = {
  annual: 1000, // $1000/year
  fullPurchase: 7000 // $7000 one-time
};
