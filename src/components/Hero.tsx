import { ButtonLink } from "@/components/Button";
import { RichTextContent } from "@/components/PendingData";
import { ArrowRightIcon, CalendarIcon } from "@/components/icons";
import { proofPoints } from "@/content/sections";
import { consultationMessage, hero, whatsAppUrl } from "@/content/site";

/**
 * A typographic hero: serif display on paper, no artwork.
 *
 * The old version was a dark card with a mesh wash and a generated photo —
 * exactly the grammar every template ships with. Confidence here is a big
 * serif sentence and a lot of air. The proof points sit under a hairline as
 * part of the hero rather than as a separate strip of cards.
 */
export function Hero() {
  return (
    <section id="hero" className="px-md tablet:px-lg">
      <div className="mx-auto max-w-content">
        <div className="pb-xxl pt-xxl tablet:pt-xxxl">
          <p className="flex items-center gap-sm text-eyebrow uppercase text-ink-muted animate-fade-up">
            <span aria-hidden="true" className="h-px w-6 bg-ink/30" />
            {hero.eyebrow}
          </p>

          <h1 className="mt-lg max-w-4xl font-serif text-display-xl-mobile tablet:text-display-xl-tablet desktop:text-display-xl text-ink animate-fade-up">
            {hero.headline}{" "}
            <em className="text-primary">{hero.headlineAccent}</em>
          </h1>

          <p className="mt-xl max-w-2xl text-body-lg text-ink-muted animate-fade-up">
            {hero.body}
          </p>

          <div className="mt-xl flex flex-wrap gap-sm animate-fade-up">
            <ButtonLink href={whatsAppUrl(consultationMessage)}>
              <CalendarIcon className="h-md w-md" />
              Book free consultation
            </ButtonLink>
            <ButtonLink href="/programs" variant="outline">
              Explore programs
              <ArrowRightIcon className="h-md w-md transition-transform duration-200 group-hover/btn:translate-x-1" />
            </ButtonLink>
          </div>
        </div>

        {/* The proof, set as a quiet fact row rather than three shadowed cards. */}
        <dl className="grid grid-cols-1 gap-lg border-t border-hairline pt-lg pb-md tablet:grid-cols-3 tablet:gap-xl">
          {proofPoints.map((point, index) => (
            <div
              key={index}
              className="flex gap-sm text-body text-ink tablet:block"
            >
              <dt className="sr-only">Proof point {index + 1}</dt>
              <dd>
                <RichTextContent value={point} />
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
