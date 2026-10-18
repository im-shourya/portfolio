import { GithubIcon, LinkedinIcon, WriteIcon } from './icons';
import SectionHeader, { Container } from './SectionHeader';

const highlights = [
  { value: '7.87ms', label: 'P50 answer latency in Voice RAG, 25x under budget' },
  { value: '241', label: 'tests guarding that pipeline' },
  { value: '1,800+', label: 'participants at TECHFORMERS 1.0' },
];

const links = [
  { Icon: GithubIcon, label: 'GitHub', href: 'https://github.com/im-shourya' },
  { Icon: LinkedinIcon, label: 'LinkedIn', href: 'https://linkedin.com/in/im-shourya' },
  { Icon: WriteIcon, label: 'dev.to', href: 'https://dev.to/im-shourya' },
];

export default function About() {
  return (
    <section id="about" className="py-8 sm:py-12 scroll-mt-20">
      <Container>
        <SectionHeader title="About" />
        <div className="grid grid-cols-1 md:grid-cols-[1.75fr_1fr] gap-5 bento-grid">
          <div className="bento bento-violet p-7 sm:p-[55px] flex flex-col">
            <p className="text-[13px] text-ink-muted">Full-stack developer &amp; community builder</p>
            <div className="mt-5 space-y-4 text-[16px] leading-relaxed text-ink max-w-[60ch]">
              <p>
                I&apos;m a Computer Science undergrad at <span className="text-ink-strong">SRMIST, Chennai</span> (2025 to
                2029). My last build retrieves grounded answers to spoken questions in 7.87ms, about 25x under its 200ms
                budget.
              </p>
              <p>
                I work across{' '}
                <span className="text-ink-strong">TypeScript, Python, React, Next.js, Node.js, NestJS and FastAPI</span>,
                and I lead technical work at GDG on Campus SRM, HackerRank Campus Crew and the Quantum Computing Club. I
                like evaluating projects almost as much as building them.
              </p>
            </div>
            <div className="mt-auto pt-8 flex flex-wrap gap-2.5">
              {links.map(({ Icon, label, href }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                  <Icon size={15} />
                  {label}
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-1 gap-5 bento-grid">
            {highlights.map((h) => (
              <div key={h.value} className="bento p-6">
                <div className="text-[40px] font-normal leading-none text-ink-strong">{h.value}</div>
                <div className="text-[13px] text-ink-muted mt-2 leading-snug">{h.label}</div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
