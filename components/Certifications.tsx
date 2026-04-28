'use client';

import { motion } from 'framer-motion';
import { Trophy, GraduationCap } from 'lucide-react';

const certs = [
  {
    Icon: Trophy,
    iconBg: 'bg-[#E8A325]/12',
    iconColor: 'text-[#E8A325]',
    org: 'McKinsey & Company',
    name: 'McKinsey Forward Program',
    date: 'Apr 2026 - Present',
    detail: 'Globally selected for structured problem-solving, leadership & business strategy.',
  },
  {
    Icon: GraduationCap,
    iconBg: 'bg-[#1B4A44]/8',
    iconColor: 'text-[#1B4A44]',
    org: 'IIT Hyderabad (Collaboration)',
    name: 'Enduro Software Training Program',
    date: 'Aug - Sep 2025',
    detail: '4-week full-stack program. Certificate ID: EN251158. Qualified via Amplitude assessment.',
  },
];

export default function Certifications() {
  return (
    <section id="certs" className="py-16 lg:py-20 px-6 lg:px-16 bg-[#EDE8DC]">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <div className="section-label mb-3">Achievements</div>
          <h2 className="font-serif text-[clamp(2rem,4vw,3.2rem)] text-[#1B4A44] leading-tight">
            Certifications
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {certs.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 flex gap-4 items-start border border-[#1B4A44]/6 hover:-translate-y-1 hover:shadow-lg transition-all duration-350"
            >
              <div className={`${cert.iconBg} w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0`}>
                <cert.Icon size={20} className={cert.iconColor} strokeWidth={1.8} />
              </div>
              <div>
                <div className="font-syne text-[10px] font-bold tracking-[2px] uppercase text-[#4A6360] mb-1">
                  {cert.org}
                </div>
                <div className="font-syne text-[14px] font-bold text-[#151F1E] leading-snug">
                  {cert.name}
                </div>
                <div className="text-[12px] text-[#4A6360] mt-1 font-light">{cert.date}</div>
                <div className="text-[12px] text-[#4A6360] mt-1 font-light">{cert.detail}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
