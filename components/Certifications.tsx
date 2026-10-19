import { BookIcon, RosetteIcon, StarIcon } from './icons';
import { Container } from './SectionHeader';

const certs = [
  {
    Icon: RosetteIcon,
    paper: 'bg-c-yellow', tilt: '-rotate-2', badge: 'bg-c-blue text-white',
    org: 'McKinsey & Company',
    name: 'McKinsey Forward Program',
    date: 'Apr 2026 - Present',
    detail: 'Globally selected for structured problem-solving, leadership and business strategy.',
  },
  {
    Icon: StarIcon,
    paper: 'bg-c-mint', tilt: 'rotate-1 md:translate-y-8', badge: 'bg-c-pink text-c-ink',
    org: 'HackerRank',
    name: 'Letter of Recommendation',
    date: 'HackerRank Campus Crew SRMIST',
    detail: 'Recognised for co-organising DOMINION 2026, a two-day buildathon.',
  },
  {
    Icon: BookIcon,
    paper: 'bg-c-paper', tilt: '-rotate-1', badge: 'bg-c-orange text-c-ink',
    org: 'IIT Hyderabad (Collaboration)',
    name: 'Enduro Software Training Program',
    date: 'Aug - Sep 2025',
    detail: '4-week full-stack program, qualified via Amplitude assessment. Certificate ID: EN251158.',
  },
];

export default function Certifications() {
  return (
    <section id="certs" className="py-16 sm:py-24 scroll-mt-20">
      <Container>
        <header className="text-center">
          <p className="font-hand text-[22px] text-ink">pinned to the wall</p>
          <h2 className="font-display mt-3 text-[clamp(4rem,12vw,8rem)] text-ink-strong">Recognition</h2>
        </header>
        <ul className="mt-16 grid md:grid-cols-3 gap-10 md:gap-8 md:pb-8">
          {certs.map((cert) => (
            <li key={cert.name} className={`relative ${cert.paper} ${cert.tilt} text-c-ink p-2.5 shadow-[0_20px_40px_rgba(0,0,0,0.4)]`}>
              <span className="tape -top-3 left-1/2 -translate-x-1/2 rotate-2" aria-hidden />
              {/* Certificate double rule */}
              <div className="h-full border-2 border-c-ink/80 outline outline-1 outline-c-ink/30 outline-offset-[-7px] p-6 sm:p-7 flex flex-col">
                <div className="flex items-start justify-between gap-4">
                  <p className="label-mono !text-[10px] !tracking-[0.14em] opacity-75 pt-1">{cert.org}</p>
                  <span className={`w-12 h-12 shrink-0 rounded-full flex items-center justify-center ${cert.badge} ring-4 ring-c-ink/10`}>
                    <cert.Icon size={20} />
                  </span>
                </div>
                <h3 className="mt-6 text-[26px] leading-[1.1] font-semibold tracking-tight">{cert.name}</h3>
                <p className="font-hand text-[19px] mt-2 opacity-80">{cert.date}</p>
                <p className="text-[15px] leading-relaxed mt-4 opacity-85">{cert.detail}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
