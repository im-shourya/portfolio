import { GithubIcon, LinkedinIcon, MailIcon, WriteIcon } from './icons';

const links = [
  { Icon: GithubIcon, href: 'https://github.com/im-shourya', label: 'GitHub' },
  { Icon: LinkedinIcon, href: 'https://linkedin.com/in/im-shourya', label: 'LinkedIn' },
  { Icon: WriteIcon, href: 'https://dev.to/im-shourya', label: 'dev.to' },
  { Icon: MailIcon, href: 'mailto:parasharshourya07@gmail.com', label: 'Email' },
];

export default function Footer() {
  return (
    <footer className="mt-10 border-t border-white/[0.06]">
      <div className="max-w-[1264px] mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-[13px] text-ink-muted">
          &copy; {new Date().getFullYear()} Shourya Parashar · Full-stack developer
        </p>
        <div className="flex gap-1">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('mailto') ? undefined : '_blank'}
              rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
              aria-label={link.label}
              className="w-9 h-9 rounded-full flex items-center justify-center text-ink-muted hover:text-ink-strong hover:bg-white/[0.06] transition-colors"
            >
              <link.Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
