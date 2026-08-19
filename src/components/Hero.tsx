import { ButtonLink } from "@/components/Button";
import { ArrowRightIcon } from "@/components/icons";
import { RichTextContent } from "@/components/PendingData";
import { TechIndex } from "@/components/TechIndex";
import { proofPoints } from "@/content/sections";
import { consultationMessage, hero, whatsAppUrl } from "@/content/site";

/**
 * The cover of the prospectus.
 *
 * The ruled column grid is visible behind the type — the measure the rest of
 * the page is set to, shown once at full strength — and the headline is the
 * only thing on the site allowed to run to the full width of the page. The
 * three figures underneath are set as a ruled table rather than as cards,
 * because they are data, and data belongs in a table.
 */
export function Hero() {
  return (
    <section className="relative overflow-hidden bg-paper">
      {/* The grid itself: hairlines on quarter columns, fading out before it
          reaches the type so it stays a watermark rather than a cage. */}
      <div
        aria-hidden="true"
        className="rule-grid pointer-events-none absolute inset-0 opacity-70 [mask-image:linear-gradient(to_bottom,black,transparent_86%)]"
      />

      <div className="relative mx-auto w-full max-w-page px-6 pb-16 pt-16 tablet:px-10 tablet:pb-20 tablet:pt-24">
        <p className="flex items-center gap-4 font-mono text-label uppercase text-ink-3">
          <span className="text-flame-ink tnum">00</span>
          {hero.eyebrow}
        </p>

        <h1 className="mt-10 font-display text-display text-ink [text-wrap:balance]">
          {hero.headline}
          <br />
          <em>{hero.headlineAccent}</em>
        </h1>

        {/* Actions and lead share one row: the headline is wide enough that
            stacking them leaves a hole the size of a paragraph under it. */}
        <div className="mt-12 grid gap-x-10 gap-y-8 desktop:grid-cols-12">
          <div className="flex flex-wrap items-start gap-4 desktop:col-span-6">
            <ButtonLink href={whatsAppUrl(consultationMessage)}>
              Book free consultation
            </ButtonLink>
            <ButtonLink href="/programs" variant="outline">
              Browse the catalogue
              <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
            </ButtonLink>
          </div>

          <p className="text-lead text-ink-2 desktop:col-span-5 desktop:col-start-8">
            {hero.body}
          </p>
        </div>

        {/* Figures, as a table. Each cell keeps its own rule on desktop so the
            row reads as three entries rather than as one long sentence. */}
        <dl className="mt-16 grid border-t border-ink tablet:grid-cols-3">
          {proofPoints.map((point, index) => (
            <div
              key={index}
              className="flex gap-4 border-b border-rule py-6 tablet:border-b-0 tablet:border-r tablet:pr-6 tablet:last:border-r-0 tablet:[&:not(:first-child)]:pl-6"
            >
              <dt className="font-mono text-index tnum text-flame-ink">
                {String(index + 1).padStart(2, "0")}
              </dt>
              <dd className="text-body text-ink-2">
                <RichTextContent value={point} />
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <TechIndex />
    </section>
  );
}
