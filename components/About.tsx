import Image from 'next/image';
import { GithubIcon, LinkedinIcon, WriteIcon, ArrowUpRightIcon } from './icons';
import { Container } from './SectionHeader';

const highlights = [
  { value: '7.87ms', label: 'P50 core-pipeline latency in Voice RAG, 25x under budget', tilt: '-rotate-2', bg: 'bg-c-paper' },
  { value: '241', label: 'tests guarding that pipeline', tilt: 'rotate-1', bg: 'bg-c-tan' },
  { value: '1,800+', label: 'participants at TECHFORMERS 1.0', tilt: '-rotate-1', bg: 'bg-c-mint' },
];

// Current roles as Crayon's torn paper tags.
const roles = [
  { label: 'GDG Associate Tech Lead', bg: 'bg-c-yellow', text: 'text-c-ink', tag: 'torn-a' },
  { label: 'HackerRank Crew Lead', bg: 'bg-c-green', text: 'text-white', tag: 'torn-b' },
  { label: 'Quantum Club, Head of Ops', bg: 'bg-c-pink', text: 'text-white', tag: 'torn-c' },
  { label: 'IEEE CS Member Technical', bg: 'bg-c-blue', text: 'text-c-ink', tag: 'torn-a' },
];

const links = [
  { Icon: GithubIcon, label: 'GitHub', href: 'https://github.com/im-shourya' },
  { Icon: LinkedinIcon, label: 'LinkedIn', href: 'https://linkedin.com/in/im-shourya' },
  { Icon: WriteIcon, label: 'dev.to', href: 'https://dev.to/im-shourya' },
];

// `as` is h1 on the section's own route, h2 on the home page.
export default function About({ as: Heading = 'h2' }: { as?: 'h1' | 'h2' } = {}) {
  return (
    <section id="about" className="py-16 sm:py-24 scroll-mt-20">
      <Container>
        <header className="text-center">
          <p className="font-hand text-[22px] text-ink">about me!</p>
          <Heading className="font-display mt-3 text-[clamp(4rem,12vw,8rem)] text-ink-strong">What&apos;s up</Heading>
        </header>

        <div className="mt-14 grid md:grid-cols-[minmax(0,340px)_1fr] gap-14 md:gap-20 items-center">
          {/* Polaroid */}
          <figure className="relative mx-auto w-[260px] sm:w-[300px] -rotate-[4deg] bg-[#FDFDFB] p-3 pb-14 shadow-[0_24px_50px_rgba(0,0,0,0.45)]">
            <span className="tape -top-3 left-6 -rotate-[14deg] !bg-c-cyan/70" aria-hidden />
            <span className="tape -top-3 right-6 rotate-[12deg] !bg-c-yellow/70" aria-hidden />
            <Image
              src="/shourya-portrait.webp"
              alt="Shourya Parashar"
              width={600}
              height={614}
              sizes="300px"
              className="w-full aspect-square object-cover object-top"
            />
            <figcaption className="absolute bottom-3 inset-x-0 text-center font-hand text-[20px] text-c-ink">
              that&apos;s me!
            </figcaption>
          </figure>

          <div>
            <p className="text-[13px] text-c-yellow">Full-stack developer &amp; community builder</p>
            <div className="mt-4 space-y-5 text-[18px] sm:text-[20px] leading-[1.6] text-ink max-w-[58ch]">
              <p>
                I&apos;m a Computer Science undergrad at <span className="text-ink-strong">SRMIST, Chennai</span> (2025 to
                2029). My last build, a voice RAG system, runs its core retrieval pipeline at a 7.87ms P50, about 25x
                under its 200ms budget.
              </p>
              <p>
                I work across{' '}
                <span className="text-ink-strong">TypeScript, Python, React, Next.js, Node.js, NestJS and FastAPI</span>,
                and I like evaluating projects almost as much as building them.
              </p>
            </div>

            <ul className="mt-8 flex flex-wrap gap-3" aria-label="Current roles">
              {roles.map((role) => (
                <li
                  key={role.label}
                  className={`${role.tag} ${role.bg} ${role.text} inline-flex items-center whitespace-nowrap h-12 sm:h-14 px-5 sm:px-6 text-[16px] sm:text-[19px] font-semibold tracking-tight`}
                >
                  {role.label}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-x-7 gap-y-3">
              {links.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="label-mono inline-flex items-center gap-2 text-ink-strong border-b-2 border-current pb-1 hover:text-c-yellow transition-colors"
                >
                  <Icon size={14} />
                  {label}
                  <ArrowUpRightIcon size={10} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Numbers on index cards */}
        <dl className="mt-20 grid sm:grid-cols-3 gap-6 sm:gap-8">
          {highlights.map((h) => (
            <div key={h.value} className={`relative ${h.bg} ${h.tilt} text-c-ink px-6 pt-7 pb-6 shadow-[0_16px_34px_rgba(0,0,0,0.35)] flex flex-col`}>
              <span className="tape -top-2.5 left-1/2 -translate-x-1/2 -rotate-3" aria-hidden />
              <dt className="order-last text-[14px] leading-snug mt-2 opacity-80">{h.label}</dt>
              <dd className="font-display text-[72px]">{h.value}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
