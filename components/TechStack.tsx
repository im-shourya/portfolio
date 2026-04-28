'use client';

import { motion } from 'framer-motion';
import {
  FileCode2, FileJson, Terminal, Code, Coffee, Palette,
  Atom, Globe, Server, Zap, Wind, Bolt,
  Database, CloudCog, GitBranch, Rocket, Send, Link2,
} from 'lucide-react';

const categories = [
  {
    label: 'Languages',
    pills: [
      { name: 'JavaScript', Icon: FileCode2 },
      { name: 'TypeScript', Icon: FileJson },
      { name: 'Python', Icon: Terminal },
      { name: 'C / C++', Icon: Code },
      { name: 'Java', Icon: Coffee },
      { name: 'HTML / CSS', Icon: Palette },
    ],
  },
  {
    label: 'Frameworks & Libraries',
    pills: [
      { name: 'React.js', Icon: Atom },
      { name: 'Next.js', Icon: Globe },
      { name: 'Node.js', Icon: Server },
      { name: 'Express.js', Icon: Zap },
      { name: 'Tailwind CSS', Icon: Wind },
      { name: 'Vite', Icon: Bolt },
    ],
  },
  {
    label: 'Databases & Tools',
    pills: [
      { name: 'MongoDB', Icon: Database },
      { name: 'Supabase', Icon: CloudCog },
      { name: 'Git & GitHub', Icon: GitBranch },
      { name: 'Vercel', Icon: Rocket },
      { name: 'Postman', Icon: Send },
      { name: 'REST APIs', Icon: Link2 },
    ],
  },
];

const learning = [
  { name: 'Docker', Icon: Server },
  { name: 'System Design', Icon: GitBranch },
  { name: 'PostgreSQL', Icon: Database },
];

export default function TechStack() {
  return (
    <section id="tech" className="py-24 lg:py-32 px-6 lg:px-16 bg-[#151F1E] relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#1B4A44]/30 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        <motion.div
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
        </motion.div>

        {/* Editorial Layout for Categories */}
        <div className="flex flex-col border-b border-white/[0.06] mb-12">
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col lg:flex-row gap-6 lg:gap-16 py-8 lg:py-12 border-t border-white/[0.06] group"
            >
              {/* Category Title */}
              <div className="w-full lg:w-[320px] flex-shrink-0">
                <h3 className="font-serif text-[1.8rem] lg:text-[2.2rem] text-[#F4EFE6] group-hover:text-[#E8A325] transition-colors duration-500">
                  {cat.label}
                </h3>
              </div>

              {/* Pills */}
              <div className="flex flex-wrap gap-3 lg:gap-4 lg:pt-2">
                {cat.pills.map((pill) => (
                  <span
                    key={pill.name}
                    className="inline-flex items-center gap-2 px-4 py-2 lg:px-5 lg:py-2.5 rounded-full bg-transparent border border-white/[0.12] text-[#F4EFE6]/80 font-syne text-[12px] lg:text-[13px] font-medium hover:bg-[#E8A325] hover:text-[#151F1E] hover:border-[#E8A325] hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(232,163,37,0.2)] transition-all duration-300 cursor-default"
                  >
                    <pill.Icon size={14} strokeWidth={2} className="opacity-70 group-hover/pill:opacity-100" />
                    {pill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Currently Learning Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 p-6 lg:p-8 rounded-2xl bg-gradient-to-r from-white/[0.03] to-transparent border border-white/[0.05]"
        >
          <div className="font-syne text-[11px] lg:text-[12px] font-bold tracking-[2.5px] uppercase text-[#E8A325] flex items-center gap-3">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E8A325] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#E8A325]"></span>
            </span>
            Currently Exploring
          </div>
          <div className="flex gap-3 flex-wrap">
            {learning.map((item) => (
              <span
                key={item.name}
                className="inline-flex items-center gap-1.5 font-syne text-[12px] lg:text-[13px] font-medium text-[#F4EFE6]/50 hover:text-[#F4EFE6] transition-colors duration-300"
              >
                <item.Icon size={14} strokeWidth={1.5} />
                {item.name}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
