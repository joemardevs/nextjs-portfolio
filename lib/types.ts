// Data type definitions for the portfolio

export interface Experience {
  title: string;
  company: string;
  date: string;
}

export interface Project {
  title: string;
  description: string;
  stack: string[];
  playstore?: string;
  appstore?: string;
  link?: string;
}

export interface TechStackItem {
  icon: () => React.ReactNode;
  name: string;
}

export interface Social {
  name: string;
  url: string;
}

export interface Feedback {
  name: string;
  position: string;
  featured: boolean;
  feedback: string;
}

// Theme types
export type Theme = "light" | "dark";

export interface NavLink {
  label: string;
  href: string;
}
