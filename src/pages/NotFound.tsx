import { useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import usePageMeta from "@/hooks/usePageMeta";
import CustomCursor from "@/components/CustomCursor";

const CHARS = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*0123456789";

const NotFound = () => {
  const location = useLocation();
  const labelRef = useRef<HTMLSpanElement>(null);
  const [scrambled, setScrambled] = useState("NOT FOUND");

  usePageMeta({
    title: "404 — Shourya Parashar",
    description: "Page not found.",
  });

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  useEffect(() => {
    const target = "NOT FOUND";
    let iters = 0;
    const iv = setInterval(() => {
      setScrambled(
        target
          .split("")
          .map((c, i) =>
            c === " " ? " " : i < iters ? target[i] : CHARS[Math.floor(Math.random() * CHARS.length)]
          )
          .join("")
      );
      if (iters >= target.length) clearInterval(iv);
      iters += 0.5;
    }, 40);
    return () => clearInterval(iv);
  }, []);

  const handleScramble = () => {
    const el = labelRef.current;
    if (!el) return;
    const original = "404";
    let iters = 0;
    const iv = setInterval(() => {
      el.textContent = original
        .split("")
        .map((c, i) => (i < iters ? original[i] : String(Math.floor(Math.random() * 10))))
        .join("");
      if (iters >= original.length) { clearInterval(iv); el.textContent = original; }
      iters += 0.45;
    }, 38);
  };

  const ease = [0.16, 1, 0.3, 1] as const;

  return (
    <>
      <CustomCursor />
      <main
        className="min-h-screen flex flex-col justify-center px-5 md:px-10 py-24 relative overflow-hidden"
        style={{ background: "hsl(var(--ink))" }}
      >
        {/* Scan line overlay */}
        <div
          className="pointer-events-none fixed inset-0 z-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(to bottom, transparent 0px, transparent 3px, rgba(242,239,230,0.018) 3px, rgba(242,239,230,0.018) 4px)",
          }}
        />

        {/* Corner brackets */}
        <svg className="absolute top-8 left-8 opacity-20" width="40" height="40" viewBox="0 0 40 40" fill="none">
          <path d="M0 20V0H20" stroke="hsl(var(--lime))" strokeWidth="1.5" />
        </svg>
        <svg className="absolute top-8 right-8 opacity-20" width="40" height="40" viewBox="0 0 40 40" fill="none">
          <path d="M40 20V0H20" stroke="hsl(var(--lime))" strokeWidth="1.5" />
        </svg>
        <svg className="absolute bottom-8 left-8 opacity-20" width="40" height="40" viewBox="0 0 40 40" fill="none">
          <path d="M0 20V40H20" stroke="hsl(var(--lime))" strokeWidth="1.5" />
        </svg>
        <svg className="absolute bottom-8 right-8 opacity-20" width="40" height="40" viewBox="0 0 40 40" fill="none">
          <path d="M40 20V40H20" stroke="hsl(var(--lime))" strokeWidth="1.5" />
        </svg>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto w-full">

          {/* Status label */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="flex items-center gap-4 mb-6"
          >
            <span className="w-7 h-px" style={{ background: "hsl(var(--lime))" }} />
            <span className="font-mono text-[9.5px] tracking-[0.22em] uppercase" style={{ color: "hsl(var(--lime))" }}>
              Error · HTTP 404 · Page Not Found
            </span>
          </motion.div>

          {/* Giant 404 */}
          <div className="overflow-hidden mb-2">
            <motion.h1
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.95, ease, delay: 0.1 }}
              className="font-display leading-[0.86] tracking-[0.02em] select-none"
              style={{ fontSize: "clamp(100px,24vw,320px)" }}
            >
              <span
                ref={labelRef}
                className="cursor-pointer"
                style={{ color: "transparent", WebkitTextStroke: "2px rgba(242,239,230,0.9)", transition: "all .3s var(--ease-out)" }}
                onMouseEnter={(e) => {
                  const s = e.currentTarget.style as CSSStyleDeclaration & { webkitTextFillColor: string; webkitTextStroke: string };
                  s.webkitTextFillColor = "hsl(var(--lime))";
                  s.webkitTextStroke = "2px hsl(var(--lime))";
                  s.textShadow = "0 0 80px rgba(200,240,32,0.25)";
                  handleScramble();
                }}
                onMouseLeave={(e) => {
                  const s = e.currentTarget.style as CSSStyleDeclaration & { webkitTextFillColor: string; webkitTextStroke: string };
                  s.webkitTextFillColor = "transparent";
                  s.webkitTextStroke = "2px rgba(242,239,230,0.9)";
                  s.textShadow = "none";
                }}
              >
                404
              </span>
            </motion.h1>
          </div>

          {/* NOT FOUND scramble */}
          <div className="overflow-hidden mb-10">
            <motion.div
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.95, ease, delay: 0.18 }}
              className="font-display tracking-[0.12em]"
              style={{ fontSize: "clamp(28px,6vw,72px)", color: "rgba(242,239,230,0.15)" }}
            >
              {scrambled}
            </motion.div>
          </div>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.9, ease, delay: 0.45 }}
            className="w-full h-px mb-10"
            style={{ background: "rgba(242,239,230,0.08)" }}
          />

          {/* Terminal + CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.6 }}
            className="flex flex-col md:flex-row items-start md:items-end justify-between gap-10"
          >
            <div
              className="font-mono text-xs leading-relaxed"
              style={{ border: "1px solid rgba(242,239,230,0.08)", background: "rgba(242,239,230,0.03)", padding: "20px 24px", maxWidth: "460px", width: "100%" }}
            >
              <div style={{ color: "rgba(242,239,230,0.2)", marginBottom: 12, letterSpacing: "0.1em" }}>── SYSTEM LOG ────────────────</div>
              <div className="space-y-1.5">
                <div><span style={{ color: "rgba(242,239,230,0.3)" }}>STATUS</span>{"  "}<span style={{ color: "hsl(var(--red))" }}>404</span></div>
                <div><span style={{ color: "rgba(242,239,230,0.3)" }}>PATH  </span>{"  "}<span style={{ color: "hsl(var(--paper))" }}>{location.pathname}</span></div>
                <div><span style={{ color: "rgba(242,239,230,0.3)" }}>MSG   </span>{"  "}<span style={{ color: "rgba(242,239,230,0.5)" }}>Route not matched in router</span></div>
              </div>
              <div className="mt-4 flex items-center gap-2" style={{ color: "hsl(var(--lime))" }}>
                <span>&gt;</span>
                <span>Awaiting input</span>
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.6, repeat: Infinity }}
                  className="inline-block w-[7px] h-[13px]"
                  style={{ background: "hsl(var(--lime))" }}
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start gap-3">
              <a
                href="/"
                className="font-mono text-[9.5px] tracking-[0.18em] uppercase flex items-center gap-3 px-6 py-3 no-underline"
                style={{ background: "hsl(var(--lime))", color: "hsl(var(--ink))", fontWeight: 600, transition: "all .25s var(--ease-out)" }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "hsl(var(--lime2))"; e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(200,240,32,0.25)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "hsl(var(--lime))"; e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square">
                  <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
                </svg>
                Return Home
              </a>
              <a
                href="/#contact"
                className="font-mono text-[9.5px] tracking-[0.18em] uppercase flex items-center gap-3 px-6 py-3 no-underline"
                style={{ border: "1px solid rgba(242,239,230,0.18)", color: "rgba(242,239,230,0.55)", transition: "all .25s var(--ease-out)" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "hsl(var(--lime))"; e.currentTarget.style.color = "hsl(var(--lime))"; e.currentTarget.style.transform = "translateY(-3px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(242,239,230,0.18)"; e.currentTarget.style.color = "rgba(242,239,230,0.55)"; e.currentTarget.style.transform = "none"; }}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
                </svg>
                Contact Me
              </a>
            </div>
          </motion.div>

          {/* Footnote */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease, delay: 0.9 }}
            className="font-condensed italic mt-12"
            style={{ color: "rgba(242,239,230,0.22)", fontSize: "clamp(13px,1.4vw,16px)" }}
          >
            The page at{" "}
            <span style={{ color: "rgba(242,239,230,0.45)" }}>{location.pathname}</span>
            {" "}doesn't exist. Maybe it moved, maybe it never did.
          </motion.p>
        </div>
      </main>
    </>
  );
};

export default NotFound;