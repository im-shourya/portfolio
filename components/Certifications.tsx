import { BookIcon, RosetteIcon, StarIcon } from './icons';
import SectionHeader, { Container } from './SectionHeader';

const certs = [
  {
    Icon: RosetteIcon,
    color: 'text-[#FFC94A]',
    org: 'McKinsey & Company',
    name: 'McKinsey Forward Program',
    date: 'Apr 2026 - Present',
    detail: 'Globally selected for structured problem-solving, leadership and business strategy.',
  },
  {
    Icon: StarIcon,
    color: 'text-[#5EEAD4]',
    org: 'HackerRank',
    name: 'Letter of Recommendation',
    date: 'HackerRank Campus Crew SRMIST',
    detail: 'Recognised for co-organising DOMINION 2026, a two-day buildathon.',
  },
  {
    Icon: BookIcon,
    color: 'text-[#FF8A6B]',
    org: 'IIT Hyderabad (Collaboration)',
    name: 'Enduro Software Training Program',
    date: 'Aug - Sep 2025',
    detail: '4-week full-stack program, qualified via Amplitude assessment. Certificate ID: EN251158.',
  },
];

export default function Certifications() {
  return (
    <section id="certs" className="py-8 sm:py-12 scroll-mt-20">
      <Container>
        <SectionHeader title="Recognition" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 bento-grid">
          {certs.map((cert) => (
            <div key={cert.name} className="bento p-7 sm:p-9">
              <span
                className={`w-11 h-11 rounded-[10px] bg-white/[0.06] flex items-center justify-center ${cert.color}`}
              >
                <cert.Icon size={19} />
              </span>
              <div className="text-[12px] text-ink-muted mt-5">{cert.org}</div>
              <h3 className="text-[22px] font-normal leading-tight text-ink-strong mt-1">{cert.name}</h3>
              <div className="text-[12px] text-ink-faint mt-1">{cert.date}</div>
              <p className="text-[15px] leading-relaxed text-ink-muted mt-3">{cert.detail}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
