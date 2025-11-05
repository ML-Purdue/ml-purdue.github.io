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

export interface WorkshopItem {
  date: string,
  topic: string,
  leading: string,
  status: string,
}

export interface RGItem {
  date: string,
  topic: string,
  leading: string,
  status: string,
  room?: string,
  domain: Array<string>,
  extra?: string,
}

export interface ProjectItem {
  link?: string,
  name: string,
  desc: string,
  pm: string,
  status: string,
  commitment?: string,
  proficiency?: string,
  domain: Array<string>,
  duration?: string,
  advisor?: string,
  memberInfo?: string,
  accomplishments?: Array<string>,
}
