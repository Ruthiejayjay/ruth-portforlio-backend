export interface ExperienceItem {
    period: string;
    company: string;
    role: string;
    type: string;
    bullets: string[];
}

export interface TechItem {
    line: number;
    name: string;
    color?: string;
}

export interface NavLink{
    label: string;
    href: string;
}