const links = [
  {
    label: "LinkedIn",
    val: "im-shourya",
    href: "https://www.linkedin.com/in/im-shourya/",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    label: "GitHub",
    val: "im-shourya",
    href: "https://github.com/im-shourya",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
      </svg>
    ),
  },
  {
    label: "Resume",
    val: "Download",
    href: "Shourya_Parashar.pdf",
    download: "Shourya_Parashar.pdf",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
        <polyline points="10 9 9 9 8 9"/>
      </svg>
    ),
  },
];

const Contact = () => (
  <section id="contact" className="py-[15px] px-5 md:px-10 relative overflow-hidden">
    <div
      className="absolute font-display leading-none pointer-events-none select-none"
      style={{ fontSize: "clamp(120px,22vw,280px)", color: "rgba(242,239,230,.025)", letterSpacing: "-0.02em", bottom: "-30px", right: "-10px", whiteSpace: "nowrap" }}
    >
      BUILD.
    </div>

    <div className="max-w-[640px]">
      <div
        className="r font-mono text-[9.5px] tracking-[0.22em] uppercase flex gap-4 mb-6"
        style={{ color: "hsl(var(--lime))" }}
      >
        <span className="w-7 h-px" style={{ background: "hsl(var(--lime))" }} />
        Let's connect
      </div>

      <h2
        className="r rd1 font-display tracking-[0.02em] leading-[0.88] mb-8 md:mb-16 group cursor-pointer text-left"
        style={{ fontSize: "clamp(52px,14vw,180px)" }}
      >
        LET'S
        <span
          className="block transition-all duration-400"
          style={{
            WebkitTextStroke: "1.5px rgba(200,240,32,.4)",
            color: "transparent",
          }}
          onMouseEnter={(e) => {
            const s = e.currentTarget.style as any;
            s.webkitTextFillColor = "hsl(var(--lime))";
            s.webkitTextStroke = "1.5px hsl(var(--lime))";
            s.textShadow = "0 0 80px rgba(200,240,32,.15)";
          }}
          onMouseLeave={(e) => {
            const s = e.currentTarget.style as any;
            s.webkitTextFillColor = "transparent";
            s.webkitTextStroke = "1.5px rgba(200,240,32,.4)";
            s.textShadow = "none";
          }}
        >
          BUILD.
        </span>
      </h2>

      <div className="r rd2 grid grid-cols-1 sm:grid-cols-3 gap-3 ">
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            target={l.download ? undefined : "_blank"}
            rel={l.download ? undefined : "noreferrer"}
            download={l.download || undefined}
            className="cl group flex flex-col px-6 md:px-10 py-5 relative overflow-hidden no-underline justify-center items-center"
            style={{ border: "1px solid rgba(242,239,230,.08)", background: "hsl(var(--ink2))", color: "inherit", transition: "all .3s var(--ease-out)" }}
          >
            <div
              className="absolute inset-0 origin-left scale-x-0 group-hover:scale-x-100 z-0"
              style={{ background: "hsl(var(--lime))", transition: "transform .4s var(--ease-out)" }}
            />
            <span className="font-mono text-[9px] tracking-[0.18em] uppercase mb-2.5 relative z-[1] group-hover:text-ink transition-colors" style={{ color: "rgba(242,239,230,.55)" }}>
              {l.label}
            </span>
            <span className="mt-3.5 relative z-[1] group-hover:text-ink group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" style={{ color: "rgba(242,239,230,.65)" }}>
              {l.icon}
            </span>
            <span className="font-syne py-5 text-base font-bold tracking-[0.02em] relative z-[1]  flex-1 group-hover:text-ink transition-colors text-paper">
              {l.val}
            </span>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default Contact;
