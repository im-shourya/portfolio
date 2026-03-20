const items = [
  "Shourya Parashar", "CSE @ SRMIST", "Full Stack Dev",
  "Founder · Team Hypothesis", "Open to Opportunities", "MERN Stack", "Open Source Contributor",
];

const TopBar = () => {
  const doubled = [...items, ...items];
  return (
    <div
      className="fixed top-0 left-0 right-0 z-[600] h-7 overflow-hidden flex items-center"
      style={{ background: "hsl(var(--lime))" }}
    >
      <div
        className="flex whitespace-nowrap font-mono text-[9.5px] font-medium tracking-[0.14em] uppercase"
        style={{ color: "hsl(var(--ink))", animation: "tbScroll 30s linear infinite" }}
      >
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center">
            <span className="px-6">{item}</span>
            <span className="opacity-30 text-[7px]">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default TopBar;
