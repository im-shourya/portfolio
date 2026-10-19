import SectionHeader, { Container } from './SectionHeader';
import { CodeIcon, LayersIcon, DataIcon, CubeIcon, GlobeIcon, BoltIcon, CloudIcon } from './icons';

const categories = [
  { label: 'Languages', pills: ['TypeScript', 'JavaScript', 'Python', 'C / C++', 'HTML / CSS'] },
  {
    label: 'Frameworks & Libraries',
    pills: ['React.js', 'Next.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'NestJS', 'FastAPI'],
  },
  { label: 'Databases & Tools', pills: ['PostgreSQL', 'MongoDB', 'Supabase', 'Docker', 'Git & GitHub', 'Vercel'] },
];

const learning = ['System Design', 'Retrieval & RAG'];

// Tiles riding the diagonal rails in the "currently learning" card. `rail` picks the line, `at` the height.
// Tiles riding the diagonal rails in the "currently learning" card.
// `rail` picks the line, `t` is the height on it (0 = top edge, 1 = bottom edge).
const tiles = [
  { Icon: LayersIcon, rail: 0, t: 0.62 },
  { Icon: DataIcon, rail: 1, t: 0.3 },
  { Icon: CodeIcon, rail: 2, t: 0.68 },
  { Icon: BoltIcon, rail: 2, t: 0.26 },
  { Icon: CubeIcon, rail: 3, t: 0.48 },
  { Icon: GlobeIcon, rail: 4, t: 0.3 },
  { Icon: CloudIcon, rail: 4, t: 0.74 },
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
                  <li key={pill} className="chip">
                    {pill}
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
              {tiles.map(({ Icon, rail, t }, i) => (
                <span
                  key={i}
                  className="absolute -translate-x-1/2 -translate-y-1/2 w-[60px] h-[60px] rounded-full bg-white/[0.05] flex items-center justify-center"
                  style={{
                    top: `${t * 100}%`,
                    // Follow the rail: it leans right going up, by tan(15deg) per unit of height.
                    left: `calc(${rails[rail]}% - ${(t - 0.5) * TAN_15 * 100}cqh)`,
                  }}
                >
                  <span className="w-[34px] h-[34px] rounded-[8px] bg-white text-[#2A2725] flex items-center justify-center shadow-[0_8px_24px_rgba(0,0,0,0.35)]">
                    <Icon size={18} />
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
