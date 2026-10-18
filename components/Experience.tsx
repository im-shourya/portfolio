import SectionHeader, { Container } from './SectionHeader';

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
        desc: 'Co-organised DOMINION 2026, a two-day buildathon. Received a Letter of Recommendation from HackerRank.',
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
    company: 'McKinsey & Company',
    roles: [
      {
        role: 'Forward Program',
        date: 'Apr 2026 - Present',
        desc: 'Globally selected for professional development on structured problem-solving, leadership, and business strategy.',
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
    company: 'IIT Hyderabad Collab',
    roles: [
      {
        role: 'Enduro Software Training',
        date: 'Aug - Sep 2025',
        desc: '4-week full-stack program, qualified via Amplitude assessment. Certificate ID: EN251158.',
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

function TimelineCard({ items, label }: { items: TimelineItem[]; label: string }) {
  return (
    <div className="bento p-6 sm:p-8 h-full">
      <h3 className="text-[20px] font-normal text-ink-strong mb-1">{label}</h3>
      <ol>
        {items.map((item) => (
          <li key={item.company} className="group/item py-3 border-b border-white/[0.07] last:border-b-0 last:pb-0">
            <div className="text-[12px] text-ink-muted">{item.company}</div>
            <div className="mt-1 space-y-2.5">
              {item.roles.map((role) => (
                <div key={role.role}>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                    <span className="text-[16px] font-normal text-ink-strong">{role.role}</span>
                    <span className="inline-flex items-center gap-1.5 text-[11px] text-ink-faint">
                      {isCurrent(role.date) && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#4ADE80]" aria-label="Current" />
                      )}
                      {role.date}
                    </span>
                  </div>
                  <p className="text-[13px] leading-[1.5] text-ink-muted mt-0.5 line-clamp-2 can-hover:group-hover/item:line-clamp-none">
                    {role.desc}
                  </p>
                </div>
              ))}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="journey" className="py-8 sm:py-12 scroll-mt-20">
      <Container>
        <SectionHeader title="Work & education" />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 bento-grid">
          <TimelineCard items={workItems.slice(0, 3)} label="Leadership roles" />
          <TimelineCard items={workItems.slice(3)} label="Communities & open source" />
          <TimelineCard items={educationItems} label="Education" />
        </div>
      </Container>
    </section>
  );
}
