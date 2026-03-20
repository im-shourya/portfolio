import { useEffect, useState } from "react";

const Loader = () => {
  const [done, setDone] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setDone(true), 2000);
    const t2 = setTimeout(() => setHidden(true), 2700);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  if (hidden) return null;

  const name = "SHOURYA";

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center flex-col gap-0"
      style={{
        background: "hsl(var(--ink))",
        animation: done ? "loaderOut .7s var(--ease-out) forwards" : undefined,
      }}
    >
      <div className="overflow-hidden pb-1.5">
        <div className="font-display text-[clamp(70px,14vw,140px)] tracking-[0.04em] text-paper flex">
          {name.split("").map((c, i) => (
            <span
              key={i}
              className="inline-block"
              style={{
                transform: "translateY(105%)",
                animation: `slideUp .65s var(--ease-out) forwards`,
                animationDelay: `${0.04 + i * 0.06}s`,
              }}
            >
              {c}
            </span>
          ))}
        </div>
      </div>
      <div
        className="font-mono text-[10px] tracking-[0.22em] uppercase mt-4.5 opacity-0"
        style={{ color: "rgba(242,239,230,.35)", animation: "fadeIn .5s ease .6s forwards" }}
      >
        Full Stack Developer · Founder · Builder
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-0.5" style={{ background: "rgba(242,239,230,.05)" }}>
        <div
          className="h-0.5 w-0"
          style={{
            background: "hsl(var(--lime))",
            animation: "ldBar 1.3s var(--ease-out) .3s forwards",
            boxShadow: "0 0 12px hsl(var(--lime))",
          }}
        />
      </div>
    </div>
  );
};

export default Loader;
