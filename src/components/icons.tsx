type IconProps = { className?: string };

/*
 * One icon set, drawn at the weight of the page's hairlines.
 *
 * Every glyph is a 24-unit box with a 1.25 stroke and square-cut ends, so an
 * icon sitting next to a rule reads as part of the same drawing rather than as
 * a heavier UI sticker dropped on top of it.
 */
function Glyph({
  className,
  children,
}: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.25}
      strokeLinecap="square"
      strokeLinejoin="miter"
      aria-hidden="true"
      className={className}
    >
      {children}
    </svg>
  );
}

export function CalendarIcon({ className }: IconProps) {
  return (
    <Glyph className={className}>
      <path d="M3.5 6.5h17v14h-17zM3.5 10.5h17M8 3.5v4M16 3.5v4" />
    </Glyph>
  );
}

export function MenuIcon({ className }: IconProps) {
  return (
    <Glyph className={className}>
      <path d="M3 7h18M3 17h18" />
    </Glyph>
  );
}

export function CloseIcon({ className }: IconProps) {
  return (
    <Glyph className={className}>
      <path d="M5 5l14 14M19 5L5 19" />
    </Glyph>
  );
}

/** A long, flat arrow — the editorial kind, not a chevron with a stem. */
export function ArrowRightIcon({ className }: IconProps) {
  return (
    <Glyph className={className}>
      <path d="M2 12h20M15 5l7 7-7 7" />
    </Glyph>
  );
}

export function ArrowUpRightIcon({ className }: IconProps) {
  return (
    <Glyph className={className}>
      <path d="M6 18L18 6M8 6h10v10" />
    </Glyph>
  );
}

export function ChevronDownIcon({ className }: IconProps) {
  return (
    <Glyph className={className}>
      <path d="M5 9l7 7 7-7" />
    </Glyph>
  );
}

export function WhatsAppIcon({ className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.15h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.21 8.21 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.25-8.23a8.2 8.2 0 0 1 5.83 2.42 8.19 8.19 0 0 1 2.41 5.82c0 4.54-3.7 8.23-8.24 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.24-.64.8-.79.97-.14.16-.29.18-.54.06-.25-.13-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.43.13-.15.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.13-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.87.85-.87 2.07s.9 2.4 1.02 2.56c.12.17 1.75 2.67 4.25 3.75.59.25 1.06.4 1.42.52.6.19 1.14.16 1.57.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.14-1.18-.06-.11-.22-.17-.47-.29Z" />
    </svg>
  );
}
