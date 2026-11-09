# Gustavo Zeta — Portfolio

Personal portfolio for a game/engine (C++) and web (React + TypeScript) developer.
Glassmorphism over a live Three.js scene, obsidian + bone + signal-red brand.

## Stack

- Vite + React 19 + TypeScript (strict)
- Tailwind CSS v4 (CSS-first config, no `tailwind.config.js`)
- three + @react-three/fiber + @react-three/drei (the 3D layer)
- framer-motion (interface animations)
- lucide-react (icons)

That's it — no state library, no UI kit, no backend.

## Commands

```bash
npm install     # once
npm run dev     # local dev server
npm run build   # type-check + production build into dist/
npm run preview # serve the production build locally
```

## Where to edit what

| I want to change…                  | Go to…                          |
| ---------------------------------- | ------------------------------- |
| Any text, project, skill, link     | `src/data/content.ts`           |
| Colors, fonts, glass, grain        | `src/index.css` (`@theme` block)|
| The 3D shapes                      | `src/components/Scene.tsx`      |
| A section's layout                 | `src/components/<Section>.tsx`  |

## How it's organized

- `src/data/content.ts` — **single source of truth** for all content.
- `src/components/` — one component per section, single responsibility.
- `src/components/ui/` — tiny composable primitives (Reveal, SectionHeading, Chip, Marquee).
- `src/components/Scene.tsx` — the only file that touches three.js.
- `src/lib/motion.ts` — shared easing curve.
