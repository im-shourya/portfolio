import {
  siTypescript, siJavascript, siPython, siCplusplus, siHtml5, siCss,
  siReact, siNextdotjs, siTailwindcss, siNodedotjs, siExpress, siNestjs, siFastapi,
  siPostgresql, siMongodb, siSupabase, siDocker, siGit, siVercel,
  type SimpleIcon,
} from 'simple-icons';
import { Container } from './SectionHeader';
import TechLogo, { TechLogoSprite } from './TechLogo';
import type { CrayonColor } from './projects-data';

type StackFile = { name: string; logos: SimpleIcon[] };

type Folder = {
  category: string;
  title: string;
  color: CrayonColor;
  files: StackFile[];
  note?: string;
};

// One folder per area; every tool is a file tucked inside that slides out on hover.
const folders: Folder[] = [
  {
    category: 'Languages',
    title: 'TypeScript & Python',
    color: 'blue',
    files: [
      { name: 'TypeScript', logos: [siTypescript] },
      { name: 'JavaScript', logos: [siJavascript] },
      { name: 'Python', logos: [siPython] },
      { name: 'C / C++', logos: [siCplusplus] },
      { name: 'HTML / CSS', logos: [siHtml5, siCss] },
    ],
  },
  {
    category: 'Frontend',
    title: 'React & Next.js',
    color: 'pink',
    files: [
      { name: 'React.js', logos: [siReact] },
      { name: 'Next.js', logos: [siNextdotjs] },
      { name: 'Tailwind CSS', logos: [siTailwindcss] },
    ],
  },
  {
    category: 'Backend',
    title: 'Node & FastAPI',
    color: 'green',
    files: [
      { name: 'Node.js', logos: [siNodedotjs] },
      { name: 'Express.js', logos: [siExpress] },
      { name: 'NestJS', logos: [siNestjs] },
      { name: 'FastAPI', logos: [siFastapi] },
    ],
  },
  {
    category: 'Databases',
    title: 'Postgres & Mongo',
    color: 'yellow',
    files: [
      { name: 'PostgreSQL', logos: [siPostgresql] },
      { name: 'MongoDB', logos: [siMongodb] },
      { name: 'Supabase', logos: [siSupabase] },
    ],
  },
  {
    category: 'Ship it',
    title: 'Docker & Git',
    color: 'orange',
    files: [
      { name: 'Docker', logos: [siDocker] },
      { name: 'Git & GitHub', logos: [siGit] },
      { name: 'Vercel', logos: [siVercel] },
    ],
  },
  {
    category: 'Learning now',
    title: 'System design & RAG',
    color: 'cyan',
    files: [
      { name: 'System design', logos: [] },
      { name: 'Retrieval & RAG', logos: [] },
    ],
    note: 'Mostly by building: Archie and Voice RAG.',
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

function FolderCard({ folder, index }: { folder: Folder; index: number }) {
  const onBlue = folder.color === 'blue';
  const n = folder.files.length;
  return (
    // Focusable so keyboard users can open the folder too.
    <li tabIndex={0} data-reveal style={{ ['--folder' as string]: folderColor[folder.color], ['--d' as string]: index % 3 }} className="folder outline-none rounded-[16px] focus-visible:ring-2 focus-visible:ring-c-yellow focus-visible:ring-offset-4 focus-visible:ring-offset-background">
      <div className="folder-back" aria-hidden />
      <div className="folder-items" aria-hidden>
        {folder.files.map((file, i) => {
          const offset = i - (n - 1) / 2;
          return (
            <span
              key={file.name}
              className="file"
              style={{
                ['--i' as string]: i,
                ['--r' as string]: `${offset * 5}deg`,
                ['--lift' as string]: `${Math.abs(offset) * 5 - 14}px`,
              }}
            >
              {file.logos.length > 0 ? (
                <span className="flex gap-1">
                  {file.logos.map((logo) => (
                    <TechLogo key={logo.slug} icon={logo} size={file.logos.length > 1 ? 20 : 26} tone="light" />
                  ))}
                </span>
              ) : (
                <span className="font-hand text-[22px] leading-none">✎</span>
              )}
              {file.name}
            </span>
          );
        })}
      </div>
      <div className={`folder-front p-5 flex flex-col justify-end ${onBlue ? 'text-white' : 'text-c-ink'}`}>
        <p className="text-[13px] flex items-center gap-2 opacity-90">
          <span className="w-1.5 h-1.5 rounded-full bg-current" aria-hidden />
          {folder.category}
        </p>
        <h3 className="text-[24px] leading-tight font-semibold tracking-tight mt-1">«{folder.title}»</h3>
        <p className="text-[13px] mt-2 opacity-90">{folder.note ?? folder.files.map((f) => f.name).join(' · ')}</p>
      </div>
    </li>
  );
}

// `as` is h1 on the section's own route, h2 on the home page.
export default function TechStack({ as: Heading = 'h2' }: { as?: 'h1' | 'h2' } = {}) {
  return (
    <section id="tech" className="defer-render py-16 sm:py-24 scroll-mt-20 overflow-hidden">
      <TechLogoSprite icons={[...ribbonA, ...ribbonB, ...folders.flatMap((f) => f.files.flatMap((file) => file.logos))]} />
      <Container>
        <header className="relative text-center">
          <Heading data-reveal="title" className="font-display text-[clamp(4rem,12vw,8.5rem)] text-ink-strong">The Stack</Heading>
          <span data-reveal="pop" style={{ ['--d' as string]: 3 }} className="hidden sm:block absolute left-[14%] top-[62%] -rotate-[8deg] rounded-full bg-c-green/90 text-c-ink px-4 py-1.5 text-[13px] sm:text-[15px] font-semibold">
            TypeScript first
          </span>
          <span data-reveal="pop" style={{ ['--d' as string]: 4 }} className="hidden sm:block absolute right-[14%] top-[2%] rotate-[7deg] rounded-full bg-c-pink text-c-ink px-4 py-1.5 text-[13px] sm:text-[15px] font-semibold">
            always learning
          </span>
          <p data-reveal style={{ ['--d' as string]: 2 }} className="mt-6 text-[16px] text-ink-muted max-w-[44ch] mx-auto">
            Tools I use to build fast, tested applications.
          </p>
        </header>
      </Container>

      {/* Crossed ribbons */}
      <div data-reveal className="relative my-12 sm:my-16 h-[130px]">
        <Ribbon logos={ribbonA} className="absolute inset-x-[-5%] top-4 rotate-[-3deg] bg-c-yellow text-c-ink" />
        <Ribbon logos={ribbonB} reverse className="absolute inset-x-[-5%] top-14 rotate-[2.5deg] bg-[#0E0B08] text-c-paper border-y border-white/10" />
      </div>

      <Container>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-8">
          {folders.map((folder, i) => (
            <FolderCard key={folder.category} folder={folder} index={i} />
          ))}

        </ul>
      </Container>
    </section>
  );
}
