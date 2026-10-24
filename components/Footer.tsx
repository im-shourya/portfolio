import { GithubIcon, LinkedinIcon, MailIcon, WriteIcon } from './icons';

const links = [
  { Icon: GithubIcon, href: 'https://github.com/im-shourya', label: 'GitHub' },
  { Icon: LinkedinIcon, href: 'https://linkedin.com/in/im-shourya', label: 'LinkedIn' },
  { Icon: WriteIcon, href: 'https://dev.to/im-shourya', label: 'dev.to' },
  { Icon: MailIcon, href: 'mailto:parasharshourya07@gmail.com', label: 'Email' },
];

const footerColors = ['bg-c-yellow', 'bg-c-pink', 'bg-[#92D14F]', 'bg-c-cyan'];

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
        <p className="mt-10 pt-6 border-t border-white/[0.07] text-[13px] text-ink-muted">
          &copy; {new Date().getFullYear()} Shourya Parashar
        </p>
      </div>
    </footer>
  );
}
