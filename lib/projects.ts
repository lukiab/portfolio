export type ProjectCategory =
  | 'pm-digital'
  | 'pm-creative'
  | 'commercial'
  | 'editorial'
  | 'video'
  | 'web';

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  client?: string;
  year: string;
  thumbnail: string;
  images: string[];
  description: string;
  role: string;
  deliverables?: string[];
  featured?: boolean;
}

export interface CVEntry {
  year: string;
  role: string;
  company: string;
  description: string;
}

export const projects: Project[] = [
  // Digital Marketing Projects
  {
    id: 'campaign-refresh-2024',
    title: 'Brand Campaign Refresh',
    category: 'pm-digital',
    client: 'Wellness Studio',
    year: '2024',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80',
      'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=1200&q=80',
    ],
    description: 'Led comprehensive digital marketing campaign refresh including social media strategy, content calendar development, and performance analytics implementation.',
    role: 'Project Manager',
    deliverables: ['Social Media Strategy', 'Content Calendar', 'Analytics Dashboard'],
    featured: true,
  },
  {
    id: 'ecommerce-launch',
    title: 'E-Commerce Launch Campaign',
    category: 'pm-digital',
    client: 'Artisan Goods Co.',
    year: '2024',
    thumbnail: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80',
    ],
    description: 'Managed end-to-end digital launch campaign for new e-commerce platform, coordinating across marketing, development, and creative teams.',
    role: 'Project Manager',
    deliverables: ['Launch Strategy', 'Cross-team Coordination', 'Campaign Analytics'],
  },
  {
    id: 'influencer-strategy',
    title: 'Influencer Marketing Strategy',
    category: 'pm-digital',
    client: 'Beauty Collective',
    year: '2023',
    thumbnail: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=1200&q=80',
    ],
    description: 'Developed and executed influencer partnership strategy resulting in 40% increase in brand awareness metrics.',
    role: 'Project Manager',
    deliverables: ['Influencer Selection', 'Contract Negotiation', 'Performance Tracking'],
  },

  // Creative Production Management
  {
    id: 'seasonal-campaign',
    title: 'Seasonal Campaign Production',
    category: 'pm-creative',
    client: 'Fashion House',
    year: '2024',
    thumbnail: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80',
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1200&q=80',
    ],
    description: 'Oversaw complete production management for seasonal fashion campaign including location scouting, talent coordination, and post-production timeline management.',
    role: 'Production Manager',
    deliverables: ['Production Schedule', 'Budget Management', 'Vendor Coordination'],
    featured: true,
  },
  {
    id: 'brand-film-production',
    title: 'Brand Film Series',
    category: 'pm-creative',
    client: 'Lifestyle Brand',
    year: '2023',
    thumbnail: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1200&q=80',
    ],
    description: 'Managed production of five-part brand film series from concept through delivery, coordinating with directors, DPs, and post-production teams.',
    role: 'Production Manager',
    deliverables: ['Production Timeline', 'Crew Coordination', 'Delivery Management'],
  },

  // Commercial & Product Shoots
  {
    id: 'skincare-campaign',
    title: 'Skincare Product Launch',
    category: 'commercial',
    client: 'Clean Beauty Co.',
    year: '2024',
    thumbnail: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=1200&q=80',
      'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=1200&q=80',
    ],
    description: 'Creative direction for product photography campaign featuring minimalist aesthetic with natural lighting and organic textures.',
    role: 'Creative Director',
    deliverables: ['Creative Concept', 'Shot Direction', 'Final Edit Selection'],
    featured: true,
  },
  {
    id: 'jewelry-lookbook',
    title: 'Fine Jewelry Lookbook',
    category: 'commercial',
    client: 'Atelier Gems',
    year: '2024',
    thumbnail: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1200&q=80',
    ],
    description: 'Directed product shoot for luxury jewelry collection with focus on dramatic lighting and editorial styling.',
    role: 'Creative Director',
    deliverables: ['Visual Direction', 'Styling Guidance', 'Post Direction'],
  },
  {
    id: 'home-goods-catalog',
    title: 'Home Goods Collection',
    category: 'commercial',
    client: 'Modern Living',
    year: '2023',
    thumbnail: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&q=80',
    ],
    description: 'Creative direction for home goods catalog featuring lifestyle and product photography across multiple sets.',
    role: 'Creative Director',
    deliverables: ['Set Design Direction', 'Prop Styling', 'Image Selection'],
  },

  // Editorial
  {
    id: 'magazine-cover',
    title: 'Cover Story Editorial',
    category: 'editorial',
    client: 'Vogue Portugal',
    year: '2024',
    thumbnail: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1200&q=80',
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1200&q=80',
    ],
    description: 'Produced editorial fashion story for magazine cover feature, managing all aspects from concept development through final image selection.',
    role: 'Creative Producer',
    deliverables: ['Concept Development', 'Talent Casting', 'Shoot Production'],
    featured: true,
  },
  {
    id: 'beauty-editorial',
    title: 'Beauty Editorial Series',
    category: 'editorial',
    client: 'Allure Magazine',
    year: '2023',
    thumbnail: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=1200&q=80',
    ],
    description: 'Directed beauty editorial exploring modern interpretations of classic makeup techniques.',
    role: 'Creative Director',
    deliverables: ['Creative Concept', 'Beauty Direction', 'Final Selection'],
  },
  {
    id: 'architectural-story',
    title: 'Architecture & Interiors Story',
    category: 'editorial',
    client: 'Architectural Digest',
    year: '2023',
    thumbnail: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
    ],
    description: 'Produced architectural photography feature showcasing contemporary residential design.',
    role: 'Producer',
    deliverables: ['Location Coordination', 'Shoot Production', 'Edit Curation'],
  },

  // Video Production
  {
    id: 'brand-documentary',
    title: 'Brand Documentary',
    category: 'video',
    client: 'Heritage Craft Co.',
    year: '2024',
    thumbnail: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1536240478700-b869070f9279?w=1200&q=80',
    ],
    description: 'Produced 15-minute brand documentary exploring artisan craftsmanship and company heritage.',
    role: 'Producer',
    deliverables: ['Story Development', 'Production Management', 'Post Supervision'],
    featured: true,
  },
  {
    id: 'product-videos',
    title: 'Product Video Series',
    category: 'video',
    client: 'Tech Startup',
    year: '2024',
    thumbnail: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1200&q=80',
    ],
    description: 'Directed series of product demonstration videos for software launch campaign.',
    role: 'Director',
    deliverables: ['Script Development', 'Direction', 'Edit Notes'],
  },
  {
    id: 'fashion-film',
    title: 'Fashion Film',
    category: 'video',
    client: 'Designer Label',
    year: '2023',
    thumbnail: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1200&q=80',
    ],
    description: 'Creative direction for fashion film presenting seasonal collection through narrative storytelling.',
    role: 'Creative Director',
    deliverables: ['Creative Concept', 'Direction', 'Music Supervision'],
  },

  // Web Services
  {
    id: 'photographer-portfolio',
    title: 'Photographer Portfolio',
    category: 'web',
    client: 'Studio Photographer',
    year: '2024',
    thumbnail: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&q=80',
    ],
    description: 'Designed and developed custom portfolio website for commercial photographer with focus on image presentation and client inquiry flow.',
    role: 'Designer & Developer',
    deliverables: ['Design', 'Development', 'CMS Integration'],
    featured: true,
  },
  {
    id: 'artist-website',
    title: 'Visual Artist Website',
    category: 'web',
    client: 'Contemporary Artist',
    year: '2024',
    thumbnail: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80',
    ],
    description: 'Built minimalist portfolio and exhibition archive for contemporary visual artist.',
    role: 'Designer & Developer',
    deliverables: ['Custom Design', 'Portfolio System', 'Exhibition Archive'],
  },
  {
    id: 'creative-agency-site',
    title: 'Creative Agency Website',
    category: 'web',
    client: 'Boutique Agency',
    year: '2023',
    thumbnail: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=1200&q=80',
    ],
    description: 'Designed and developed website for boutique creative agency showcasing their portfolio and team.',
    role: 'Designer & Developer',
    deliverables: ['Brand Integration', 'Portfolio Display', 'Team Section'],
  },
];

