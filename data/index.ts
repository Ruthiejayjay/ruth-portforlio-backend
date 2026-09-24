import { ExperienceItem, TechItem, NavLink } from "../types";

export const experienceItems: ExperienceItem[] = [
  {
    period: "Mar 2025 — Present",
    company: "Spent (SpentNow, Spent Business, Giftas, Boloso)",
    role: "Backend Developer",
    type: "Nigeria . Remote",
    bullets: [
      "Maintain and enhance backend systems powering live fintech platforms serving real users.",
      "Develop and ship features using Laravel, Inertia.js, and Filament.",
      "Optimize transaction-based systems for performance, reliability, and data integrity.",
      "Collaborate in Agile teams to deliver secure production updates.",
      "Support financial workflows across consumer and business-facing products.",
    ],
  },
  {
    period: "Oct 2023 — Dec 2025",
    company: "Aptiw Ltd (Clientforce)",
    role: "Full-Stack Developer",
    type: "Nigeria · Remote",
    bullets: [
      "Built and maintained SaaS applications using Laravel, Express.js, and GraphQL.",
      "Developed frontend interfaces using Next.js and Vue.js.",
      "Designed scalable REST and GraphQL APIs.",
      "Implemented authentication systems and role-based access control.",
      "Architected backend services supporting enterprise clients.",
    ],
  },
  {
    period: "Sept 2023 — Oct 2023",
    company: "HNG Internship",
    role: "Full-Stack Developer",
    type: "Remote · Internship",
    bullets: [
      "Designed database schemas and API specifications for collaborative projects.",
      "Built backend features using Laravel.",
      "Worked within an Agile team environment using Linear.",
      "Delivered production-ready features under tight deadlines.",
    ],
  },
  {
    period: "Dec 2022 — Apr 2023",
    company: "Internet Brands (HGM Team – The Car Connection)",
    role: "Full Stack Developer (Contract)",
    type: "USA · Remote",
    bullets: [
      "Developed and maintained enterprise web applications using Zend Framework and JavaScript.",
      "Contributed to production features and technical documentation.",
      "Collaborated with distributed engineering teams in a large-scale organization.",
      "Worked on high-traffic automotive platforms.",
    ],
  },
  {
    period: "Feb 2021 — Sept 2022",
    company: "New Devz",
    role: "Project Manager / Full Stack Developer",
    type: "Nigeria . Remote",
    bullets: [
      "Led delivery of 10+ web projects from conception to deployment.",
      "Built fintech applications integrating Paystack and Flutterwave payment systems.",
      "Developed backend microservices using ASP.NET Core.",
      "Mentored developers and managed Agile workflows.",
      "Oversaw architecture decisions and production releases.",
    ],
  },
];

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Contact me", href: "#contact" },
];

export const techStack: TechItem[] = [
  { line: 1, name: "<Laravel />", color: "#ff4433" },
  { line: 2, name: "<PHP />", color: "#0885FD" },
  { line: 3, name: "<React.js />", color: "#61dafb" },
  { line: 4, name: "<Vue />", color: "#42b883" },
  { line: 5, name: "<Next.js />", color: "#C02FFF" },
  { line: 6, name: "<NestJS />", color: "#e0234e" },
  { line: 7, name: "<Node.js />", color: "#4ade80" },
  { line: 8, name: "<Express.js />", color: "#38bdf8" },
  { line: 9, name: "<GraphQL />" },
  { line: 10, name: "...and many more //" },
];