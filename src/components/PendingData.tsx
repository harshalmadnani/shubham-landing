import { Fragment } from "react";

import type { RichText } from "@/content/types";

/**
 * A dashed slot standing in for a figure the business has not confirmed.
 *
 * The site makes a point of not publishing invented statistics, so an unknown
 * number renders as a visible gap in the page — set in mono, like every other
 * figure here — rather than as a plausible-looking placeholder.
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
      ? "border-night-rule text-bone-2"
      : "border-rule-2 text-ink-3";

  return (
    <span
      className={`mx-1 inline-flex items-center border border-dashed px-2 py-0.5 align-baseline font-mono text-meta uppercase ${toneClasses}`}
    >
      {token} — pending
    </span>
  );
}

/** Renders copy that may interleave plain text with pending-data slots. */
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
