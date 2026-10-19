'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import {
  MailIcon, GithubIcon, LinkedinIcon, WriteIcon, BookIcon,
  BriefcaseIcon, BriefcaseFillIcon, PersonIcon, PersonFillIcon, StackIcon, StackFillIcon,
  FlagIcon, FlagFillIcon, ChatIcon, ChatFillIcon,
} from './icons';

// In page order, so the active tab moves left to right as you scroll.
const navLinks = [
  { label: 'Projects', href: '/#projects', section: 'projects', color: 'bg-c-blue text-white' },
  { label: 'About', href: '/#about', section: 'about', color: 'bg-c-yellow text-c-ink' },
  { label: 'Stack', href: '/#tech', section: 'tech', color: 'bg-[#92D14F] text-c-ink' },
  { label: 'Journey', href: '/#journey', section: 'journey', color: 'bg-c-cyan text-c-ink' },
  { label: 'Blog', href: '/blog', section: null, color: 'bg-c-pink text-c-ink' },
  { label: 'Contact', href: '/#contact', section: 'contact', color: 'bg-c-orange text-c-ink' },
];

// Phone tab bar: the home sections, with an outline icon that fills when active.
const tabs = [
  { label: 'Work', href: '/#projects', section: 'projects', Icon: BriefcaseIcon, ActiveIcon: BriefcaseFillIcon },
  { label: 'About', href: '/#about', section: 'about', Icon: PersonIcon, ActiveIcon: PersonFillIcon },
  { label: 'Stack', href: '/#tech', section: 'tech', Icon: StackIcon, ActiveIcon: StackFillIcon },
  { label: 'Journey', href: '/#journey', section: 'journey', Icon: FlagIcon, ActiveIcon: FlagFillIcon },
  { label: 'Contact', href: '/#contact', section: 'contact', Icon: ChatIcon, ActiveIcon: ChatFillIcon },
];

const socials = [
  { Icon: GithubIcon, label: 'GitHub', href: 'https://github.com/im-shourya', color: 'bg-c-yellow' },
  { Icon: LinkedinIcon, label: 'LinkedIn', href: 'https://linkedin.com/in/im-shourya', color: 'bg-c-pink' },
  { Icon: WriteIcon, label: 'dev.to', href: 'https://dev.to/im-shourya', color: 'bg-[#92D14F]' },
];

/**
 * Id of the home-page section whose top has passed the middle of the screen, or
 * null near the top. Worked out from scroll position, so a fast jump (or reaching
 * the footer) can't leave a stale section highlighted.
 */
function useActiveSection(enabled: boolean) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    if (!enabled) return;
    const ids = navLinks.map((l) => l.section).filter((s): s is string => s !== null);
    let frame = 0;
    const update = () => {
      frame = 0;
      const middle = window.innerHeight / 2;
      let current: string | null = null;
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= middle) current = id;
      }
      setActive(window.scrollY < 200 ? null : current);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [enabled]);

  return enabled ? active : null;
}

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
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
  const isActive = (link: { section: string | null; href: string }) =>
    link.section
      ? link.section === (pathname === '/' ? activeSection : currentRoute)
      : pathname.startsWith(link.href);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-[#191510]/85 backdrop-blur-md border-b border-white/[0.07]' : 'border-b border-transparent'
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

        {/* Phones: sections live in the bottom tab bar, so the top keeps Blog and email */}
        <div className="md:hidden flex items-center gap-2 -mr-1">
          <Link
            href="/blog"
            aria-current={pathname.startsWith('/blog') ? 'page' : undefined}
            className={`inline-flex items-center gap-1.5 h-11 px-3.5 label-mono !text-[12px] !tracking-[0.14em] ${
              pathname.startsWith('/blog') ? 'bg-c-pink text-c-ink -rotate-2' : 'text-ink-strong'
            }`}
          >
            <BookIcon size={16} /> Blog
          </Link>
          <a
            href="mailto:parasharshourya07@gmail.com"
            aria-label="Email Shourya"
            className="w-11 h-11 rounded-full bg-c-paper text-c-ink flex items-center justify-center"
          >
            <MailIcon size={18} />
          </a>
        </div>
      </div>
    </header>

    {/* Bottom tab bar on phones, clear of the home indicator */}
    <nav
      aria-label="Sections"
      className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-[#191510]/95 backdrop-blur-md border-t border-white/[0.08] pb-[env(safe-area-inset-bottom)]"
    >
      <ul className="grid grid-cols-5 h-16 px-1">
        {tabs.map((tab) => {
          const active = isActive(tab);
          const Icon = active ? tab.ActiveIcon : tab.Icon;
          const color = navLinks.find((l) => l.section === tab.section)?.color ?? '';
          return (
            <li key={tab.href} className="flex">
              <Link
                href={tab.href}
                aria-current={active ? (pathname === '/' ? 'location' : 'page') : undefined}
                className={`flex-1 flex flex-col items-center justify-center gap-1 text-[11px] font-medium transition-colors ${
                  active ? 'text-ink-strong' : 'text-ink-muted'
                }`}
              >
                <span
                  className={`flex items-center justify-center w-12 h-7 rounded-full transition-transform ${
                    active ? `${color} -rotate-3 scale-105` : ''
                  }`}
                >
                  <Icon size={19} />
                </span>
                {tab.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
    </>
  );
}
