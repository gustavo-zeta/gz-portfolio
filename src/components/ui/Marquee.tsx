interface MarqueeProps {
  items: string[];
  className?: string;
}

/** Infinite horizontal ticker. Content is duplicated once and shifted -50%,
    so the loop is perfectly seamless. Pauses on hover. */
export function Marquee({ items, className = "" }: MarqueeProps) {
  const row = (hidden: boolean) => (
    <div aria-hidden={hidden} className="flex shrink-0 items-center gap-8 pr-8">
      {items.map((item) => (
        <span key={item} className="flex items-center gap-8">
          <span className="whitespace-nowrap font-serif text-2xl font-light italic text-mist-300 md:text-3xl">
            {item}
          </span>
          <span className="text-sm text-signal-500">✦</span>
        </span>
      ))}
    </div>
  );

  return (
    <div className={`group flex overflow-hidden ${className}`}>
      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
