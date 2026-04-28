import { useEffect, useRef, useState } from "react";
import HeroCanvas from "./HeroCanvas";

const Hero = () => {
  const [yearCount, setYearCount] = useState(2020);
  const heroRef = useRef<HTMLElement>(null);
  const lastNameRef = useRef<HTMLSpanElement>(null);

  // Year counter — animate 1990 → 2020 on first visibility
  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    let done = false;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !done) {
          done = true;
          let v = 1990;
          const step = () => {
            v += 1;
            setYearCount(v);
            if (v < 2020) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Last name scramble on hover
  const handleScramble = () => {
    const el = lastNameRef.current;
    if (!el) return;
    const original = "PARASHAR";
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let iters = 0;
    const iv = setInterval(() => {
      el.textContent = original
        .split("")
        .map((c, i) => (i < iters ? original[i] : chars[Math.floor(Math.random() * chars.length)]))
        .join("");
      if (iters >= original.length) {
        clearInterval(iv);
        el.textContent = original;
      }
      iters += 0.45;
    }, 38);
  };

  return (
    <section id="hero" ref={heroRef} className="py-24 md:py-[156px] px-5 md:px-10 relative overflow-hidden min-h-[100svh] flex flex-col justify-center">
      <HeroCanvas />

      {/* Main hero grid */}
      <span className="grid grid-cols-1 md:grid-cols-[1fr_auto] items-end gap-6 md:gap-10 relative z-[1]">
        <span>
          <span
            className="font-mono text-[9.5px] tracking-[0.22em] uppercase flex items-center gap-4 mb-5.5 opacity-0"
            style={{ color: "hsl(var(--lime))", animation: "fadeInUp .8s ease .5s forwards" }}
          >
            <span className="w-7 h-px" style={{ background: "hsl(var(--lime))" }} />
            Full Stack Dev · CSE Student · Founder
          </span>
          <h1 className="font-display leading-[0.86] tracking-[0.02em] relative py-6 md:py-10" style={{ fontSize: "clamp(100px,13vw,200px)" }}>
            <span className="overflow-hidden block">
              <span className="block" style={{ transform: "translateY(110%)", animation: "slideUp .95s var(--ease-out) .55s forwards" }}>
                SHOURYA
                <img
                  src="/Shourya_Parashar.jpeg"
                  alt="Shourya Parashar - Full Stack Developer"
                  style={{ display: 'none' }} /* Remove this style if you want it visible */
                />
              </span>
            </span>
            <span className="overflow-hidden block">
              <span
                ref={lastNameRef}
                className="cursor-pointer"
                style={{
                  transform: "translateY(110%)",
                  animation: "slideUp .95s var(--ease-out) .68s forwards",
                  color: "transparent",
                  WebkitTextStroke: "1.5px rgba(242,239,230,.35)",
                  transition: "all .35s ease",
                }}
                onMouseEnter={(e) => {
                  const s = e.currentTarget.style as CSSStyleDeclaration & { webkitTextFillColor: string; webkitTextStroke: string };
                  s.webkitTextFillColor = "hsl(var(--lime))";
                  s.webkitTextStroke = "1.5px hsl(var(--lime))";
                  s.textShadow = "0 0 60px rgba(200,240,32,.2)";
                  handleScramble();
                }}
                onMouseLeave={(e) => {
                  const s = e.currentTarget.style as CSSStyleDeclaration & { webkitTextFillColor: string; webkitTextStroke: string };
                  s.webkitTextFillColor = "transparent";
                  s.webkitTextStroke = "1.5px rgba(242,239,230,.35)";
                  s.textShadow = "none";
                }}
              >
                PARASHAR
              </span>
            </span>
          </h1>
        </span>

        <span
          className="flex flex-col items-start md:items-end gap-5 pb-1.5 opacity-0 relative z-[1]"
          style={{ animation: "fadeInUp .8s ease .9s forwards" }}
        >
          <span className="text-left md:text-right">
            <div
              className="font-display leading-none tracking-[-0.02em]"
              style={{ fontSize: "clamp(48px,9vw,110px)", color: "rgba(242,239,230,.08)" }}
            >
              {yearCount}
            </div>
            <div className="text-[9.5px] tracking-[0.16em] uppercase" style={{ color: "rgba(242,239,230,.4)" }}>
              Coding since
            </div>
          </span>
          <div
            className="flex items-center gap-2 text-[9.5px] tracking-[0.14em] uppercase py-2 px-4"
            style={{
              color: "hsl(var(--lime))",
              border: "1px solid rgba(200,240,32,.25)",
              background: "rgba(200,240,32,.05)",
              backdropFilter: "blur(4px)",
            }}
          >
            <div className="w-[7px] h-[7px] rounded-full flex-shrink-0" style={{ background: "hsl(var(--lime))", animation: "blink 2.8s ease-in-out infinite" }} />
            Open to Opportunities
          </div>
        </span>
      </span>

      {/* Bottom strip */}
      <div
        className="flex items-end justify-between flex-wrap gap-5 pt-6.5 mt-9 relative z-[1] opacity-0"
        style={{ borderTop: "1px solid rgba(242,239,230,.07)", animation: "fadeInUp .8s ease 1.1s forwards" }}
      >
        <p className="font-condensed font-light italic leading-relaxed max-w-[500px]" style={{ fontSize: "clamp(16px,2vw,22px)", color: "rgba(242,239,230,.65)" }}>
          Building <strong className="text-lime not-italic font-bold">NEXUS</strong> with Team .
          <br />
          MERN · Python · Next.js · System Design.
        </p>
        <div className="flex gap-2">
          <a
            href="https://www.linkedin.com/in/im-shourya/"
            target="_blank"
            rel="me noreferrer"
            className="soc w-10 h-10 flex items-center justify-center text-xs font-mono font-medium no-underline"
            style={{ border: "1px solid rgba(242,239,230,.15)", color: "rgba(242,239,230,.5)", transition: "all .25s var(--ease-out)" }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "hsl(var(--lime))"; e.currentTarget.style.color = "hsl(var(--lime))"; e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 8px 20px rgba(200,240,32,.15)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(242,239,230,.15)"; e.currentTarget.style.color = "rgba(242,239,230,.5)"; e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}
          >
            <span className="sr-only">Shourya Parashar LinkedIn Profile</span>
            LinkedIn
          </a>
          <a
            href="https://github.com/im-shourya"
            target="_blank"
            rel="me noreferrer"
            className="soc w-10 h-10 flex items-center justify-center text-xs font-mono font-medium no-underline"
            style={{ border: "1px solid rgba(242,239,230,.15)", color: "rgba(242,239,230,.5)", transition: "all .25s var(--ease-out)" }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "hsl(var(--lime))"; e.currentTarget.style.color = "hsl(var(--lime))"; e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 8px 20px rgba(200,240,32,.15)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(242,239,230,.15)"; e.currentTarget.style.color = "rgba(242,239,230,.5)"; e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}
          >
            {/* <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" alt-text="GitHub">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg> */}
            <span className="sr-only">Shourya Parashar GitHub Profile</span>
            Github
          </a>
        </div>

      </div>
    </section>
  );
};

export default Hero;