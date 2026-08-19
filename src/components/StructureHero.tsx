import { ButtonLink } from "@/components/Button";
import { RouteBoard } from "@/components/RouteBoard";
import { structureHero } from "@/content/trainingStructure";
import { consultationMessage, whatsAppUrl } from "@/content/site";

export function StructureHero() {
  return (
    <section id="training-structure">
      <div className="mx-auto max-w-page border-b border-ink px-gutter pb-xxl pt-xxl tablet:px-rail tablet:pt-xxxl">
        <div className="grid items-end gap-xxl desktop:grid-cols-[1.05fr_minmax(0,0.95fr)]">
          <div>
            <p className="flex items-center gap-sm font-mono text-label uppercase text-ink-3">
              <span
                aria-hidden="true"
                className="h-[7px] w-[7px] rounded-full bg-signal"
              />
              {structureHero.eyebrow}
            </p>

            <h1 className="mt-lg max-w-[20ch] text-mega text-ink">
              {structureHero.headline}{" "}
              <em className="text-pine">{structureHero.headlineAccent}</em>
            </h1>

            <p className="mt-xl max-w-[50ch] text-lead text-ink-2">
              {structureHero.body}
            </p>

            <div className="mt-xl flex flex-wrap gap-sm">
              <ButtonLink href={whatsAppUrl(consultationMessage)}>
                Book a free consultation
              </ButtonLink>
              <ButtonLink href="/programs" variant="outline">
                Browse programmes
              </ButtonLink>
            </div>
          </div>

          <RouteBoard />
        </div>
      </div>
    </section>
  );
}
