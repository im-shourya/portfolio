'use client';

import { m } from 'framer-motion';
import {
  FileCode2, FileJson, Terminal, Code, Palette,
  Atom, Globe, Server, Zap, Wind, Layers, Gauge,
  Database, CloudCog, GitBranch, Rocket, Container, Network,
} from 'lucide-react';
import Reveal from './Reveal';

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
    label: 'Frameworks',
    pills: [
      { name: 'React', Icon: Atom },
      { name: 'Next.js', Icon: Globe },
      { name: 'Tailwind CSS', Icon: Wind },
      { name: 'Node.js', Icon: Server },
      { name: 'Express', Icon: Zap },
      { name: 'NestJS', Icon: Layers },
      { name: 'FastAPI', Icon: Gauge },
    ],
  },
  {
    label: 'Data & Tools',
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

const exploring = [
  { name: 'System Design', Icon: Network },
  { name: 'Retrieval & RAG', Icon: Database },
];

export default function TechStack() {
  return (
    <section id="tech" className="py-24 lg:py-32 px-6 lg:px-16 bg-[#151F1E] relative overflow-hidden">
      <div className="orb w-[700px] h-[420px] bg-[#2D7A6E]/30 -top-20 left-1/2 -translate-x-1/2" />
      <div className="orb w-[400px] h-[400px] bg-[#E55B3C]/10 bottom-0 right-0 [animation-delay:-7s]" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="mb-14 lg:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <Reveal>
            <div className="font-syne text-[11px] font-bold tracking-[3px] uppercase text-[#E8A325] mb-4">Capabilities</div>
            <h2 className="font-serif text-[clamp(2.5rem,5vw,4rem)] text-[#F4EFE6] leading-none">My Tech Stack</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-[#F4EFE6]/55 text-[15px] max-w-[320px] leading-relaxed font-light md:text-right">
              The tools I reach for to build fast, tested, production-ready software.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6 mb-6">
          {categories.map((cat, idx) => (
            <m.div
              key={cat.label}
              initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, margin: '-50px' }}
              className="glass-dark glass-sheen rounded-[28px] p-7 lg:p-8"
            >
              <div className="relative z-[2]">
                <div className="flex items-baseline justify-between mb-7">
                  <h3 className="font-serif text-[1.8rem] text-[#F4EFE6]">{cat.label}</h3>
                  <span className="font-syne text-[10px] font-bold tracking-[2px] text-white/35">
                    {String(cat.pills.length).padStart(2, '0')}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {cat.pills.map((pill) => (
                    <span
                      key={pill.name}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] border border-white/[0.1] text-[#F4EFE6]/85 font-syne text-[12px] font-medium shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] hover:bg-[#E8A325] hover:text-[#151F1E] hover:border-[#E8A325] hover:-translate-y-0.5 transition-all duration-300"
                    >
                      <pill.Icon size={14} />
                      {pill.name}
                    </span>
                  ))}
                </div>
              </div>
            </m.div>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="glass-dark rounded-[24px] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 px-7 py-6">
            <div className="font-syne text-[11px] font-bold tracking-[2.5px] uppercase text-[#E8A325] flex items-center gap-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E8A325] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#E8A325]" />
              </span>
              Currently Exploring
            </div>
            <div className="flex gap-5 flex-wrap">
              {exploring.map((item) => (
                <span key={item.name} className="inline-flex items-center gap-2 font-syne text-[13px] font-medium text-[#F4EFE6]/70">
                  <item.Icon size={15} />
                  {item.name}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
