export interface EventData {
  event: EventInfo;
  hero: HeroSection;
  about: AboutSection;
  whyAttend: WhyAttendItem[];
  schedule: ScheduleItem[];
  speaker: Speaker;
  gallery: GalleryItem[];
  testimonials: Testimonial[];
  faq: FAQItem[];
  registration: RegistrationSection;
  contact: ContactSection;
  socials: SocialLinks;
  location: LocationSection;
  seo: SEOConfig;
  theme: ThemeConfig;
  highlights: HighlightsSection;
  whatsToExpect: WhatToExpectSection;
}

export interface EventInfo {
  name: string;
  tagline: string;
  date: string;
  endDate: string;
  time: string;
  venue: string;
  liveAttendeeCount: number;
  posterImage: string;
  logo: string;
  logoWhite: string;
  reminderMessage: string;
}

export interface HeroSection {
  backgroundImage: string;
  overlayColor: string;
  overlayOpacity: number;
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  secondaryCtaText: string;
  secondaryCtaLink: string;
}

export interface AboutSection {
  heading: string;
  whoWeAre: {
    title: string;
    description: string;
    icon: string;
  };
  vision: {
    title: string;
    description: string;
    icon: string;
  };
  mission: {
    title: string;
    description: string;
    icon: string;
  };
  welcomeMessage: {
    title: string;
    message: string;
    author: string;
  };
}

export interface WhyAttendItem {
  icon: string;
  title: string;
  description: string;
  gradient: string;
}

export interface ScheduleItem {
  time: string;
  title: string;
  description: string;
  duration: string;
  icon?: string;
  speaker?: string;
}

export interface WhatToExpectSection {
  heading: string;
  description: string;
  totalDuration: string;
  items: ScheduleItem[];
}

export interface HighlightsSection {
  heading: string;
  quote: {
    text: string;
    author: string;
  };
  scripture: {
    text: string;
    reference: string;
  };
  keyTakeaways: string[];
}

export interface Speaker {
  name: string;
  title: string;
  photo: string;
  bio: string;
  socials: {
    instagram?: string;
    twitter?: string;
    facebook?: string;
    website?: string;
  };
}

export interface GalleryItem {
  id: string;
  type: "image" | "video";
  src: string;
  thumbnail?: string;
  title: string;
  category: string;
  width: number;
  height: number;
}

export interface Testimonial {
  id: string;
  name: string;
  photo: string;
  testimony: string;
  role?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface RegistrationSection {
  heading: string;
  description: string;
  googleFormUrl?: string;
  fields?: FormField[];
  submitButtonText: string;
  successMessage: string;
  apiEndpoint?: string;
}

export interface FormField {
  name: string;
  label: string;
  type: "text" | "email" | "tel" | "number" | "textarea";
  required: boolean;
  placeholder?: string;
}

export interface ContactSection {
  phone: string;
  email: string;
  address: string;
  churchName: string;
}

export interface SocialLinks {
  instagram?: string;
  twitter?: string;
  facebook?: string;
  youtube?: string;
  tiktok?: string;
  whatsapp?: string;
  website?: string;
}

export interface LocationSection {
  embedUrl: string;
  address: string;
  latitude: number;
  longitude: number;
}

export interface SEOConfig {
  title: string;
  description: string;
  ogImage: string;
  ogType: string;
  twitterHandle?: string;
  keywords: string[];
}

export interface ThemeConfig {
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  fontFamily: string;
  darkMode: boolean;
}
