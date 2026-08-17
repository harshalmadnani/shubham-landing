import { ButtonLink } from "@/components/Button";
import { ArrowRightIcon, CalendarIcon } from "@/components/icons";
import { consultationMessage, whatsAppUrl } from "@/content/site";
import { structureHero } from "@/content/trainingStructure";

export function StructureHero() {
  return (
    <section id="training-structure" className="px-md pt-md tablet:px-lg tablet:pt-lg">
      <div className="relative mx-auto max-w-content overflow-hidden rounded-2xl bg-inverse-canvas px-lg py-xxxl tablet:px-xxl">
        <div aria-hidden="true" className="absolute inset-0 bg-mesh" />
        <div aria-hidden="true" className="absolute inset-0 bg-grid" />

        <div className="relative max-w-3xl animate-fade-up">
          <p className="inline-flex items-center gap-xs rounded-full glass px-md py-xs text-eyebrow uppercase text-inverse-ink">
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full bg-accent"
            />
            {structureHero.eyebrow}
          </p>

          <h1 className="mt-lg text-display-xl-mobile tablet:text-display-xl-tablet text-inverse-ink">
            {structureHero.headline}{" "}
            <span className="text-gradient">{structureHero.headlineAccent}</span>
          </h1>

          <p className="mt-lg max-w-2xl text-body-lg text-inverse-ink-muted">
            {structureHero.body}
          </p>

          <div className="mt-xl flex flex-wrap gap-sm">
            <ButtonLink href={whatsAppUrl(consultationMessage)}>
              <CalendarIcon className="h-md w-md" />
              Book free consultation
            </ButtonLink>
            <ButtonLink href="/#programs" variant="glass">
              Browse programs
              <ArrowRightIcon className="h-md w-md transition-transform duration-200 group-hover/btn:translate-x-1" />
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
