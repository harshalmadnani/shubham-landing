import type { ReactNode } from "react";

import { Reveal } from "@/components/Reveal";

/**
 * The shared top of every section: a small tracked eyebrow, the headline, and
 * an optional lead paragraph. Centralising it is what keeps fourteen sections
 * reading as one page.
 */
export function SectionHeading({
  eyebrow,
  title,
  lead,
  tone = "light",
  align = "start",
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  tone?: "light" | "dark";
  align?: "start" | "center";
}) {
  const isDark = tone === "dark";
  const centered = align === "center";

  return (
    <Reveal>
      <div className={centered ? "mx-auto max-w-3xl text-center" : ""}>
        {eyebrow && (
          <p
            className={`flex items-center gap-sm text-eyebrow uppercase ${
              centered ? "justify-center" : ""
            } ${isDark ? "text-inverse-ink-muted" : "text-ink-muted"}`}
          >
            <span
              aria-hidden="true"
              className={`h-px w-6 ${
                isDark ? "bg-inverse-ink-muted/60" : "bg-ink/30"
              }`}
            />
            {eyebrow}
          </p>
        )}

        {/* Headlines carry the serif — it is what separates this from every
            template that ships with a grotesque and a gradient. */}
        <h2
          className={`mt-sm text-headline ${
            isDark ? "text-inverse-ink" : "text-ink"
          }`}
        >
          {title}
        </h2>

        {lead && (
          <p
            className={`mt-md text-body-lg ${centered ? "mx-auto" : ""} max-w-2xl ${
              isDark ? "text-inverse-ink-muted" : "text-ink-muted"
            }`}
          >
            {lead}
          </p>
        )}
      </div>
    </Reveal>
  );
}
