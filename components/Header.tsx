'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '/#about' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Skills', href: '/#tech' },
  { label: 'Freelance', href: '/#freelance' },
  { label: 'Journey', href: '/#journey' },
  { label: 'Blog', href: '/blog' },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      <m.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease }}
        className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-4"
      >
        <div
          className={`mx-auto flex items-center justify-between transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            scrolled
              ? 'glass mt-3 max-w-[1100px] rounded-full pl-6 pr-2 py-2'
              : 'mt-0 max-w-[1400px] px-3 lg:px-8 py-5 border border-transparent'
          }`}
        >
          {/* Logo */}
          <Link
            href="/"
            className="font-script text-[26px] lg:text-[28px] text-[#1B4A44] hover:text-[#E8A325] transition-colors duration-300 relative z-50 leading-none"
            onClick={(e) => {
              if (typeof window !== 'undefined' && window.location.pathname === '/') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
              setIsOpen(false);
            }}
          >
            Shourya
          </Link>

          {/* Desktop Nav */}
          <nav
            className={`hidden lg:flex items-center gap-9 px-8 py-3 rounded-full transition-all duration-500 ${
              scrolled ? '' : 'glass'
            }`}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="apple-link font-syne text-[10px] font-bold uppercase tracking-[2px] text-[#1B4A44]/70 hover:text-[#1B4A44]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center">
            <Link href="/#contact" className="btn btn-primary py-3 px-5 text-[10px]">
              Get in touch
              <ArrowUpRight size={14} />
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="glass lg:hidden w-11 h-11 rounded-full flex items-center justify-center text-[#1B4A44] relative z-50 active:scale-95 transition-transform"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            <AnimatePresence mode="wait" initial={false}>
              <m.span
                key={isOpen ? 'close' : 'open'}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="flex"
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </m.span>
            </AnimatePresence>
          </button>
        </div>
      </m.header>

      {/* Mobile menu: frosted sheet */}
      <AnimatePresence>
        {isOpen && (
          <m.div
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(28px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            transition={{ duration: 0.45, ease }}
            className="fixed inset-0 z-40 bg-[#F4EFE6]/70 lg:hidden flex flex-col justify-center px-8"
          >
            <nav className="flex flex-col gap-2">
              {navLinks.map((link, idx) => (
                <m.div
                  key={link.href}
                  initial={{ opacity: 0, y: 24, filter: 'blur(6px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.55, delay: 0.05 + idx * 0.05, ease }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between py-3 border-b border-[#1B4A44]/10 font-sans text-[2.4rem] font-extrabold tracking-tight text-[#143B36] active:text-[#E8A325]"
                  >
                    {link.label}
                    <ArrowUpRight size={22} className="text-[#1B4A44]/40" />
                  </Link>
                </m.div>
              ))}
            </nav>

            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + navLinks.length * 0.05, ease }}
              className="mt-10"
            >
              <Link href="/#contact" onClick={() => setIsOpen(false)} className="btn btn-primary w-full">
                Get in touch
                <ArrowUpRight size={16} />
              </Link>
            </m.div>
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
}
