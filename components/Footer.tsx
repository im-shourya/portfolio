import Link from 'next/link';
import { GithubIcon, LinkedinIcon, MailIcon, WriteIcon } from './icons';

const links = [
  { Icon: GithubIcon, href: 'https://github.com/im-shourya', label: 'GitHub' },
  { Icon: LinkedinIcon, href: 'https://www.linkedin.com/in/im-shourya', label: 'LinkedIn' },
  { Icon: WriteIcon, href: 'https://dev.to/im-shourya', label: 'dev.to' },
  { Icon: MailIcon, href: 'mailto:parasharshourya07@gmail.com', label: 'Email' },
];

const REPO = 'https://github.com/im-shourya/portfolio';

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
  // First published in 2026; the range grows from there.
  const year = new Date().getFullYear();
  const copyrightYears = year > 2026 ? `2026–${year}` : '2026';

  return (
    <footer className="paper-lines">
      <div className="max-w-[1264px] mx-auto px-4 sm:px-6 pt-16 pb-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-8">
          <div>
            <p data-reveal="title" className="font-display text-[64px] sm:text-[88px] text-ink-strong">Shourya Parashar</p>
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
        <div className="mt-8 pt-6 border-t border-white/[0.07] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-[13px] text-ink-muted">
          <p>&copy; {copyrightYears} Shourya Parashar. All rights reserved.</p>
          <p className="flex flex-wrap gap-x-5 gap-y-2">
            <a href={`${REPO}/blob/main/LICENSE`} target="_blank" rel="noopener noreferrer" className="apple-link hover:text-ink-strong">
              Code under MIT
            </a>
            <a href={`${REPO}/blob/main/NOTICE.md`} target="_blank" rel="noopener noreferrer" className="apple-link hover:text-ink-strong">
              Licenses &amp; credits
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
