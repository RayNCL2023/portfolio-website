// ─────────────────────────────────────────────────────────────
// EDIT ME: this file is the single place you update with your
// real details. Nothing else in the codebase needs to change.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Debanjan Ray",
  role: "MSc Advanced Computer Science @ University of Manchester",
  status: "~/portfolio — building in AI, summer 2026",
  tagline:
    "I build small, working things in machine learning - then write clearly about how they work.",
  bio: `Recent First Class Honours graduate in Computer Science from Newcastle University, now starting an MSc in Advanced Computer Science at Manchester. I care about the gap between "a model that works in a notebook" and "a system you can actually ship" - this summer I'm closing that gap by building in public, one project at a time.`,
  location: "Manchester, UK",
  email: "debanjanr2019@gmail.com",
  github: "https://github.com/RayNCL2023",
  linkedin: "https://www.linkedin.com/in/debanjan-ray-b4785a335",
  resumeUrl: "/resume.pdf",
  // Get a free access key at https://web3forms.com (no backend needed)
  web3formsAccessKey: "74086f76-a50d-440c-a4a1-14419ed0737f",
};

export const skills = [
  {
    category: "Languages",
    items: ["Python", "TypeScript", "C++", "SQL"],
  },
  {
    category: "ML / AI",
    items: ["PyTorch", "scikit-learn", "Hugging Face", "pandas"],
  },
  {
    category: "Tools",
    items: ["Git", "Docker", "Linux", "Vercel"],
  },
  {
    category: "Currently exploring",
    items: ["LLM fine-tuning", "RAG pipelines", "MLOps"],
  },
];

export type ProjectStatus = "shipped" | "building" | "planned";

export type Project = {
  title: string;
  description: string;
  tags: string[];
  status: ProjectStatus;
  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    title: "Project One",
    description:
      "A one-line, plain-English summary of what this project does and why it's interesting — written for a recruiter skimming, not a professor grading.",
    tags: ["Python", "PyTorch"],
    status: "shipped",
    github: "https://github.com/your-username/project-one",
    demo: "https://project-one.example.com",
  },
  {
    title: "Project Two",
    description:
      "Same rule: what it does, what problem it solves, in one sentence a non-specialist friend would understand.",
    tags: ["TypeScript", "Next.js"],
    status: "building",
    github: "https://github.com/your-username/project-two",
  },
  {
    title: "Project Three",
    description:
      "Placeholder for what you're planning to build next — swap this out once it exists, or remove the card entirely.",
    tags: ["Idea stage"],
    status: "planned",
  },
];
