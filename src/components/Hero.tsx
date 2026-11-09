import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { hero, profile } from "../data/content";
import { EASE } from "../lib/motion";
import { Chip } from "./ui/Chip";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};

/** Full-viewport opening: the brand lockup (sharp sans + soft serif italic). */
export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-svh flex-col justify-center px-6">
      <motion.div variants={container} initial="hidden" animate="show" className="mx-auto w-full max-w-6xl">
        <motion.p variants={item} className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-mist-400">
          <span className="size-1.5 rounded-full bg-signal-500" />
          {hero.eyebrow}
        </motion.p>

        <motion.h1 variants={item} className="mt-8 leading-[0.95] tracking-tight">
          <span className="block text-6xl font-bold text-bone-100 sm:text-7xl md:text-8xl">
            {profile.firstName}
          </span>
          <span className="block font-serif text-6xl font-light italic text-bone-100 sm:text-7xl md:text-8xl">
            {profile.lastName.toLowerCase()}
            <span className="not-italic text-signal-500">.</span>
          </span>
        </motion.h1>

        <motion.p variants={item} className="mt-8 max-w-xl text-lg leading-relaxed text-mist-300">
          {hero.introLead} <strong className="font-semibold text-bone-100">{hero.introEmphasis[0]}</strong> and the{" "}
          <strong className="font-semibold text-bone-100">{hero.introEmphasis[1]}</strong> {hero.introTail}
        </motion.p>

        <motion.div variants={item} className="mt-8 flex flex-wrap gap-2">
          {hero.chips.map((chip) => (
            <Chip key={chip}>{chip}</Chip>
          ))}
        </motion.div>

        <motion.div variants={item} className="mt-12 flex flex-wrap items-center gap-4">
          <a
            href={hero.primaryCta.href}
            className="inline-flex items-center gap-2 rounded-full bg-signal-500 px-6 py-3 text-sm font-semibold text-obsidian-950 transition-colors hover:bg-signal-400"
          >
            {hero.primaryCta.label}
            <ArrowDown className="size-4" />
          </a>
          <a
            href={hero.secondaryCta.href}
            className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-bone-100 transition-colors hover:bg-white/10"
          >
            {hero.secondaryCta.label}
          </a>
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        aria-label="Scroll to the about section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-mist-500 transition-colors hover:text-mist-300 md:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">scroll</span>
        <span className="h-8 w-px animate-pulse bg-gradient-to-b from-mist-500 to-transparent" />
      </motion.a>
    </section>
  );
}
