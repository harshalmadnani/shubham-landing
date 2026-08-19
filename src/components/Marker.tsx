/**
 * The bullet used anywhere a list needs a marker: a hairline cross, drawn at
 * the same weight as the rules that divide the page. It is deliberately not a
 * tick — a tick reads as "done", and these are contents, not achievements.
 */
export function Marker({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 12 12"
      fill="none"
      stroke="currentColor"
      strokeWidth={1}
      aria-hidden="true"
      className={className}
    >
      <path d="M6 1v10M1 6h10" />
    </svg>
  );
}
