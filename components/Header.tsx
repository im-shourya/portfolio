'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#tech' },
  { label: 'Journey', href: '#journey' },
  { label: 'Blog', href: '/blog' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'py-3 bg-[#F4EFE6]/80 backdrop-blur-xl border-b border-[#1B4A44]/5 shadow-[0_4px_30px_rgba(21,31,30,0.03)]'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="font-script text-[26px] lg:text-[28px] text-[#1B4A44] hover:text-[#E8A325] transition-colors duration-300 relative z-50"
            onClick={() => setIsOpen(false)}
          >
            Shourya
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-10 bg-white/40 backdrop-blur-md px-8 py-3.5 rounded-full border border-[#1B4A44]/5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-syne text-[10px] font-bold uppercase tracking-[2px] text-[#1B4A44]/70 hover:text-[#E8A325] relative group transition-colors duration-300"
              >
                {link.label}
                <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#E8A325] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-[#1B4A44] text-[#F4EFE6] px-6 py-3 rounded-full font-syne text-[10px] font-bold tracking-[1.5px] uppercase hover:bg-[#E8A325] hover:text-[#151F1E] hover:-translate-y-0.5 hover:shadow-[0_10px_20px_rgba(232,163,37,0.2)] transition-all duration-300"
            >
              Get In Touch
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-11 h-11 rounded-full bg-white/50 backdrop-blur-md border border-[#1B4A44]/10 flex items-center justify-center text-[#1B4A44] relative z-50 transition-colors hover:bg-white"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.header>

      {/* Fullscreen Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed inset-0 z-40 bg-[#151F1E]/95 backdrop-blur-xl lg:hidden flex flex-col justify-center items-center"
          >
            <div className="flex flex-col items-center gap-8 w-full px-6">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.4, delay: idx * 0.05, ease: [0.25, 0.1, 0.25, 1] }}
                  className="font-serif text-[3rem] text-[#F4EFE6] hover:text-[#E8A325] transition-colors leading-none tracking-tight"
                >
                  {link.label}
                </motion.a>
              ))}
              
              <motion.a
                href="#contact"
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.4, delay: navLinks.length * 0.05, ease: [0.25, 0.1, 0.25, 1] }}
                className="mt-8 inline-flex items-center justify-center bg-[#E8A325] text-[#151F1E] w-full max-w-[280px] px-6 py-4 rounded-full font-syne text-[11px] font-bold tracking-[2px] uppercase active:scale-95 transition-transform"
              >
                Get In Touch
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
