import { Project, Skill, ContactLink } from './types';

export const PROJECTS: Project[] = [
  {
    title: "German Import & Export Company",
    description: "Handling documentation and client file submissions. Learning international trade and workflow management.",
    tags: ["Documentation", "Workflow Management", "International Trade"]
  },
  {
    title: "Tanjim's Blogs",
    description: "Sharing insights, experiences, and lessons from my journey of learning and growth. Built and written entirely by me, it reflects my curiosity, creativity, and passion for continuous improvement.",
    link: "https://kazitanjim.blog",
    tags: ["Writing", "Web Development", "Blogging"]
  },
  {
    title: "Discord Online Store",
    description: "Founded and managed a digital store on Discord, developing expertise in customer support, digital marketing, and community management. Successfully built trust with over 500 clients worldwide.",
    tags: ["E-commerce", "Digital Marketing", "Community Management"]
  }
];

export const SKILLS: Skill[] = [
  { name: "Client Management", category: "Management" },
  { name: "Digital Marketing", category: "Marketing" },
  { name: "HTML", category: "Development" },
  { name: "CSS", category: "Development" },
  { name: "Google Docs", category: "Tools" },
  { name: "Google Sheets", category: "Tools" },
  { name: "Customer Support", category: "Management" },
  { name: "Community Management", category: "Management" }
];

export const CONTACT_LINKS: ContactLink[] = [
  {
    label: "Email",
    value: "contact@kazitanjim.blog",
    href: "mailto:contact@kazitanjim.blog",
    icon: "Mail"
  },
  {
    label: "LinkedIn",
    value: "k4zit4njim",
    href: "https://www.linkedin.com/in/k4zit4njim",
    icon: "Linkedin"
  },
  {
    label: "Instagram",
    value: "@k4zit4njim_",
    href: "https://instagram.com/k4zit4njim_",
    icon: "Instagram"
  }
];
