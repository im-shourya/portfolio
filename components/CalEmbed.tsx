'use client';

import { useCallback } from 'react';

const CAL_USERNAME = 'im-shourya';
const CAL_EVENT_SLUG = '30min'; // e.g., '30min', 'discovery-call'

export const CAL_LINK = `${CAL_USERNAME}/${CAL_EVENT_SLUG}`;

/* eslint-disable @typescript-eslint/no-explicit-any */
declare global {
  interface Window {
    Cal?: any;
  }
}

/**
 * Installs Cal.com's embed on first use instead of on page load, so its script
 * (and the iframe it preloads) only costs anything for people who book.
 * Calls made before the script arrives are queued by the loader.
 */
function loadCal() {
  // Prevent double-loading
  if (window.Cal) return;

  // Official Cal.com embed snippet (minified loader)
  (function (C: any, A: string, L: string) {
    const p = function (a: any, ar: any) {
      a.q.push(ar);
    };
    const d = C.document;
    C.Cal =
      C.Cal ||
      function (...args: any[]) {
        const cal = C.Cal;
        const ar = args;
        if (!cal.loaded) {
          cal.ns = {};
          cal.q = cal.q || [];
          d.head.appendChild(d.createElement('script')).src = A;
          cal.loaded = true;
        }
        if (ar[0] === L) {
          const api: any = function (...apiArgs: any[]) {
            p(api, apiArgs);
          };
          const namespace = ar[1];
          api.q = api.q || [];
          if (typeof namespace === 'string') {
            cal.ns[namespace] = cal.ns[namespace] || api;
            p(cal.ns[namespace], ar);
            p(cal, ['initNamespace', namespace]);
          } else {
            p(cal, ar);
          }
          return;
        }
        p(cal, ar);
      };
  })(window, 'https://app.cal.com/embed/embed.js', 'init');

  window.Cal('init', { origin: 'https://cal.com' });

  window.Cal('ui', {
    theme: 'dark',
    styles: { branding: { brandColor: '#FF6B1A' } },
    hideEventTypeDetails: false,
    layout: 'month_view',
  });
  window.Cal('preload', { calLink: CAL_LINK });
}

/** Warm the embed when a booking button is hovered or focused, so the popup opens instantly. */
export const calIntentProps = {
  onPointerEnter: loadCal,
  onFocus: loadCal,
};

export function useOpenCalPopup() {
  return useCallback(() => {
    loadCal();
    window.Cal('modal', {
      calLink: CAL_LINK,
      config: {
        layout: 'month_view',
        theme: 'dark',
      },
    });
  }, []);
}

export { CAL_USERNAME, CAL_EVENT_SLUG };
