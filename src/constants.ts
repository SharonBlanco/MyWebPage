import { ThemeVibe, ThemeConfig, Project, Certification, SkillGroup } from "./types";

export const THEMES: Record<ThemeVibe, ThemeConfig> = {
  "studio-grey": {
    primary: "bg-[#1F2937]", // Dark Text color for primary actions
    secondary: "bg-[#F8FAFA]",
    accent: "text-[#5DA9A6]", // Greyish turquoise
    bg: "bg-[#F8FAFA]",
    card: "bg-white",
    text: "text-[#1F2937]",
    subtext: "text-[#4B5563]",
    border: "border-slate-200",
    highlight: "bg-[#CBD5E1]",
  },
  "soft-slate": {
    primary: "bg-[#2F7F7A]", // Soft dark turquoise
    secondary: "bg-[#F3F4F6]",
    accent: "text-[#5DA9A6]",
    bg: "bg-white",
    card: "bg-[#F8FAFA]",
    text: "text-[#1F2937]",
    subtext: "text-slate-500",
    border: "border-[#CBD5E1]",
    highlight: "bg-[#E5E7EB]",
  },
  "charcoal-light": {
    primary: "bg-zinc-900",
    secondary: "bg-[#E5E7EB]",
    accent: "text-[#5DA9A6]",
    bg: "bg-[#F1F5F9]",
    card: "bg-white",
    text: "text-zinc-900",
    subtext: "text-zinc-500",
    border: "border-[#CBD5E1]",
    highlight: "bg-[#E2E8F0]",
  },
};

export const PROJECTS: Project[] = [
  {
    title: "Data Analysis: FIFA DATASET",
    desc: "Exploratory data analysis and processing of FIFA player data (2015–2024), including data cleaning, quality reports, and statistical insights.",
    techs: ["Pandas", "Python", "MySQL"],
    link: "https://github.com/SharonBlanco/Proyecto_Analisis_De_Datos_DATASET_FIFA",
  },
  {
    title: "Statistics 2025",
    desc: "Statistical analysis of flight databases using R in Colab environments.",
    techs: ["R", "Colab", "Statistics"],
    link: "https://github.com/SharonBlanco/Proyectos_Estadistica_2025",
  },
  {
    title: "Python Interpreter",
    desc: "Go-based bytecode micro-interpreter developed for the Languages course.",
    techs: ["Go", "Bytecode", "Compilers"],
    link: "https://github.com/ubeda-alex/I_Proyecto_Lenguajes",
  },
  {
    title: "TriviaQuirk UI",
    desc: "Multiplayer trivia game with Swing interface applying OOP principles.",
    techs: ["Java", "Swing", "OOP"],
    link: "https://github.com/SharonBlanco/POO_II_Proyecto_2023",
  },
  {
    title: "F# Game Suite",
    desc: "Implementation of logic games applying functional immutability and recursion.",
    techs: ["F#", "Functional", "Logic"],
    link: "https://github.com/SharonBlanco/II_Proyecto_Lenguajes",
  },
  {
    title: "Intelligent Healthy Menu",
    desc: "Intelligent recommendation system using Prolog logic rules in a Python interface.",
    techs: ["Prolog", "Python", "Logic"],
    link: "https://github.com/SharonBlanco/III_Proyecto_Lenguajes",
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    name: "Postman Student Expert",
    institution: "Postman",
    date: "March 2025",
    description: "Demonstrated proficiency with APIs and Postman by completing foundational tasks and passing technical tests.",
    link: "https://badges.parchment.com/public/assertions/zNO0PPbtTyOfD-6mNVh3Gg?",
    accent: "bg-orange-50 text-orange-600",
  },
  {
    name: "Principles and Applications of Cloud Computing",
    institution: "Huawei",
    date: "2024",
    description: "Certification in basic cloud computing concepts, virtualization, networking, and storage.",
    link: "https://www.credly.com/badges/aae9a879-8618-4a10-891a-b26fcc2e2538/linked_in?t=te8frm",
    accent: "bg-blue-50 text-blue-600",
  },
  {
    name: "Development and Basic Concepts of Cloud Computing",
    institution: "Huawei",
    date: "2024",
    description: "Training in cloud architecture, development trends, and technology deployment models.",
    link: "https://www.credly.com/badges/6a2b5e26-1767-4d4b-9881-1d153d8fd764/linked_in_profile",
    accent: "bg-indigo-50 text-indigo-600",
  },
  {
    name: "Udemy Certificate",
    institution: "Udemy",
    date: "Completed",
    description: "Technical specialization course successfully completed on the Udemy learning platform.",
    link: "https://ude.my/UC-b6f435dc-0d63-42f5-90cc-a52a62bb012f",
    accent: "bg-purple-50 text-purple-600",
  },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: "Development & Backend",
    skills: ["Python", "R", "Go", "Java", "F#", "Prolog", "Bash"],
  },
  {
    title: "Frontend & Data",
    skills: ["JavaScript", "HTML", "CSS", "JSON", "Jupyter", "Colab", "D3.js"],
  },
  {
    title: "Methodology & Logic",
    skills: ["OOP", "Functional", "Statistics", "Data Analysis", "Prolog Logic", "GitHub"],
  },
];
