import { useRef, useEffect } from "react";
import SectionHeader from "./SectionHeader";

const projects = [
  {
    title: "NEXUS",
    desc: "India's AI-powered sports talent discovery platform. ML-driven athlete profiling, real-time analytics, and scalable backend.",
    tags: ["Featured", "React", "Node.js", "Supabase", "Python", "ML"],
    href: "https://github.com/im-shourya/NEXUS",
    bgClass: "bg-gradient-to-br from-[#0d1f06] via-[#0f1a08] to-[#080e10]",
    num: "01",
    svg: (
      <svg width="100%" height="100%" viewBox="0 0 330 130" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="gp1" width="30" height="30" patternUnits="userSpaceOnUse">
            <path d="M30 0L0 0 0 30" fill="none" stroke="rgba(200,240,32,.08)" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#gp1)" />
        <circle cx="165" cy="65" r="40" fill="none" stroke="rgba(200,240,32,.12)" strokeWidth="1" />
        <circle cx="165" cy="65" r="25" fill="none" stroke="rgba(200,240,32,.08)" strokeWidth="1" />
        <line x1="80" y1="65" x2="250" y2="65" stroke="rgba(200,240,32,.06)" strokeWidth="0.5" />
        <line x1="165" y1="10" x2="165" y2="120" stroke="rgba(200,240,32,.06)" strokeWidth="0.5" />
      </svg>
    ),
  },
  {
    title: "KanbanFlow",
    desc: "Single-page Kanban task manager. Drag, drop, manage. Built with React + TypeScript, zero dependencies.",
    tags: ["React", "TypeScript", "Vite"],
    href: "https://github.com/im-shourya/KanbanFlow",
    bgClass: "bg-gradient-to-br from-[#0a0d18] to-[#0d1020]",
    num: "02",
    svg: (
      // Fixed: added dashed 4th column matching v4 HTML
      <svg width="100%" height="100%" viewBox="0 0 330 130" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="20" width="70" height="90" rx="4" fill="rgba(100,120,240,.08)" stroke="rgba(100,120,240,.15)" strokeWidth="1" />
        <rect x="100" y="20" width="70" height="90" rx="4" fill="rgba(100,120,240,.08)" stroke="rgba(100,120,240,.15)" strokeWidth="1" />
        <rect x="180" y="20" width="70" height="90" rx="4" fill="rgba(100,120,240,.08)" stroke="rgba(100,120,240,.15)" strokeWidth="1" />
        <rect x="28" y="30" width="54" height="16" rx="2" fill="rgba(100,120,240,.2)" />
        <rect x="28" y="52" width="54" height="16" rx="2" fill="rgba(100,120,240,.15)" />
        <rect x="108" y="30" width="54" height="16" rx="2" fill="rgba(100,120,240,.2)" />
        <rect x="188" y="30" width="54" height="16" rx="2" fill="rgba(100,120,240,.12)" />
        <rect x="260" y="20" width="50" height="90" rx="4" fill="rgba(100,120,240,.04)" stroke="rgba(100,120,240,.08)" strokeWidth="1" strokeDasharray="4 3" />
      </svg>
    ),
  },
  {
    title: "Task API",
    desc: "Production-ready RESTful task management API. Full CRUD, auth, and MongoDB. Clean architecture, built to scale.",
    tags: ["Node.js", "Express", "MongoDB"],
    href: "https://github.com/im-shourya/Task-Management-CRUD-API-",
    bgClass: "bg-gradient-to-br from-[#100810] to-[#1a0a14]",
    num: "03",
    svg: (
      // Fixed: added horizontal row separator lines matching v4 HTML
      <svg width="100%" height="100%" viewBox="0 0 330 130" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        <text x="20" y="40" fontFamily="monospace" fontSize="11" fill="rgba(220,100,180,.3)">GET</text>
        <text x="55" y="40" fontFamily="monospace" fontSize="11" fill="rgba(242,239,230,.15)">/api/tasks</text>
        <text x="20" y="60" fontFamily="monospace" fontSize="11" fill="rgba(100,200,100,.3)">POST</text>
        <text x="62" y="60" fontFamily="monospace" fontSize="11" fill="rgba(242,239,230,.15)">/api/tasks/:id</text>
        <text x="20" y="80" fontFamily="monospace" fontSize="11" fill="rgba(240,180,60,.3)">PUT</text>
        <text x="52" y="80" fontFamily="monospace" fontSize="11" fill="rgba(242,239,230,.15)">/api/auth/login</text>
        <text x="20" y="100" fontFamily="monospace" fontSize="11" fill="rgba(240,80,60,.3)">DEL</text>
        <text x="52" y="100" fontFamily="monospace" fontSize="11" fill="rgba(242,239,230,.15)">/api/tasks/:id</text>
        <line x1="0" y1="47" x2="330" y2="47" stroke="rgba(242,239,230,.04)" strokeWidth="1" />
        <line x1="0" y1="67" x2="330" y2="67" stroke="rgba(242,239,230,.04)" strokeWidth="1" />
        <line x1="0" y1="87" x2="330" y2="87" stroke="rgba(242,239,230,.04)" strokeWidth="1" />
      </svg>
    ),
  },
  {
    title: "Portfolio v1",
    desc: "Where it started. Pure HTML, CSS, and JavaScript — the first thing I put on the internet.",
    tags: ["HTML", "CSS", "JS"],
    href: "https://github.com/im-shourya/porfoli",
    bgClass: "bg-gradient-to-br from-[#100c06] to-[#0e0c04]",
    num: "04",
    svg: (
      <svg width="100%" height="100%" viewBox="0 0 330 130" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="hp4" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="10" r="1" fill="rgba(200,160,60,.15)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hp4)" />
        <text x="165" y="78" fontFamily="'Bebas Neue', sans-serif" fontSize="42" fill="rgba(200,160,60,.15)" textAnchor="middle">V1.0</text>
        <text x="165" y="100" fontFamily="monospace" fontSize="9" fill="rgba(200,160,60,.2)" textAnchor="middle">WHERE IT STARTED</text>
      </svg>
    ),
  },
];

