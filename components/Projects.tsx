import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRightIcon, CodeIcon } from './icons';
import { Container } from './SectionHeader';
import { projects, crayon, projectId, type Project } from './projects-data';

// Slabs stick under the header and stack, tabs stepping right so every
// earlier tab stays visible, like the Crayon template's folder stack.
const STICK_TOP = 140; // header (80) + gap (16) + tab (44)
const TAB_STEP = 158;

function ProjectLink({ href, children }: { href: string; children: React.ReactNode }) {
  const className =
    'label-mono inline-flex items-center gap-2 border-b-2 border-current pb-1 hover:opacity-70 transition-opacity';
  const content = (
    <>
      {children}
      <ArrowUpRightIcon size={11} />
    </>
  );
  if (href.startsWith('/')) {
    return (
      <Link href={href} className={className}>
        {content}
      </Link>
    );
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {content}
    </a>
  );
}

function Links({ project }: { project: Project }) {
  return (
    <div className="flex flex-wrap gap-x-6 gap-y-3">
      {project.live && <ProjectLink href={project.live}>Visit site</ProjectLink>}
      {project.caseStudy && <ProjectLink href={project.caseStudy}>Case study</ProjectLink>}
      {project.github && <ProjectLink href={project.github}>Source</ProjectLink>}
    </div>
  );
}

function Tags({ project, dark }: { project: Project; dark: boolean }) {
  return (
    <ul className="flex flex-wrap gap-2" aria-label="Tech stack">
      {project.tags.map((tag) => (
        <li
          key={tag}
          className={`tag-cut label-mono !text-[10px] !tracking-[0.12em] ${dark ? 'bg-white text-c-ink' : 'bg-c-ink text-white'}`}
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}

function Shot({ project, className = '' }: { project: Project; className?: string }) {
  if (!project.image) {
    return (
      <div className={`relative flex items-center justify-center bg-c-ink/10 ${className}`} aria-hidden>
        <CodeIcon size={90} className="opacity-25" />
      </div>
    );
  }
  return (
    <div className={`relative ${className}`}>
      <span className="tape -top-2 -left-5 -rotate-[8deg]" aria-hidden />
      <span className="tape -top-2 -right-5 rotate-[8deg]" aria-hidden />
      <div className="h-full border-[3px] border-white bg-white shadow-[0_18px_40px_rgba(0,0,0,0.28)] overflow-hidden">
        <Image
          src={project.image}
          alt={`${project.title} homepage`}
          width={1200}
          height={750}
          sizes="(max-width: 768px) 90vw, 560px"
          className="w-full h-full object-cover object-top"
        />
      </div>
    </div>
  );
}

function Slab({ project, idx }: { project: Project; idx: number }) {
  const tone = crayon[project.color];
  return (
    <article
      id={projectId(project.title)}
      className="slab relative mt-16 md:mt-24 scroll-mt-36"
      style={{ ['--stick' as string]: `${STICK_TOP}px`, ['--tab-x' as string]: `${idx * TAB_STEP}px` }}
    >
      <div
        className={`slab-tab-pos absolute bottom-[calc(100%-1px)] slab-tab-left ${tone.bg} ${tone.text} label-mono whitespace-nowrap pl-6 pr-10 md:px-9 h-11 flex items-center`}
      >
        ✦ Project {String(idx + 1).padStart(2, '0')}
      </div>
      <div
        className={`${tone.bg} ${tone.text} grid md:grid-cols-2 gap-8 md:gap-10 p-7 sm:p-10 lg:p-12 md:h-[min(560px,calc(100svh-170px))] md:overflow-hidden`}
      >
        <div className="flex flex-col min-h-0">
          <p className="label-mono flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-current" aria-hidden />
            {project.label}
          </p>
          <h3 className="mt-5 text-[44px] sm:text-[60px] leading-[0.95] font-semibold tracking-[-0.03em]">
            {project.title}
          </h3>
          <p className="mt-5 text-[16px] sm:text-[17px] leading-relaxed opacity-85 max-w-[46ch]">{project.desc}</p>

          <dl className="mt-7 flex flex-wrap gap-x-8 gap-y-4">
            {project.metrics.map((metric) => (
              <div key={metric.label} className="flex flex-col">
                <dt className="order-last label-mono !text-[10px] !tracking-[0.12em] opacity-70 mt-2">{metric.label}</dt>
                <dd className="text-[28px] font-semibold leading-none tracking-tight">{metric.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-8">
            <Links project={project} />
          </div>
          <div className="mt-auto pt-8">
            <Tags project={project} dark={tone.onDark} />
          </div>
        </div>
        <Shot project={project} className="aspect-[16/11] md:aspect-auto md:h-full mx-2 md:mx-0 mt-3 md:mt-2" />
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="pt-20 sm:pt-28 pb-8 sm:pb-12 scroll-mt-20">
      <Container>
        <header className="text-center">
          <p className="font-hand text-[22px] text-ink">explore my work!</p>
          <h2 className="font-display mt-3 text-[clamp(4rem,12vw,8.5rem)] text-ink-strong">
            Selected
            <br />
            Work
          </h2>
          <p className="note mt-6 bg-c-tan -rotate-2 text-[14px] max-w-[30ch]">
            Things I&apos;ve shipped: measured, tested, and live.
          </p>
        </header>

        <div className="mt-2">
          {projects.map((project, idx) => (
            <Slab key={project.title} project={project} idx={idx} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://github.com/im-shourya"
            target="_blank"
            rel="noopener noreferrer"
            className="label-mono inline-flex items-center gap-2 text-ink-muted hover:text-ink-strong transition-colors"
          >
            More on GitHub <ArrowUpRightIcon size={11} />
          </a>
        </div>
      </Container>
    </section>
  );
}
