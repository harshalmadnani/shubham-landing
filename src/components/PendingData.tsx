import { Fragment } from "react";

import type { RichText } from "@/content/types";

/**
 * A chip standing in for a figure the business has not confirmed.
 *
 * The site makes a point of not publishing invented statistics, so an unknown
 * number renders as a visible gap rather than as a plausible-looking figure.
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
      ? "bg-night-2 text-chalk-2"
      : "bg-surface-2 text-ink-3";

  return (
    <span
      className={`mx-1 inline-flex items-center rounded-full px-2.5 py-0.5 align-baseline text-micro ${toneClasses}`}
    >
      {token} — pending
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
