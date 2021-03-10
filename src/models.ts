export interface Resume {
  $schema: string;
  basics: Basics;
  work: Work[],
  education: Education[],
  skills: Skill[],
  projects: Project[],
}

export interface Basics {
  name: string;
  label: string;
  email: string;
  url: string;
  location: {
    city: string;
    region: string;
    countryCode: string;
  }
  profiles: Profile[]
}

export interface Profile {
  network: string;
  username: string;
  url: string;
}

export interface Work {
  name: string;
  location: string;
  position: string;
  url: string;
  startDate: string;
  endDate: string;
  highlights: string[];
}

export interface Education {
  institution: string;
  location: string;
  url: string;
  area: string;
  studyType: string;
  startDate: string;
  endDate: string;
  score: string;
  courses: string[];
  awards: string[];
}

export interface Skill {
  name: string;
  keywords: string[];
}

export interface Project {
  name: string;
  description: string;
  highlights: string[];
  startDate: string;
  endDate: string;
  repo?: string;
  url?: string;
  features?: string[];
  technology: string[];
  type: string;
}