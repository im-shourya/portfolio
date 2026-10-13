'use client';

import { m } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import Reveal from './Reveal';

const roles = [
  {
    org: 'Google Developer Groups on Campus SRM',
    role: 'Associate Technical Lead',
    date: 'Sep 2026 - Present',
    bullets: [
      'Guide technical projects and design the recruitment tasks for new applicants.',
      'Previously Frontend Developer: built an automated Certificate Generator in Next.js, removing manual issuance.',
      'Organized KernelPanic: audited 20+ repositories and mentored 10+ teams.',
    ],
  },
  {
    org: 'HackerRank Campus Crew SRMIST',
    role: 'Lead',
    date: 'Sep 2026 - Present',
    bullets: [
      'Co-organised DOMINION 2026, a two-day buildathon, and received a Letter of Recommendation from HackerRank.',
      'Organized TECHFORMERS 1.0 with 1,800+ participants across a two-round, state-wide coding competition.',
      'Co-designed 5 algorithmic problems with 10+ test cases for strong edge-case coverage.',
    ],
  },
  {
    org: 'Quantum Computing Club SRM',
    role: 'Head of Operations',
    date: 'Sep 2026 - Present',
    bullets: ['Run sponsorships and events for the club.'],
  },
];

export default function Leadership() {
  return (
    <section id="leadership" className="py-24 lg:py-32 px-6 lg:px-16 bg-[#F4EFE6] relative overflow-hidden">
      <div className="orb w-[520px] h-[520px] bg-[#4EADA0]/20 top-0 -right-40" />
      <div className="orb w-[460px] h-[460px] bg-[#E55B3C]/10 bottom-0 -left-40 [animation-delay:-9s]" />

      <div className="max-w-[1400px] mx-auto relative">
        <Reveal className="mb-12 lg:mb-16">
          <div className="section-label mb-3">Impact</div>
          <h2 className="font-serif text-[clamp(2.5rem,5vw,4rem)] text-[#1B4A44] leading-none">Leadership</h2>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6">
          {roles.map((role, idx) => (
            <m.div
              key={role.org}
              initial={{ opacity: 0, y: 28, filter: 'blur(8px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.8, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="glass glass-sheen rounded-[28px] p-7 lg:p-8 hover:-translate-y-1.5 transition-transform duration-500"
            >
              <div className="relative z-[2]">
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="font-syne text-[9px] font-bold tracking-[1.5px] uppercase text-[#151F1E] bg-[#E8A325] px-2.5 py-1 rounded-full">
                    Current
                  </span>
                  <span className="font-syne text-[10px] font-bold tracking-[1.5px] uppercase text-[#4A6360]">{role.date}</span>
                </div>
                <div className="font-syne text-[10px] font-bold tracking-[2px] uppercase text-[#2D7A6E] mb-1.5">{role.org}</div>
                <h3 className="font-serif text-[1.7rem] text-[#151F1E] leading-tight mb-5">{role.role}</h3>
                <ul className="space-y-3">
                  {role.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2.5 text-[13.5px] text-[#4A6360] leading-relaxed font-light">
                      <ChevronRight size={15} className="text-[#E8A325] mt-[3px]" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
