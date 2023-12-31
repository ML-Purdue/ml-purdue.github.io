export interface CompatibilityItem {
  icon: string;
  title: string;
  url: string;
}

export interface FeatureItem {
  description: string;
  icon: string;
  title: string;
}

export interface FooterLink {
  description: string;
  icon: string;
  url: string;
}

export interface NavItemLink {
  title: string;
  url?: string;
}

export interface NavItem extends NavItemLink {
  sublinks?: NavItemLink[];
}

export interface ShowcaseSite {
  title: string;
  image: ImageMetadata;
  url: string;
}
