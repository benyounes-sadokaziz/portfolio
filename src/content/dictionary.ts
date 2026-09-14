import type { PhilosophyPillar, ProjectId } from "./meta";

export interface ProjectCopy {
  title: string;
  category: string;
  tagline: string;
  problem: string;
  contribution: string;
  results: string[];
}

export interface CaseStudyCopy {
  summary: string;
  objectives: string[];
  implementation: string[];
  challenges: { challenge: string; solution: string }[];
  lessons: string[];
}

export interface ExperienceCopy {
  role: string;
  summary: string;
  achievements: string[];
}

export interface Dictionary {
  meta: { title: string; description: string; keywords: string[] };

  nav: {
    home: string;
    about: string;
    experience: string;
    projects: string;
    skills: string;
    contact: string;
    availability: string;
    menu: string;
  };

  hero: {
    greeting: string;
    role: string;
    roleShort: string;
    statement: string;
    description: string;
    specialisms: string[];
    ctaProjects: string;
    ctaContact: string;
  };

  about: {
    label: string;
    title: string;
    body: string[];
    flowLabel: string;
    flow: Record<string, { title: string; note: string }>;
  };

  experience: {
    label: string;
    title: string;
    lead: string;
    achievementsLabel: string;
    benchmark: {
      label: string;
      note: string;
      columns: { system: string; architecture: string; latency: string };
    };
    expand: string;
    collapse: string;
    entries: Record<string, ExperienceCopy>;
  };

  projects: {
    label: string;
    title: string;
    lead: string;
    problemLabel: string;
    contributionLabel: string;
    resultsLabel: string;
    glanceLabel: string;
    viewCase: string;
    entries: Record<ProjectId, ProjectCopy>;
    glanceKeys: Record<string, string>;
    archKeys: Record<string, string>;
  };

  caseStudy: {
    backLabel: string;
    sections: {
      problem: string;
      objectives: string;
      architecture: string;
      technologies: string;
      implementation: string;
      challenges: string;
      results: string;
      lessons: string;
    };
    challengeLabel: string;
    solutionLabel: string;
    entries: Record<ProjectId, CaseStudyCopy>;
  };

  skills: {
    label: string;
    title: string;
    lead: string;
    groups: Record<string, { name: string; note: string }>;
  };

  philosophy: {
    label: string;
    title: string;
    lead: string;
    pillars: Record<PhilosophyPillar, { title: string; body: string }>;
  };

  contact: {
    label: string;
    title: string;
    lead: string;
    emailLabel: string;
  };

  education: {
    label: string;
    entries: Record<string, { degree: string }>;
    languagesLabel: string;
    languages: { en: string; fr: string; ar: string; advanced: string; native: string };
  };

  footer: {
    credit: string;
    rights: string;
  };

  ui: {
    downloadCv: string;
    demoPending: string;
    viewLive: string;
    toggleTheme: string;
    switchLanguage: string;
    stackLabel: string;
  };
}
