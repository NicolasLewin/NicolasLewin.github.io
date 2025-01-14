export interface Study {
    degree: string;
    school: string;
    year: string;
    description: string;
    logo: string;
  }
  
  export interface Experience {
    title: string;
    company: string;
    period: string;
    responsibilities: string[];
    logo: string;
  }
  
  export interface Project {
    name: string;
    date: string;
    description: string;
    technologies: string[];
    githubLink?: string;
    demoLink?: string;
  }
  
  export interface Skills {
    languages: string[];
    frameworks: string[];
    methods: string[];
    tools: string[];
    databases: string[];
    IDEs: string[];
  }
  
  export interface NavigationProps {
    activeSection: string;
  }
  
  export interface SectionProps {
    title: string;
    id: string;
  }
  