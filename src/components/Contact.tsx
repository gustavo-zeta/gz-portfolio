import { ArrowUpRight, Check, Copy, Mail, MessageCircle } from "lucide-react";
import { useState, type ComponentType, type ReactNode } from "react";
import { contact, profile } from "../data/content";
import { Reveal } from "./ui/Reveal";

/* lucide-react no longer ships brand icons, so the Instagram glyph lives here. */
function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

/** Clipboard write with a legacy fallback; shows a brief "Copied" state. */
function useCopy(value: string) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      const area = document.createElement("textarea");
      area.value = value;
      document.body.appendChild(area);
      area.select();
      document.execCommand("copy");
      area.remove();
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return { copied, copy };
}

interface MethodCardProps {
  icon: ComponentType<{ className?: string }>;
  label: string;
  value: string;
}

function CardShell({ icon, label, value, children }: MethodCardProps & { children: ReactNode }) {
  const Icon = icon;
  return (
    <div className="glass flex flex-col gap-4 rounded-3xl p-6">
      <div className="flex items-center justify-between">
        <span className="grid size-10 place-items-center rounded-xl border border-signal-500/20 bg-signal-500/10 text-signal-400">
          <Icon className="size-4.5" />
        </span>
        <span className="text-xs uppercase tracking-[0.25em] text-mist-500">{label}</span>
      </div>
      <p className="truncate font-medium text-bone-100">{value}</p>
      {children}
    </div>
  );
}

const pill =
  "inline-flex flex-1 items-center justify-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold transition-colors";

export default function Contact() {
  const emailCopy = useCopy(profile.email);
  const discordCopy = useCopy(profile.discord);

  return (
    <section id="contact" className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-28 md:py-36">
      <Reveal className="text-center">
        <p className="flex items-center justify-center gap-3 text-xs uppercase tracking-[0.3em] text-mist-400">
          <span className="font-semibold text-signal-500">{contact.eyebrow}</span>
          <span className="h-px w-10 bg-white/15" />
          Contact
        </p>
        <h2 className="mx-auto mt-6 max-w-3xl text-5xl font-semibold tracking-tight text-bone-100 md:text-7xl">
          {contact.headingPlain}{" "}
          <em className="font-serif font-light italic text-signal-400">{contact.headingEm}</em>
        </h2>
        <p className="mx-auto mt-6 max-w-xl leading-relaxed text-mist-300">{contact.body}</p>
      </Reveal>

      <Reveal delay={0.15} className="mx-auto mt-14 max-w-4xl">
        <div className="grid gap-4 sm:grid-cols-3">
          <CardShell icon={Mail} label="Email" value={profile.email}>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={emailCopy.copy}
                className={`${pill} cursor-pointer border border-white/10 bg-white/5 text-bone-100 hover:bg-white/10`}
              >
                {emailCopy.copied ? <Check className="size-3.5 text-signal-400" /> : <Copy className="size-3.5" />}
                {emailCopy.copied ? "Copied" : "Copy"}
              </button>
              <a href={`mailto:${profile.email}`} className={`${pill} bg-signal-500 text-obsidian-950 hover:bg-signal-400`}>
                Write me
              </a>
            </div>
          </CardShell>

          <CardShell icon={InstagramIcon} label="Instagram" value={`@${profile.instagram.handle}`}>
            <a
              href={profile.instagram.url}
              target="_blank"
              rel="noreferrer"
              className={`${pill} border border-white/10 bg-white/5 text-bone-100 hover:bg-white/10`}
            >
              Follow
              <ArrowUpRight className="size-3.5" />
            </a>
          </CardShell>

          <CardShell icon={MessageCircle} label="Discord" value={profile.discord}>
            <button
              type="button"
              onClick={discordCopy.copy}
              className={`${pill} cursor-pointer border border-white/10 bg-white/5 text-bone-100 hover:bg-white/10`}
            >
              {discordCopy.copied ? <Check className="size-3.5 text-signal-400" /> : <Copy className="size-3.5" />}
              {discordCopy.copied ? "Copied" : "Copy username"}
            </button>
          </CardShell>
        </div>
      </Reveal>
    </section>
  );
}
