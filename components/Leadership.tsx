import SectionHeader, { Container } from './SectionHeader';

const roles = [
  {
    org: 'Google Developer Groups on Campus SRM',
    role: 'Associate Technical Lead',
    date: 'Sep 2026 - Present',
    bullets: [
      'Guide technical projects and design the recruitment tasks for new applicants.',
      'Previously Frontend Developer: built an automated Certificate Generator in Next.js, removing manual issuance.',
      'Organized KernelPanic: audited 20+ repositories and mentored 10+ teams.',
    ],
  },
  {
    org: 'HackerRank Campus Crew SRMIST',
    role: 'Lead',
    date: 'Sep 2026 - Present',
    bullets: [
      'Co-organised DOMINION 2026, a two-day buildathon, and received a Letter of Recommendation from HackerRank.',
      'Organized TECHFORMERS 1.0 with 1,800+ participants across a two-round, state-wide coding competition.',
      'Co-designed 5 algorithmic problems with 10+ test cases for strong edge-case coverage.',
    ],
  },
  {
    org: 'Quantum Computing Club SRM',
    role: 'Head of Operations',
    date: 'Sep 2026 - Present',
    bullets: ['Run sponsorships and events for the club.'],
  },
];

export default function Leadership() {
  return (
    <section id="leadership" className="py-8 sm:py-12 scroll-mt-20">
      <Container>
        <SectionHeader title="Leadership" />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 bento-grid">
          {roles.map((role) => (
            <div key={role.org} className="bento p-7 sm:p-9">
              <div className="flex items-center justify-between gap-3 text-[12px]">
                <span className="inline-flex items-center gap-1.5 text-ink">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4ADE80]" aria-hidden />
                  Current
                </span>
                <span className="text-ink-faint">{role.date}</span>
              </div>
              <div className="text-[12px] text-ink-muted mt-5">{role.org}</div>
              <h3 className="text-[22px] font-normal leading-tight text-ink-strong mt-1">{role.role}</h3>
              <ul className="mt-4 space-y-2.5">
                {role.bullets.map((bullet) => (
                  <li key={bullet} className="relative pl-4 text-[15px] leading-relaxed text-ink-muted">
                    <span className="absolute left-0 top-[0.6em] w-1 h-1 rounded-full bg-ink-faint" aria-hidden />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
