export interface Project {
  title: string;
  description: string;
  link?: string;
  tags: string[];
}

export interface Skill {
  name: string;
  category: string;
}

export interface ContactLink {
  label: string;
  value: string;
  href: string;
  icon: string;
}
