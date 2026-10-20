import { ImageResponse } from 'next/og';

export const OG_SIZE = { width: 1200, height: 630 };

/** 1200x630 share card in the crayon style: warm black, ruled lines, colour tapes. */
export function ogCard({ eyebrow, title, footer }: { eyebrow: string; title: string; footer: string }) {
  const long = title.length > 48;
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          background: '#191510',
          backgroundImage: 'repeating-linear-gradient(to bottom, transparent 0, transparent 41px, rgba(236,227,209,0.06) 41px, rgba(236,227,209,0.06) 42px)',
          color: '#FDFDFB',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* Colour tapes */}
        <div style={{ position: 'absolute', top: 40, right: 70, width: 220, height: 46, background: '#F7C948', transform: 'rotate(8deg)', display: 'flex' }} />
        <div style={{ position: 'absolute', top: 92, right: 150, width: 160, height: 46, background: '#FF4D8D', transform: 'rotate(-6deg)', display: 'flex' }} />
        <div style={{ position: 'absolute', top: 150, right: 56, width: 120, height: 46, background: '#2B57D6', transform: 'rotate(-10deg)', display: 'flex' }} />

        <div style={{ display: 'flex', alignItems: 'center', gap: 18, fontSize: 30, color: '#F7C948' }}>
          <span style={{ fontSize: 72, lineHeight: 1, fontWeight: 700, marginTop: 18 }}>*</span>
          <span style={{ letterSpacing: 4, textTransform: 'uppercase', color: '#D9D0BE' }}>{eyebrow}</span>
        </div>

        <div style={{ display: 'flex', fontSize: long ? 64 : 104, fontWeight: 700, lineHeight: 1.05, letterSpacing: -2, maxWidth: 940 }}>
          {title}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 16, fontSize: 30, color: '#D9D0BE' }}>
          <span style={{ width: 14, height: 14, borderRadius: 7, background: '#16B06A', display: 'flex' }} />
          {footer}
        </div>
      </div>
    ),
    OG_SIZE,
  );
}
