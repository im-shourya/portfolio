'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { MenuIcon, CloseIcon } from './icons';

const navLinks = [
  { label: 'About', href: '/#about' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Skills', href: '/#tech' },
  { label: 'Journey', href: '/#journey' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
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
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled || isOpen ? 'bg-[#07070B]/80 backdrop-blur-md border-b border-white/[0.06]' : 'border-b border-transparent'
      }`}
    >
      <div className="max-w-[1264px] mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
        <Link
          href="/"
          className="text-[18px] sm:text-[20px] text-ink-strong"
          onClick={(e) => {
            if (window.location.pathname === '/') {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
            setIsOpen(false);
          }}
        >
          Shourya<span className="text-ink-muted">, Full-Stack</span>
        </Link>

        <nav className="hidden md:flex items-center gap-9" aria-label="Primary">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[16px] text-ink-muted hover:text-ink-strong transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden w-10 h-10 -mr-2 flex items-center justify-center text-ink-strong"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <CloseIcon size={20} /> : <MenuIcon size={20} />}
        </button>
      </div>

      {isOpen && (
        <nav className="md:hidden h-[calc(100dvh-4rem)] sm:h-[calc(100dvh-5rem)] px-4 pt-4 bg-[#07070B]" aria-label="Mobile">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block py-4 border-b border-white/[0.06] text-[28px] text-ink-strong"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
