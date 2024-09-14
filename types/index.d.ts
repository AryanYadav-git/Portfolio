declare interface ProjectCardParams {
  title: string;
  description: string;
  url?:string;
  github?: string;
  readMore?: string;
  stack: string[];
  imgSrc: string;
}

declare interface ExperienceParams {
  position: string;
  company: string;
  duration: string;
  location: string;
  description: string;
}

declare interface EducationParams{
  degree: string;
  institute: string;
  duration: string;
  location: string;
  score: string
}

declare type StackIcon = 'Next' | 'TypeScript'