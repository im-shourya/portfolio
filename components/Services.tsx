'use client';

import { m } from 'framer-motion';
import { Monitor, Server, Brain, Database, Rocket, Code2 } from 'lucide-react';
import Reveal from './Reveal';

const services = [
  {
    Icon: Monitor,
    color: 'from-[#2D7A6E] to-[#1B4A44]',
    title: 'Frontend Development',
    text: 'Responsive, accessible interfaces in React, Next.js and Tailwind CSS, tuned for fast loads and smooth motion.',
    tags: ['React', 'Next.js', 'Tailwind'],
  },
  {
    Icon: Server,
    color: 'from-[#F2B746] to-[#E8A325]',
    title: 'Backend Engineering',
    text: 'APIs in Node.js, Express, NestJS and FastAPI with clear contracts, validation and sub-200ms responses.',
    tags: ['Node.js', 'NestJS', 'FastAPI'],
  },
  {
    Icon: Brain,
    color: 'from-[#F07457] to-[#E55B3C]',
    title: 'AI & Retrieval',
    text: 'Grounded AI features: hybrid retrieval, guardrails that refuse rather than guess, and latency you can measure.',
    tags: ['RAG', 'Python', 'ML'],
  },
  {
    Icon: Database,
    color: 'from-[#4EADA0] to-[#2D7A6E]',
    title: 'Data & Auth',
    text: 'Schemas and queries in PostgreSQL, MongoDB and Supabase, with row-level security and magic-link auth.',
    tags: ['PostgreSQL', 'MongoDB', 'Supabase'],
  },
  {
    Icon: Rocket,
    color: 'from-[#2D7A6E] to-[#151F1E]',
    title: 'Deployment & Tooling',
    text: 'Dockerised services shipped to Vercel and Render, with CI that keeps the build green.',
    tags: ['Docker', 'Vercel', 'Git'],
  },
  {
    Icon: Code2,
    color: 'from-[#E8A325] to-[#E55B3C]',
    title: 'Problem Solving',
    text: 'Competitive programming, algorithmic problem design, and mentoring teams at hackathons.',
    tags: ['DSA', 'C++', 'Python'],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 px-6 lg:px-16 bg-[#F4EFE6] relative overflow-hidden">
      <div className="orb w-[520px] h-[520px] bg-[#4EADA0]/20 top-0 -left-40" />
      <div className="orb w-[520px] h-[520px] bg-[#E8A325]/20 bottom-0 -right-40 [animation-delay:-9s]" />

      <div className="max-w-[1400px] mx-auto relative">
        <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-6 mb-14 lg:mb-20">
          <Reveal>
            <div className="section-label mb-3">What I Build</div>
            <h2 className="font-serif text-[clamp(2.5rem,5vw,4rem)] text-[#1B4A44] leading-none">How I can help</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-[15px] text-[#4A6360] max-w-[340px] lg:text-right leading-relaxed font-light">
              From the first sketch to production: interface, API, data and deployment, all built to be measured.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {services.map((service, idx) => (
            <m.div
              key={service.title}
              initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.8, delay: (idx % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, margin: '-50px' }}
              className="glass glass-sheen group rounded-[28px] p-7 lg:p-8 hover:-translate-y-1.5 transition-transform duration-500"
            >
              <div className="relative z-[2]">
                <div
                  className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${service.color} text-white flex items-center justify-center mb-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_8px_20px_rgba(21,31,30,0.15)] group-hover:scale-110 group-hover:rotate-[-4deg] transition-transform duration-500`}
                >
                  <service.Icon size={22} />
                </div>
                <h3 className="font-serif text-[1.55rem] text-[#151F1E] leading-tight mb-3">{service.title}</h3>
                <p className="text-[14px] text-[#4A6360] leading-relaxed font-light mb-6">{service.text}</p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-syne text-[10px] font-semibold tracking-[1px] text-[#1B4A44] bg-white/60 border border-white/80 px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
