import type { ReactNode } from "react";

/** Small frosted pill used for technologies and tags. */
export function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-xs font-medium tracking-wide text-mist-300">
      {children}
    </span>
  );
}
