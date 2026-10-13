'use client';

import { m } from 'framer-motion';
import { Trophy, GraduationCap, Award } from 'lucide-react';
import Reveal from './Reveal';

const certs = [
  {
    Icon: Trophy,
    color: 'from-[#F2B746] to-[#E8A325]',
    org: 'McKinsey & Company',
    name: 'McKinsey Forward Program',
    date: 'Apr 2026 - Present',
    detail: 'Globally selected for structured problem-solving, leadership and business strategy.',
  },
  {
    Icon: Award,
    color: 'from-[#4EADA0] to-[#1B4A44]',
    org: 'HackerRank',
    name: 'Letter of Recommendation',
    date: 'HackerRank Campus Crew SRMIST',
    detail: 'Recognised for co-organising DOMINION 2026, a two-day buildathon.',
  },
  {
    Icon: GraduationCap,
    color: 'from-[#F07457] to-[#E55B3C]',
    org: 'IIT Hyderabad (Collaboration)',
    name: 'Enduro Software Training Program',
    date: 'Aug - Sep 2025',
    detail: '4-week full-stack program, qualified via Amplitude assessment. Certificate ID: EN251158.',
  },
];

export default function Certifications() {
  return (
    <section id="certs" className="py-20 lg:py-28 px-6 lg:px-16 bg-[#EDE8DC] relative overflow-hidden">
      <div className="orb w-[460px] h-[460px] bg-[#E8A325]/20 -top-32 right-10" />
      <div className="orb w-[400px] h-[400px] bg-[#4EADA0]/20 -bottom-32 left-10 [animation-delay:-6s]" />

      <div className="max-w-[1400px] mx-auto relative">
        <Reveal className="mb-12">
          <div className="section-label mb-3">Achievements</div>
          <h2 className="font-serif text-[clamp(2.5rem,5vw,4rem)] text-[#1B4A44] leading-none">Recognition</h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {certs.map((cert, idx) => (
            <m.div
              key={cert.name}
              initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.8, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="glass glass-sheen group rounded-[26px] p-7 hover:-translate-y-1.5 transition-transform duration-500"
            >
              <div className="relative z-[2]">
                <div
                  className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${cert.color} text-white flex items-center justify-center mb-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.35)] group-hover:scale-110 transition-transform duration-500`}
                >
                  <cert.Icon size={21} />
                </div>
                <div className="font-syne text-[10px] font-bold tracking-[2px] uppercase text-[#4A6360] mb-1.5">{cert.org}</div>
                <div className="font-serif text-[1.4rem] text-[#151F1E] leading-tight mb-1">{cert.name}</div>
                <div className="text-[12px] text-[#4A6360] mb-3">{cert.date}</div>
                <p className="text-[13px] text-[#4A6360] leading-relaxed font-light">{cert.detail}</p>
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
