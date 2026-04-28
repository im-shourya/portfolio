'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useState } from 'react';

const projects = [
  {
    label: 'Full-Stack / AI',
    title: 'RECURIT.AI',
    stack: 'Next.js, Node.js, RESTful APIs, ML',
    desc: 'AI-powered recruitment platform automating candidate evaluation. Reduced manual screening by 60-70%. ML-based resume-job matching analyzing 100+ resumes with 2x faster role-fit identification.',
    bg: 'bg-[#1B4A44]', // solid elegant background
    live: 'https://github.com/im-shourya',
    github: 'https://github.com/im-shourya',
  },
  {
    label: 'Web App / TypeScript',
    title: 'KanbanFlow',
    stack: 'React, TypeScript, Tailwind CSS, Vite',
    desc: 'Dynamic single-page Kanban app with drag-and-drop task management across unlimited customizable columns. Zero-backend architecture with localStorage for instant state persistence.',
    bg: 'bg-[#E8A325]',
    live: 'https://github.com/im-shourya',
    github: 'https://github.com/im-shourya',
  },
  {
    label: 'Backend / REST API',
    title: 'Task Management API',
    stack: 'Node.js, Express.js, MongoDB',
    desc: 'Production-grade RESTful CRUD API handling 50+ requests/minute with concurrent session support. Average response latency of under 200ms with optimized routing.',
    bg: 'bg-[#E55B3C]',
    github: 'https://github.com/im-shourya',
  },
  {
    label: 'Portfolio / TypeScript',
    title: 'Personal Portfolio',
    stack: 'TypeScript, Responsive Design, Vercel',
    desc: 'Fully responsive portfolio deployed on Vercel achieving sub-second load times and a 95+ Lighthouse score. Custom animations and professional design.',
    bg: 'bg-[#2D7A6E]',
    live: 'https://shouryaparashar.in',
  },
];

function ProjectCard({ project, idx }: { project: typeof projects[0]; idx: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
      viewport={{ once: true, margin: "-50px" }}
      onClick={() => setIsOpen(!isOpen)}
      className="group rounded-[24px] overflow-hidden relative cursor-pointer min-w-[300px] w-[300px] md:min-w-0 md:w-auto flex-shrink-0 md:flex-shrink shadow-sm hover:shadow-[0_20px_40px_rgba(21,31,30,0.15)] transition-all duration-500 hover:-translate-y-2"
    >
      <div className={`${project.bg} h-[320px] lg:h-[380px] flex flex-col justify-between p-8 relative isolate overflow-hidden`}>
        {/* Subtle noise pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay z-[-1]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
        
        {/* Top: Category Pill & Hover Arrow */}
        <div className="flex justify-between items-start relative z-10">
          <span className="inline-block font-syne text-[10px] font-bold tracking-[2px] uppercase bg-black/15 text-white/95 px-4 py-2 rounded-full backdrop-blur-md border border-white/10">
            {project.label}
          </span>

          {/* Desktop Hover Arrow */}
          <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-500 ease-[0.25,0.1,0.25,1] shadow-lg hidden md:flex origin-center transform-gpu">
            <ArrowUpRight className="w-5 h-5" />
          </div>
        </div>

        {/* Bottom: Titles */}
        <div className="relative z-10 transition-transform duration-500 ease-[0.25,0.1,0.25,1] group-hover:-translate-y-4">
          <h3 className="font-serif text-[clamp(1.8rem,3vw,2.5rem)] text-white leading-[1.1] mb-2 tracking-tight">
            {project.title}
          </h3>
          <p className="text-[13px] text-white/80 font-syne font-medium uppercase tracking-[1px]">{project.stack}</p>
        </div>

        {/* Desktop: Hover info overlay (slides up) */}
        <div className="absolute inset-0 z-20 bg-black/90 backdrop-blur-md p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 translate-y-8 group-hover:translate-y-0 transition-all duration-500 ease-[0.25,0.1,0.25,1] hidden md:flex">
          <h4 className="font-serif text-2xl text-white mb-3 tracking-tight">{project.title}</h4>
          <p className="text-white/70 text-[14px] leading-relaxed mb-8 font-light line-clamp-4">
            {project.desc}
          </p>
          <div className="flex gap-4">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center justify-center bg-white text-black px-6 py-2.5 rounded-full font-syne text-[10px] font-bold tracking-[1.5px] uppercase hover:bg-[#E8A325] transition-colors duration-300 flex-1"
              >
                Live Demo
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center justify-center bg-white/10 text-white border border-white/20 px-6 py-2.5 rounded-full font-syne text-[10px] font-bold tracking-[1.5px] uppercase hover:bg-white hover:text-black transition-colors duration-300 flex-1"
              >
                Source Code
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Mobile: Tap to reveal overlay */}
      {isOpen && (
        <div className="absolute inset-0 z-30 bg-black/95 backdrop-blur-md flex flex-col justify-center p-7 md:hidden animate-fadeIn">
          <h4 className="font-serif text-[1.6rem] text-white mb-3 tracking-tight">{project.title}</h4>
          <p className="text-white/75 text-[14px] leading-relaxed mb-8 font-light">
            {project.desc}
          </p>
          <div className="flex flex-col gap-3">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center justify-center w-full bg-white text-black px-5 py-3.5 rounded-full font-syne text-[10px] font-bold tracking-[1.5px] uppercase"
              >
                Live Demo
                <ArrowUpRight size={14} className="ml-2" />
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center justify-center w-full bg-white/10 text-white border border-white/20 px-5 py-3.5 rounded-full font-syne text-[10px] font-bold tracking-[1.5px] uppercase"
              >
                Source Code
                <ArrowUpRight size={14} className="ml-2" />
              </a>
            )}
          </div>
          <div className="mt-6 text-center">
            <span className="font-syne text-[9px] text-white/40 tracking-[2px] uppercase">
              Tap anywhere to close
            </span>
          </div>
        </div>
      )}
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 lg:py-32 px-6 lg:px-16 bg-[#F4EFE6] relative">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-50px" }}
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
          <p className="text-[#4A6360] text-[15px] max-w-[320px] md:text-right leading-relaxed font-light">
            A showcase of production-ready applications, built with clean architecture and modern performance standards.
          </p>
        </motion.div>

        {/* Mobile: Horizontal scroll container */}
        <div className="md:hidden -mx-6 px-6 relative">
          <div className="flex gap-4 overflow-x-auto pb-8 pt-4 snap-x snap-mandatory scrollbar-hide">
            {projects.map((project, idx) => (
              <div key={idx} className="snap-start py-2">
                <ProjectCard project={project} idx={idx} />
              </div>
            ))}
          </div>
          {/* Progress dots for mobile */}
          <div className="flex justify-center gap-2 mt-[-10px]">
            {projects.map((_, idx) => (
              <div key={idx} className="w-1.5 h-1.5 rounded-full bg-[#1B4A44]/20 transition-all duration-300" />
            ))}
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 gap-6 lg:gap-10">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
