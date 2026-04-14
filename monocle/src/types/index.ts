export interface NavLink {
  label: string;
  href: string;
}

export interface SiteConfig {
  name: string;
  description: string;
  navLinks: NavLink[];
  footerText: string;
}

export interface FeaturePillar {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface HomeContent {
  hero: {
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  mission: {
    title: string;
    description: string;
  };
  pillars: FeaturePillar[];
}

export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  features: string[];
}
