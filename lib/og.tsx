import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';

export const OG_SIZE = { width: 1200, height: 630 };

/** The same photo as the Person JSON-LD, inlined: the card renderer can't fetch site paths. JPEG, as it doesn't read WebP. */
async function photoDataUrl() {
  const file = await readFile(join(process.cwd(), 'public/Shourya_Parashar.jpeg'));
  return `data:image/jpeg;base64,${file.toString('base64')}`;
}

/**
 * 1200x630 share card in the crayon style: warm black, ruled lines, colour tapes.
 * `photo="large"` tapes the portrait on the right (site card); `"avatar"` puts a
 * small round one beside the footer (articles, which need the width for titles).
 */
export async function ogCard({
  eyebrow,
  title,
  footer,
  photo,
}: {
  eyebrow: string;
  title: string;
  footer: string;
  photo?: 'large' | 'avatar';
}) {
  const long = title.length > 48;
  const src = photo ? await photoDataUrl() : null;
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
        {photo === 'large' && src ? (
          <>
            {/* Taped portrait, as on the About section */}
            <img
              src={src}
              width={330}
              height={330}
              alt=""
              style={{ position: 'absolute', top: 112, right: 96, border: '10px solid #FDFDFB', transform: 'rotate(3deg)', boxShadow: '0 18px 40px rgba(0,0,0,0.45)' }}
            />
            <div style={{ position: 'absolute', top: 98, right: 294, width: 120, height: 38, background: 'rgba(247,201,72,0.85)', transform: 'rotate(-14deg)', display: 'flex' }} />
            <div style={{ position: 'absolute', top: 104, right: 66, width: 120, height: 38, background: 'rgba(255,77,141,0.85)', transform: 'rotate(12deg)', display: 'flex' }} />
          </>
        ) : (
          <>
            {/* Colour tapes */}
            <div style={{ position: 'absolute', top: 40, right: 70, width: 220, height: 46, background: '#F7C948', transform: 'rotate(8deg)', display: 'flex' }} />
            <div style={{ position: 'absolute', top: 92, right: 150, width: 160, height: 46, background: '#FF4D8D', transform: 'rotate(-6deg)', display: 'flex' }} />
            <div style={{ position: 'absolute', top: 150, right: 56, width: 120, height: 46, background: '#2B57D6', transform: 'rotate(-10deg)', display: 'flex' }} />
          </>
        )}

        <div style={{ display: 'flex', alignItems: 'center', gap: 18, fontSize: 30, color: '#F7C948' }}>
          <span style={{ fontSize: 72, lineHeight: 1, fontWeight: 700, marginTop: 18 }}>*</span>
          <span style={{ letterSpacing: 4, textTransform: 'uppercase', color: '#D9D0BE' }}>{eyebrow}</span>
        </div>

        <div style={{ display: 'flex', fontSize: long ? 64 : 104, fontWeight: 700, lineHeight: 1.05, letterSpacing: -2, maxWidth: photo === 'large' ? 620 : 940 }}>
          {title}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 16, fontSize: 30, color: '#D9D0BE' }}>
          {photo === 'avatar' && src ? (
            <img src={src} width={64} height={64} alt="" style={{ borderRadius: 32, border: '3px solid #FDFDFB' }} />
          ) : (
            <span style={{ width: 14, height: 14, borderRadius: 7, background: '#16B06A', display: 'flex' }} />
          )}
          {footer}
        </div>
      </div>
    ),
    OG_SIZE,
  );
}
