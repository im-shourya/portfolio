'use client';

import { m } from 'framer-motion';
import Image from 'next/image';
import { Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full h-[100dvh] lg:h-screen lg:min-h-[750px] bg-[#F9F6F0] overflow-hidden"
    >
      <div className="orb w-[460px] h-[460px] bg-[#4EADA0]/25 -top-32 -left-32" />
      <div className="orb w-[420px] h-[420px] bg-[#E8A325]/25 top-1/3 -right-32 [animation-delay:-7s]" />

      <div className="relative w-full h-full max-w-[1400px] mx-auto">
        
        {/* =========================================
            MOBILE LAYOUT (Hidden on Desktop)
            ========================================= */}
        <div className="lg:hidden w-full h-full flex flex-col pt-[110px]">
          
          {/* Mobile Text (Top) */}
          <div className="flex-none px-6 text-center relative z-20">
            <m.h1 
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="font-sans text-[clamp(4rem,16vw,6rem)] font-extrabold text-[#143B36] leading-[1.02] tracking-tight"
            >
              Hey There,<br/>
              I&apos;m Shourya
            </m.h1>
            <m.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.1 }}
              className="glass mt-5 rounded-2xl px-5 py-3 text-[#2A3E3B] text-[15px] leading-snug max-w-[330px] mx-auto font-medium"
            >
              <span className="font-bold text-[#143B36]">Full-Stack Developer</span> at SRMIST. Fast, tested, honest software.
            </m.p>
          </div>

          {/* Mobile Image & Brush (Fills remaining space) */}
          <div className="flex-1 w-full relative flex items-end justify-center pointer-events-none z-10 mt-3 overflow-visible">
            
            {/* Brush SVG */}
            <m.div 
              initial={{ scale: 0.97 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="absolute inset-0 flex items-center justify-center top-[5%]"
            >
              <svg 
                viewBox="0 0 800 800" 
                fill="none" 
                className="w-[180%] sm:w-[120%] max-w-[800px] h-auto opacity-90 text-[#21675E]" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <filter id="rough-edge-mobile" x="-20%" y="-20%" width="140%" height="140%">
                    <feTurbulence type="fractalNoise" baseFrequency="0.08" numOctaves="3" result="noise" />
                    <feDisplacementMap in="SourceGraphic" in2="noise" scale="15" xChannelSelector="R" yChannelSelector="G" />
                  </filter>
                </defs>
                <g fill="currentColor" filter="url(#rough-edge-mobile)">
                  <path d="M200,600 L600,200 L640,240 L240,640 Z" />
                  <path d="M150,500 L550,100 L600,150 L200,550 Z" />
                  <path d="M250,700 L650,300 L700,350 L300,750 Z" />
                  <ellipse cx="400" cy="400" rx="250" ry="80" transform="rotate(-45 400 400)" />
                  <ellipse cx="350" cy="450" rx="280" ry="70" transform="rotate(-45 350 450)" />
                  <ellipse cx="450" cy="350" rx="200" ry="60" transform="rotate(-45 450 350)" />
                  <ellipse cx="280" cy="520" rx="150" ry="50" transform="rotate(-45 280 520)" />
                </g>
                <g fill="currentColor" filter="url(#rough-edge-mobile)">
                  <circle cx="650" cy="200" r="15" />
                  <circle cx="680" cy="150" r="8" />
                  <circle cx="150" cy="650" r="20" />
                  <circle cx="200" cy="720" r="12" />
                  <circle cx="750" cy="400" r="10" />
                </g>
              </svg>
            </m.div>

            {/* Mobile Portrait */}
            <div className="relative z-20 w-full h-[105%] flex justify-center items-end hero-image-animate">
              <Image
                src="/image.webp"
                alt="Shourya Parashar - Full Stack Developer"
                width={600}
                height={800}
                sizes="(max-width: 640px) 85vw, (max-width: 1024px) 50vw, 500px"
                className="w-auto h-full max-w-[120%] sm:max-w-[90%] object-contain object-bottom pointer-events-auto block"
                priority
                fetchPriority="high"
              />
            </div>
          </div>

        </div>


        {/* =========================================
            DESKTOP LAYOUT (Hidden on Mobile)
            ========================================= */}
        <div className="hidden lg:block w-full h-full relative">
          
          {/* Top Left Title */}
          <m.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="absolute top-[17%] left-6 lg:left-12 z-30"
          >
            <div className="glass inline-flex items-center gap-2.5 rounded-full px-4 py-2 mb-6">
              <span className="relative flex w-2 h-2">
                <span className="absolute inset-0 rounded-full bg-[#2D7A6E] animate-ping opacity-70" />
                <span className="relative w-2 h-2 rounded-full bg-[#2D7A6E]" />
              </span>
              <span className="font-syne text-[10px] font-bold tracking-[2px] uppercase text-[#1B4A44]">
                Open to internships
              </span>
            </div>
            <h1 className="font-sans text-[4.5rem] xl:text-[5.5rem] font-extrabold text-[#143B36] leading-[1.1] tracking-[-0.02em]">
              Hey There,<br/>
              I&apos;m Shourya
            </h1>
          </m.div>

          {/* Middle Left Email */}
          <m.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute top-[52%] xl:top-[55%] left-6 lg:left-12 z-30"
          >
            <a 
              href="mailto:parasharshourya07@gmail.com"
              className="glass group inline-flex items-center gap-2.5 rounded-full pl-2 pr-5 py-2 font-sans text-[14px] font-bold text-[#E54D3C] tracking-wide hover:-translate-y-0.5 transition-transform duration-300"
            >
              <span className="w-8 h-8 rounded-full bg-[#E54D3C] text-white flex items-center justify-center">
                <Mail size={15} />
              </span>
              <span className="apple-link">parasharshourya07@gmail.com</span>
            </a>
          </m.div>

          {/* Bottom Left Stats */}
          <m.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="glass absolute bottom-[10%] left-6 lg:left-12 z-30 flex items-center gap-5 rounded-[28px] pl-7 pr-8 py-4"
          >
            <div className="font-sans text-[4.5rem] xl:text-[5.5rem] font-bold text-[#143B36] leading-none tracking-tighter">
              6
            </div>
            <div className="text-[12px] font-bold tracking-[1.5px] uppercase text-[#143B36] leading-snug">
              PROJECTS<br/>DEPLOYED
            </div>
          </m.div>

          {/* Top Right Description */}
          <m.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass absolute top-[26%] xl:top-[28%] right-6 lg:right-12 z-30 max-w-[290px] rounded-[28px] p-6"
          >
            <p className="text-[#2A3E3B] text-[16px] leading-relaxed font-medium">
              <span className="font-bold text-[#143B36]">Shourya Parashar</span>, Full-Stack Developer and CSE undergrad at SRMIST.
              I build web apps that are fast, tested, and honest about what they don&apos;t know.
            </p>
          </m.div>

          {/* Bottom Right Stats/Badge */}
          <m.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute bottom-[10%] right-6 lg:right-12 z-30 flex flex-col items-center gap-4"
          >
            <div className="glass w-[96px] h-[96px] rounded-full flex items-center justify-center p-2 relative">
              <div className="absolute inset-0 rounded-full border border-[#143B36] border-dashed animate-[spin_20s_linear_infinite] m-1" />
              <div className="text-center font-sans text-[26px] font-bold text-[#143B36] leading-none">
                5<span className="text-[14px]">+</span>
              </div>
            </div>
            <div className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#143B36] text-center leading-snug">
              ACTIVE<br/>ROLES
            </div>
          </m.div>

          {/* Desktop Brush Strokes & Photo */}
          <div className="absolute bottom-0 left-1/2 translate-x-[-40%] xl:translate-x-[-45%] w-[650px] xl:w-[750px] h-[80%] flex items-end justify-center pointer-events-none z-10">
            
            <m.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
              className="absolute inset-0 flex items-center justify-center -translate-y-8"
            >
              <svg 
                viewBox="0 0 800 800" 
                fill="none" 
                className="w-full h-full max-w-none opacity-90 text-[#21675E]" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <filter id="rough-edge-desktop" x="-20%" y="-20%" width="140%" height="140%">
                    <feTurbulence type="fractalNoise" baseFrequency="0.08" numOctaves="3" result="noise" />
                    <feDisplacementMap in="SourceGraphic" in2="noise" scale="15" xChannelSelector="R" yChannelSelector="G" />
                  </filter>
                </defs>
                <g fill="currentColor" filter="url(#rough-edge-desktop)">
                  <path d="M200,600 L600,200 L640,240 L240,640 Z" />
                  <path d="M150,500 L550,100 L600,150 L200,550 Z" />
                  <path d="M250,700 L650,300 L700,350 L300,750 Z" />
                  <ellipse cx="400" cy="400" rx="250" ry="80" transform="rotate(-45 400 400)" />
                  <ellipse cx="350" cy="450" rx="280" ry="70" transform="rotate(-45 350 450)" />
                  <ellipse cx="450" cy="350" rx="200" ry="60" transform="rotate(-45 450 350)" />
                  <ellipse cx="280" cy="520" rx="150" ry="50" transform="rotate(-45 280 520)" />
                </g>
                <g fill="currentColor" filter="url(#rough-edge-desktop)">
                  <circle cx="650" cy="200" r="15" />
                  <circle cx="680" cy="150" r="8" />
                  <circle cx="150" cy="650" r="20" />
                  <circle cx="200" cy="720" r="12" />
                  <circle cx="750" cy="400" r="10" />
                </g>
              </svg>
            </m.div>

            <m.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="relative z-20 w-full flex justify-center h-full items-end"
            >
              <Image
                src="/image.webp"
                alt="Shourya Parashar - Full Stack Developer"
                width={600}
                height={800}
                sizes="(max-width: 640px) 85vw, (max-width: 1024px) 50vw, 500px"
                className="w-[90%] xl:w-[100%] max-w-[500px] h-auto object-contain object-bottom pointer-events-auto block"
                priority
                fetchPriority="high"
              />
            </m.div>

          </div>
        </div>

      </div>
    </section>
  );
}
