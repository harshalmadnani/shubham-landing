import { ButtonLink } from "@/components/Button";
import { RichTextContent } from "@/components/PendingData";
import { RouteBoard } from "@/components/RouteBoard";
import { Ticker } from "@/components/Ticker";
import { proofPoints } from "@/content/sections";
import { consultationMessage, hero, whatsAppUrl } from "@/content/site";

/**
 * The hero is a sign, and the board beside it is the proposition.
 *
 * No decorative scene: the graphic on the right is the four real routes,
 * generated from the same data that prices them. The claim and the evidence
 * for the claim are the same object.
 */
export function Hero() {
  return (
    <section id="hero">
      <div className="mx-auto max-w-page px-gutter pt-xxl tablet:px-rail tablet:pt-xxxl">
        <div className="grid items-end gap-xxl desktop:grid-cols-[1.05fr_minmax(0,0.95fr)]">
          <div>
            <p className="flex items-center gap-sm font-mono text-label uppercase text-ink-3">
              <span
                aria-hidden="true"
                className="h-[7px] w-[7px] rounded-full bg-signal"
              />
              {hero.eyebrow}
            </p>

            <h1 className="mt-lg text-mega text-ink">
              {hero.headline}{" "}
              <em className="text-signal">{hero.headlineAccent}</em>
            </h1>

            <p className="mt-xl max-w-[46ch] text-lead text-ink-2">
              {hero.body}
            </p>

            <div className="mt-xl flex flex-wrap gap-sm">
              <ButtonLink href={whatsAppUrl(consultationMessage)}>
                Book a free consultation
              </ButtonLink>
              <ButtonLink href="/programs" variant="outline">
                Browse 37 programmes
              </ButtonLink>
            </div>
          </div>

          <RouteBoard />
        </div>

        {/* Three claims, on the rule that closes the hero. */}
        <ul className="mt-xxxl grid gap-lg border-t border-ink pt-lg tablet:grid-cols-3">
          {proofPoints.map((point, index) => (
            <li key={index} className="flex gap-sm">
              <span className="font-mono text-label text-signal-text">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-small text-ink-2">
                <RichTextContent value={point} />
              </span>
            </li>
          ))}
        </ul>
      </div>

      <Ticker />
    </section>
  );
}
