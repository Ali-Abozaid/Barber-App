export interface NavLink {
  label: string;
  path: string;
}

export interface ShopProfile {
  name: string;
  logoLead: string;
  logoAccent: string;
  phoneDisplay: string;
  phoneHref: string;
  whatsappNumber: string;
  whatsappMessage: string;
  email: string;
  address: string;
  cityLine: string;
  mapEmbedUrl: string;
  openingHours: { days: string; hours: string }[];
}

export interface ServiceItem {
  id: string;
  title: string;
  summary: string;
  details: string;
  price: string;
  icon: 'cut' | 'beard' | 'shave' | 'style' | 'kids' | 'care';
}

export interface Barber {
  slug: string;
  name: string;
  role: string;
  shortBio: string;
  bio: string[];
  image: string;
  focus: string[];
}

export interface PriceLine {
  name: string;
  price: string;
}

export interface JournalPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
  paragraphs: string[];
}

export interface VisitStep {
  step: string;
  title: string;
  text: string;
}

export interface GalleryShot {
  image: string;
  alt: string;
  wide?: boolean;
}
