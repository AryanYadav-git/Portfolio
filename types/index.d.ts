declare interface ProjectCardParams {
  title: string;
  description: string;
  url?:string;
  github?: string;
  readMore?: string;
  stack: string[];
  imgSrc: string;
}

declare type StackIcon = 'Next' | 'TypeScript'