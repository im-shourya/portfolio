'use client';

import { m } from 'framer-motion';

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
    company: 'McKinsey.org',
    roles: [
      {
        role: 'Web Developer',
        date: 'Apr 2026 - Present',
        desc: 'Contributing to web development initiatives alongside the Forward Program.',
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

function TimelineBlock({ items, label }: { items: TimelineItem[]; label: string }) {
  return (
    <div className="relative">
      <div className="font-syne font-bold text-[13px] text-[#F4EFE6] uppercase tracking-[2px] mb-10 flex items-center gap-4">
        {label}
        <span className="flex-1 h-px bg-gradient-to-r from-white/20 to-transparent" />
      </div>

      <div className="relative">
        {/* Timeline rail */}
        <div className="absolute left-[5px] top-3 bottom-6 w-px bg-gradient-to-b from-[#E8A325]/60 via-white/15 to-transparent" />

        {items.map((item, idx) => {
          const active = item.roles.some((r) => isCurrent(r.date));
          return (
            <m.div
              key={item.company}
              initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.6, delay: idx * 0.06, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, margin: '-50px' }}
              className="relative flex gap-6 sm:gap-8 mb-6 last:mb-0 group"
            >
              {/* Dot */}
              <div className="relative pt-7 flex-shrink-0 z-10">
                <span className="relative flex w-[11px] h-[11px]">
                  {active && (
                    <span className="absolute inline-flex h-full w-full rounded-full bg-[#E8A325] opacity-60 animate-ping motion-reduce:animate-none" />
                  )}
                  <span
                    className={`relative inline-flex w-[11px] h-[11px] rounded-full ring-4 ring-[#151F1E] ${
                      active ? 'bg-[#E8A325]' : 'bg-white/40'
                    }`}
                  />
                </span>
              </div>

              {/* Liquid glass card */}
              <div className="glass-dark glass-sheen flex-1 rounded-[22px] p-6 lg:p-7 group-hover:-translate-y-1 transition-transform duration-500">
                <div className="relative z-[2]">
                  <div className="font-syne text-[11px] font-bold text-[#E8A325] tracking-[1.5px] uppercase mb-4">
                    {item.company}
                  </div>

                  <div className={item.roles.length > 1 ? 'relative pl-5 space-y-5' : ''}>
                    {item.roles.length > 1 && (
                      <div className="absolute left-[3px] top-2 bottom-2 w-px bg-white/15" />
                    )}
                    {item.roles.map((role) => (
                      <div key={role.role} className="relative">
                        {item.roles.length > 1 && (
                          <span className="absolute -left-5 top-[9px] w-[7px] h-[7px] rounded-full bg-white/40" />
                        )}
                        <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1 mb-1.5">
                          <div className="font-serif text-[1.35rem] leading-tight text-[#F4EFE6]">{role.role}</div>
                          <div className="flex items-center gap-2">
                            {isCurrent(role.date) && (
                              <span className="font-syne text-[9px] font-bold tracking-[1.5px] uppercase text-[#151F1E] bg-[#E8A325] px-2.5 py-1 rounded-full">
                                Current
                              </span>
                            )}
                            <span className="font-syne text-[10px] font-bold tracking-[1.5px] text-white/45 uppercase">
                              {role.date}
                            </span>
                          </div>
                        </div>
                        <p className="text-[14px] text-[#F4EFE6]/70 leading-relaxed font-light">{role.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </m.div>
          );
        })}
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="journey" className="py-24 lg:py-32 px-6 lg:px-16 bg-[#151F1E] relative overflow-hidden">
      {/* Colour fields for the glass to refract */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#2D7A6E]/25 rounded-full blur-[140px] pointer-events-none -translate-y-1/3 translate-x-1/3" />
      <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-[#E55B3C]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#E8A325]/12 rounded-full blur-[120px] pointer-events-none translate-y-1/3 -translate-x-1/4" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 lg:mb-24"
        >
          <div className="font-syne text-[11px] font-bold tracking-[3px] uppercase text-[#E8A325] mb-4">
            My Path
          </div>
          <h2 className="font-serif text-[clamp(2.5rem,5vw,4rem)] text-[#F4EFE6] leading-none tracking-tight">
            Work &amp; Education
          </h2>
        </m.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          <TimelineBlock items={workItems} label="Professional Experience" />
          <TimelineBlock items={educationItems} label="Academic Journey" />
        </div>
      </div>
    </section>
  );
}
