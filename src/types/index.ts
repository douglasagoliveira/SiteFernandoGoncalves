// Tipos TypeScript para o projeto

export interface NavItem {
  label: string;
  path: string;
}

export interface Stat {
  number: string;
  label: string;
}

export interface PainPoint {
  text: string;
}

export interface Module {
  tag: string;
  title: string;
  description: string;
  image?: string;
}

export interface Step {
  number: number;
  title: string;
  description: string;
}

export interface Benefit {
  icon: string;
  title: string;
  description: string;
}

export interface Format {
  title: string;
  duration: string;
  description: string;
  ideal: string;
  popular?: boolean;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  photo?: string;
}

export interface Book {
  title: string;
  description: string;
  image?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ContactInfo {
  icon: string;
  label: string;
  value: string;
  details?: string[];
}

export interface SocialLink {
  platform: string;
  handle: string;
}
