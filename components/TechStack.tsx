import {
  siTypescript, siJavascript, siPython, siCplusplus, siHtml5, siCss,
  siReact, siNextdotjs, siTailwindcss, siNodedotjs, siExpress, siNestjs, siFastapi,
  siPostgresql, siMongodb, siSupabase, siDocker, siGit, siVercel,
} from 'simple-icons';
import SectionHeader, { Container } from './SectionHeader';
import TechLogo from './TechLogo';

const categories = [
  {
    label: 'Languages',
    pills: [
      { name: 'TypeScript', logos: [siTypescript] },
      { name: 'JavaScript', logos: [siJavascript] },
      { name: 'Python', logos: [siPython] },
      { name: 'C / C++', logos: [siCplusplus] },
      { name: 'HTML / CSS', logos: [siHtml5, siCss] },
    ],
  },
  {
    label: 'Frameworks & Libraries',
    pills: [
      { name: 'React.js', logos: [siReact] },
      { name: 'Next.js', logos: [siNextdotjs] },
      { name: 'Tailwind CSS', logos: [siTailwindcss] },
      { name: 'Node.js', logos: [siNodedotjs] },
      { name: 'Express.js', logos: [siExpress] },
      { name: 'NestJS', logos: [siNestjs] },
      { name: 'FastAPI', logos: [siFastapi] },
    ],
  },
  {
    label: 'Databases & Tools',
    pills: [
      { name: 'PostgreSQL', logos: [siPostgresql] },
      { name: 'MongoDB', logos: [siMongodb] },
      { name: 'Supabase', logos: [siSupabase] },
      { name: 'Docker', logos: [siDocker] },
      { name: 'Git & GitHub', logos: [siGit] },
      { name: 'Vercel', logos: [siVercel] },
    ],
  },
];

const learning = ['System Design', 'Retrieval & RAG'];

// Logo tiles riding the diagonal rails in the "currently learning" card.
// `rail` picks the line, `t` is the height on it (0 = top edge, 1 = bottom edge).
const tiles = [
  { logo: siTypescript, rail: 0, t: 0.62 },
  { logo: siPython, rail: 1, t: 0.3 },
  { logo: siNextdotjs, rail: 2, t: 0.68 },
  { logo: siFastapi, rail: 2, t: 0.26 },
  { logo: siDocker, rail: 3, t: 0.48 },
  { logo: siPostgresql, rail: 4, t: 0.3 },
  { logo: siReact, rail: 4, t: 0.74 },
];
const rails = [12, 30, 48, 66, 84]; // % from the left, where each rail crosses the vertical middle
const TAN_15 = 0.2679;

export default function TechStack() {
  return (
    <section id="tech" className="py-8 sm:py-12 scroll-mt-20">
      <Container>
        <SectionHeader title="Stack" note="Tools I use to build fast, tested applications." />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 bento-grid">
          {categories.map((cat) => (
            <div key={cat.label} className="bento p-7 sm:p-8">
              <h3 className="text-[22px] font-normal leading-tight text-ink-strong mb-5">{cat.label}</h3>
              <ul className="flex flex-wrap gap-2">
                {cat.pills.map((pill) => (
                  <li key={pill.name} className="chip !gap-2">
                    {pill.logos.map((logo) => (
                      <TechLogo key={logo.slug} icon={logo} />
                    ))}
                    {pill.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="bento bento-earth md:col-span-3 grid grid-cols-1 md:grid-cols-[minmax(0,460px)_1fr] min-h-[220px]">
            <div className="p-7 sm:px-10 sm:py-8 flex flex-col justify-center relative z-[2]">
              <p className="text-[14px] text-ink-strong/80">I constantly try to improve myself</p>
              <h3 className="text-[24px] leading-[1.2] font-normal text-ink-strong mt-2">
                Currently, I&apos;m learning {learning.join(' and ')}.
              </h3>
              <p className="text-[15px] leading-[1.5] text-ink-strong/50 mt-3">
                Mostly by building: Archie is a system-design board, and Voice RAG is a retrieval pipeline.
              </p>
            </div>

            <div className="relative min-h-[160px] overflow-hidden [container-type:size]" aria-hidden>
              {rails.map((left) => (
                <span
                  key={left}
                  className="absolute -top-1/4 -bottom-1/4 w-px rotate-[15deg]"
                  style={{
                    left: `${left}%`,
                    backgroundImage: 'linear-gradient(to bottom, rgba(255,255,255,0.16) 50%, transparent 50%)',
                    backgroundSize: '1px 10px',
                  }}
                />
              ))}
              {tiles.map(({ logo, rail, t }) => (
                <span
                  key={logo.slug}
                  className="absolute -translate-x-1/2 -translate-y-1/2 w-[60px] h-[60px] rounded-full bg-white/[0.05] flex items-center justify-center"
                  style={{
                    top: `${t * 100}%`,
                    // Follow the rail: it leans right going up, by tan(15deg) per unit of height.
                    left: `calc(${rails[rail]}% - ${(t - 0.5) * TAN_15 * 100}cqh)`,
                  }}
                >
                  <span className="w-[34px] h-[34px] rounded-[8px] bg-white flex items-center justify-center shadow-[0_8px_24px_rgba(0,0,0,0.35)]">
                    <TechLogo icon={logo} size={18} tone="light" />
                  </span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
