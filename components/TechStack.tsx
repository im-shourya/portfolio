'use client';

import { m } from 'framer-motion';
import {
  FileCode2, FileJson, Terminal, Code, Palette,
  Atom, Globe, Server, Zap, Wind, Layers, Gauge,
  Database, CloudCog, GitBranch, Rocket, Container, Network,
} from 'lucide-react';

const categories = [
  {
    label: 'Languages',
    pills: [
      { name: 'TypeScript', Icon: FileJson },
      { name: 'JavaScript', Icon: FileCode2 },
      { name: 'Python', Icon: Terminal },
      { name: 'C / C++', Icon: Code },
      { name: 'HTML / CSS', Icon: Palette },
    ],
  },
  {
    label: 'Frameworks & Libraries',
    pills: [
      { name: 'React.js', Icon: Atom },
      { name: 'Next.js', Icon: Globe },
      { name: 'Tailwind CSS', Icon: Wind },
      { name: 'Node.js', Icon: Server },
      { name: 'Express.js', Icon: Zap },
      { name: 'NestJS', Icon: Layers },
      { name: 'FastAPI', Icon: Gauge },
    ],
  },
  {
    label: 'Databases & Tools',
    pills: [
      { name: 'PostgreSQL', Icon: Database },
      { name: 'MongoDB', Icon: Database },
      { name: 'Supabase', Icon: CloudCog },
      { name: 'Docker', Icon: Container },
      { name: 'Git & GitHub', Icon: GitBranch },
      { name: 'Vercel', Icon: Rocket },
    ],
  },
];

const learning = [
  { name: 'System Design', Icon: Network },
  { name: 'Retrieval & RAG', Icon: Database },
];

export default function TechStack() {
  return (
    <section id="tech" className="py-24 lg:py-32 px-6 lg:px-16 bg-[#151F1E] relative overflow-hidden">
      {/* Colour fields the glass refracts */}
      <div className="orb w-[800px] h-[400px] bg-[#2D7A6E]/30 top-0 left-1/2 -translate-x-1/2" />
      <div className="orb w-[420px] h-[420px] bg-[#E8A325]/10 bottom-0 right-0 [animation-delay:-8s]" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 lg:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <div className="font-syne text-[11px] font-bold tracking-[3px] uppercase text-[#E8A325] mb-4">
              Capabilities
            </div>
            <h2 className="font-serif text-[clamp(2.5rem,5vw,4rem)] text-[#F4EFE6] leading-none">
              My Tech Stack
            </h2>
          </div>
          <p className="text-[#F4EFE6]/50 text-[14px] max-w-[300px] leading-relaxed font-light md:text-right">
            Technologies and tools I use to build robust, scalable, and high-performance applications.
          </p>
        </m.div>

        {/* Editorial layout for categories */}
        <div className="flex flex-col border-b border-white/[0.08] mb-12">
          {categories.map((cat, idx) => (
            <m.div
              key={cat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col lg:flex-row gap-6 lg:gap-16 py-8 lg:py-12 border-t border-white/[0.08] group"
            >
              {/* Category title */}
              <div className="w-full lg:w-[320px] flex-shrink-0">
                <h3 className="font-serif text-[1.8rem] lg:text-[2.2rem] text-[#F4EFE6] group-hover:text-[#E8A325] transition-colors duration-500">
                  {cat.label}
                </h3>
              </div>

              {/* Glass pills */}
              <div className="flex flex-wrap items-start content-start gap-3 lg:gap-4 lg:pt-2">
                {cat.pills.map((pill) => (
                  <span
                    key={pill.name}
                    className="glass-dark inline-flex items-center gap-2 px-4 py-2 lg:px-5 lg:py-2.5 rounded-full text-[#F4EFE6]/85 font-syne text-[12px] lg:text-[13px] font-medium hover:bg-none hover:bg-[#E8A325] hover:text-[#151F1E] hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(232,163,37,0.25)] transition-all duration-300 cursor-default"
                  >
                    <pill.Icon size={14} className="opacity-80" />
                    {pill.name}
                  </span>
                ))}
              </div>
            </m.div>
          ))}
        </div>

        {/* Currently exploring bar */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="glass-dark flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 p-6 lg:p-8 rounded-2xl"
        >
          <div className="font-syne text-[11px] lg:text-[12px] font-bold tracking-[2.5px] uppercase text-[#E8A325] flex items-center gap-3">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E8A325] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#E8A325]"></span>
            </span>
            Currently Exploring
          </div>
          <div className="flex gap-5 flex-wrap">
            {learning.map((item) => (
              <span
                key={item.name}
                className="inline-flex items-center gap-1.5 font-syne text-[12px] lg:text-[13px] font-medium text-[#F4EFE6]/60 hover:text-[#F4EFE6] transition-colors duration-300"
              >
                <item.Icon size={14} />
                {item.name}
              </span>
            ))}
          </div>
        </m.div>
      </div>
    </section>
  );
}
