import { ButtonLink } from "@/components/Button";
import { ArrowRightIcon } from "@/components/icons";
import { RichTextContent } from "@/components/PendingData";
import { bookingPath } from "@/content/booking";
import { proofPoints } from "@/content/sections";
import { hero } from "@/content/site";

/**
 * The opening screen: a headline, a sentence, two actions.
 *
 * Everything else that used to live here — the figures table, the logo wall —
 * has moved to sections of its own further down. The first screen sells one
 * idea, and it can only do that if it is the only thing on it.
 */
export function Hero() {
  return (
    <section className="relative overflow-hidden bg-canvas">
      {/* A single soft wash behind the type, warm side up. It is the only
          gradient in the system and it never sits under body copy. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-[38rem] w-[70rem] -translate-x-1/2 rounded-full bg-accent-soft blur-3xl"
      />

      <div className="relative mx-auto w-full max-w-page px-6 pb-24 pt-20 tablet:px-8 tablet:pb-32 tablet:pt-28">
        <p className="inline-flex items-center gap-2 rounded-full bg-card px-3.5 py-1.5 text-micro text-ink-2 ring-1 ring-line">
          <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent" />
          {hero.eyebrow}
        </p>

        <h1 className="mt-8 max-w-4xl text-hero text-balance">
          {hero.headline} <em>{hero.headlineAccent}</em>
        </h1>

        <p className="mt-8 max-w-xl text-lead text-ink-2">{hero.body}</p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <ButtonLink href={hero.primaryCta.href}>
            {hero.primaryCta.label}
            <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
          </ButtonLink>
          <ButtonLink href={bookingPath} variant="outline">
            {hero.secondaryCta.label}
          </ButtonLink>
        </div>

        <ul className="mt-20 grid gap-8 tablet:grid-cols-3 tablet:gap-10">
          {proofPoints.map((point, index) => (
            <li key={index} className="flex gap-3 text-body text-ink-2">
              <span
                aria-hidden="true"
                className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
              />
              <RichTextContent value={point} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
