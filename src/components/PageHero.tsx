import type { ReactNode } from "react";

/**
 * The head of every page that is not the home page.
 *
 * Same anatomy as the cover — index, label, serif headline, offset lead — at
 * three-quarter scale, so a section page is recognisably part of the same
 * document without competing with it.
 */
export function PageHero({
  index = "00",
  label,
  title,
  lead,
  actions,
  meta,
}: {
  index?: string;
  label: string;
  title: ReactNode;
  lead?: ReactNode;
  actions?: ReactNode;
  /** A mono line of figures under the fold — counts, durations, totals. */
  meta?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-rule bg-paper">
      <div
        aria-hidden="true"
        className="rule-grid pointer-events-none absolute inset-0 opacity-60 [mask-image:linear-gradient(to_bottom,black,transparent_90%)]"
      />

      <div className="relative mx-auto w-full max-w-page px-6 py-16 tablet:px-10 tablet:py-20">
        <p className="flex items-center gap-4 font-mono text-label uppercase text-ink-3">
          <span className="tnum text-flame-ink">{index}</span>
          {label}
        </p>

        <h1 className="mt-8 max-w-4xl font-display text-display-sm text-ink tablet:text-display [text-wrap:balance]">
          {title}
        </h1>

        {lead && (
          <div className="mt-8 grid desktop:grid-cols-12">
            <p className="text-lead text-ink-2 desktop:col-span-7">{lead}</p>
          </div>
        )}

        {actions && (
          <div className="mt-10 flex flex-wrap items-center gap-4">{actions}</div>
        )}

        {meta && (
          <p className="mt-12 border-t border-rule pt-5 font-mono text-meta uppercase text-ink-3">
            {meta}
          </p>
        )}
      </div>
    </section>
  );
}