const Projects = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    let isDown = false, startX = 0, scrollLeft = 0;

    const down = (e: MouseEvent) => { isDown = true; startX = e.pageX - el.offsetLeft; scrollLeft = el.scrollLeft; el.style.userSelect = "none"; };
    const leave = () => { isDown = false; el.style.userSelect = ""; };
    const up = () => { isDown = false; el.style.userSelect = ""; };
    const move = (e: MouseEvent) => { if (!isDown) return; e.preventDefault(); el.scrollLeft = scrollLeft - (e.pageX - el.offsetLeft - startX) * 1.4; };

    el.addEventListener("mousedown", down);
    el.addEventListener("mouseleave", leave);
    el.addEventListener("mouseup", up);
    el.addEventListener("mousemove", move);
    return () => { el.removeEventListener("mousedown", down); el.removeEventListener("mouseleave", leave); el.removeEventListener("mouseup", up); el.removeEventListener("mousemove", move); };
  }, []);

  return (
    <section id="projects" className="py-[15px]">
      <div className="px-5 md:px-10">
        <SectionHeader num="02 — Projects" title="Selected Work" aside="4 Projects" />
      </div>
      <p className="r rd1 font-mono text-[9.5px] tracking-[0.18em] uppercase px-5 ] md:px-10  mt-2 mb-7 flex items-center" style={{ color: "rgba(242,239,230,.4)" }}>
        <span className="text-[11px]">← →</span> Drag to explore →
      </p>

      <div 
        ref={scrollRef}
        className="r rd2 overflow-x-auto overflow-y-visible pb-6 cursor-grab active:cursor-grabbing py-[-95px]"
        style={{ scrollbarWidth: "thin", scrollbarColor: "rgba(200,240,32,.3) rgba(242,239,230,.04)" }}
      >
        <div className="flex gap-3.5 w-max px-5 md:px-10 py-1">
          {projects.map((p) => (
            <a
              key={p.title}
              href={p.href}
              target="_blank"
              rel="noreferrer"
              className="proj-card group w-[330px] flex-shrink-0 flex flex-col relative overflow-hidden no-underline"
              style={{
                background: "hsl(var(--ink2))",
                border: "1px solid rgba(242,239,230,.06)",
                transition: "all .35s var(--ease-out)",
                color: "inherit",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(242,239,230,.14)";
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow = "0 24px 48px rgba(0,0,0,.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(242,239,230,.06)";
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div className="h-[130px] relative overflow-hidden flex items-center justify-center">
                <div className={`absolute inset-0 ${p.bgClass} group-hover:scale-105 transition-transform duration-500`}>
                  {p.svg}
                </div>
                <div className="font-display text-[88px] leading-none relative z-[1] mix-blend-overlay" style={{ color: "rgba(0,0,0,.3)" }}>
                  {p.num}
                </div>
                <span className="absolute top-4 right-4.5 z-[2] text-base group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" style={{ color: "rgba(242,239,230,.5)" }}>
                  ↗
                </span>
              </div>
              <div className="p-6 pb-7 flex-1 flex flex-col gap-3.5">
                <div className="font-display text-[34px] tracking-[0.04em] leading-none">{p.title}</div>
                <p className="font-mono text-xs font-light leading-[1.8] flex-1" style={{ color: "rgba(242,239,230,.55)" }}>{p.desc}</p>
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[9px] tracking-[0.1em] uppercase py-1 px-2.5"
                      style={{
                        color: t === "Featured" ? "hsl(var(--lime))" : "rgba(242,239,230,.45)",
                        border: t === "Featured" ? "1px solid rgba(200,240,32,.3)" : "1px solid rgba(242,239,230,.1)",
                        background: t === "Featured" ? "rgba(200,240,32,.1)" : "transparent",
                        animation: t === "Featured" ? "pulseTag 2s ease-in-out infinite" : undefined,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
