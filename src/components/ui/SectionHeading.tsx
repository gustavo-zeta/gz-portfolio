import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  index: string;
  eyebrow: string;
  plain: string;
  em: string;
  align?: "left" | "center";
}

/** Numbered editorial heading: `02 —— Selected work` + a big mixed-type title. */
export function SectionHeading({ index, eyebrow, plain, em, align = "left" }: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <Reveal className={centered ? "text-center" : undefined}>
      <p className={`flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-mist-400 ${centered ? "justify-center" : ""}`}>
        <span className="font-semibold text-signal-500">{index}</span>
        <span className="h-px w-10 bg-white/15" />
        {eyebrow}
      </p>
      <h2 className="mt-6 text-4xl font-semibold tracking-tight text-bone-100 md:text-6xl">
        {plain}{" "}
        <em className="font-serif font-light italic text-signal-400">{em}</em>
      </h2>
    </Reveal>
  );
}
