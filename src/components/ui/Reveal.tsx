import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { EASE } from "../../lib/motion";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}

/** Fade-and-rise once the element scrolls into view. Respects reduced motion. */
export function Reveal({ children, delay = 0, y = 28, className }: RevealProps) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}
