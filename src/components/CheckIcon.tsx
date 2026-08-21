/**
 * A short horizontal rule used as a list marker.
 *
 * The system's bullet is a segment of route line rather than a tick — a tick
 * says "done", and these lists describe what is included, not what is finished.
 */
export function Marker({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`mt-[0.58em] block h-[2px] w-3 shrink-0 bg-signal ${className ?? ""}`}
    />
  );
}
