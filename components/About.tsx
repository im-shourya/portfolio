'use client';

import { m } from 'framer-motion';
import { Github, Linkedin, PenLine, Quote } from 'lucide-react';
import Image from 'next/image';
import Reveal from './Reveal';

const highlights = [
  { value: '7.87ms', label: 'P50 answer latency in Voice RAG, 25x under budget' },
  { value: '241', label: 'tests guarding that pipeline' },
  { value: '1,800+', label: 'participants at TECHFORMERS 1.0' },
];

const links = [
  { Icon: Github, label: 'GitHub', href: 'https://github.com/im-shourya' },
  { Icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/im-shourya' },
  { Icon: PenLine, label: 'dev.to', href: 'https://dev.to/im-shourya' },
];

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-36 px-6 lg:px-12 bg-[#151F1E] relative overflow-hidden">
      <div className="orb w-[600px] h-[600px] bg-[#2D7A6E]/30 -top-40 right-[-160px]" />
      <div className="orb w-[420px] h-[420px] bg-[#E8A325]/15 bottom-[-120px] left-[-100px] [animation-delay:-8s]" />

      <div className="max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-16 lg:gap-24 items-center relative z-10">
        {/* Photo in a glass frame */}
        <m.div
          initial={{ opacity: 0, scale: 0.94, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: '-60px' }}
          className="relative max-w-[460px] mx-auto w-full"
        >
          <div className="glass-dark rounded-[44px] p-3">
            <div className="relative w-full aspect-[4/5] rounded-[34px] overflow-hidden bg-gradient-to-b from-[#2D7A6E] to-[#1B4A44]">
              <Image
                src="/shourya-portrait.webp"
                alt="Shourya Parashar"
                width={878}
                height={898}
                sizes="(max-width: 768px) 90vw, 440px"
                className="w-full h-full object-cover object-top"
                quality={80}
              />
            </div>
          </div>

          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="glass-dark absolute -bottom-8 -right-2 lg:-right-10 rounded-3xl px-6 py-5 max-w-[270px]"
          >
            <Quote size={18} className="text-[#E8A325] mb-2" />
            <p className="font-serif text-[1.1rem] italic leading-snug text-[#F4EFE6]">
              Fast, tested, and honest about what it doesn&apos;t know.
            </p>
          </m.div>
        </m.div>

        {/* Copy */}
        <div className="pt-6 lg:pt-0">
          <Reveal>
            <div className="font-syne text-[11px] font-bold tracking-[3px] uppercase text-[#E8A325] mb-4">About Me</div>
            <h2 className="font-serif text-[clamp(2.5rem,5vw,4rem)] text-[#F4EFE6] leading-[1.05] mb-8 tracking-tight">
              Full-stack developer{' '}
              <br className="hidden md:block" />
              &amp; community builder
            </h2>
          </Reveal>

          <Reveal delay={0.1} className="space-y-6">
            <p className="text-[#F4EFE6]/70 leading-relaxed text-[16px] lg:text-[17px] font-light">
              I&apos;m a Computer Science undergrad at{' '}
              <strong className="font-medium text-[#F4EFE6]">SRMIST, Chennai</strong> (2025 to 2029). My last build
              retrieves grounded answers to spoken questions in 7.87ms, about 25x under its 200ms budget.
            </p>
            <p className="text-[#F4EFE6]/70 leading-relaxed text-[16px] lg:text-[17px] font-light">
              I work across <strong className="font-medium text-[#F4EFE6]">TypeScript, Python, React, Next.js, Node.js, NestJS and FastAPI</strong>,
              and I lead technical work at GDG on Campus SRM, HackerRank Campus Crew and the Quantum Computing Club. I
              like evaluating projects almost as much as building them.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="glass-dark glass-sheen rounded-[28px] mt-10 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
              {highlights.map((h) => (
                <div key={h.value} className="relative z-[2] p-6">
                  <div className="font-serif text-[2rem] leading-none text-[#F4EFE6]">{h.value}</div>
                  <div className="text-[12px] text-[#F4EFE6]/55 mt-2 leading-snug">{h.label}</div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.3} className="flex gap-3 flex-wrap pt-10">
            {links.map(({ Icon, label, href }, i) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`btn ${i === 0 ? 'btn-amber' : 'glass-dark'}`}
              >
                <Icon size={15} />
                {label}
              </a>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
