import { ExperienceItem, TechItem, NavLink, ProjectItem } from "../types";

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
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact me", href: "#contact" },
];

export const projects: ProjectItem[] = [
  {
    name: "Spent",
    type: "Production Fintech Platform",
    description:
      "A production fintech platform where I work on backend systems for transactions, authentication, transaction limits, KYC, and third-party integrations.",
    highlights: [
      "Built NIN/BVN verification using QoreID and Maplerad",
      "Designed a provider abstraction for switching KYC providers without changing the core verification flow",
      "Built and maintained transaction and transaction-limit logic",
      "Implemented social authentication and other backend workflows",
    ],
    stack: ["Laravel", "PHP", "PostgreSQL", "Filament", "Third-party APIs"],
    link: "https://spentnow.co/",
  },
  {
    name: "Soutle",
    type: "Production AI Video Platform",
    description:
      "An AI video generation platform where I worked across the application, with backend-focused contributions to authentication, authorization, OAuth, and content integrations.",
    highlights: [
      "Implemented authentication and authorization workflows",
      "Worked on OAuth authentication and account flows",
      "Integrated WordPress content through a GraphQL API",
      "Built and maintained frontend features for the AI video generation platform",
    ],

    stack: ["Next.js", "Express.js", "GraphQL", "OAuth", "WordPress"],
    link: "https://soutle.com/",
  },
  {
    name: "Imprompto",
    type: "Production AI Prompt Platform",
    description:
      "An AI prompt generation platform where I worked on the application backend, focusing on prompt management, user data, and access to public and private prompts.",
    highlights: [
      "Built functionality for creating and managing user prompts",
      "Implemented retrieval of users' public and private prompts",
      "Worked with MongoDB for application data and prompt storage",
      "Built and maintained API logic connecting prompt data with the application",
    ],
    stack: ["Express.js", "Node.js", "MongoDB", "Next.js"],
    link: "https://imprompto.com/",
  },
  {
    name: "The Car Connection",
    type: "Production Automotive Platform",
    description:
      "Contributed to an established production automotive platform as part of the HGM team at Internet Brands.",
    highlights: [
      "Developed and maintained features in a Zend Framework application",
      "Worked across backend application logic and JavaScript",
      "Debugged and extended existing production functionality",
    ],
    stack: ["PHP", "Zend Framework", "JavaScript"],
    link: "https://www.thecarconnection.com/",
  },
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
