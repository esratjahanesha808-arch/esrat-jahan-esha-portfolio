export interface Project {
  slug: string;
  title: string;
  category: string;
  github: string;
  liveUrl: string;
  mockupImage: string;
  techStack: string[];
  description: string;
  detailContent: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
}

export interface Skill {
  name: string;
  category: 'core' | 'frameworks' | 'databases' | 'ai' | 'seo' | 'lead-gen';
  level: number; // Ring index: 1 is closest, 6 is outer
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface SocialLinks {
  email: string;
  github: string;
  instagram: string;
  facebook: string;
  linkedin: string;
}
