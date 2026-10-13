'use client';

import { Github, Linkedin, PenLine, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#151F1E] px-6 lg:px-12 py-10 border-t border-white/[0.06]">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Left: Logo */}
        <div className="flex items-center gap-4">
          <button 
            onClick={() => {
              if (typeof window !== 'undefined') {
                if (window.location.pathname === '/') {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                } else {
                  window.location.href = '/';
                }
              }
            }}
            className="font-script text-[28px] text-[#E8A325] leading-none hover:opacity-80 transition-opacity cursor-pointer"
          >
            Shourya
          </button>
          <div className="w-px h-6 bg-white/10 hidden sm:block" />
          <span className="font-syne text-[10px] font-bold tracking-[2px] uppercase text-[#F4EFE6]/40 hidden sm:block mt-1">
            Full Stack Developer
          </span>
        </div>

        {/* Center: Copyright */}
        <div className="font-syne text-[10px] font-bold text-[#F4EFE6]/30 tracking-[1.5px] [word-spacing:0.25em] uppercase text-center order-3 md:order-2">
          &copy; {currentYear} Shourya Parashar &middot; All Rights Reserved
        </div>

        {/* Right: Social Links */}
        <div className="flex gap-3 order-2 md:order-3">
          {[
            { Icon: Github, href: 'https://github.com/im-shourya', label: 'GitHub' },
            { Icon: Linkedin, href: 'https://linkedin.com/in/im-shourya', label: 'LinkedIn' },
            { Icon: PenLine, href: 'https://dev.to/im-shourya', label: 'dev.to' },
            { Icon: Mail, href: 'mailto:parasharshourya07@gmail.com', label: 'Email' },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('mailto') ? undefined : '_blank'}
              rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
              className="glass-dark w-10 h-10 rounded-full flex items-center justify-center text-[#F4EFE6]/70 hover:bg-none hover:bg-[#E8A325] hover:text-[#151F1E] transition-all duration-300 hover:-translate-y-1 active:scale-95"
              aria-label={link.label}
            >
              <link.Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
