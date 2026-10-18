'use client';

import { useId, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRightIcon, CodeIcon } from './icons';
import SectionHeader, { Container } from './SectionHeader';

type Project = {
  label: string;
  title: string;
  tags: string[];
  desc: string;
  metrics: { value: string; label: string }[];
  /** Screenshot of the live site, captured at 1440x900. */
  image?: string;
  tint: 'teal' | 'blue' | 'amber' | 'rose' | 'violet';
  live?: string;
  github?: string;
  caseStudy?: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    label: 'AI / Retrieval · HH Goa 2026',
    title: 'Voice RAG',
    tags: ['Python', 'FastAPI', 'BM25+', 'TypeScript'],
    desc: 'Speech-to-text → hybrid retrieval → grounded answers over an English/Hindi corpus. Three-layer guardrails decline rather than guess when the corpus has no answer.',
    metrics: [
      { value: '7.87ms', label: 'P50 latency' },
      { value: '25x', label: 'under 200ms budget' },
      { value: '241', label: 'tests' },
    ],
    image: '/projects/voice-rag.webp',
    tint: 'teal',
    live: 'https://hhgoa-task2.onrender.com',
    github: 'https://github.com/im-shourya/Voice-RAG',
    caseStudy: '/blog/building-a-voice-rag-system-under-a-200ms-latency-budget',
    featured: true,
  },
  {
    label: 'System Design / AI',
    title: 'Archie',
    tags: ['TypeScript', 'Voice', 'Simulation'],
    desc: 'A system-design board you talk to. Describe changes out loud, watch the diagram update, and a queueing simulator shows where the system saturates and why.',
    metrics: [
      { value: '<1ms', label: 'local commands' },
      { value: '6', label: 'interview problems' },
    ],
    image: '/projects/archie.webp',
    tint: 'blue',
    live: 'https://archie-rb2x.onrender.com',
    github: 'https://github.com/im-shourya/Archie',
  },
  {
    label: 'Full-Stack / Hiring',
    title: 'RECRUIT.AI',
    tags: ['Next.js', 'FastAPI', 'MongoDB', 'TypeScript'],
    desc: 'Recruitment pipeline for clubs and small teams: publish a drive, collect applications and task submissions, run a recorded interview, and decide in one place.',
    metrics: [
      { value: '5 min', label: 'per candidate' },
      { value: '100', label: 'bulk decisions' },
      { value: '3', label: 'team roles' },
    ],
    image: '/projects/recruit-ai.webp',
    tint: 'amber',
    live: 'https://recruitai.shouryaparashar.in',
    github: 'https://github.com/im-shourya/RECURIT.AI',
  },
  {
    label: 'Full-Stack / Events',
    title: 'Club Events Platform',
    tags: ['Next.js', 'Express', 'Supabase', 'Resend'],
    desc: 'Event platform for student clubs with magic-link auth, one-click registration, QR-code attendance, mass mailing and post-event feedback analytics.',
    metrics: [
      { value: 'QR', label: 'check-ins' },
      { value: 'RLS', label: 'secured data' },
    ],
    image: '/projects/club-events.webp',
    tint: 'rose',
    live: 'https://events.shouryaparashar.in',
    github: 'https://github.com/im-shourya/event-managment-system',
  },
  {
    label: 'AI / Strategy',
    title: 'StratosAI',
    tags: ['Next.js', 'NestJS', 'FastAPI', 'XGBoost'],
    desc: 'AI strategy and readiness assessment engine. An adaptive chatbot interview feeds five ML models that forecast ROI, risk and budget allocation.',
    metrics: [
      { value: '5', label: 'ML models' },
      { value: '14', label: 'question flow' },
    ],
    image: '/projects/stratosai.webp',
    tint: 'violet',
    live: 'https://stratosai.shouryaparashar.in',
    github: 'https://github.com/im-shourya/StratosAI',
  },
  {
    label: 'Web App / TypeScript',
    title: 'KanbanFlow',
    tags: ['React', 'TypeScript', 'Tailwind', 'Vite'],
    desc: 'Drag-and-drop Kanban board with custom columns, priority tags, live search and themes. Zero backend: everything persists in localStorage.',
    metrics: [
      { value: '0', label: 'backend deps' },
      { value: '∞', label: 'columns' },
    ],
    image: '/projects/kanbanflow.webp',
    tint: 'teal',
    live: 'https://kanbanflow.shouryaparashar.in',
    github: 'https://github.com/im-shourya/KanbanFlow',
    caseStudy: '/blog/kanbanflow-zero-backend',
  },
  {
    label: 'Backend / REST API',
    title: 'Task Management API',
    tags: ['Node.js', 'Express', 'MongoDB'],
    desc: 'RESTful CRUD API with validation, robust error handling and concurrent session support.',
    metrics: [
      { value: '<200ms', label: 'avg latency' },
      { value: '50+', label: 'req / min' },
    ],
    tint: 'rose',
    github: 'https://github.com/im-shourya/Task-Management-CRUD-API',
  },
];

const tintClass: Record<Project['tint'], string> = {
  teal: 'bento-teal',
  blue: 'bento-blue',
  amber: 'bento-amber',
  rose: 'bento-rose',
  violet: 'bento-violet',
};

// Alternate the asymmetric corners across the grid, as the reference does.
const corners = ['corner-b', 'corner-a', 'corner-c', 'corner-d'];

