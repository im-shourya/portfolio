'use client';

import { m, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Image from 'next/image';
import { ArrowDown, Mail, Sparkles, Users } from 'lucide-react';

const ease = [0.22, 1, 0.36, 1] as const;

const stats = [
  { value: '6', label: 'Projects live' },
  { value: '5+', label: 'Active roles' },
  { value: '7.87ms', label: 'Fastest P50' },
];

function rise(delay: number) {
  return {
    initial: { opacity: 0, y: 28, filter: 'blur(10px)' },
    animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
    transition: { duration: 1, delay, ease },
  };
}

function Portrait() {
  // Gentle 3D tilt that follows the pointer (desktop only; touch never moves it)
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const rotateX = useSpring(useTransform(py, [-0.5, 0.5], [6, -6]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(px, [-0.5, 0.5], [-6, 6]), { stiffness: 150, damping: 20 });

  return (
    <div
      className="relative w-full max-w-[460px] mx-auto [perspective:1200px]"
      onPointerMove={(e) => {
        if (e.pointerType !== 'mouse') return;
        const r = e.currentTarget.getBoundingClientRect();
        px.set((e.clientX - r.left) / r.width - 0.5);
        py.set((e.clientY - r.top) / r.height - 0.5);
      }}
      onPointerLeave={() => {
        px.set(0);
        py.set(0);
      }}
    >
      <m.div style={{ rotateX, rotateY }} className="relative [transform-style:preserve-3d]">
        {/* Glass frame */}
        <div className="glass rounded-[44px] p-3 hero-image-animate">
          <div className="relative overflow-hidden rounded-[34px] aspect-[878/898] bg-[#C98B57]">
            <Image
              src="/shourya-portrait.webp"
              alt="Shourya Parashar, Full Stack Developer"
              width={878}
              height={898}
              sizes="(max-width: 1024px) 88vw, 460px"
              className="w-full h-full object-cover"
              priority
              fetchPriority="high"
            />
            {/* Specular highlight across the photo */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/25 pointer-events-none mix-blend-soft-light" />
          </div>
        </div>

        {/* Floating glass chips */}
        <m.div
          {...rise(0.7)}
          style={{ translateZ: 40 }}
          className="glass absolute left-2 sm:-left-10 top-[8%] sm:top-[12%] rounded-2xl px-4 py-3 flex items-center gap-3 max-w-[230px]"
        >
          <span className="w-9 h-9 rounded-xl bg-[#1B4A44] text-[#F4EFE6] flex items-center justify-center">
            <Sparkles size={17} />
          </span>
          <span className="leading-tight">
            <span className="block font-syne text-[12px] font-bold text-[#151F1E]">Associate Tech Lead</span>
            <span className="block text-[11px] text-[#4A6360]">GDG on Campus SRM</span>
          </span>
        </m.div>

        <m.div
          {...rise(0.85)}
          style={{ translateZ: 60 }}
          className="glass absolute right-2 sm:-right-8 bottom-[6%] sm:bottom-[10%] rounded-2xl px-4 py-3 flex items-center gap-3 max-w-[230px]"
        >
          <span className="w-9 h-9 rounded-xl bg-[#E8A325] text-[#151F1E] flex items-center justify-center">
            <Users size={17} />
          </span>
          <span className="leading-tight">
            <span className="block font-syne text-[12px] font-bold text-[#151F1E]">Lead</span>
            <span className="block text-[11px] text-[#4A6360]">HackerRank Campus Crew</span>
          </span>
        </m.div>
      </m.div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative w-full min-h-[100dvh] bg-[#F9F6F0] overflow-hidden flex items-center">
      {/* Colour fields the glass refracts */}
      <div className="orb w-[520px] h-[520px] bg-[#4EADA0]/30 -top-32 -left-24" />
      <div className="orb w-[460px] h-[460px] bg-[#E8A325]/30 top-1/3 right-[-120px] [animation-delay:-6s]" />
      <div className="orb w-[380px] h-[380px] bg-[#E55B3C]/15 bottom-[-120px] left-1/3 [animation-delay:-12s]" />

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-12 pt-32 pb-20 lg:py-32 grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-16 lg:gap-12 items-center">
        {/* Copy */}
        <div className="text-center lg:text-left">
          <m.div {...rise(0.05)} className="glass inline-flex items-center gap-2.5 rounded-full px-4 py-2 mb-8">
            <span className="relative flex w-2 h-2">
              <span className="absolute inset-0 rounded-full bg-[#2D7A6E] animate-ping opacity-70" />
              <span className="relative w-2 h-2 rounded-full bg-[#2D7A6E]" />
            </span>
            <span className="font-syne text-[10px] font-bold tracking-[2px] uppercase text-[#1B4A44]">
              Open to internships
            </span>
          </m.div>

          <m.h1
            {...rise(0.12)}
            className="font-sans text-[clamp(3.4rem,8vw,6.2rem)] font-extrabold text-[#143B36] leading-[0.98] tracking-[-0.035em]"
          >
            Hey there,
            <br />
            I&apos;m{' '}
            <span className="bg-gradient-to-r from-[#1B4A44] via-[#2D7A6E] to-[#E8A325] bg-clip-text text-transparent">
              Shourya
            </span>
          </m.h1>

          <m.p
            {...rise(0.22)}
            className="mt-7 text-[#2A3E3B] text-[17px] lg:text-[19px] leading-relaxed max-w-[520px] mx-auto lg:mx-0"
          >
            Full-stack developer and CSE undergrad at SRMIST. I build web apps that are fast, tested, and honest
            about what they don&apos;t know.
          </m.p>

          <m.div
            {...rise(0.32)}
            className="mt-10 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start items-center"
          >
            <a href="#projects" className="btn btn-primary w-full sm:w-auto">
              View my work
              <ArrowDown size={16} />
            </a>
            <a href="mailto:parasharshourya07@gmail.com" className="btn glass w-full sm:w-auto normal-case tracking-normal text-[13px]">
              <Mail size={16} />
              parasharshourya07@gmail.com
            </a>
          </m.div>

          <m.div {...rise(0.42)} className="mt-12 flex justify-center lg:justify-start">
            <div className="glass rounded-[24px] px-2 py-3 grid grid-cols-3 divide-x divide-[#1B4A44]/10">
              {stats.map((stat) => (
                <div key={stat.label} className="px-5 sm:px-7 text-center lg:text-left">
                  <div className="font-sans text-[26px] sm:text-[30px] font-extrabold text-[#143B36] leading-none tracking-tight">
                    {stat.value}
                  </div>
                  <div className="font-syne text-[9px] sm:text-[10px] font-bold tracking-[1.5px] uppercase text-[#4A6360] mt-2">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </m.div>
        </div>

        {/* Portrait */}
        <Portrait />
      </div>
    </section>
  );
}
