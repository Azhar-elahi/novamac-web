export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  icon?: string;
  deliverables: string[];
  features: string[];
}

export interface ProjectItem {
  id: string;
  category: string;
  statVal: string;
  statLabel: string;
  title: string;
  desc: string;
  image: string;
  link: string;
  techStack?: string[];
}

export interface PricingTier {
  id: string;
  title: string;
  price: string;
  subtitle: string;
  popular?: boolean;
  badge?: string;
  features: string[];
  ctaText: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface ClientReview {
  id: string;
  name: string;
  role: string;
  rating: number;
  comment: string;
  verified: boolean;
  date: string;
}
