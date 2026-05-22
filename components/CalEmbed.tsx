'use client';

import { useEffect, useCallback } from 'react';

const CAL_USERNAME = 'im-shourya';
const CAL_EVENT_SLUG = '30min'; // e.g., '30min', 'discovery-call'

export const CAL_LINK = `${CAL_USERNAME}/${CAL_EVENT_SLUG}`;

/* eslint-disable @typescript-eslint/no-explicit-any */
declare global {
  interface Window {
    Cal?: any;
  }
}

export function useCalEmbed() {
  useEffect(() => {
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
      styles: { branding: { brandColor: '#1B4A44' } },
      hideEventTypeDetails: false,
      layout: 'month_view',
    });
  }, []);
}

export function useOpenCalPopup() {
  useCalEmbed();

  return useCallback(() => {
    if (window.Cal) {
      window.Cal('modal', {
        calLink: CAL_LINK,
        config: {
          layout: 'month_view',
          theme: 'dark',
        },
      });
    }
  }, []);
}

export { CAL_USERNAME, CAL_EVENT_SLUG };
