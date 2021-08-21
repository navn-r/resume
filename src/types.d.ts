export namespace Resume {
  export interface ISchema {
    $schema: string;
    basics: IBasics;
    work: IWork[];
    education: IEducation[];
    skills: ISkill[];
    projects: IProject[];
  }

  export interface IBasics {
    name: string;
    label: string;
    email: string;
    url: string;
    location: {
      city: string;
      region: string;
      countryCode: string;
    };
    profiles: IProfile[];
  }

  export interface IProfile {
    network: string;
    username: string;
    url: string;
  }

  export interface IWork {
    name: string;
    location: string;
    position: string;
    url: string;
    startDate: string;
    endDate: string;
    highlights: string[];
  }

  export interface IEducation {
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

  export interface ISkill {
    name: string;
    keywords: string[];
  }

  export interface IProject {
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
}
