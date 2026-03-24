import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [time, setTime] = useState("00:00:00");
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const tick = () => {
      const n = new Date();
      setTime(
        `${String(n.getHours()).padStart(2, "0")}:${String(n.getMinutes()).padStart(2, "0")}:${String(n.getSeconds()).padStart(2, "0")}`
      );
    };
    tick();
    const iv = setInterval(tick, 1000);
    return () => clearInterval(iv);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const links = [
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Journey", href: "/journey" },
    { label: "Skills", href: "/skills" },
    { label: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <>
      <nav
        className="fixed top-7 left-0 right-0 z-[500] h-[56px] flex items-center justify-between px-5 md:px-10"
        style={{
          background: scrolled ? "rgba(6,6,8,.97)" : "rgba(6,6,8,.85)",
          borderBottom: "1px solid rgba(242,239,230,.06)",
          backdropFilter: "blur(24px)",
          transition: "background .3s ease",
        }}
      >
        <a href="/" className="font-display text-[22px] tracking-[0.08em] text-paper no-underline flex items-center gap-2">
          SP
          <span
            className="w-[7px] h-[7px] rounded-full flex-shrink-0"
            style={{ background: "hsl(var(--lime))", animation: "blink 2.8s ease-in-out infinite" }}
          />
        </a>

        <div
          className="absolute left-1/2 -translate-x-1/2 font-mono text-[9.5px] tracking-[0.18em] uppercase hidden md:flex items-center gap-2.5"
          style={{ color: "rgba(242,239,230,.45)" }}
        >
          <span style={{ color: "rgba(200,240,32,.8)" }}>IND</span> ·{" "}
          <span className="tabular-nums">{time}</span>
        </div>

        <div className="flex items-center">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="nav-a font-mono text-[9.5px] tracking-[0.14em] uppercase no-underline py-2.5 px-4 relative group hidden md:inline-block"
              style={{
                color: isActive(l.href) ? "hsl(var(--paper))" : "rgba(242,239,230,.6)",
                transition: "color .2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "hsl(var(--paper))")}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = isActive(l.href) ? "hsl(var(--paper))" : "rgba(242,239,230,.6)";
              }}
            >
              {l.label}
              <span
                className={`absolute bottom-0 left-4 right-4 h-px origin-left ${isActive(l.href) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}
                style={{
                  background: "hsl(var(--lime))",
                  transition: "transform .3s var(--ease-out)",
                }}
              />
            </a>
          ))}
          <a
            href="Shourya_Parashar.pdf"
            download
            className="font-mono text-[9.5px] px-5 tracking-[0.14em] uppercase no-underline py-2 px-4.5 ml-3.5 font-medium hidden md:inline-block"
            style={{
              color: "hsl(var(--ink))",
              background: "hsl(var(--lime))",
              transition: "background .2s, box-shadow .2s, transform .15s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#e8ff40";
              e.currentTarget.style.boxShadow = "0 0 20px rgba(200,240,32,.35)";
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "hsl(var(--lime))";
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.style.transform = "none";
            }}
          >
            ↓ CV
          </a>

          {/* Hamburger — mobile only */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] ml-2"
            onClick={() => setMenuOpen((p) => !p)}
            aria-label="Toggle menu"
            style={{ background: "transparent", border: "none" }}
          >
            <span
              className="block w-5 h-px transition-all duration-300"
              style={{
                background: "hsl(var(--paper))",
                transform: menuOpen ? "rotate(45deg) translate(2px, 2px)" : "none",
              }}
            />
            <span
              className="block w-5 h-px transition-all duration-300"
              style={{
                background: "hsl(var(--paper))",
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              className="block w-5 h-px transition-all duration-300"
              style={{
                background: "hsl(var(--paper))",
                transform: menuOpen ? "rotate(-45deg) translate(2px, -2px)" : "none",
              }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile full-screen menu overlay */}
      <div
        className="fixed inset-0 z-[490] flex flex-col items-center justify-center gap-8 md:hidden"
        style={{
          background: "rgba(6,6,8,.97)",
          backdropFilter: "blur(24px)",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
          transition: "opacity .35s ease",
        }}
      >
        <div>py-[5px]</div>
        {links.map((l, i) => (
          <a
            key={l.label}
            href={l.href}
            onClick={() => setMenuOpen(false)}
            className="font-display text-[42px] tracking-[0.06em] no-underline"
            style={{
              color: isActive(l.href) ? "hsl(var(--lime))" : "hsl(var(--paper))",
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? "translateY(0)" : "translateY(20px)",
              transition: `color .2s, opacity .4s ease ${0.1 + i * 0.06}s, transform .4s var(--ease-out) ${0.1 + i * 0.06}s`,
            }}
          >
            {l.label}
          </a>
        ))}
        <a
          href="Shourya_Parashar.pdf"
          download
          onClick={() => setMenuOpen(false)}
          className="font-mono text-[11px] tracking-[0.14em] uppercase no-underline py-2.5 px-6 mt-4 font-medium"
          style={{
            color: "hsl(var(--ink))",
            background: "hsl(var(--lime))",
            opacity: menuOpen ? 1 : 0,
            transform: menuOpen ? "translateY(0)" : "translateY(20px)",
            transition: `opacity .4s ease ${0.1 + links.length * 0.06}s, transform .4s var(--ease-out) ${0.1 + links.length * 0.06}s`,
          }}
        >
          ↓ Download CV
        </a>
      </div>
    </>
  );
};

export default Navbar;
