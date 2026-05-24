// ─── Skill Groups ────────────────────────────────────────────────────────────
export interface SkillGroup {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  tags: string[];
}

// ─── Experience ──────────────────────────────────────────────────────────────
export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
}

// ─── Projects ────────────────────────────────────────────────────────────────
export interface ProjectItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  tags: string[];
  status: "Live" | "In Dev" | "Production";
  url?: string;
}

// ─── Education ───────────────────────────────────────────────────────────────
export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  ethos: string;
}

// ─── About ───────────────────────────────────────────────────────────────────
export interface About {
  headline: string;
  callout: string;
  body: string[];
}

// ─── Contact ─────────────────────────────────────────────────────────────────
export interface ContactLink {
  label: string;
  detail: string;
  url: string;
}

export interface Contact {
  email: string;
  links: ContactLink[];
}

// ─── Root ────────────────────────────────────────────────────────────────────
export interface Content {
  firstName: string;
  lastName: string;
  role: string;
  summary: string;
  about: About;
  skills: SkillGroup[];
  experience: ExperienceItem[];
  projects: ProjectItem[];
  education: EducationItem;
  contact: Contact;
}
