// ─────────────────────────────────────────────────────────────
// EDIT ME: this file is the single place you update with your
// real details. Nothing else in the codebase needs to change.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Debanjan Ray",
  role: "MSc Advanced Computer Science @ University of Manchester",
  status: "~/portfolio — building in AI, summer 2026",
  tagline:
    "Building AI projects, running experiments, and figuring out what actually works.",
  bio: "I'm a recent First-Class Computer Science graduate from Newcastle University, starting an MSc in Advanced Computer Science at the University of Manchester. I'm interested in building practical AI applications, exploring new ideas, and learning by creating projects from scratch. This site is where I document that journey.",
  location: "Manchester, UK",
  email: "debanjanr2019@gmail.com",
  github: "https://github.com/RayNCL2023",
  linkedin: "https://www.linkedin.com/in/debanjan-ray-b4785a335",
  cvUrl: "/Debanjan-Ray-CV.pdf",
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

// Screenshots live in public/projects/<slug>/. More than one frame plays
// as a loop; a single frame is shown as a still.
export type ProjectMedia = {
  frames: string[];
  alt: string;
  // Milliseconds each frame stays on screen when looping.
  interval?: number;
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  status: ProjectStatus;
  github?: string;
  demo?: string;
  media?: ProjectMedia;
};

const frames = (slug: string, count: number) =>
  Array.from({ length: count }, (_, i) => `/projects/${slug}/${i + 1}.webp`);

export const projects: Project[] = [
  {
    title: "Bedrock: ICU Early Warning",
    description:
      "Warns ICU nurses hours before a patient deteriorates, scoring five risks every hour and beating the NHS's NEWS2 score at the same alarm rate. Runs entirely on IBM LinuxONE, so patient data never leaves the machine. Built for the IBM Z Datathon 2026.",
    tags: ["TypeScript", "Python", "Snap ML", "IBM Granite"],
    status: "shipped",
    github:
      "https://github.com/RayNCL2023/Manchester-Fried-Chicken_IBM-Z-Datathon-2026-Project",
    demo: "https://ibmz2026.nitlix.com",
    media: {
      frames: frames("bedrock", 8),
      alt: "Bedrock ward board replaying ICU beds hour by hour, with live alarms",
      interval: 900,
    },
  },
  {
    title: "Agent Flight Recorder",
    description:
      "Time-travel debugging for AI agents: replay, inspect, fork and compare every decision an LLM agent makes, from recorded traces that replay exactly the same way every time.",
    tags: ["Python", "FastAPI", "TypeScript", "LLM observability"],
    status: "building",
    github: "https://github.com/RayNCL2023/AI-Agent-Flight-Recorder",
    media: {
      frames: frames("flight-recorder", 1),
      alt: "Agent Flight Recorder timeline, step inspector and divergence panel for a recorded run",
    },
  },
  {
    title: "Synthetic Usability Lab",
    description:
      "Three AI personas, including a screen-reader user, browse a live site in parallel and return a ranked list of usability issues, each tied to the exact screenshot and reaction that caused it.",
    tags: ["TypeScript", "Playwright", "Gemini", "Postgres"],
    status: "shipped",
    github: "https://github.com/RayNCL2023/Synthetic_Usability_Lab",
  },
  {
    title: "Author-Context Idea Generation",
    description:
      "My First-Class dissertation: does grounding an LLM in a researcher's published papers, or pairing two researchers from distant fields, make it come up with better and more novel research ideas?",
    tags: ["Python", "Gemini", "arXiv", "Statistics"],
    status: "shipped",
    github:
      "https://github.com/RayNCL2023/Enhancing_Scientific_Idea_Generation_Dissertation",
  },
  {
    title: "dissPICable",
    description:
      "Snap any object with your phone and it wakes up as a cheeky Mancunian character that rap-battles you, roasts your comebacks and remembers you next time. Built in a day at Hacktoberfest Hack Day Manchester.",
    tags: ["JavaScript", "Gemma 4", "ElevenLabs", "Tone.js"],
    status: "shipped",
    github: "https://github.com/RayNCL2023/Object-Karaoke",
    media: {
      frames: frames("disspicable", 4),
      alt: "dissPICable stage: a coffee mug character rap-battling the player",
      interval: 1800,
    },
  },
  {
    title: "Rhythm - AI Beat Studio",
    description:
      "Tap out a rhythm on your keyboard and a local AI producer turns it into a full track with drums, bass, synths, a title and vocal ideas. No music knowledge needed. Built in a day at the Bradford Agentic AI Hackathon.",
    tags: ["JavaScript", "Gemma 4", "Ollama", "Tone.js"],
    status: "shipped",
    github: "https://github.com/RayNCL2023/Rhythm-Beat-Studio-Hackathon",
    media: {
      frames: frames("rhythm", 4),
      alt: "Rhythm studio playing an AI-produced track with drums, bass and pad layers",
      interval: 500,
    },
  },
  {
    title: "Terminal Planet Collision Sim",
    description:
      "A team project to build a real-time 3D physics sim drawn entirely in ASCII in the terminal, where planets orbit, collide, merge and shatter.",
    tags: ["Python", "Physics", "ASCII rendering"],
    status: "planned",
    github: "https://github.com/RayNCL2023/Terminal-Planet-Collision-Sim",
  },
];
