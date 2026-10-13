'use client';

import { m } from 'framer-motion';
import { Rocket, Palette, Wrench, ArrowUpRight, Calendar, Clock } from 'lucide-react';
import { useOpenCalPopup } from './CalEmbed';
import Reveal from './Reveal';

const freelanceServices = [
  {
    Icon: Rocket,
    color: 'from-[#2D7A6E] to-[#1B4A44]',
    title: 'MVP Development',
    description:
      'Full-stack MVPs from concept to launch: Next.js frontend, Node.js or FastAPI backend, database design and hosting.',
    deliverables: ['Responsive Web App', 'REST API', 'Database Setup', 'Deployment'],
    timeline: '2 to 4 weeks',
  },
  {
    Icon: Palette,
    color: 'from-[#F2B746] to-[#E8A325]',
    title: 'Frontend Engineering',
    description:
      'Polished React and Next.js interfaces with Tailwind CSS. Responsive layouts, smooth motion and performance tuning.',
    deliverables: ['React Components', 'Responsive Design', 'Animations', 'Performance Audit'],
    timeline: '1 to 2 weeks',
  },
  {
    Icon: Wrench,
    color: 'from-[#F07457] to-[#E55B3C]',
    title: 'Technical Consulting',
    description:
      'Architecture reviews, code audits and performance work on existing projects. Find the bottleneck, then fix it.',
    deliverables: ['Code Review Report', 'Architecture Plan', 'Performance Fixes', 'Best Practices'],
    timeline: '3 to 5 days',
  },
];

export default function Freelance() {
  const openCalPopup = useOpenCalPopup();

  return (
    <section id="freelance" className="py-24 lg:py-32 px-6 lg:px-16 bg-[#151F1E] relative overflow-hidden">
      <div className="orb w-[600px] h-[600px] bg-[#2D7A6E]/25 -top-40 -right-40" />
      <div className="orb w-[500px] h-[500px] bg-[#E8A325]/12 -bottom-40 -left-40 [animation-delay:-10s]" />

      <div className="relative z-10 max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-6 mb-14 lg:mb-20">
          <Reveal>
            <div className="glass-dark inline-flex items-center gap-2.5 px-4 py-2 rounded-full mb-6">
              <span className="relative flex w-2 h-2">
                <span className="absolute inset-0 rounded-full bg-[#E8A325] animate-ping opacity-70" />
                <span className="relative w-2 h-2 bg-[#E8A325] rounded-full" />
              </span>
              <span className="font-syne text-[10px] font-bold tracking-[2.5px] uppercase text-[#E8A325]">
                Available for hire
              </span>
            </div>
            <h2 className="font-serif text-[clamp(2.5rem,5vw,4rem)] text-[#F4EFE6] leading-none">Freelance Services</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-[#F4EFE6]/55 text-[15px] max-w-[360px] lg:text-right leading-relaxed font-light">
              From idea to deployment, I build production-ready products with clean code and modern architecture.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 mb-16">
          {freelanceServices.map((service, idx) => (
            <m.div
              key={service.title}
              initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, margin: '-50px' }}
              className="glass-dark glass-sheen group rounded-[28px] p-7 lg:p-9 hover:-translate-y-1.5 transition-transform duration-500 flex flex-col"
            >
              <div className="relative z-[2] flex flex-col flex-1">
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} text-white flex items-center justify-center mb-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.35)] group-hover:scale-110 group-hover:rotate-[-4deg] transition-transform duration-500`}
                >
                  <service.Icon size={24} />
                </div>

                <h3 className="font-serif text-[1.6rem] text-[#F4EFE6] mb-3 tracking-tight leading-tight">{service.title}</h3>
                <p className="text-[#F4EFE6]/60 text-[14px] leading-relaxed mb-8 font-light flex-1">{service.description}</p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {service.deliverables.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.1] text-[#F4EFE6]/70 text-[11px] font-syne font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-white/10">
                  <div className="flex items-center gap-2 text-[#E8A325] text-[13px] font-syne font-semibold">
                    <Clock size={15} />
                    {service.timeline}
                  </div>
                  <button onClick={() => openCalPopup()} className="apple-link font-syne text-[12px] font-semibold text-[#F4EFE6]">
                    Book a call <span className="apple-chevron" aria-hidden>›</span>
                  </button>
                </div>
              </div>
            </m.div>
          ))}
        </div>

        <Reveal delay={0.2} className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <button onClick={() => openCalPopup()} className="btn btn-amber px-9 py-5 text-[12px]">
            <Calendar size={18} />
            Schedule a discovery call
            <ArrowUpRight size={16} />
          </button>
          <span className="text-[#F4EFE6]/40 text-[11px] font-syne font-bold tracking-[1.5px] uppercase">
            Free 30-min consultation
          </span>
        </Reveal>
      </div>
    </section>
  );
}
