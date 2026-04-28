'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Globe, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 px-6 lg:px-12 bg-[#151F1E] relative overflow-hidden">
      {/* Decorative background blur */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#1B4A44]/20 rounded-full blur-[100px] opacity-60 -translate-y-1/2 translate-x-1/4 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-center relative z-10">
        {/* Left - Premium Photo Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, margin: "-50px" }}
          className="relative max-w-[500px] mx-auto w-full"
        >
          {/* Backdrop shape */}
          <div className="absolute inset-0 bg-[#E8A325] rounded-t-full rounded-b-[40px] rotate-3 scale-[1.02] opacity-[0.08] origin-bottom" />
          
          <div className="relative w-full aspect-[4/5] rounded-t-full rounded-b-[40px] overflow-hidden bg-[#1B4A44]/20 border border-[#E8A325]/10 shadow-2xl isolate">
            <div className="absolute inset-0 bg-gradient-to-b from-[#151F1E]/20 to-transparent z-10 pointer-events-none" />
            <Image
              src="/image.png"
              alt="Shourya Parashar"
              width={500}
              height={600}
              className="w-full h-full object-cover object-top relative z-0"
              quality={95}
            />
          </div>

          {/* Floating Quote Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="absolute -bottom-6 -left-2 lg:-left-8 bg-[#1B4A44]/90 backdrop-blur-xl border border-white/10 text-[#F4EFE6] font-serif text-[1.1rem] italic px-6 py-5 rounded-2xl max-w-[260px] leading-snug shadow-[0_20px_40px_rgba(0,0,0,0.2)]"
          >
            <span className="text-[#E8A325] text-2xl leading-none mr-1">&ldquo;</span>
            Building for the web, one commit at a time.
          </motion.div>
        </motion.div>

        {/* Right - Typography & Content */}
        <div className="flex flex-col justify-center pt-8 lg:pt-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="font-syne text-[11px] font-bold tracking-[3px] uppercase text-[#E8A325] mb-4">
              About Me
            </div>
            <h2 className="font-serif text-[clamp(2.5rem,5vw,4rem)] text-[#F4EFE6] leading-[1.05] mb-8 tracking-tight">
              Full Stack Developer <br className="hidden md:block"/>
              &amp; Digital Builder
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-[#F4EFE6]/70 leading-relaxed text-[15px] lg:text-[16px] font-light">
              I&apos;m a B.Tech Computer Science student at <strong className="font-medium text-[#F4EFE6]">SRMIST, Chennai</strong> (Class of 2029), passionate about engineering full-stack applications that are fast, scalable, and beautifully designed.
            </p>

            <p className="text-[#F4EFE6]/70 leading-relaxed text-[15px] lg:text-[16px] font-light">
              Specializing in <strong className="font-medium text-[#F4EFE6]">React, Next.js, Node.js, and TypeScript</strong>, I&apos;ve built and deployed multiple production-ready systems — from AI-powered recruitment platforms to robust RESTful APIs.
            </p>

            {/* Highlight Box */}
            <div className="relative overflow-hidden rounded-2xl bg-white/[0.03] border border-white/5 p-6 my-8 group">
              <div className="absolute top-0 left-0 w-1 h-full bg-[#E8A325] transition-all duration-300 group-hover:w-2" />
              <p className="font-syne text-[13px] lg:text-[14px] leading-relaxed text-[#F4EFE6] pl-2 font-medium">
                Globally selected for the <span className="font-bold text-[#E8A325]">McKinsey Forward Program</span> — a professional development initiative focused on structured problem-solving and business strategy.
              </p>
            </div>

            <p className="text-[#F4EFE6]/70 leading-relaxed text-[15px] lg:text-[16px] font-light">
              Currently active in technical communities including Google Developer Groups on Campus SRM, HackerRank Campus Crew, and SRM Insider Community.
            </p>

            {/* CTAs */}
            <div className="flex gap-4 flex-wrap pt-6">
              <a
                href="https://github.com/im-shourya"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#E8A325] text-[#151F1E] font-syne text-[10px] font-bold tracking-[1.5px] uppercase hover:bg-white hover:-translate-y-0.5 hover:shadow-[0_10px_20px_rgba(232,163,37,0.2)] transition-all duration-300"
              >
                <Github size={14} />
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/im-shourya"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-[1.5px] border-white/10 text-[#F4EFE6] font-syne text-[10px] font-bold tracking-[1.5px] uppercase hover:bg-white/[0.05] hover:-translate-y-0.5 transition-all duration-300"
              >
                <Linkedin size={14} />
                LinkedIn
              </a>
              <a
                href="https://shouryaparashar.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-[1.5px] border-white/10 text-[#F4EFE6] font-syne text-[10px] font-bold tracking-[1.5px] uppercase hover:bg-white/[0.05] hover:-translate-y-0.5 transition-all duration-300"
              >
                <Globe size={14} />
                Website
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
