interface SectionHeaderProps {
  num: string;
  title: string;
  aside: string;
}

const SectionHeader = ({ num, title, aside }: SectionHeaderProps) => (
  <div className="mb-10 md:mb-16">
    <span
      className="r font-display text-[11px] tracking-[0.28em] block mb-3 opacity-70"
      style={{ color: "hsl(var(--lime))" }}
    >
      {num}
    </span>
    <div
      className="flex items-baseline justify-between flex-wrap gap-1 pb-5"
      style={{ borderBottom: "2px solid rgba(242,239,230,.08)" }}
    >
      <h2 className="r font-display tracking-[0.03em]" style={{ fontSize: "clamp(36px,7vw,84px)" }}>
        {title}
      </h2>
      <span className="font-mono text-[9.5px] tracking-[0.18em] uppercase" style={{ color: "rgba(242,239,230,.4)" }}>
        {aside}
      </span>
    </div>
  </div>
);

export default SectionHeader;
