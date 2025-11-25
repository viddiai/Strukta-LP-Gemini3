export interface CaseStudy {
  id: number;
  industry: string;
  size: string;
  challenge: string;
  result: string;
  quote?: string;
  author?: string;
}

export interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  phone: string;
  email: string;
}
