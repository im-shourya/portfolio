'use client';

import { motion } from 'framer-motion';

const workItems = [
  {
    company: 'McKinsey.org',
    date: 'Apr 2026 - Present',
    role: 'Web Developer',
    desc: 'Contributing to web development initiatives alongside the Forward Program.',
    dotColor: 'bg-white',
  },
  {
    company: 'GDG on Campus SRM',
    date: 'Mar 2026 - Present',
    role: 'Frontend Developer',
    desc: 'Built Certificate Generator with Next.js. Organized KernelPanic — audited 20+ repos, mentored 10+ teams.',
    dotColor: 'bg-[#E8A325]',
  },
  {
    company: 'SRM Insider Community',
    date: 'Apr 2026 - Present',
    role: 'Web Developer',
    desc: 'Developing web solutions for the SRM Insider community platform.',
    dotColor: 'bg-white',
  },
  {
    company: 'HackerRank Campus Crew',
    date: 'Oct 2025 - Present',
    role: 'Technical Team Member',
    desc: 'Organized TECHFORMERS 1.0 with 1,800+ participants. Authored algorithmic problems and co-designed 5 problems with 10+ test cases.',
    dotColor: 'bg-[#E8A325]',
  },
  {
    company: 'SRMIST ACM Chapter',
    date: 'Apr 2026 - Present',
    role: 'Member Technical',
    desc: 'Contributing to technical initiatives and events organized by the SRMIST ACM Student Chapter.',
    dotColor: 'bg-white',
  },
];

const educationItems = [
  {
    company: 'SRMIST, Chennai',
    date: 'Aug 2025 - May 2029',
    role: 'B.Tech Computer Science',
    desc: 'Coursework: DSA, OOP (C++/Python), Artificial Intelligence, Web Development.',
    dotColor: 'bg-[#E8A325]',
  },
  {
    company: 'IIT Hyderabad Collab',
    date: 'Aug - Sep 2025',
    role: 'Enduro Software Training',
    desc: '4-week full-stack program — qualified via Amplitude assessment. Certificate ID: EN251158.',
    dotColor: 'bg-white',
  },
  {
    company: 'McKinsey & Company',
    date: 'Apr 2026 - Present',
    role: 'Forward Program',
    desc: 'Globally selected for professional development on structured problem-solving, leadership, and business strategy.',
    dotColor: 'bg-[#E8A325]',
  },
  {
    company: 'Self-Directed',
    date: '2024 - Present',
    role: 'Full Stack + DSA',
    desc: 'Built 4+ deployed projects, mastered React, Next.js, Node.js, TypeScript. Currently exploring Docker and System Design.',
    dotColor: 'bg-white',
  },
];

function TimelineBlock({ items, label }: { items: typeof workItems; label: string }) {
  return (
    <div className="relative">
      <div className="font-syne font-bold text-[13px] text-[#F4EFE6] uppercase tracking-[2px] mb-12 flex items-center gap-4">
        {label}
        <span className="flex-1 h-px bg-white/10" />
      </div>
      
      <div className="relative pl-2 sm:pl-4">
        {/* Continuous Center line */}
        <div className="absolute left-[13px] sm:left-[21px] top-2 bottom-6 w-[1.5px] bg-gradient-to-b from-white/20 via-white/10 to-transparent" />

        {items.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true, margin: "-50px" }}
            className="flex gap-6 sm:gap-8 mb-12 last:mb-0 group"
          >
            {/* Animated Dot */}
            <div className="relative flex flex-col items-center pt-1.5 flex-shrink-0 z-10">
              <div className="w-[12px] h-[12px] rounded-full flex items-center justify-center bg-[#151F1E] ring-[4px] ring-[#151F1E] group-hover:scale-125 transition-transform duration-500">
                <div className={`w-full h-full rounded-full ${item.dotColor} shadow-[0_0_10px_rgba(255,255,255,0.3)]`} />
              </div>
            </div>

            {/* Content block */}
            <div className="flex-1 bg-white/[0.02] backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-white/5 group-hover:bg-white/[0.04] group-hover:border-white/10 group-hover:shadow-[0_15px_35px_rgba(0,0,0,0.2)] group-hover:-translate-y-1 transition-all duration-500">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                <div className="font-serif text-[1.4rem] leading-none text-[#F4EFE6]">{item.role}</div>
                <div className="font-syne text-[10px] font-bold tracking-[1.5px] text-white/40 uppercase sm:mt-1">{item.date}</div>
              </div>
              <div className="font-syne text-[11px] font-bold text-[#E8A325] tracking-[1.5px] uppercase mb-3">
                {item.company}
              </div>
              <p className="text-[14px] text-[#F4EFE6]/70 leading-relaxed font-light">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="journey" className="py-24 lg:py-32 px-6 lg:px-16 bg-[#151F1E] relative overflow-hidden">
      {/* Decorative background blurs */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#1B4A44]/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#E8A325]/5 rounded-full blur-[100px] pointer-events-none translate-y-1/3 -translate-x-1/4" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 lg:mb-24"
        >
          <div className="font-syne text-[11px] font-bold tracking-[3px] uppercase text-[#E8A325] mb-4">
            My Path
          </div>
          <h2 className="font-serif text-[clamp(2.5rem,5vw,4rem)] text-[#F4EFE6] leading-none tracking-tight">
            Work &amp; Education
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <TimelineBlock items={workItems} label="Professional Experience" />
          <TimelineBlock items={educationItems} label="Academic Journey" />
        </div>
      </div>
    </section>
  );
}
