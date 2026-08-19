import { Fragment } from "react";

import type { RichText } from "@/content/types";

/**
 * A dashed chip standing in for a figure the business has not confirmed.
 *
 * The site makes a point of not publishing invented statistics, so unknown
 * numbers render as a visible gap rather than a plausible-looking placeholder.
 */
export function PendingChip({
  token,
  tone = "light",
}: {
  token: string;
  tone?: "light" | "dark";
}) {
  const toneClasses =
    tone === "dark"
      ? "border-pine-rule text-pine-ink-2"
      : "border-rule-strong text-ink-3";

  return (
    <span
      className={`inline-flex items-center border border-dashed px-xs py-[1px] font-mono text-label ${toneClasses}`}
    >
      [{token} — pending real data]
    </span>
  );
}

/** Renders copy that may interleave plain text with pending-data chips. */
export function RichTextContent({
  value,
  tone = "light",
}: {
  value: RichText;
  tone?: "light" | "dark";
}) {
  if (typeof value === "string") {
    return <>{value}</>;
  }

  return (
    <>
      {value.map((part, index) => (
        <Fragment key={index}>
          {typeof part === "string" ? (
            part
          ) : (
            <PendingChip token={part.token} tone={tone} />
          )}
        </Fragment>
      ))}
    </>
  );
}
