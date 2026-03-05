export type Locale = "en" | "uk" | "ru";

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  tech: string[];
  status: "live" | "concept" | "wip";
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  featured?: boolean;
}

export interface NavItem {
  label: string;
  href: string;
}
