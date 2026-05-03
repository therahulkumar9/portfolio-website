export type Project = {
  name: string;
  tagline: string;
  category: string;
  description: string;
  tech: string[];
  initials: string;
  url?: string;
  logo?: string;
};

export const projects: Project[] = [
  {
    name: "Toolghar",
    tagline: "Online tools & utilities",
    category: "SaaS Product",
    description:
      "A comprehensive platform providing useful online tools and utilities for everyday tasks. Built with performance and user experience in mind.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    initials: "TG",
    url: "https://toolghar.com/",
    logo: "/toolghar.webp",
  },
  {
    name: "MathToWord",
    tagline: "AI math → editable DOCX",
    category: "AI Tool",
    description:
      "AI-powered SaaS that converts handwritten math and PDFs into clean, editable DOCX files using OCR and LLMs.",
    tech: ["React", "Node.js", "AI / ML"],
    initials: "MW",
    url: "https://mathtoword.com/",
    logo: "/mathtoword.webp",
  },
];

export type Experience = {
  role: string;
  company: string;
  period: string;
  description: string;
  tech: string[];
  current?: boolean;
  logo?: string;
};

export const experiences: Experience[] = [
  {
    role: "Founder",
    company: "Toolghar",
    period: "April 2026 — Present",
    description:
      "Building Toolghar, a comprehensive platform providing useful online tools and utilities for everyday tasks.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    current: true,
    logo: "/toolghar.webp",
  },
  {
    role: "Founder",
    company: "MathToWord",
    period: "June 2025 — Present",
    description:
      "Founded MathToWord, an AI-powered SaaS that converts mathematical content—including handwritten notes and PDFs—into clean, editable DOCX files.",
    tech: ["React", "Node.js", "AI / ML", "Cloud"],
    current: true,
    logo: "/mathtoword.webp",
  },
];

export const skills = {
  Frontend: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "JavaScript", "HTML5"],
  Backend: ["Supabase", "Firebase", "Node.js", "MongoDB", "Express.js", "Socket.io", "Python", "C++"],
  "Tools & Cloud": ["Vercel", "VS Code", "Git", "GitHub", "Docker", "Google Cloud"],
};
