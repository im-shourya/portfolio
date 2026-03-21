import { useEffect, useState } from "react";

const sections = ["hero", "about", "projects", "experience","skill", "contact"];

const NavDots = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    // Observe all sections — works correctly now that all sections are on same page
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const i = sections.indexOf(e.target.id);
            if (i >= 0) setActive(i);
          }
        });
      },
      { threshold: 0.35 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });

    return () => obs.disconnect();
  }, []);

  return (
    <div className="fixed right-5.5 top-1/2 -translate-y-1/2 flex-col gap-3.5 z-[400] hidden md:flex">
      {sections.map((s, i) => (
        <div
          key={s}
          className="nd relative"
          data-t={s}
          style={{ cursor: "none" }}
          onClick={() => document.getElementById(s)?.scrollIntoView({ behavior: "smooth" })}
        >
          {/* Tooltip label */}
          <span
            className="absolute right-3.5 top-1/2 -translate-y-1/2 font-mono text-[8px] tracking-[0.14em] uppercase whitespace-nowrap pointer-events-none"
            style={{
              color: "rgba(242,239,230,.5)",
              opacity: 0,
              transition: "opacity .2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
          >
            {s}
          </span>
          {/* Dot */}
          <div
            style={{
              width: active === i ? "7px" : "4px",
              height: active === i ? "7px" : "4px",
              borderRadius: "50%",
              background: active === i ? "hsl(var(--lime))" : "rgba(242,239,230,.25)",
              boxShadow: active === i ? "0 0 8px rgba(200,240,32,.4)" : "none",
              transition: "all .3s var(--ease-out)",
            }}
            onMouseEnter={(e) => {
              const label = e.currentTarget.previousElementSibling as HTMLElement;
              if (label) label.style.opacity = "1";
            }}
            onMouseLeave={(e) => {
              const label = e.currentTarget.previousElementSibling as HTMLElement;
              if (label) label.style.opacity = "0";
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default NavDots;
