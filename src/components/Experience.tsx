import SectionHeader from "./SectionHeader";

const experiences = [
  {
    year: "26",
    now: true,
    title: "Founder & Lead Developer",
    where: "Team NEXUS",
    highlight: "NEXUS",
    desc: "Spearheading a Athelete platform that digitizes athelet discovery operations. Injury Risk Assessment, Tournaments, Oportunity — end to end. Leading cross-functional team, system design, architecture decisions.",
    chips: [{ label: "Current", green: true }, { label: "Next.js" }, { label: "PostgreSQL" }, { label: "System Design" }, { label: "Entrepreneurship" }],
  },
  {
    year: "25",
    title: "Full Stack Developer",
    where: "Open Source & Freelance",
    desc: "MERN stack apps, open-source contributions, freelance web solutions. Focused on accessibility, SEO, and clean code that lasts.",
    chips: [{ label: "Node.js" }, { label: "React" }, { label: "MongoDB" }, { label: "Docker" }],
    delay: "rd1",
  },
  {
    year: "25",
    title: "B.Tech Computer Science",
    where: "SRM Institute",
    highlight: "SRMIST",
    desc: "DSA, Algorithms, Software Engineering. HackerRank Campus Crew — Technical track. Hackathons, seminars, and a lot of late-night debugging.",
    chips: [{ label: "DSA" }, { label: "Java" }, { label: "Python" }, { label: "Algorithms" }],
    delay: "rd2",
  },
  {
    year: "20",
    title: "Started Programming",
    where: "School",
    highlight: "Self-Taught",
    desc: "Three years of Java laid the foundation. Simultaneously self-taught HTML, CSS, and advanced web development. The spark that started everything.",
    chips: [{ label: "Java" }, { label: "HTML/CSS" }, { label: "Web Dev" }],
    delay: "rd3",
  },
];

const Experience = () => (
  <section id="experience" className="py-[15px] px-5 md:px-10">
    <SectionHeader num="03 — Journey" title="Journey" aside="2020 — Present" />
    <div className="flex flex-col">
      {experiences.map((exp, i) => (
        <div
          key={i}
          className={`exp-row r ${exp.delay || ""} group grid grid-cols-[48px_1fr] md:grid-cols-[80px_1fr] relative py-6 md:py-9`}
          style={{
            borderBottom: "1px solid rgba(242,239,230,.06)",
            ...(i === 0 ? { borderTop: "1px solid rgba(242,239,230,.06)" } : {}),
            transition: "background .2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(242,239,230,.015)")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
        >
          {/* Left accent bar */}
          <div
            className="absolute left-0 top-0 bottom-0 w-0.5 group-hover:bg-lime transition-colors"
          />
          <div
            className={`font-display text-3xl md:text-4xl px-2 md:px-10 tracking-[0.02em] self-start pt-1 transition-colors ${exp.now ? "text-lime/40" : ""} group-hover:text-lime/35`}
            style={{ color: exp.now ? undefined : "rgba(242,239,230,.25)" }}
          >
            {exp.year}
            {exp.now && (
              <span className="block font-mono text-[8px] tracking-[0.14em] text-lime leading-none mt-1">NOW</span>
            )}
          </div>
          <div className="pl-3 md:pl-7">
            <div className="font-syne text-base md:text-lg font-bold mb-1 tracking-[0.02em]">{exp.title}</div>
            <div className="font-mono text-[11px] tracking-[0.12em] uppercase mb-3.5" style={{ color: "rgba(242,239,230,.45)" }}>
              {exp.where}{exp.highlight && <> · <em className="not-italic text-lime/80">{exp.highlight}</em></>}
            </div>
            <p className="font-mono text-[11.5px] md:text-[12.5px] font-light leading-[1.75] md:leading-[1.85] mb-3.5" style={{ color: "rgba(242,239,230,.55)" }}>{exp.desc}</p>
            <div className="flex flex-wrap gap-1">
              {exp.chips.map((c) => (
                <span
                  key={c.label}
                  className="font-mono text-[9px] tracking-[0.1em] uppercase py-1 px-2.5 inline-block transition-all group-hover:border-lime/40 group-hover:text-lime"
                  style={{
                    border: c.green ? "1px solid rgba(200,240,32,.3)" : "1px solid rgba(242,239,230,.1)",
                    color: c.green ? "hsl(var(--lime))" : "rgba(242,239,230,.45)",
                  }}
                >
                  {c.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Experience;
