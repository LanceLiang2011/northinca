export interface SiteInfo {
  name: string;
  slogan: string;
  description: string;
  primaryColor: string;
  contact: {
    address: string;
    phone: string;
    email: string;
    hours: string;
  };
  social: {
    instagram: string;
    linkedin: string;
  };
}

export interface NavItem {
  label: string;
  href: string;
}

export interface FeatureBlock {
  title: string;
  content: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image?: string;
}

export interface Partner {
  name: string;
  description: string;
  logo?: string;
}
