/* ---------------------------------------------------------------------------
   Site content — edit THIS file to update the portfolio.
   Nothing on screen is hard-coded; every word lives here.
--------------------------------------------------------------------------- */

export type ProjectStatus = "In development" | "Prototype" | "Completed";

export interface Project {
  id: string;
  index: string;
  title: string;
  kind: string;
  status: ProjectStatus;
  description: string;
  stack: string[];
}

export interface ArchiveEntry {
  title: string;
  description: string;
  tag: string;
}

export type SkillIcon = "gamepad" | "globe" | "clapperboard";

export interface SkillGroup {
  title: string;
  subtitle: string;
  icon: SkillIcon;
  items: string[];
}

export interface Language {
  name: string;
  level: string;
  dots: number;
}

export interface NavLink {
  label: string;
  href: string;
}

export const profile = {
  firstName: "Gustavo",
  lastName: "Zeta",
  email: "contact@gustavozeta.me",
  instagram: {
    handle: "_gustavozeta",
    url: "https://www.instagram.com/_gustavozeta",
  },
  discord: "gustavozeta",
};

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Playground", href: "#playground" },
  { label: "Toolkit", href: "#toolkit" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  eyebrow: "Game · Engine · Web — from Brazil",
  introLead: "I build",
  introEmphasis: ["game engines in C++", "web experiences around them"],
  introTail:
    "— React and TypeScript on the front line, Express.js behind the scenes.",
  chips: ["C++", "React", "TypeScript", "Three.js", "Express.js"],
  primaryCta: { label: "See the work", href: "#work" },
  secondaryCta: { label: "Say hello", href: "#contact" },
};

export const about = {
  quote:
    "Close to the metal with C++, close to the user with React — comfortable in both worlds.",
  paragraphs: [
    "I'm a Brazilian developer who works on both sides of the screen. In one hand I write C++ and build game engines — including Xenonium, my own engine, and At Stake, a horror game being crafted on top of it. In the other, I design and develop for the web with React, TypeScript and Express.js.",
    "The path here wasn't a straight line. I made Minecraft mods, plugins and servers. I wrote Java game prototypes that are now, officially, lost media. And I rebuilt Flappy Bird and Cookie Clicker in raw HTML, CSS and JavaScript just to understand how games really work under the hood.",
    "Outside of code, I'm proficient in video editing and motion graphics — which is probably why timing, rhythm and feel matter so much in everything I ship.",
  ],
  facts: [
    { label: "Based in", value: "Brazil" },
    { label: "Speaks", value: "Portuguese · English · Japanese" },
    { label: "Currently building", value: "Xenonium & At Stake" },
    { label: "Also fluent in", value: "Video editing & motion graphics" },
  ],
};

export const projects: Project[] = [
  {
    id: "xenonium",
    index: "01",
    title: "Xenonium Engine",
    kind: "Game engine — C++",
    status: "In development",
    description:
      "My from-scratch game engine in modern C++. Xenonium is where I push the low-level work: engine architecture, systems that talk to each other cleanly, and the discipline of building the tooling before the content. It's the foundation everything else here runs on.",
    stack: ["C++", "Engine architecture", "Tooling"],
  },
  {
    id: "at-stake",
    index: "02",
    title: "At Stake",
    kind: "Horror game — Xenonium Engine",
    status: "In development",
    description:
      "A horror game built on top of Xenonium — the engine's first real product. This is where theory meets shipping: every engine feature has to survive contact with actual gameplay, pacing and atmosphere.",
    stack: ["C++", "Xenonium", "Game design"],
  },
  {
    id: "voxel-clone",
    index: "03",
    title: "Minecraft Prototype",
    kind: "Voxel game clone — C++",
    status: "Prototype",
    description:
      "A Minecraft clone written in C++ from first principles — voxel worlds, chunked terrain, and the small details like placing and breaking blocks that make a sandbox feel alive.",
    stack: ["C++", "Voxel terrain", "Game loop"],
  },
  {
    id: "flappy-bird",
    index: "04",
    title: "Flappy Bird",
    kind: "Web game — HTML · CSS · JS",
    status: "Completed",
    description:
      "The classic, rebuilt with raw HTML, CSS and JavaScript — no frameworks, no engines, no shortcuts. A study in game loops, collision and juice with the smallest possible toolbox.",
    stack: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: "cookie-clicker",
    index: "05",
    title: "Cookie Clicker",
    kind: "Web game — HTML · CSS · JS",
    status: "Completed",
    description:
      "An idle-game remake in vanilla JavaScript — number goes up, and behind it a small economy of upgrades, multipliers and state that has to stay consistent across a long session.",
    stack: ["HTML", "CSS", "JavaScript"],
  },
];

export const marqueeItems = [
  "Xenonium",
  "At Stake",
  "C++",
  "Voxels",
  "Mods",
  "Plugins",
  "Servers",
  "React",
  "TypeScript",
  "Motion design",
  "Horror",
  "Game feel",
];

export const archive: ArchiveEntry[] = [
  {
    title: "Minecraft mods, plugins & servers",
    description:
      "Where a lot of this started: writing mods and plugins, running servers, and learning how communities form around software.",
    tag: "Origin story",
  },
  {
    title: "Java prototype games — lost media",
    description:
      "A shelf of Java game prototypes from my early days. The files are gone, but the experiments quietly turned into everything I build now.",
    tag: "Lost media",
  },
  {
    title: "Video editing & motion graphics",
    description:
      "A parallel craft: editing, compositing and motion. It trained the eye for rhythm and timing that now shows up in my interfaces and my game feel.",
    tag: "Parallel craft",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Game & Engine",
    subtitle: "C++ first",
    icon: "gamepad",
    items: [
      "C++",
      "Game engine development",
      "Gameplay programming",
      "Voxel & sandbox systems",
      "Rapid prototyping",
    ],
  },
  {
    title: "Web",
    subtitle: "React + TypeScript",
    icon: "globe",
    items: [
      "React",
      "TypeScript",
      "JavaScript (vanilla)",
      "Express.js",
      "Node.js",
      "HTML & CSS",
    ],
  },
  {
    title: "Motion & Media",
    subtitle: "The parallel craft",
    icon: "clapperboard",
    items: ["Video editing", "Motion graphics"],
  },
];

export const languages: Language[] = [
  { name: "Portuguese", level: "Native", dots: 5 },
  { name: "English", level: "Conversational", dots: 3 },
  { name: "Japanese", level: "Learning", dots: 2 },
];

export const contact = {
  eyebrow: "05",
  headingPlain: "Let's make something",
  headingEm: "worth playing.",
  body: "A game, an engine, a website, a wild idea — my inbox is open. I answer in Portuguese, English or a little Japanese.",
};
