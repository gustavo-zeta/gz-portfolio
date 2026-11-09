import type { Project, ProjectStatus } from "../data/content";
import { projects } from "../data/content";
import { Chip } from "./ui/Chip";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";

const statusStyles: Record<ProjectStatus, string> = {
  "In development": "border-signal-500/25 bg-signal-500/10 text-signal-400",
  Prototype: "border-white/10 bg-white/5 text-mist-300",
  Completed: "border-white/10 bg-white/5 text-bone-300",
};

function StatusBadge({ status }: { status: ProjectStatus }) {
  return (
    <span className={`inline-flex shrink-0 items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium ${statusStyles[status]}`}>
      <span className={`size-1.5 rounded-full bg-current ${status === "In development" ? "animate-pulse" : ""}`} />
      {status}
    </span>
  );
}

/** Sticky card — each project pins a little lower than the previous one,
    so the deck stacks up as you scroll instead of forming a grid. */
function ProjectCard({ project, position }: { project: Project; position: number }) {
  return (
    <Reveal>
      <article
        style={{ top: `${88 + position * 24}px` }}
        className="glass sticky rounded-3xl p-7 transition-colors duration-300 hover:border-signal-500/30 md:p-12"
      >
        <div className="flex items-center justify-between gap-4">
          <span className="font-serif text-xl font-light italic text-mist-500">{project.index}</span>
          <StatusBadge status={project.status} />
        </div>

        <h3 className="mt-6 text-3xl font-semibold tracking-tight text-bone-100 md:text-5xl">
          {project.title}
        </h3>
        <p className="mt-2 font-serif text-lg font-light italic text-signal-400">{project.kind}</p>

        <p className="mt-5 max-w-2xl leading-relaxed text-mist-300">{project.description}</p>

        <div className="mt-7 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <Chip key={tech}>{tech}</Chip>
          ))}
        </div>
      </article>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <section id="work" className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-28">
      <SectionHeading index="02" eyebrow="Selected work" plain="Selected" em="work" />

      <div className="mt-16 space-y-8">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} position={i} />
        ))}
      </div>
    </section>
  );
}
