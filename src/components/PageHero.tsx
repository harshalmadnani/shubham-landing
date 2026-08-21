import type { ReactNode } from "react";

/**
 * The head of every page that is not the home page: a tag, a big title, one
 * paragraph, and the actions. Same anatomy as the home hero at a smaller size.
 */
export function PageHero({
  label,
  title,
  lead,
  actions,
  meta,
  tone = "canvas",
}: {
  label: string;
  title: ReactNode;
  lead?: ReactNode;
  actions?: ReactNode;
  /** A short line of figures under the actions — counts, durations, totals. */
  meta?: ReactNode;
  tone?: "canvas" | "night";
}) {
  const isNight = tone === "night";

  return (
    <section
      className={`relative overflow-hidden ${isNight ? "bg-night text-chalk" : "bg-canvas"}`}
    >
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute -top-40 left-1/2 h-[32rem] w-[64rem] -translate-x-1/2 rounded-full blur-3xl ${
          isNight ? "bg-accent/20" : "bg-accent-soft"
        }`}
      />

      <div className="relative mx-auto w-full max-w-page px-6 pb-20 pt-16 tablet:px-8 tablet:pb-24 tablet:pt-20">
        <p
          className={`inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-micro ${
            isNight ? "bg-night-2 text-chalk-2" : "bg-card text-ink-2 ring-1 ring-line"
          }`}
        >
          <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent" />
          {label}
        </p>

        <h1
          className={`mt-8 max-w-4xl text-hero text-balance ${
            isNight ? "text-chalk" : "text-ink"
          }`}
        >
          {title}
        </h1>

        {lead && (
          <p
            className={`mt-8 max-w-2xl text-lead ${
              isNight ? "text-chalk-2" : "text-ink-2"
            }`}
          >
            {lead}
          </p>
        )}

        {actions && (
          <div className="mt-10 flex flex-wrap items-center gap-3">{actions}</div>
        )}

        {meta && (
          <p
            className={`mt-10 text-micro ${isNight ? "text-chalk-2" : "text-ink-3"}`}
          >
            {meta}
          </p>
        )}
      </div>
    </section>
  );
}
