import type { TechCategory } from "./types";

export const techStack: TechCategory[] = [
  {
    category: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "TailwindCSS"],
    icon: "🎨",
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "PostgreSQL", "Prisma", "Redis"],
    icon: "⚙️",
  },
  {
    category: "DevOps",
    skills: ["Docker", "AWS", "Linux", "Nginx"],
    icon: "🚀",
  },
  {
    category: "Tools",
    skills: ["VS Code", "Postman", "Figma", "Jest", "GitHub", "Vercel"],
    icon: "🛠️",
  },
];
