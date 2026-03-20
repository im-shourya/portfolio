const Footer = () => (
  <footer
    className="py-8 px-5 md:px-10"
    style={{ borderTop: "1px solid rgba(242,239,230,.06)" }}
  >
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
      {/* Left: brand */}
      <div className="flex flex-col gap-1.5">
        <a href="/" className="font-display text-[20px] tracking-[0.1em] no-underline flex items-center gap-2" style={{ color: "rgba(242,239,230,.3)" }}>
          SP
          <span className="w-[5px] h-[5px] rounded-full" style={{ background: "rgba(200,240,32,.4)" }} />
        </a>
        <span className="font-mono text-[9px] tracking-[0.16em] uppercase" style={{ color: "rgba(242,239,230,.25)" }}>
          Designed differently. Built with intent.
        </span>
      </div>

      {/* Center: nav links */}
      <div className="flex flex-wrap gap-x-6 gap-y-2">
        {[
          { label: "About", href: "/about" },
          { label: "Projects", href: "/projects" },
          { label: "Journey", href: "/journey" },
          { label: "Contact", href: "/contact" },
        ].map((l) => (
          <a
            key={l.label}
            href={l.href}
            className="font-mono text-[9px] tracking-[0.16em] uppercase no-underline transition-colors duration-200"
            style={{ color: "rgba(242,239,230,.35)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "hsl(var(--lime))")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(242,239,230,.35)")}
          >
            {l.label}
          </a>
        ))}
      </div>

      {/* Right: meta */}
      <div className="flex flex-col items-start md:items-end gap-1">
        <span className="font-mono text-[9px] tracking-[0.12em] uppercase" style={{ color: "rgba(242,239,230,.3)" }}>
          Chennai · India
        </span>
        <span className="font-mono text-[9px] tracking-[0.12em] uppercase" style={{ color: "rgba(242,239,230,.25)" }}>
          © 2026 Shourya Parashar
        </span>
      </div>
    </div>
  </footer>
);

export default Footer;
