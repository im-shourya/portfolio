interface TickerProps {
  words: string[];
  reverse?: boolean;
}

const Ticker = ({ words, reverse = false }: TickerProps) => {
  const tripled = [...words, ...words, ...words];

  return (
    <div
      className="overflow-hidden py-3"
      style={{
        background: "hsl(var(--ink2))",
        borderTop: "1px solid rgba(242,239,230,.05)",
        borderBottom: "1px solid rgba(242,239,230,.05)",
        maskImage: "linear-gradient(90deg, transparent, black 6%, black 94%, transparent)",
      }}
    >
      <div
        className="flex whitespace-nowrap"
        style={{
          animation: `tickerAnim 28s linear infinite`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {tripled.map((w, i) => (
          <span key={i} className="flex items-center">
            <span
              className="font-condensed text-[12.5px] font-bold tracking-[0.12em] uppercase px-5.5 hover:text-lime"
              style={{ color: "rgba(242,239,230,.35)", transition: "color .2s" }}
            >
              {w}
            </span>
            <span className="text-[10px] px-1.5" style={{ color: "hsl(var(--lime))", opacity: 0.35 }}>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Ticker;
