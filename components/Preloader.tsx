const NAME = 'SHOURYA';

// One crayon colour per letter tile, with a tilt; they straighten before the tear.
const tiles = [
  { bg: 'var(--c-blue)', fg: '#FDFDFB', r: -9 },
  { bg: 'var(--c-yellow)', fg: 'var(--c-ink)', r: 7 },
  { bg: 'var(--c-pink)', fg: 'var(--c-ink)', r: -5 },
  { bg: '#92D14F', fg: 'var(--c-ink)', r: 10 },
  { bg: 'var(--c-orange)', fg: 'var(--c-ink)', r: -7 },
  { bg: 'var(--c-mint)', fg: 'var(--c-ink)', r: 6 },
  { bg: 'var(--c-cyan)', fg: 'var(--c-ink)', r: -10 },
];

/**
 * Splash on every full page load (~1.8s): the name's letters drop in as crayon
 * tiles, the hero's hand-drawn box draws itself around them, the tiles
 * straighten, and the sheet tears away upward with a ripped edge. Pure CSS and
 * server-rendered, so it never waits on JavaScript and the page renders (and
 * is indexed) underneath. Skipped under reduced motion.
 */
export default function Preloader() {
  return (
    <div className="splash" aria-hidden>
      <div className="splash-inner">
        <p className="splash-note font-hand">my name is</p>
        <div className="splash-box">
          <svg className="splash-doodle" viewBox="0 0 400 120" preserveAspectRatio="none">
            <path
              d="M10 16 C 120 4, 280 8, 392 12 C 397 48, 393 82, 389 108 C 270 117, 128 113, 12 110 C 6 80, 5 44, 14 8"
              pathLength={1}
            />
          </svg>
          <p className="splash-tiles font-display">
            {[...NAME].map((char, i) => (
              <span
                key={i}
                style={{
                  ['--i' as string]: i,
                  ['--r' as string]: `${tiles[i].r}deg`,
                  background: tiles[i].bg,
                  color: tiles[i].fg,
                }}
              >
                {char}
              </span>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
}
