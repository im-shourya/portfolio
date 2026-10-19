import { Container } from './SectionHeader';

type Role = { role: string; date: string; desc: string };
type TimelineItem = { company: string; roles: Role[] };

const workItems: TimelineItem[] = [
  {
    company: 'Google Developer Groups on Campus SRM',
    roles: [
      {
        role: 'Associate Technical Lead',
        date: 'Sep 2026 - Present',
        desc: 'Guiding technical projects and designing the recruitment tasks for new applicants.',
      },
      {
        role: 'Frontend Developer',
        date: 'Mar 2026 - Sep 2026',
        desc: 'Built Certificate Generator with Next.js. Organized KernelPanic: audited 20+ repos, mentored 10+ teams.',
      },
    ],
  },
  {
    company: 'HackerRank Campus Crew SRMIST',
    roles: [
      {
        role: 'Lead',
        date: 'Sep 2026 - Present',
        desc: 'Co-organised DOMINION 2026, a two-day buildathon.',
      },
      {
        role: 'Technical Team Member',
        date: 'Oct 2025 - Present',
        desc: 'Organized TECHFORMERS 1.0 with 1,800+ participants. Authored algorithmic problems and co-designed 5 problems with 10+ test cases.',
      },
    ],
  },
  {
    company: 'Quantum Computing Club SRM',
    roles: [
      {
        role: 'Head of Operations',
        date: 'Sep 2026 - Present',
        desc: 'Running sponsorships and events for the club.',
      },
      {
        role: 'Member',
        date: 'May 2026 - Sep 2026',
        desc: 'Contributed to club activities and events.',
      },
    ],
  },
  {
    company: 'IEEE Computer Society SRMIST',
    roles: [
      {
        role: 'Member Technical',
        date: 'Aug 2026 - Present',
        desc: 'Technical member of the IEEE Computer Society student chapter at SRMIST.',
      },
    ],
  },
  {
    company: 'GirlScript Summer of Code',
    roles: [
      {
        role: 'Contributor',
        date: 'May 2026 - Aug 2026',
        desc: 'Open-source contributor to Draftdeckai, an AI-powered document creation platform.',
      },
    ],
  },
  {
    company: 'SRM Insider Community',
    roles: [
      {
        role: 'Web Developer',
        date: 'Apr 2026 - Present',
        desc: 'Developing web solutions for the SRM Insider community platform.',
      },
    ],
  },
  {
    company: 'SRMIST ACM Student Chapter',
    roles: [
      {
        role: 'Member Technical',
        date: 'Apr 2026 - Present',
        desc: 'Contributing to technical initiatives and events organized by the SRMIST ACM Student Chapter.',
      },
    ],
  },
];

const educationItems: TimelineItem[] = [
  {
    company: 'SRMIST, Chennai',
    roles: [
      {
        role: 'B.Tech Computer Science',
        date: 'Aug 2025 - May 2029',
        desc: 'Coursework: DSA, OOP (C++/Python), Artificial Intelligence, Web Development.',
      },
    ],
  },
  {
    company: 'Hackathons',
    roles: [
      {
        role: 'Hackathon Regular',
        date: 'Ongoing',
        desc: 'Regular at hackathons including Hacker House Goa 2026 (Team 3PIXLE), FAST × NVIDIA and Foundathon 3.0.',
      },
    ],
  },
  {
    company: 'Self-Directed',
    roles: [
      {
        role: 'Full Stack + DSA',
        date: '2024 - Present',
        desc: 'Shipping full-stack projects with TypeScript, Python, Next.js, Node.js, NestJS and FastAPI. Exploring Docker and system design.',
      },
    ],
  },
];

const isCurrent = (date: string) => date.includes('Present');

const groups = [
  { label: 'Leadership', note: 'Running teams and events', items: workItems.slice(0, 3), tag: 'bg-c-yellow' },
  { label: 'Communities & open source', note: 'Contributing and building', items: workItems.slice(3), tag: 'bg-c-cyan' },
  { label: 'Education', note: 'Where the learning happens', items: educationItems, tag: 'bg-c-mint' },
];

function Group({ label, note, items, tag }: (typeof groups)[number]) {
  return (
    <div className="grid lg:grid-cols-[280px_1fr] gap-6 lg:gap-12 pt-10 first:pt-0">
      <div className="lg:sticky lg:top-28 self-start">
        <h3 className={`inline-block ${tag} text-c-ink px-3 py-1.5 text-[15px] font-semibold -rotate-1`}>{label}</h3>
        <p className="font-hand text-[19px] text-ink-muted mt-3">{note}</p>
      </div>
      <ol className="border-t border-white/[0.09]">
        {items.map((item) => (
          <li key={item.company} className="grid sm:grid-cols-[160px_1fr] gap-x-8 gap-y-2 py-6 border-b border-white/[0.09]">
            <p className="label-mono !text-[11px] !tracking-[0.14em] text-ink-muted pt-1.5">{item.roles[0].date}</p>
            <div>
              <p className="text-[13px] text-ink-muted">{item.company}</p>
              <div className="mt-1 space-y-4">
                {item.roles.map((role, i) => (
                  <div key={role.role}>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                      <span className="text-[20px] sm:text-[22px] font-semibold tracking-tight text-ink-strong">{role.role}</span>
                      {isCurrent(role.date) && (
                        <span className="label-mono !text-[10px] !tracking-[0.12em] text-c-ink bg-c-green px-2 py-0.5 rounded-full">
                          Now
                        </span>
                      )}
                      {i > 0 && <span className="label-mono !text-[10px] text-ink-faint">{role.date}</span>}
                    </div>
                    <p className="text-[15px] leading-relaxed text-ink-muted mt-1 max-w-[62ch]">{role.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="journey" className="py-16 sm:py-24 scroll-mt-20">
      <Container>
        <header className="mb-14">
          <p className="font-hand text-[22px] text-ink">the story so far</p>
          <h2 className="font-display mt-3 text-[clamp(4rem,12vw,8rem)] text-ink-strong">Journey</h2>
        </header>
        <div className="space-y-6">
          {groups.map((group) => (
            <Group key={group.label} {...group} />
          ))}
        </div>
      </Container>
    </section>
  );
}
