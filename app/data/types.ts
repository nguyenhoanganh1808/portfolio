export interface Education {
  degree: string;
  institution: string;
  period: string;
  description: string[];
}

export interface WorkExperience {
  title: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
}

export interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
}

export interface TechCategory {
  category: string;
  skills: string[];
  icon: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  description: string;
  email: string;
  resumeLink: string;
  socials: SocialLink[];
}

export interface ResearchPublication {
  title: string;
  publisher: string;
  date: string;
  summary: string;
  url?: string;
  tags?: string[];
}

export interface LanguageCertification {
  language: string;
  certification: string;
  score: string;
  date: string;
  maxScore: string;
}

export interface ProfessionalCertification {
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  credentialUrl?: string;
}
