import SectionHeader from "./SectionHeader";


const specs: [string, string, string | null][] = [
  ["Location", "India · Chennai", null],
  ["Institute", "SRMIST", "https://www.srmist.edu.in"],
  ["Degree", "B.Tech CSE", null],
  ["Stack", "MERN", null],
  ["Current", "NEXUS ↗", "https://nexus.shouryaparashar.in"],
  ["GitHub", "im-shourya ↗", "https://github.com/im-shourya"],
  ["Status", "Open ✦", null],
];

const About = () => (
  <section id="about" className="py-[15px] px-5 md:px-10">
    <SectionHeader num="01 — About" title="About Me" aside="Builder / Founder / Student" />

    <div className="grid grid-cols-1 md:grid-cols-[5fr_3fr] gap-10 md:gap-16 items-start">
      <div>
        <blockquote
          className="r font-condensed font-light italic leading-[1.38] mb-9 pl-4 md:pl-6"
          style={{ fontSize: "clamp(22px,3vw,36px)", color: "hsl(var(--paper))", borderLeft: "2px solid hsl(var(--lime))" }}
        >
          Started with <mark className="bg-transparent text-lime not-italic font-black">Java in 2020.</mark>
          <br />
          Now <mark className="bg-transparent text-lime not-italic font-black">building something</mark>
          <br />
          that fixes Athelets Discovery.
        </blockquote>
        <p className="r rd1 font-mono text-[11.5px] md:text-[12.5px] font-light leading-7 md:leading-8 mb-5" style={{ color: "rgba(242,239,230,.6)" }}>
          CS Engineering student at SRM Institute. I build things that ship — from competitive DSA grind to full-stack production systems. Every project is a chance to do something I've never done before.
        </p>
        <p className="r rd2 font-mono text-[11.5px] md:text-[12.5px] font-light leading-7 md:leading-8 mb-5" style={{ color: "rgba(242,239,230,.6)" }}>
          Currently Founder &amp; Lead Dev at{" "}
          <a href="https://github.com/im-shourya" target="_blank" rel="noreferrer" className="text-lime no-underline hover:underline">
            Team Hypothesis
          </a>
          , building PharmaGo — a SaaS platform digitizing pharmacy operations. HackerRank Campus Crew, open-source contributor, and occasional hackathon troublemaker.
        </p>
      </div>

      <div>
        <table className="r rd1 w-full">
          <tbody>
            {specs.map(([key, val, href], i) => (
              <tr
                key={i}
                className="group"
                style={{ borderBottom: "1px solid rgba(242,239,230,.06)" }}
              >
                <td className="py-3 font-mono text-xs tracking-[0.08em] uppercase w-1/2 group-hover:text-lime transition-colors" style={{ color: "rgba(242,239,230,.45)" }}>
                  {key}
                </td>
                <td
                  className="py-3 font-condensed text-[15px] font-bold tracking-[0.05em] uppercase text-right group-hover:text-lime transition-colors"
                  style={{ color: key === "Status" ? "hsl(var(--lime))" : "hsl(var(--paper))" }}
                >
                  {href ? (
                    <a href={href} target="_blank" rel="noreferrer" className="no-underline hover:underline" style={{ color: "inherit" }}>{val}</a>
                  ) : val}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </section>
);

export default About;
