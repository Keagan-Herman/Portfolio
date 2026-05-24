export interface ProjectItem {
  name: string;
  type: string;
  description: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
}

export type SectionItem = ProjectItem | ExperienceItem | EducationItem;

export interface Section {
  id: string;
  number: string;
  title: string;
  items: SectionItem[];
}

export interface Content {
  name: string;
  title: string;
  philosophy: {
    title: string;
    content: string;
  };
  sections: Section[];
  contact: {
    email: string;
    links: {
      label: string;
      url: string;
    }[];
  };
}
