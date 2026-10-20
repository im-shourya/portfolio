import type { ComponentType, SVGProps } from 'react';
import * as F7 from 'framework7-icons/react';

/**
 * iOS-style glyphs (Framework7 Icons, MIT), the closest web-licensable match to SF Symbols.
 * Every icon on the site goes through here so the set stays consistent.
 */
type IconProps = Omit<SVGProps<SVGSVGElement>, 'width' | 'height'> & { size?: number };

function make(Glyph: ComponentType<SVGProps<SVGSVGElement>>) {
  function Icon({ size = 18, ...props }: IconProps) {
    return <Glyph width={size} height={size} aria-hidden focusable="false" {...props} />;
  }
  return Icon;
}

export const MailIcon = make(F7.Envelope);
export const MailFillIcon = make(F7.EnvelopeFill);
export const GithubIcon = make(F7.LogoGithub);
export const LinkedinIcon = make(F7.LogoLinkedin);
export const WriteIcon = make(F7.SquarePencil);
export const DocIcon = make(F7.DocText);
export const ArrowDownIcon = make(F7.ArrowDown);
export const ArrowLeftIcon = make(F7.ArrowLeft);
export const ArrowUpRightIcon = make(F7.ArrowUpRight);
export const CalendarIcon = make(F7.Calendar);
export const ClockIcon = make(F7.Clock);
export const LocationIcon = make(F7.Location);
export const BriefcaseIcon = make(F7.Briefcase);
export const MenuIcon = make(F7.LineHorizontal3);
export const CloseIcon = make(F7.Xmark);
export const CodeIcon = make(F7.ChevronLeftSlashChevronRight);
export const DesktopIcon = make(F7.Desktopcomputer);
export const StackIcon = make(F7.Layers);
export const SparklesIcon = make(F7.Sparkles);
export const DataIcon = make(F7.Tray2);
export const RocketIcon = make(F7.Rocket);
export const BrushIcon = make(F7.Paintbrush);
export const WrenchIcon = make(F7.Wrench);
export const RosetteIcon = make(F7.Rosette);
export const StarIcon = make(F7.Star);

// Bottom navigation: outline when idle, filled when active.
export const BriefcaseFillIcon = make(F7.BriefcaseFill);
export const PersonIcon = make(F7.Person);
export const PersonFillIcon = make(F7.PersonFill);
export const StackFillIcon = make(F7.LayersFill);
export const FlagIcon = make(F7.Flag);
export const FlagFillIcon = make(F7.FlagFill);
export const ChatIcon = make(F7.ChatBubble);
export const ChatFillIcon = make(F7.ChatBubbleFill);
export const BookFillIcon = make(F7.BookFill);
export const BookIcon = make(F7.Book);
