import { about } from "../data/content";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";

/** Editorial split: pull-quote + story on the left, quick facts on the right. */
export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-28">
      <SectionHeading index="01" eyebrow="About" plain="Two sides of" em="the same screen" />

      <div className="mt-14 grid gap-12 lg:grid-cols-[1.25fr_1fr] lg:gap-16">
        <Reveal delay={0.1}>
          <blockquote className="border-l-2 border-signal-500 pl-6 font-serif text-2xl font-light italic leading-snug text-bone-100 md:text-[1.7rem]">
            {about.quote}
          </blockquote>
          <div className="mt-8 space-y-5 leading-relaxed text-mist-300">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <dl className="glass grid gap-6 rounded-3xl p-8">
            {about.facts.map((fact) => (
              <div key={fact.label}>
                <dt className="text-xs uppercase tracking-[0.25em] text-mist-500">{fact.label}</dt>
                <dd className="mt-1.5 font-medium text-bone-100">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
