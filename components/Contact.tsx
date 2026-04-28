'use client';

import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Globe, MapPin, Clock, Briefcase, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 lg:py-32 px-6 lg:px-12 bg-[#151F1E] overflow-hidden">
      {/* Decorative background blur */}
      <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-[#E8A325]/10 rounded-full blur-[120px] pointer-events-none translate-y-1/3 translate-x-1/4" />
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#1B4A44]/20 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 -translate-x-1/2" />

      <div className="relative z-10 max-w-[1400px] mx-auto flex flex-col items-center">
        <div className="text-center w-full max-w-[900px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8">
              <span className="w-2 h-2 bg-[#E8A325] rounded-full animate-ping" />
              <span className="font-syne text-[10px] font-bold tracking-[2.5px] uppercase text-[#E8A325]">
                Let&apos;s Work Together
              </span>
            </div>
            
            <h2 className="font-serif text-[clamp(3.5rem,8vw,7rem)] text-[#F4EFE6] leading-[0.95] tracking-tight mb-8">
              Let&apos;s build something <br className="hidden md:block"/>
              <em className="italic text-[#E8A325]">extraordinary.</em>
            </h2>
            
            <p className="text-[#F4EFE6]/60 text-[16px] lg:text-[18px] max-w-[500px] mx-auto leading-relaxed mb-12 font-light">
              I&apos;m open to internship opportunities, freelance projects, and collaboration on ambitious ideas.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true }}
            className="mb-20 w-full px-4 sm:px-0 flex flex-col sm:flex-row gap-5 justify-center items-center"
          >
            <a
              href="mailto:parasharshourya07@gmail.com"
              className="group relative inline-flex items-center justify-center bg-[#E8A325] text-[#151F1E] w-full sm:w-auto px-6 py-5 lg:px-12 lg:py-6 rounded-full font-syne text-[12px] sm:text-[14px] lg:text-[16px] font-bold tracking-[2px] uppercase overflow-hidden transition-transform duration-300 hover:scale-[1.02] shadow-[0_20px_40px_rgba(232,163,37,0.2)] hover:shadow-[0_20px_50px_rgba(232,163,37,0.3)]"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.25,0.1,0.25,1]" />
              <span className="relative z-10 flex items-center gap-3">
                <span className="sm:hidden">Say Hello</span>
                <span className="hidden sm:inline">parasharshourya07@gmail.com</span>
                <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-45 transition-transform duration-300" />
              </span>
            </a>
            
            <a
              href="/Shourya.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center bg-transparent border-[1.5px] border-white/20 text-[#F4EFE6] w-full sm:w-auto px-6 py-5 lg:px-10 lg:py-6 rounded-full font-syne text-[12px] sm:text-[14px] lg:text-[16px] font-bold tracking-[2px] uppercase overflow-hidden transition-all duration-300 hover:border-[#E8A325] hover:text-[#E8A325] hover:bg-[#E8A325]/5"
            >
              <span className="relative z-10 flex items-center gap-3">
                <span>Download CV</span>
                <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-300" />
              </span>
            </a>
          </motion.div>
        </div>

        {/* Info & Socials Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mt-10 border-t border-white/5 pt-12">
          {/* Social Links Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-1 bg-white/[0.02] rounded-3xl p-6 lg:p-8 border border-white/[0.05] hover:bg-white/[0.04] transition-colors"
          >
            <div className="font-syne text-[10px] font-bold tracking-[2px] uppercase text-[#F4EFE6]/40 mb-6">
              Connect
            </div>
            <div className="flex flex-col gap-4">
              <a href="https://linkedin.com/in/im-shourya" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[#F4EFE6]/80 hover:text-[#E8A325] transition-colors font-syne font-medium text-[13px] tracking-wide">
                <Linkedin size={16} /> LinkedIn <ArrowUpRight size={14} className="ml-auto opacity-50" />
              </a>
              <a href="https://github.com/im-shourya" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[#F4EFE6]/80 hover:text-[#E8A325] transition-colors font-syne font-medium text-[13px] tracking-wide">
                <Github size={16} /> GitHub <ArrowUpRight size={14} className="ml-auto opacity-50" />
              </a>
              <a href="https://shouryaparashar.in" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[#F4EFE6]/80 hover:text-[#E8A325] transition-colors font-syne font-medium text-[13px] tracking-wide">
                <Globe size={16} /> Portfolio <ArrowUpRight size={14} className="ml-auto opacity-50" />
              </a>
            </div>
          </motion.div>

          {/* Quick Info Boxes */}
          {[
            { Icon: MapPin, label: 'Location', value: 'Chennai, Tamil Nadu, India' },
            { Icon: Briefcase, label: 'Open To', value: 'Internships & Collabs' },
            { Icon: Clock, label: 'Response Time', value: 'Within 24 hours' },
          ].map((item, idx) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (idx + 1) * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/[0.02] rounded-3xl p-6 lg:p-8 border border-white/[0.05] hover:bg-white/[0.04] hover:border-white/10 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mb-6">
                <item.Icon size={18} className="text-[#E8A325]" strokeWidth={1.5} />
              </div>
              <div className="font-syne text-[10px] font-bold tracking-[2px] uppercase text-[#F4EFE6]/40 mb-2">
                {item.label}
              </div>
              <div className="text-[#F4EFE6] text-[15px] font-light leading-snug">
                {item.value}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
