// framework7-icons ships React SVG components without type declarations.
declare module 'framework7-icons/react' {
  import type { FC, SVGProps } from 'react';
  type F7Icon = FC<SVGProps<SVGSVGElement>>;
  export const ArrowDown: F7Icon;
  export const ArrowLeft: F7Icon;
  export const ArrowUpRight: F7Icon;
  export const Book: F7Icon;
  export const Briefcase: F7Icon;
  export const Calendar: F7Icon;
  export const ChevronLeftSlashChevronRight: F7Icon;
  export const Clock: F7Icon;
  export const Desktopcomputer: F7Icon;
  export const DocText: F7Icon;
  export const Envelope: F7Icon;
  export const EnvelopeFill: F7Icon;
  export const Layers: F7Icon;
  export const LineHorizontal3: F7Icon;
  export const Location: F7Icon;
  export const LogoGithub: F7Icon;
  export const LogoLinkedin: F7Icon;
  export const Paintbrush: F7Icon;
  export const Rocket: F7Icon;
  export const Rosette: F7Icon;
  export const Sparkles: F7Icon;
  export const SquarePencil: F7Icon;
  export const Star: F7Icon;
  export const Tray2: F7Icon;
  export const Wrench: F7Icon;
  export const Xmark: F7Icon;
}
