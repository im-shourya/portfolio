'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const roles = [
  {
    org: 'Google Developer Groups on Campus SRM',
    role: 'Front-End Developer & Organizing Committee',
    date: 'Mar 2026 - Present, Kattankulathur, TN',
    bullets: [
      'Developed automated Certificate Generator using Next.js, eliminating manual issuance for event participants.',
      'Organized KernelPanic — audited 20+ repositories and mentored 10+ teams to improve project quality.',
    ],
  },
  {
    org: 'HackerRank Campus Crew, SRMIST',
    role: 'Technical Member & Organizing Committee',
    date: 'Oct 2025 - Present, Kattankulathur, TN',
    bullets: [
      'Organized TECHFORMERS 1.0 with 1,800+ participants — seamless 2-round state-wide coding competition.',
      'Authored algorithmic problems for Round 1 Codeathon; provided real-time technical support during Round 2 Hackathon.',
      'Co-designed 5 algorithmic problems and 10+ robust test cases ensuring strong edge-case coverage.',
    ],
  },
];

export default function Leadership() {
  return (
    <section id="leadership" className="py-20 lg:py-28 px-6 lg:px-16 bg-white">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="section-label mb-3">Impact</div>
          <h2 className="font-serif text-[clamp(2rem,4vw,3.2rem)] text-[#1B4A44] leading-tight">
            Leadership & Involvement
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {roles.map((role, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#F4EFE6] rounded-[20px] p-7 border border-[#1B4A44]/6 hover:-translate-y-1 hover:shadow-xl transition-all duration-350"
            >
              <div className="font-syne text-[10px] font-bold tracking-[2px] uppercase text-[#E8A325] mb-1.5">
                {role.org}
              </div>
              <h3 className="font-syne text-[15px] font-bold text-[#151F1E] mb-1">
                {role.role}
              </h3>
              <div className="text-[12px] text-[#4A6360] mb-5">{role.date}</div>

              <ul className="space-y-0">
                {role.bullets.map((bullet, bIdx) => (
                  <li
                    key={bIdx}
                    className="text-[13px] text-[#4A6360] leading-relaxed py-2.5 pl-6 relative font-light border-b border-[#1B4A44]/5 last:border-b-0"
                  >
                    <ArrowRight
                      size={12}
                      className="absolute left-0 top-3.5 text-[#E8A325]"
                      strokeWidth={2.5}
                    />
                    {bullet}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
