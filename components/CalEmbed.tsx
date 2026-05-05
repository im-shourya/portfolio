'use client';

import { useEffect } from 'react';

// Cal.com username — update this to your actual Cal.com username
const CAL_USERNAME = 'im-shourya';
const CAL_EVENT_SLUG = '30min'; // e.g., '30min', 'discovery-call'

declare global {
  interface Window {
    Cal?: (...args: unknown[]) => void;
  }
}

export function useCalEmbed() {
  useEffect(() => {
    // Only load once
    if (document.getElementById('cal-embed-script')) return;

    const script = document.createElement('script');
    script.id = 'cal-embed-script';
    script.src = 'https://app.cal.com/embed/embed.js';
    script.async = true;
    script.onload = () => {
      if (window.Cal) {
        window.Cal('init', { origin: 'https://cal.com' });
        window.Cal('ui', {
          theme: 'dark',
          styles: { branding: { brandColor: '#1B4A44' } },
          hideEventTypeDetails: false,
          layout: 'month_view',
        });
      }
    };
    document.head.appendChild(script);
  }, []);
}

export function openCalPopup() {
  if (window.Cal) {
    window.Cal('modal', {
      calLink: `${CAL_USERNAME}/${CAL_EVENT_SLUG}`,
      config: {
        layout: 'month_view',
        theme: 'dark',
      },
    });
  }
}

export { CAL_USERNAME, CAL_EVENT_SLUG };
