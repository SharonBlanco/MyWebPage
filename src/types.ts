export type ThemeVibe = "studio-grey" | "soft-slate" | "charcoal-light";

export interface ThemeConfig {
  primary: string;
  secondary: string;
  accent: string;
  bg: string;
  card: string;
  text: string;
  subtext: string;
  border: string;
  highlight: string;
}

export interface Project {
  title: string;
  desc: string;
  techs: string[];
  link: string;
}

export interface Certification {
  name: string;
  institution: string;
  date: string;
  description: string;
  link: string;
  accent: string;
}

export interface SkillGroup {
  title: string;
  skills: string[];
}
