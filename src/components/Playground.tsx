import { archive, marqueeItems } from "../data/content";
import { Marquee } from "./ui/Marquee";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";

/** The casual shelf: a marquee of obsessions, then the "lost media" stories. */
export default function Playground() {
  return (
    <section id="playground" className="relative scroll-mt-24 py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading index="03" eyebrow="Playground" plain="Side quests &" em="lost media" />
      </div>

      <Reveal className="mt-14 border-y border-white/10 bg-white/[0.02] py-6">
        <Marquee items={marqueeItems} />
      </Reveal>

      <div className="mx-auto mt-14 max-w-6xl space-y-5 px-6">
        {archive.map((entry) => (
          <Reveal key={entry.title}>
            <article className="glass flex flex-col gap-4 rounded-3xl p-7 md:flex-row md:items-center md:justify-between md:p-9">
              <div className="max-w-2xl">
                <h3 className="text-xl font-semibold text-bone-100 md:text-2xl">{entry.title}</h3>
                <p className="mt-2 leading-relaxed text-mist-400">{entry.description}</p>
              </div>
              <span className="shrink-0 self-start rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-mist-300 md:self-center">
                {entry.tag}
              </span>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
