// Real course data from ASA Software Academy
// All prices are in USD

export interface Course {
  id: string;
  titleEn: string;
  titleAr: string;
  descriptionEn: string;
  descriptionAr: string;
  hours: number;
  price: number;
  category: 'programming' | 'web' | 'mobile' | 'data' | 'erp';
  level: 'beginner' | 'intermediate' | 'advanced';
  featured?: boolean;
  icon: string;
}

export const courses: Course[] = [
  {
    id: 'python-basic',
    titleEn: 'Python Programming',
    titleAr: 'برمجة Python',
    descriptionEn: 'Master Python fundamentals with hands-on projects. Perfect for beginners starting their programming journey.',
    descriptionAr: 'أتقن أساسيات Python مع مشاريع تطبيقية. مثالي للمبتدئين في رحلتهم البرمجية.',
    hours: 30,
    price: 70,
    category: 'programming',
    level: 'beginner',
    featured: true,
    icon: '🐍'
  },
  {
    id: 'python-data',
    titleEn: 'Python + Data Analysis',
    titleAr: 'Python + تحليل البيانات',
    descriptionEn: 'Learn Python with comprehensive data analysis skills using pandas, numpy, and visualization libraries.',
    descriptionAr: 'تعلم Python مع مهارات تحليل البيانات الشاملة باستخدام pandas و numpy ومكتبات التصور.',
    hours: 80,
    price: 200,
    category: 'data',
    level: 'intermediate',
    featured: true,
    icon: '📊'
  },
  {
    id: 'python-ai',
    titleEn: 'Python + Data + AI',
    titleAr: 'Python + البيانات + الذكاء الاصطناعي',
    descriptionEn: 'Complete AI track: Python, data analysis, machine learning, and artificial intelligence applications.',
    descriptionAr: 'مسار الذكاء الاصطناعي الكامل: Python، تحليل البيانات، التعلم الآلي، وتطبيقات الذكاء الاصطناعي.',
    hours: 200,
    price: 500,
    category: 'data',
    level: 'advanced',
    featured: true,
    icon: '🤖'
  },
  {
    id: 'java-basic',
    titleEn: 'Java Programming',
    titleAr: 'برمجة Java',
    descriptionEn: 'Learn Java programming from scratch. Build strong foundations in OOP and application development.',
    descriptionAr: 'تعلم برمجة Java من الصفر. بناء أسس قوية في البرمجة الكائنية وتطوير التطبيقات.',
    hours: 30,
    price: 70,
    category: 'programming',
    level: 'beginner',
    icon: '☕'
  },
  {
    id: 'android',
    titleEn: 'Android Development',
    titleAr: 'تطوير تطبيقات Android',
    descriptionEn: 'Build native Android applications using Kotlin/Java. From basics to publishing on Google Play.',
    descriptionAr: 'بناء تطبيقات Android أصلية باستخدام Kotlin/Java. من الأساسيات حتى النشر على Google Play.',
    hours: 80,
    price: 200,
    category: 'mobile',
    level: 'intermediate',
    icon: '📱'
  },
  {
    id: 'php-basic',
    titleEn: 'PHP Programming',
    titleAr: 'برمجة PHP',
    descriptionEn: 'Learn PHP for server-side web development. Build dynamic websites and web applications.',
    descriptionAr: 'تعلم PHP لتطوير الويب من جانب الخادم. بناء مواقع ديناميكية وتطبيقات ويب.',
    hours: 80,
    price: 200,
    category: 'programming',
    level: 'beginner',
    icon: '🐘'
  },
  {
    id: 'php-backend',
    titleEn: 'Backend PHP Development',
    titleAr: 'تطوير الخلفية بـ PHP',
    descriptionEn: 'Advanced PHP backend development with Laravel framework, APIs, and database management.',
    descriptionAr: 'تطوير خلفيات متقدم بـ PHP مع Laravel، APIs، وإدارة قواعد البيانات.',
    hours: 100,
    price: 250,
    category: 'web',
    level: 'intermediate',
    icon: '⚙️'
  },
  {
    id: 'fullstack-web',
    titleEn: 'Full Stack Web Developer',
    titleAr: 'مطور ويب متكامل',
    descriptionEn: 'Complete web development: HTML, CSS, JavaScript, React, Node.js, databases, and deployment.',
    descriptionAr: 'تطوير ويب كامل: HTML، CSS، JavaScript، React، Node.js، قواعد البيانات، والنشر.',
    hours: 200,
    price: 500,
    category: 'web',
    level: 'advanced',
    featured: true,
    icon: '🌐'
  },
  {
    id: 'fullstack-dotnet',
    titleEn: 'Full Stack ASP.NET',
    titleAr: 'مطور ASP.NET متكامل',
    descriptionEn: 'Enterprise web development with ASP.NET Core, C#, SQL Server, and Azure deployment.',
    descriptionAr: 'تطوير ويب مؤسسي مع ASP.NET Core، C#، SQL Server، ونشر Azure.',
    hours: 200,
    price: 500,
    category: 'web',
    level: 'advanced',
    icon: '💼'
  },
  {
    id: 'web-dev-8types',
    titleEn: 'Web Development (8 Types)',
    titleAr: 'تطوير الويب (8 أنواع)',
    descriptionEn: 'Master 8 types of websites: corporate, e-commerce, educational, portfolio, booking, and more.',
    descriptionAr: 'إتقان 8 أنواع من المواقع: شركات، تجارة إلكترونية، تعليمية، تعريفية، حجوزات، والمزيد.',
    hours: 160,
    price: 1000,
    category: 'web',
    level: 'advanced',
    icon: '🎯'
  },
  {
    id: 'mobile-8types',
    titleEn: 'Mobile Apps (8 Types)',
    titleAr: 'تطبيقات الموبايل (8 أنواع)',
    descriptionEn: 'Build 8 types of mobile applications: social, e-commerce, educational, fitness, and more.',
    descriptionAr: 'بناء 8 أنواع من تطبيقات الموبايل: اجتماعية، تجارة إلكترونية، تعليمية، رياضية، والمزيد.',
    hours: 160,
    price: 1000,
    category: 'mobile',
    level: 'advanced',
    icon: '📲'
  },
  {
    id: 'erp-systems',
    titleEn: 'ERP Systems',
    titleAr: 'أنظمة ERP',
    descriptionEn: 'Enterprise Resource Planning systems development: HR, finance, inventory, and business automation.',
    descriptionAr: 'تطوير أنظمة تخطيط موارد المؤسسات: الموارد البشرية، المالية، المخزون، وأتمتة الأعمال.',
    hours: 160,
    price: 1000,
    category: 'erp',
    level: 'advanced',
    icon: '🏢'
  }
];

export function getCourseById(id: string): Course | undefined {
  return courses.find(course => course.id === id);
}

export function getCoursesByCategory(category: Course['category']): Course[] {
  return courses.filter(course => course.category === category);
}

export function getFeaturedCourses(): Course[] {
  return courses.filter(course => course.featured);
}
