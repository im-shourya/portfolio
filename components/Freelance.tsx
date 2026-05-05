'use client';

import { m } from 'framer-motion';
import { Rocket, Palette, Wrench, ArrowUpRight, Calendar } from 'lucide-react';
import { useCalEmbed, openCalPopup } from './CalEmbed';

const freelanceServices = [
  {
    Icon: Rocket,
    color: 'bg-[#1B4A44]',
    title: 'MVP Development',
    description: 'Full-stack MVP builds from concept to deployment. Next.js frontend, Node.js backend, database design, and Vercel hosting — everything you need to launch.',
    deliverables: ['Responsive Web App', 'REST API', 'Database Setup', 'Deployment'],
    timeline: '2–4 weeks',
  },
  {
    Icon: Palette,
    color: 'bg-[#E8A325]',
    title: 'Frontend Engineering',
    description: 'Pixel-perfect React/Next.js UI development with Tailwind CSS. Performance optimization, responsive design, and smooth animations that convert.',
    deliverables: ['React Components', 'Responsive Design', 'Animations', 'Performance Audit'],
    timeline: '1–2 weeks',
  },
  {
    Icon: Wrench,
    color: 'bg-[#E55B3C]',
    title: 'Technical Consulting',
    description: 'Architecture review, code audits, and performance optimization for existing projects. Identify bottlenecks and implement scalable solutions.',
    deliverables: ['Code Review Report', 'Architecture Plan', 'Performance Fixes', 'Best Practices'],
    timeline: '3–5 days',
  },
];

export default function Freelance() {
  useCalEmbed();

  return (
    <section id="freelance" className="py-24 lg:py-32 px-6 lg:px-16 bg-[#151F1E] relative overflow-hidden">
      {/* Background blurs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#1B4A44]/15 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#E8A325]/8 rounded-full blur-[100px] pointer-events-none -translate-x-1/3 translate-y-1/3" />

      <div className="relative z-10 max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-6 mb-16 lg:mb-20">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6">
              <span className="w-2 h-2 bg-[#E8A325] rounded-full" />
              <span className="font-syne text-[10px] font-bold tracking-[2.5px] uppercase text-[#E8A325]">
                Available for Hire
              </span>
            </div>
            <h2 className="font-serif text-[clamp(2.5rem,5vw,4rem)] text-[#F4EFE6] leading-none">
              Freelance Services
            </h2>
          </m.div>
          <m.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-[#F4EFE6]/50 text-[15px] max-w-[360px] lg:text-right leading-relaxed font-light"
          >
            From idea to deployment — I build production-ready digital products with clean code and modern architecture.
          </m.p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {freelanceServices.map((service, idx) => (
            <m.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true, margin: "-50px" }}
              className="group relative bg-white/[0.03] rounded-[24px] border border-white/[0.06] p-8 lg:p-10 hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-500 hover:-translate-y-2 flex flex-col"
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl ${service.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                <service.Icon size={24} className="text-white" strokeWidth={1.5} />
              </div>

              {/* Title & Description */}
              <h3 className="font-serif text-[1.5rem] text-[#F4EFE6] mb-4 tracking-tight leading-tight">
                {service.title}
              </h3>
              <p className="text-[#F4EFE6]/50 text-[14px] leading-relaxed mb-8 font-light flex-1">
                {service.description}
              </p>

              {/* Deliverables */}
              <div className="mb-8">
                <div className="font-syne text-[9px] font-bold tracking-[2px] uppercase text-[#F4EFE6]/30 mb-3">
                  Deliverables
                </div>
                <div className="flex flex-wrap gap-2">
                  {service.deliverables.map((item) => (
                    <span
                      key={item}
                      className="inline-block px-3 py-1.5 rounded-full bg-white/[0.05] border border-white/[0.08] text-[#F4EFE6]/60 text-[11px] font-syne font-medium tracking-[0.5px]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Timeline & CTA */}
              <div className="flex items-center justify-between pt-6 border-t border-white/[0.06]">
                <div>
                  <div className="font-syne text-[9px] font-bold tracking-[2px] uppercase text-[#F4EFE6]/30 mb-1">
                    Timeline
                  </div>
                  <div className="text-[#E8A325] text-[14px] font-syne font-semibold">
                    {service.timeline}
                  </div>
                </div>
                <button
                  onClick={openCalPopup}
                  className="inline-flex items-center gap-2 bg-white/[0.08] hover:bg-[#E8A325] text-[#F4EFE6] hover:text-[#151F1E] px-5 py-2.5 rounded-full font-syne text-[10px] font-bold tracking-[1.5px] uppercase transition-all duration-300 border border-white/[0.1] hover:border-[#E8A325] hover:scale-105"
                >
                  Book Call
                  <ArrowUpRight size={14} className="group-hover:rotate-45 transition-transform" />
                </button>
              </div>
            </m.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8"
        >
          <button
            onClick={openCalPopup}
            className="group relative inline-flex items-center justify-center bg-[#E8A325] text-[#151F1E] px-10 py-5 rounded-full font-syne text-[13px] font-bold tracking-[2px] uppercase overflow-hidden transition-transform duration-300 hover:scale-[1.02] shadow-[0_20px_40px_rgba(232,163,37,0.15)] hover:shadow-[0_20px_50px_rgba(232,163,37,0.25)]"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.25,0.1,0.25,1]" />
            <span className="relative z-10 flex items-center gap-3">
              <Calendar size={18} strokeWidth={2} />
              Schedule a Discovery Call
              <ArrowUpRight size={16} className="group-hover:rotate-45 transition-transform duration-300" />
            </span>
          </button>
          <span className="text-[#F4EFE6]/30 text-[12px] font-syne tracking-[1px] uppercase">
            Free 30-min consultation
          </span>
        </m.div>
      </div>
    </section>
  );
}
