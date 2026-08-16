/**
 * The handful of icons the page needs, inlined.
 *
 * Small enough that an icon package would cost more than it saves. Each one
 * takes `className` so size comes from the spacing tokens at the call site.
 */

type IconProps = { className?: string };

const strokeProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function CalendarIcon({ className }: IconProps) {
  return (
    <svg {...strokeProps} className={className}>
      <path d="M8 2v3" />
      <path d="M16 2v3" />
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18" />
    </svg>
  );
}

export function MenuIcon({ className }: IconProps) {
  return (
    <svg {...strokeProps} className={className}>
      <path d="M4 5h16" />
      <path d="M4 12h16" />
      <path d="M4 19h16" />
    </svg>
  );
}

export function CloseIcon({ className }: IconProps) {
  return (
    <svg {...strokeProps} className={className}>
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

export function ArrowRightIcon({ className }: IconProps) {
  return (
    <svg {...strokeProps} className={className}>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

export function ArrowUpIcon({ className }: IconProps) {
  return (
    <svg {...strokeProps} className={className}>
      <path d="m5 12 7-7 7 7" />
      <path d="M12 19V5" />
    </svg>
  );
}

export function ChevronDownIcon({ className }: IconProps) {
  return (
    <svg {...strokeProps} className={className}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}
