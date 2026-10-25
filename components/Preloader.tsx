const NAME = 'SHOURYA';

/**
 * First-visit splash: the name pops in letter by letter, a yellow band sweeps
 * up, and the page is revealed. Pure CSS, so it never waits on JavaScript; the
 * page renders underneath as normal. Skipped on later page loads in the same
 * session (see SPLASH_SCRIPT) and for reduced motion.
 */
export default function Preloader() {
  return (
    <div className="splash" aria-hidden>
      <div className="splash-inner">
        <span className="splash-tape splash-tape-a" />
        <span className="splash-tape splash-tape-b" />
        <p className="splash-note font-hand">my name is</p>
        <p className="splash-name font-display">
          {[...NAME].map((char, i) => (
            <span key={i} style={{ ['--i' as string]: i }}>
              {char}
            </span>
          ))}
        </p>
      </div>
      <div className="splash-wipe" />
    </div>
  );
}

/** Runs before first paint: hide the splash if it has already played this session. */
export const SPLASH_SCRIPT =
  "try{if(sessionStorage.getItem('splash-seen'))document.documentElement.classList.add('no-splash');else sessionStorage.setItem('splash-seen','1')}catch(e){}";
