'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full h-[100dvh] lg:h-screen lg:min-h-[750px] bg-[#F9F6F0] overflow-hidden"
    >
      <div className="relative w-full h-full max-w-[1400px] mx-auto">
        
        {/* =========================================
            MOBILE LAYOUT (Hidden on Desktop)
            ========================================= */}
        <div className="lg:hidden w-full h-full flex flex-col pt-[110px]">
          
          {/* Mobile Text (Top) */}
          <div className="flex-none px-6 text-center relative z-20">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-sans text-[clamp(4rem,16vw,6rem)] font-extrabold text-[#143B36] leading-[1.02] tracking-tight"
            >
              Hey There,<br/>
              I&apos;m Shourya
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-5 text-[#2A3E3B] text-[18px] leading-relaxed max-w-[320px] mx-auto font-medium"
            >
              I build production-ready web applications. Clean code, modern design.
            </motion.p>
          </div>

          {/* Mobile Image & Brush (Fills remaining space) */}
          <div className="flex-1 w-full relative flex items-end justify-center pointer-events-none z-10 -mt-10 overflow-hidden">
            
            {/* Brush SVG */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
              className="absolute inset-0 flex items-center justify-center top-[10%]"
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
            </motion.div>

            {/* Mobile Portrait */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="relative z-20 w-full h-[110%] flex justify-center items-end"
            >
              <Image
                src="/image.png"
                alt="Shourya Parashar - Full Stack Developer"
                width={600}
                height={800}
                className="w-[120%] sm:w-[90%] max-w-[550px] h-auto object-contain object-bottom pointer-events-auto block translate-y-2"
                priority
              />
            </motion.div>
          </div>

        </div>


        {/* =========================================
            DESKTOP LAYOUT (Hidden on Mobile)
            ========================================= */}
        <div className="hidden lg:block w-full h-full relative">
          
          {/* Top Left Title */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="absolute top-[22%] left-6 lg:left-12 z-30"
          >
            <h1 className="font-sans text-[4.5rem] xl:text-[5.5rem] font-extrabold text-[#143B36] leading-[1.1] tracking-[-0.02em]">
              Hey There,<br/>
              I&apos;m Shourya
            </h1>
          </motion.div>

          {/* Middle Left Email */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute top-[52%] xl:top-[55%] left-6 lg:left-12 z-30"
          >
            <a 
              href="mailto:parasharshourya07@gmail.com"
              className="font-sans text-[15px] font-bold text-[#E54D3C] tracking-wide border-b-[2px] border-[#E54D3C]/40 pb-1 hover:border-[#E54D3C] transition-colors"
            >
              parasharshourya07@gmail.com
            </a>
          </motion.div>

          {/* Bottom Left Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="absolute bottom-[10%] left-6 lg:left-12 z-30 flex items-center gap-5"
          >
            <div className="font-sans text-[4.5rem] xl:text-[5.5rem] font-bold text-[#143B36] leading-none tracking-tighter">
              4
            </div>
            <div className="text-[12px] font-bold tracking-[1.5px] uppercase text-[#143B36] leading-snug">
              PROJECTS<br/>DEPLOYED
            </div>
          </motion.div>

          {/* Top Right Description */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute top-[28%] xl:top-[30%] right-6 lg:right-12 z-30 max-w-[260px]"
          >
            <p className="text-[#2A3E3B] text-[17px] leading-relaxed font-medium">
              I build production-ready web applications. Clean code, modern design, and performance-first engineering.
            </p>
          </motion.div>

          {/* Bottom Right Stats/Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute bottom-[10%] right-6 lg:right-12 z-30 flex flex-col items-center gap-4"
          >
            <div className="w-[90px] h-[90px] rounded-full border-[1.5px] border-[#143B36] flex items-center justify-center p-2 relative">
              <div className="absolute inset-0 rounded-full border border-[#143B36] border-dashed animate-[spin_20s_linear_infinite] m-1" />
              <div className="text-center font-sans text-[26px] font-bold text-[#143B36] leading-none">
                5<span className="text-[14px]">+</span>
              </div>
            </div>
            <div className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#143B36] text-center leading-snug">
              ACTIVE<br/>ROLES
            </div>
          </motion.div>

          {/* Desktop Brush Strokes & Photo */}
          <div className="absolute bottom-0 left-1/2 translate-x-[-40%] xl:translate-x-[-45%] w-[650px] xl:w-[750px] h-[80%] flex items-end justify-center pointer-events-none z-10">
            
            <motion.div 
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
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="relative z-20 w-full flex justify-center h-full items-end"
            >
              <Image
                src="/image.png"
                alt="Shourya Parashar - Full Stack Developer"
                width={600}
                height={800}
                className="w-[90%] xl:w-[100%] max-w-[500px] h-auto object-contain object-bottom pointer-events-auto block"
                priority
              />
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}
