import { ButtonLink } from "@/components/Button";
import { ArrowRightIcon, CalendarIcon } from "@/components/icons";
import { consultationMessage, whatsAppUrl } from "@/content/site";
import { structureHero } from "@/content/trainingStructure";

export function StructureHero() {
  return (
    <section id="training-structure" className="px-md tablet:px-lg">
      <div className="mx-auto max-w-content border-b border-hairline pb-xxl pt-xxl tablet:pt-xxxl">
        <p className="flex items-center gap-sm text-eyebrow uppercase text-ink-muted animate-fade-up">
          <span aria-hidden="true" className="h-px w-6 bg-ink/30" />
          {structureHero.eyebrow}
        </p>

        <h1 className="mt-lg max-w-4xl font-serif text-display-xl-mobile tablet:text-display-lg text-ink animate-fade-up">
          {structureHero.headline}{" "}
          <em className="text-primary">{structureHero.headlineAccent}</em>
        </h1>

        <p className="mt-xl max-w-2xl text-body-lg text-ink-muted animate-fade-up">
          {structureHero.body}
        </p>

        <div className="mt-xl flex flex-wrap gap-sm animate-fade-up">
          <ButtonLink href={whatsAppUrl(consultationMessage)}>
            <CalendarIcon className="h-md w-md" />
            Book free consultation
          </ButtonLink>
          <ButtonLink href="/programs" variant="outline">
            Browse programs
            <ArrowRightIcon className="h-md w-md transition-transform duration-200 group-hover/btn:translate-x-1" />
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
