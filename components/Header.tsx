'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { MenuIcon, CloseIcon, MailIcon, GithubIcon, LinkedinIcon, WriteIcon } from './icons';

// In page order, so the active tab moves left to right as you scroll.
const navLinks = [
  { label: 'Projects', href: '/#projects', section: 'projects', color: 'bg-c-blue text-white' },
  { label: 'About', href: '/#about', section: 'about', color: 'bg-c-yellow text-c-ink' },
  { label: 'Stack', href: '/#tech', section: 'tech', color: 'bg-[#92D14F] text-c-ink' },
  { label: 'Journey', href: '/#journey', section: 'journey', color: 'bg-c-cyan text-c-ink' },
  { label: 'Blog', href: '/blog', section: null, color: 'bg-c-pink text-c-ink' },
  { label: 'Contact', href: '/#contact', section: 'contact', color: 'bg-c-orange text-c-ink' },
];

const socials = [
  { Icon: GithubIcon, label: 'GitHub', href: 'https://github.com/im-shourya', color: 'bg-c-yellow' },
  { Icon: LinkedinIcon, label: 'LinkedIn', href: 'https://linkedin.com/in/im-shourya', color: 'bg-c-pink' },
  { Icon: WriteIcon, label: 'dev.to', href: 'https://dev.to/im-shourya', color: 'bg-[#92D14F]' },
];

/** Id of the home-page section under the middle of the viewport, or null. */
function useActiveSection(enabled: boolean) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    if (!enabled) return;
    const ids = navLinks.map((l) => l.section).filter((s): s is string => s !== null);
    const els = ids.map((id) => document.getElementById(id)).filter((el): el is HTMLElement => el !== null);
    // A thin band across the middle of the screen: whichever section crosses it is current.
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: '-45% 0px -54% 0px' },
    );
    els.forEach((el) => observer.observe(el));
    const clearAtTop = () => {
      if (window.scrollY < 200) setActive(null);
    };
    window.addEventListener('scroll', clearAtTop, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', clearAtTop);
    };
  }, [enabled]);

  return enabled ? active : null;
}

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const activeSection = useActiveSection(pathname === '/');

  // Each section also has its own route; on those pages its tab stays lit.
  const routeSection: Record<string, string> = {
    '/projects': 'projects',
    '/about': 'about',
    '/skills': 'tech',
    '/journey': 'journey',
    '/contact': 'contact',
  };
  const currentRoute = routeSection[pathname];
  const isActive = (link: (typeof navLinks)[number]) =>
    link.section
      ? link.section === (pathname === '/' ? activeSection : currentRoute)
      : pathname.startsWith(link.href);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setIsOpen(false);
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [isOpen]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled || isOpen ? 'bg-[#191510]/85 backdrop-blur-md border-b border-white/[0.07]' : 'border-b border-transparent'
      }`}
    >
      <div className="max-w-[1264px] mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between gap-4">
        <Link
          href="/"
          aria-label="Shourya Parashar, home"
          className="flex items-center gap-2 text-ink-strong"
          onClick={(e) => {
            if (window.location.pathname === '/') {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
            setIsOpen(false);
          }}
        >
          <span className="font-display text-[34px] text-c-yellow leading-none -mt-1.5 spin-slow inline-block" aria-hidden>
            *
          </span>
          <span className="font-display text-[30px] sm:text-[34px] leading-none">Shourya</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1" aria-label="Primary">
          {navLinks.map((link) => {
            const active = isActive(link);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? (link.section && pathname === '/' ? 'location' : 'page') : undefined}
                className={`label-mono !text-[11px] !tracking-[0.16em] px-3.5 py-2.5 transition-colors ${
                  active ? `${link.color} -rotate-2` : 'text-ink-muted hover:text-ink-strong'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          {socials.map(({ Icon, label, href, color }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className={`hidden lg:flex w-8 h-8 rounded-full items-center justify-center text-c-ink ${color} shadow-[0_2px_0_rgba(0,0,0,0.4)] hover:-translate-y-0.5 transition-transform`}
            >
              <Icon size={15} />
            </a>
          ))}
          <a
            href="mailto:parasharshourya07@gmail.com"
            className="ml-1 inline-flex items-center gap-2 border-2 border-c-paper text-ink-strong label-mono !text-[11px] !tracking-[0.16em] px-4 py-2.5 hover:bg-c-paper hover:text-c-ink transition-colors"
          >
            <MailIcon size={14} /> Let&apos;s talk
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden w-10 h-10 -mr-2 flex items-center justify-center text-ink-strong"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? <CloseIcon size={22} /> : <MenuIcon size={22} />}
        </button>
      </div>

      {isOpen && (
        <nav
          id="mobile-menu"
          className="md:hidden h-[calc(100dvh-4rem)] px-4 pt-6 pb-8 bg-[#191510] paper-lines flex flex-col"
          aria-label="Mobile"
        >
          <ul className="space-y-2">
            {navLinks.map((link) => {
              const active = isActive(link);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    aria-current={active ? (link.section && pathname === '/' ? 'location' : 'page') : undefined}
                    className={`inline-block font-display text-[56px] px-2 ${
                      active ? `${link.color} -rotate-1` : 'text-ink-strong'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="mt-auto flex items-center gap-3">
            <a href="mailto:parasharshourya07@gmail.com" className="btn-light">
              <MailIcon size={15} /> Let&apos;s talk
            </a>
            {socials.map(({ Icon, label, href, color }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={`w-10 h-10 rounded-full flex items-center justify-center text-c-ink ${color}`}
              >
                <Icon size={17} />
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
