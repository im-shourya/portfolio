const NAME = 'SHOURYA';

// The greeting is one of these, picked per load (see SPLASH_SCRIPT).
const GREETINGS = ['my name is', 'hi, I’m', 'hello, I’m', 'namaste, I’m', 'this is'];

/**
 * Splash on every full page load: the name pops in letter by letter, a colour
 * band sweeps across, and the page is revealed. Each load mixes a different
 * sweep colour, reveal direction, letter entrance and greeting (480
 * combinations, never the same twice in a row). The animation is pure CSS;
 * the page renders and is indexed underneath. Skipped for reduced motion.
 */
export default function Preloader() {
  return (
    <div className="splash" aria-hidden>
      <div className="splash-inner">
        <span className="splash-tape splash-tape-a" />
        <span className="splash-tape splash-tape-b" />
        <p className="splash-note font-hand">
          {GREETINGS.map((text, i) => (
            <span key={i} data-g={i}>
              {text}
            </span>
          ))}
        </p>
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

/**
 * Runs in <head> before first paint: picks sweep colour (6), reveal (4), letter
 * entrance (4) and greeting (5) at random, re-rolling if it matches the last
 * load, and sets them as data attributes on <html> for the CSS to use.
 */
export const SPLASH_SCRIPT =
  "try{var d=document.documentElement,r=function(n){return Math.floor(Math.random()*n)},k,l=null;try{l=localStorage.getItem('splash')}catch(e){}" +
  "do{k=''+r(6)+r(4)+r(4)+r(5)}while(k===l);try{localStorage.setItem('splash',k)}catch(e){}" +
  "d.dataset.sw=k[0];d.dataset.sr=k[1];d.dataset.sl=k[2];d.dataset.sg=k[3]}catch(e){}";
