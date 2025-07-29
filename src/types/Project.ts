export interface Project {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  image: string;
  mockups: string[];
  technologies: string[];
  category: 'landing-page' | 'web-app' | 'mobile-app' | 'other';
  year: number;
  client?: string;
  url?: string;
  github?: string;
  features: string[];
  challenges: string[];
  solutions: string[];
}

export interface ProjectCategory {
  id: string;
  name: string;
  description: string;
}

// Export di default per compatibilità
export default Project;