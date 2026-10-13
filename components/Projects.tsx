'use client';

import Link from 'next/link';
import { m } from 'framer-motion';

type Project = {
  label: string;
  title: string;
  tags: string[];
  desc: string;
  metrics: { value: string; label: string }[];
  gradient: string;
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
    gradient: 'from-[#1B4A44] via-[#2D7A6E] to-[#4EADA0]',
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
    gradient: 'from-[#2A44C8] via-[#3B5BDB] to-[#151F1E]',
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
    gradient: 'from-[#E8A325] via-[#F5C842] to-[#E55B3C]',
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
    gradient: 'from-[#E55B3C] via-[#C9443A] to-[#151F1E]',
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
    gradient: 'from-[#2D7A6E] via-[#1B4A44] to-[#151F1E]',
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
    gradient: 'from-[#4EADA0] via-[#2D7A6E] to-[#E8A325]',
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
    gradient: 'from-[#151F1E] via-[#1B4A44] to-[#E55B3C]',
    github: 'https://github.com/im-shourya/Task-Management-CRUD-API',
  },
];

function ProjectLink({ href, children }: { href: string; children: React.ReactNode }) {
  const className =
    'apple-link inline-flex items-center font-syne text-[12px] font-semibold tracking-[0.5px] text-white';
  const content = (
    <>
      {children}
      <span className="apple-chevron ml-1" aria-hidden>
        ›
      </span>
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
  return (
    <m.article
      initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      transition={{ duration: 0.7, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, margin: '-50px' }}
      className={`group relative overflow-hidden rounded-[28px] bg-gradient-to-br ${project.gradient} p-3 sm:p-4 shadow-[0_10px_30px_rgba(21,31,30,0.12)] hover:shadow-[0_24px_50px_rgba(21,31,30,0.2)] hover:-translate-y-1.5 transition-all duration-500 ${
        project.featured ? 'md:col-span-2' : ''
      }`}
    >
      {/* Light orbs that the glass refracts */}
      <div className="absolute -top-16 -right-10 w-64 h-64 rounded-full bg-white/25 blur-3xl pointer-events-none transition-transform duration-700 group-hover:scale-125" />
      <div className="absolute -bottom-20 -left-10 w-72 h-72 rounded-full bg-black/20 blur-3xl pointer-events-none" />

      <div className={`relative flex flex-col ${project.featured ? 'md:flex-row md:items-stretch' : ''} gap-3 h-full`}>
        {/* Title area */}
        <div className={`flex flex-col justify-between p-5 sm:p-6 min-h-[200px] ${project.featured ? 'md:flex-1 md:min-h-[340px]' : ''}`}>
          <div>
            <span className="glass-dark font-syne text-[10px] font-bold tracking-[2px] uppercase text-white/95 px-4 py-2 rounded-full">
              {project.label}
            </span>
          </div>
          <h3 className="font-serif text-[clamp(2rem,4vw,3.25rem)] text-white leading-[1.05] tracking-tight mt-10 drop-shadow-sm">
            {project.title}
          </h3>
        </div>

        {/* Liquid glass panel */}
        <div className={`glass-dark glass-sheen rounded-[22px] p-5 sm:p-6 flex flex-col gap-5 ${project.featured ? 'md:w-[48%]' : ''}`}>
          <p className="relative z-[2] text-white/85 text-[14px] leading-relaxed font-light">{project.desc}</p>

          <div className="relative z-[2] grid grid-cols-2 sm:grid-cols-3 gap-3">
            {project.metrics.map((metric) => (
              <div key={metric.label}>
                <div className="font-serif text-[1.6rem] leading-none text-white">{metric.value}</div>
                <div className="font-syne text-[9px] font-bold tracking-[1.5px] uppercase text-white/55 mt-1.5">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>

          <div className="relative z-[2] flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="font-syne text-[10px] font-semibold tracking-[1px] text-white/90 bg-white/10 border border-white/15 px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="relative z-[2] flex flex-wrap gap-x-6 gap-y-2 pt-4 mt-auto border-t border-white/10">
            {project.live && <ProjectLink href={project.live}>Visit site</ProjectLink>}
            {project.caseStudy && <ProjectLink href={project.caseStudy}>Read case study</ProjectLink>}
            {project.github && <ProjectLink href={project.github}>Source</ProjectLink>}
          </div>
        </div>
      </div>
    </m.article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 lg:py-32 px-6 lg:px-16 bg-[#F4EFE6] relative overflow-hidden">
      {/* Ambient colour behind the section */}
      <div className="absolute top-40 -left-40 w-[600px] h-[600px] bg-[#4EADA0]/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 -right-40 w-[600px] h-[600px] bg-[#E8A325]/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto relative">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-50px' }}
          className="flex flex-col md:flex-row justify-between md:items-end gap-6 mb-16 lg:mb-20"
        >
          <div>
            <div className="font-syne text-[11px] font-bold tracking-[3px] uppercase text-[#E8A325] mb-4">
              Portfolio
            </div>
            <h2 className="font-serif text-[clamp(2.5rem,5vw,4rem)] text-[#1B4A44] leading-none">
              Selected Works
            </h2>
          </div>
          <div className="md:text-right max-w-[340px]">
            <p className="text-[#4A6360] text-[15px] leading-relaxed font-light mb-3">
              Things I've shipped: measured, tested, and live.
            </p>
            <a
              href="https://github.com/im-shourya"
              target="_blank"
              rel="noopener noreferrer"
              className="apple-link font-syne text-[12px] font-semibold text-[#1B4A44]"
            >
              More on GitHub <span className="apple-chevron" aria-hidden>›</span>
            </a>
          </div>
        </m.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, idx) => (
            <ProjectCard key={project.title} project={project} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