function ProjectLink({ href, children }: { href: string; children: React.ReactNode }) {
  const className =
    'inline-flex items-center gap-1 text-[13px] text-ink-strong hover:text-white underline-offset-4 hover:underline';
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

function ProjectCard({ project, idx }: { project: Project; idx: number }) {
  // Hover/focus reveals details for pointer users; the toggle covers touch and keyboard.
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const corner = project.featured ? 'corner-a' : corners[idx % corners.length];
  const reveal =
    'group-data-[open=true]:opacity-100 group-data-[open=true]:translate-y-0 group-data-[open=true]:pointer-events-auto can-hover:group-hover:opacity-100 can-hover:group-hover:translate-y-0 can-hover:group-hover:pointer-events-auto group-focus-within:opacity-100 group-focus-within:translate-y-0 group-focus-within:pointer-events-auto';

  return (
    <article
      data-open={open}
      className={`group relative h-[300px] ${project.featured ? 'md:col-span-2' : ''}`}
    >
      {/* Soft glow of the screenshot behind the card */}
      {project.image && (
        <div className="absolute -inset-3 opacity-20 blur-2xl pointer-events-none" aria-hidden>
          <Image src={project.image} alt="" fill sizes="300px" className="object-cover" />
        </div>
      )}

      <div className={`bento ${tintClass[project.tint]} ${corner} absolute inset-0`}>
        {/* Preview */}
        {project.image ? (
          <div className="absolute inset-x-5 top-5 bottom-0 rounded-t-[12px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5)] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] can-hover:group-hover:scale-[1.03]">
            <Image
              src={project.image}
              alt={`${project.title} homepage`}
              width={1200}
              height={750}
              sizes={project.featured ? '(max-width: 768px) 90vw, 600px' : '(max-width: 768px) 90vw, 300px'}
              className="w-full h-full object-cover object-top"
            />
          </div>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-white/[0.07]" aria-hidden>
            <CodeIcon size={110} />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#131311] via-[#131311]/90 via-35% to-transparent to-75% pointer-events-none" />

        {/* Caption */}
        <div className="absolute inset-x-0 bottom-0 p-6 transition-opacity duration-300 group-data-[open=true]:opacity-0 can-hover:group-hover:opacity-0 group-focus-within:opacity-0">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
            <h3 className="text-[22px] leading-[1.15] font-normal text-ink-strong">{project.title}</h3>
            <span className="text-[10px] uppercase tracking-[0.04em] text-white bg-white/10 backdrop-blur-[5px] px-2.5 py-1 rounded-[20px]">
              {project.label.split('·')[0].trim()}
            </span>
          </div>
          <p className="text-[14px] text-ink-strong/75 mt-2 line-clamp-1">{project.desc}</p>
        </div>

        {/* Details */}
        <div
          id={panelId}
          className={`absolute inset-0 z-[4] p-5 flex flex-col gap-3 bg-[#131311]/92 backdrop-blur-md overflow-y-auto opacity-0 translate-y-3 pointer-events-none transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] ${reveal}`}
        >
          <h3 aria-hidden className="text-[20px] leading-[1.15] font-normal text-ink-strong pr-12">
            {project.title}
          </h3>
          <p className="text-[13px] leading-[1.5] text-ink line-clamp-4">{project.desc}</p>
          <dl className="flex flex-wrap gap-x-6 gap-y-2">
            {project.metrics.map((metric) => (
              <div key={metric.label}>
                <dd className="text-[17px] leading-none text-ink-strong">{metric.value}</dd>
                <dt className="text-[11px] text-ink-muted mt-1">{metric.label}</dt>
              </div>
            ))}
          </dl>
          <p className="text-[12px] text-ink-muted truncate">
            <span className="sr-only">Tech stack: </span>
            {project.tags.join(' · ')}
          </p>
          <div className="mt-auto pt-3 border-t border-white/10 flex flex-wrap gap-x-4 gap-y-1">
            {project.live && <ProjectLink href={project.live}>Visit site</ProjectLink>}
            {project.caseStudy && <ProjectLink href={project.caseStudy}>Case study</ProjectLink>}
            {project.github && <ProjectLink href={project.github}>Source</ProjectLink>}
          </div>
        </div>

        <button
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          aria-label={`${open ? 'Hide' : 'Show'} details for ${project.title}`}
          onClick={() => setOpen((v) => !v)}
          className="absolute top-4 right-4 z-[6] w-9 h-9 rounded-full bg-black/45 backdrop-blur border border-white/15 text-white flex items-center justify-center hover:bg-black/65 transition-colors"
        >
          <span className="absolute w-3.5 h-px bg-current" />
          <span className="absolute w-px h-3.5 bg-current transition-transform duration-300 group-data-[open=true]:scale-y-0 can-hover:group-hover:scale-y-0 group-focus-within:scale-y-0" />
        </button>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-8 sm:py-12 scroll-mt-20">
      <Container>
        <SectionHeader
          title="Selected work"
          note="Things I've shipped: measured, tested, and live. Hover a card, or tap +, for details."
          action={
            <a
              href="https://github.com/im-shourya"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[15px] text-ink-muted hover:text-ink-strong transition-colors"
            >
              More on GitHub <ArrowUpRightIcon size={11} />
            </a>
          }
        />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
          {projects.map((project, idx) => (
            <ProjectCard key={project.title} project={project} idx={idx} />
          ))}
        </div>
      </Container>
    </section>
  );
}
