export interface Venue {
  region: string;
  dayTime: string;
  address: string[];
  googleMapsUrl: string;
}

export interface EventData {
  event: EventInfo;
  hero: HeroSection;
  about: AboutSection;
  whyAttend: WhyAttendItem[];
  whyAttendSection: SectionHeadingOnly;
  schedule?: ScheduleItem[];
  venues: Venue[];
  speaker: Speaker;
  marquee: MarqueeSection;
  gallery: GalleryItem[];
  gallerySection: SectionHeadingWithHighlight;
  testimonials: Testimonial[];
  testimonialsSection: SectionHeadingOnly;
  faq: FAQItem[];
  faqSection: SectionHeadingWithSubtitle;
  registration: RegistrationSection;
  contact: ContactSection;
  socials: SocialLinks;
  location: LocationSection;
  seo: SEOConfig;
  theme: ThemeConfig;
  highlights: HighlightsSection;
  whatsToExpect: WhatToExpectSection;
  songSection: SectionHeadingWithHighlight;
}

export interface SectionHeadingOnly {
  heading: string;
}

export interface SectionHeadingWithHighlight {
  heading: string;
  headingHighlight: string;
}

export interface SectionHeadingWithSubtitle {
  heading: string;
  subtitle: string;
}

export interface MarqueeSection {
  items: string[];
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
  mainTitleHighlight: string | false;
  watermarkWords: string[];
  topBadge: string;
  quoteText: string;
  quoteAuthor: string;
  speakerTag: string;
  scrollDownText: string;
  ctaText: string;
  ctaLink: string;
  secondaryCtaText: string;
  secondaryCtaLink: string;
}

export interface AboutSection {
  badge: string;
  tagline: string;
  taglineHighlight: string | false;
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
  stats: StatItem[];
  imageAlt: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface WhyAttendItem {
  icon: string;
  title: string;
  description: string;
  gradient: string;
}

export interface LyricLine {
  text: string;
  transliteration?: string;
  section?: "intro" | "verse" | "chorus" | "bridge" | "tag" | "ending";
}

export interface Song {
  title: string;
  slug: string;
  order: number;
  note?: string;
  language: "tamil" | "english";
  lyrics: LyricLine[];
}

export interface ScheduleItem {
  time: string;
  title: string;
  description: string;
  duration: string;
  icon?: string;
  speaker?: string;
  note?: string;
}

export interface WhatToExpectSection {
  heading: string;
  headingHighlight: string;
  durationPrefix: string;
  description: string;
  totalDuration: string;
  items: ScheduleItem[];
  songs: Song[];
}

export interface HighlightsSection {
  heading: string;
  themeVerseTitle: string;
  godsPromiseTitle: string;
  keyTakeawaysTitle: string;
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
  badge: string;
  sectionHeading: string;
  sectionSubtitle: string;
  name: string;
  title: string;
  photo: string;
  bio: string;
  messageTranslation?: string;
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
  successHeading: string;
  processingText: string;
  badgeText: string;
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
  heading: string;
  subtitle: string;
  infoHeading: string;
  labels: {
    phone: string;
    email: string;
    address: string;
  };
  followUsHeading: string;
  socialSubtitle: string;
  platformLabels: Record<string, string>;
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
  heading: string;
  headingHighlight: string;
  mapTitle: string;
  embedUrl: string;
  address: string;
  latitude: number;
  longitude: number;
}

export interface SEOConfig {
  title: string;
  description: string;
  baseUrl: string;
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
