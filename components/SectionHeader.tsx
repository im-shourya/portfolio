import type { ReactNode } from 'react';

/** Shared heading row for each bento section: title on the left, optional note or action on the right. */
export default function SectionHeader({
  title,
  note,
  action,
  as: Tag = 'h2',
}: {
  title: string;
  note?: string;
  action?: ReactNode;
  as?: 'h1' | 'h2';
}) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-5 px-2">
      <div>
        <Tag className="text-[28px] sm:text-[32px] leading-[1.15] font-normal text-ink-strong">{title}</Tag>
        {note && <p className="text-[15px] text-ink-muted mt-1.5 max-w-[60ch]">{note}</p>}
      </div>
      {action}
    </div>
  );
}

/** Page-width wrapper shared by every section (1216px content, as in the reference). */
export function Container({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`max-w-[1264px] mx-auto px-4 sm:px-6 ${className}`}>{children}</div>;
}
