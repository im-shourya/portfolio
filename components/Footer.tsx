import Link from 'next/link';
import { GithubIcon, LinkedinIcon, MailIcon, WriteIcon } from './icons';

const links = [
  { Icon: GithubIcon, href: 'https://github.com/im-shourya', label: 'GitHub' },
  { Icon: LinkedinIcon, href: 'https://www.linkedin.com/in/im-shourya', label: 'LinkedIn' },
  { Icon: WriteIcon, href: 'https://dev.to/im-shourya', label: 'dev.to' },
  { Icon: MailIcon, href: 'mailto:parasharshourya07@gmail.com', label: 'Email' },
];

const footerColors = ['bg-c-yellow', 'bg-c-pink', 'bg-[#92D14F]', 'bg-c-cyan'];

// Every section's own page. The header nav jumps to home-page anchors, so
// without these the pages are reachable by crawlers only through the sitemap.
const pages = [
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
  { href: '/skills', label: 'Stack' },
  { href: '/journey', label: 'Journey' },
  { href: '/services', label: 'Services' },
  { href: '/certifications', label: 'Certifications' },
  { href: '/leadership', label: 'Leadership' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="paper-lines">
      <div className="max-w-[1264px] mx-auto px-4 sm:px-6 pt-16 pb-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-8">
          <div>
            <p className="font-display text-[64px] sm:text-[88px] text-ink-strong">Shourya Parashar</p>
            <p className="label-mono mt-3 flex items-center gap-2.5 text-ink">
              <span className="w-2 h-2 rounded-full bg-c-blue" aria-hidden />
              Full-stack developer
            </p>
          </div>
          <div className="flex gap-2.5">
            {links.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('mailto') ? undefined : '_blank'}
                rel={link.href.startsWith('mailto') ? undefined : 'me noopener noreferrer'}
                aria-label={link.label}
                className={`w-10 h-10 rounded-full flex items-center justify-center text-c-ink shadow-[0_2px_0_rgba(0,0,0,0.35)] hover:-translate-y-0.5 transition-transform ${footerColors[i % footerColors.length]}`}
              >
                <link.Icon size={17} />
              </a>
            ))}
          </div>
        </div>
        <nav aria-label="Pages" className="mt-10">
          <ul className="flex flex-wrap gap-x-6 gap-y-3">
            {pages.map((page) => (
              <li key={page.href}>
                <Link href={page.href} className="label-mono !text-[11px] !tracking-[0.16em] text-ink-muted hover:text-ink-strong transition-colors">
                  {page.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <p className="mt-8 pt-6 border-t border-white/[0.07] text-[13px] text-ink-muted">
          &copy; {new Date().getFullYear()} Shourya Parashar
        </p>
      </div>
    </footer>
  );
}
