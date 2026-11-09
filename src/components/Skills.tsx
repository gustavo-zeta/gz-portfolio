import { Clapperboard, Gamepad2, Globe, Languages, Plus, type LucideIcon } from "lucide-react";
import type { SkillIcon } from "../data/content";
import { languages, skillGroups } from "../data/content";
import { Chip } from "./ui/Chip";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";

const icons: Record<SkillIcon, LucideIcon> = {
  gamepad: Gamepad2,
  globe: Globe,
  clapperboard: Clapperboard,
};

function Dots({ filled }: { filled: number }) {
  return (
    <span className="flex gap-1.5" aria-hidden="true">
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={`size-2 rounded-full ${i < filled ? "bg-signal-500" : "bg-white/15"}`} />
      ))}
    </span>
  );
}

export default function Skills() {
  const [game, web, motionAndMedia] = skillGroups;

  return (
    <section id="toolkit" className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-28">
      <SectionHeading index="04" eyebrow="Toolkit" plain="The" em="toolkit" />

      <div className="mt-14 grid gap-5 md:grid-cols-2">
        {[game, web].map((group, i) => {
          const Icon = icons[group.icon];
          return (
            <Reveal key={group.title} delay={0.08 * i}>
              <div className="glass h-full rounded-3xl p-8">
                <div className="flex items-center gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl border border-signal-500/20 bg-signal-500/10 text-signal-400">
                    <Icon className="size-5" />
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold text-bone-100">{group.title}</h3>
                    <p className="text-sm text-mist-400">{group.subtitle}</p>
                  </div>
                </div>
                <ul className="mt-7 space-y-3.5">
                  {group.items.map((skill) => (
                    <li key={skill} className="flex items-start gap-3 text-mist-300">
                      <Plus className="mt-1 size-3.5 shrink-0 text-signal-500" strokeWidth={3} />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}

        <Reveal delay={0.16} className="md:col-span-2">
          <div className="glass rounded-3xl p-8">
            <div className="flex items-center gap-4">
              <span className="grid size-11 shrink-0 place-items-center rounded-xl border border-signal-500/20 bg-signal-500/10 text-signal-400">
                <Clapperboard className="size-5" />
              </span>
              <div>
                <h3 className="text-xl font-semibold text-bone-100">{motionAndMedia.title}</h3>
                <p className="text-sm text-mist-400">{motionAndMedia.subtitle}</p>
              </div>
            </div>
            <div className="mt-7 flex flex-wrap gap-2">
              {motionAndMedia.items.map((item) => (
                <Chip key={item}>{item}</Chip>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2} className="md:col-span-2">
          <div className="glass rounded-3xl p-8">
            <div className="flex items-center gap-3">
              <Languages className="size-5 text-signal-400" />
              <h3 className="text-xl font-semibold text-bone-100">Languages I speak</h3>
            </div>
            <div className="mt-7 grid gap-6 sm:grid-cols-3">
              {languages.map((language) => (
                <div key={language.name}>
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-medium text-bone-100">{language.name}</span>
                    <Dots filled={language.dots} />
                  </div>
                  <p className="mt-1.5 text-sm text-mist-400">{language.level}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