export const cvEntries: CVEntry[] = [
  {
    year: '2022 - Present',
    role: 'Freelance Creative Producer, Director & Project Manager',
    company: '',
    description: 'Leading creative direction and production, and managing digital marketing teams. Key projects include social media management of Penny Deutschland, full production for CPH-based fashion brand Plante Inc, and AI-ready product shooting for MyJournalto_.',
  },
  {
    year: '2021 - 2025',
    role: 'Client Coordination, Creative Project Management, Digital Marketing & Content',
    company: 'DEPT\u00AE Agency, Copenhagen',
    description: 'Project manager for global clients including Uber, eBay, BOSCH and Tiger of Sweden. Managed cross-functional teams driving digital marketing strategy, media planning, and creative production. Coordinated Paid Social, SEA and SEO implementation. Created and localized content in English and German for 40+ international brands.',
  },
];

export interface Education {
  degree: string;
  institution: string;
  years?: string;
  detail?: string;
}

export const education: Education[] = [
  {
    degree: 'MSc International Marketing & Management',
    institution: 'Copenhagen Business School, Denmark',
    detail: 'Thesis: The Influence of AI-Driven Digital Marketing on TikTok',
  },
  {
    degree: 'BSc Economics & Business Administration',
    institution: 'Eberhard Karls University T\u00FCbingen, Germany & University of Oregon, USA',
    detail: 'Focus: Marketing & International Business; Minor in International Business Communication',
  },
];

export const skills = {
  professional: [
    'Digital Marketing Strategy',
    'Media Production',
    'Content & Localization',
    'Project Management',
    'Cross-Cultural Communication',
    'Multilingual Copywriting',
  ],
  technical: [
    'AI Prompting & Optimization',
    'Photography & Videography',
    'Adobe Lightroom',
    'CapCut',
    'Canva',
    'Google Ads',
    'Meta Ads Manager',
  ],
  languages: [
    'German (native)',
    'English (fluent)',
    'Greek, Danish & French (conversational)',
    'Spanish (basics)',
  ],
};

export const clients = [
  'Penny',
  'Comwell',
  'Tiger of Sweden',
  'MyJournalto_',
  'Uber',
  'BOSCH',
  'eBay',
  'Plante Inc',
];

export function getProjectsByCategory(category: ProjectCategory): Project[] {
  return projects.filter(p => p.category === category);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter(p => p.featured);
}

export function getProjectById(id: string): Project | undefined {
  return projects.find(p => p.id === id);
}

export function getCategoryLabel(category: ProjectCategory): string {
  const labels: Record<ProjectCategory, string> = {
    'pm-digital': 'Digital Marketing',
    'pm-creative': 'Creative Production',
    'commercial': 'Commercial & Product',
    'editorial': 'Editorial',
    'video': 'Video Production',
    'web': 'Web Services',
  };
  return labels[category];
}
