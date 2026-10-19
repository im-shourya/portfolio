import {
  siTypescript, siJavascript, siPython, siCplusplus, siHtml5, siCss,
  siReact, siNextdotjs, siTailwindcss, siNodedotjs, siExpress, siNestjs, siFastapi,
  siPostgresql, siMongodb, siSupabase, siDocker, siGit, siVercel,
  type SimpleIcon,
} from 'simple-icons';
import { Container } from './SectionHeader';
import TechLogo from './TechLogo';
import type { CrayonColor } from './projects-data';

type Folder = {
  category: string;
  title: string;
  color: CrayonColor;
  logos: SimpleIcon[];
  items: string[];
};

// One folder per area, logos tucked behind the flap like the bumaga case folders.
const folders: Folder[] = [
  {
    category: 'Languages',
    title: 'TypeScript & Python',
    color: 'blue',
    logos: [siTypescript, siPython, siJavascript, siCplusplus],
    items: ['TypeScript', 'JavaScript', 'Python', 'C / C++', 'HTML / CSS'],
  },
  {
    category: 'Frontend',
    title: 'React & Next.js',
    color: 'pink',
    logos: [siReact, siNextdotjs, siTailwindcss],
    items: ['React.js', 'Next.js', 'Tailwind CSS'],
  },
  {
    category: 'Backend',
    title: 'Node & FastAPI',
    color: 'green',
    logos: [siNodedotjs, siFastapi, siNestjs, siExpress],
    items: ['Node.js', 'Express.js', 'NestJS', 'FastAPI'],
  },
  {
    category: 'Databases',
    title: 'Postgres & Mongo',
    color: 'yellow',
    logos: [siPostgresql, siMongodb, siSupabase],
    items: ['PostgreSQL', 'MongoDB', 'Supabase'],
  },
  {
    category: 'Ship it',
    title: 'Docker & Git',
    color: 'orange',
    logos: [siDocker, siGit, siVercel],
    items: ['Docker', 'Git & GitHub', 'Vercel'],
  },
];

const ribbonA = [siTypescript, siPython, siReact, siNextdotjs, siNodedotjs, siFastapi, siPostgresql, siDocker];
const ribbonB = [siMongodb, siTailwindcss, siNestjs, siSupabase, siGit, siVercel, siExpress, siHtml5, siCss];

const folderColor: Record<CrayonColor, string> = {
  blue: 'var(--c-blue)',
  pink: 'var(--c-pink)',
  green: '#92D14F',
  yellow: 'var(--c-yellow)',
  orange: 'var(--c-orange)',
  paper: 'var(--c-paper)',
  mint: 'var(--c-mint)',
  cyan: 'var(--c-cyan)',
};

function Ribbon({ logos, className, reverse }: { logos: SimpleIcon[]; className: string; reverse?: boolean }) {
  const track = (hidden: boolean) => (
    <div className="ribbon-track" aria-hidden={hidden || undefined}>
      {logos.map((logo) => (
        <span key={logo.slug} className="flex items-center gap-2.5 text-[15px] sm:text-[17px] font-semibold">
          <TechLogo icon={logo} size={20} tone={className.includes('bg-c-yellow') ? 'light' : 'dark'} />
          {logo.title}
          <span className="ml-6 text-[14px]" aria-hidden>✦</span>
        </span>
      ))}
    </div>
  );
  return (
    <div className={`ribbon py-3 ${reverse ? 'ribbon-reverse' : ''} ${className}`} aria-hidden>
      {track(false)}
      {track(true)}
    </div>
  );
}

function FolderCard({ folder }: { folder: Folder }) {
  const onBlue = folder.color === 'blue';
  return (
    <li className="folder" style={{ ['--folder' as string]: folderColor[folder.color] }}>
      <div className="folder-back" aria-hidden />
      <div className="folder-items" aria-hidden>
        {folder.logos.map((logo) => (
          <span
            key={logo.slug}
            className="w-[58px] h-[58px] rounded-[14px] bg-white flex items-center justify-center shadow-[0_8px_20px_rgba(0,0,0,0.25)]"
          >
            <TechLogo icon={logo} size={30} tone="light" />
          </span>
        ))}
      </div>
      <div className={`folder-front p-5 flex flex-col justify-end ${onBlue ? 'text-white' : 'text-c-ink'}`}>
        <p className="text-[13px] flex items-center gap-2 opacity-80">
          <span className="w-1.5 h-1.5 rounded-full bg-current" aria-hidden />
          {folder.category}
        </p>
        <h3 className="text-[24px] leading-tight font-semibold tracking-tight mt-1">«{folder.title}»</h3>
        <p className="text-[13px] mt-2 opacity-75">{folder.items.join(' · ')}</p>
      </div>
    </li>
  );
}

export default function TechStack() {
  return (
    <section id="tech" className="py-16 sm:py-24 scroll-mt-20 overflow-hidden">
      <Container>
        <header className="relative text-center">
          <h2 className="font-display text-[clamp(4rem,12vw,8.5rem)] text-ink-strong">The Stack</h2>
          <span className="hidden sm:block absolute left-[14%] top-[62%] -rotate-[8deg] rounded-full bg-c-green/90 text-c-ink px-4 py-1.5 text-[13px] sm:text-[15px] font-semibold">
            TypeScript first
          </span>
          <span className="hidden sm:block absolute right-[14%] top-[2%] rotate-[7deg] rounded-full bg-c-pink text-c-ink px-4 py-1.5 text-[13px] sm:text-[15px] font-semibold">
            always learning
          </span>
          <p className="mt-6 text-[16px] text-ink-muted max-w-[44ch] mx-auto">
            Tools I use to build fast, tested applications.
          </p>
        </header>
      </Container>

      {/* Crossed ribbons */}
      <div className="relative my-12 sm:my-16 h-[130px]">
        <Ribbon logos={ribbonA} className="absolute inset-x-[-5%] top-4 rotate-[-3deg] bg-c-yellow text-c-ink" />
        <Ribbon logos={ribbonB} reverse className="absolute inset-x-[-5%] top-14 rotate-[2.5deg] bg-[#0E0B08] text-c-paper border-y border-white/10" />
      </div>

      <Container>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-8">
          {folders.map((folder) => (
            <FolderCard key={folder.category} folder={folder} />
          ))}

          {/* Learning folder: sticky notes instead of logos */}
          <li className="folder" style={{ ['--folder' as string]: 'var(--c-cyan)' }}>
            <div className="folder-back" aria-hidden />
            <div className="folder-items" aria-hidden>
              <span className="note bg-c-tan font-hand text-[18px] -rotate-6 mt-3">system design</span>
              <span className="note bg-c-pink-soft font-hand text-[18px] rotate-3 mt-1">RAG</span>
            </div>
            <div className="folder-front p-5 flex flex-col justify-end text-c-ink">
              <p className="text-[13px] flex items-center gap-2 opacity-80">
                <span className="w-1.5 h-1.5 rounded-full bg-current" aria-hidden />
                Learning now
              </p>
              <h3 className="text-[24px] leading-tight font-semibold tracking-tight mt-1">«System design & RAG»</h3>
              <p className="text-[13px] mt-2 opacity-75">Mostly by building: Archie and Voice RAG.</p>
            </div>
          </li>
        </ul>
      </Container>
    </section>
  );
}
