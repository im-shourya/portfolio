import type { SVGProps } from 'react';

/**
 * iOS-style glyphs (Framework7 Icons, MIT), the closest web-licensable match to SF Symbols.
 * Every icon on the site goes through here so the set stays consistent.
 *
 * Each icon is a <use> into /icons.svg (built by app/icons.svg/route.ts from the
 * glyphs listed here), so a page carries a short reference instead of the full
 * path, which had been repeated in the HTML and again in the RSC payload.
 */
type IconProps = Omit<SVGProps<SVGSVGElement>, 'width' | 'height'> & { size?: number };

/** Every Framework7 glyph in use, by its file name in framework7-icons/svg. */
export const glyphs: string[] = [];

function make(glyph: string) {
  glyphs.push(glyph);
  function Icon({ size = 18, ...props }: IconProps) {
    return (
      <svg viewBox="0 0 56 56" width={size} height={size} fill="currentColor" aria-hidden focusable="false" {...props}>
        <use href={`/icons.svg#${glyph}`} />
      </svg>
    );
  }
  return Icon;
}

export const MailIcon = make('envelope');
export const MailFillIcon = make('envelope_fill');
export const GithubIcon = make('logo_github');
export const LinkedinIcon = make('logo_linkedin');
export const WriteIcon = make('square_pencil');
export const DocIcon = make('doc_text');
export const ArrowDownIcon = make('arrow_down');
export const ArrowLeftIcon = make('arrow_left');
export const ArrowUpRightIcon = make('arrow_up_right');
export const CalendarIcon = make('calendar');
export const ClockIcon = make('clock');
export const LocationIcon = make('location');
export const BriefcaseIcon = make('briefcase');
export const MenuIcon = make('line_horizontal_3');
export const CloseIcon = make('xmark');
export const CodeIcon = make('chevron_left_slash_chevron_right');
export const DesktopIcon = make('desktopcomputer');
export const StackIcon = make('layers');
export const SparklesIcon = make('sparkles');
export const DataIcon = make('tray_2');
export const RocketIcon = make('rocket');
export const BrushIcon = make('paintbrush');
export const WrenchIcon = make('wrench');
export const RosetteIcon = make('rosette');
export const StarIcon = make('star');

// Bottom navigation: outline when idle, filled when active.
export const BriefcaseFillIcon = make('briefcase_fill');
export const PersonIcon = make('person');
export const PersonFillIcon = make('person_fill');
export const StackFillIcon = make('layers_fill');
export const FlagIcon = make('flag');
export const FlagFillIcon = make('flag_fill');
export const ChatIcon = make('chat_bubble');
export const ChatFillIcon = make('chat_bubble_fill');
export const BookFillIcon = make('book_fill');
export const BookIcon = make('book');
