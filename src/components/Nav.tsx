import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navLinks } from "../data/content";
import { EASE } from "../lib/motion";

/** Floating glass pill navigation with a full-screen glass menu on mobile. */
export default function Nav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <>
      <header className="pointer-events-none fixed inset-x-0 top-4 z-50 flex justify-center px-4">
        <nav className="glass pointer-events-auto flex items-center gap-1 rounded-full py-2 pl-5 pr-2">
          <a href="#top" onClick={close} className="mr-4 text-lg font-bold tracking-tight text-bone-100">
            gz<span className="text-signal-500">.</span>
          </a>

          <ul className="hidden items-center md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-full px-3.5 py-1.5 text-sm text-mist-300 transition-colors hover:text-bone-100"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="ml-2 grid size-9 cursor-pointer place-items-center rounded-full text-bone-100 transition-colors hover:bg-white/10 md:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="glass-deep fixed inset-0 z-40 flex flex-col items-center justify-center md:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={close}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * i, duration: 0.4, ease: EASE }}
                className="py-3 font-serif text-4xl font-light italic text-bone-100"
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
