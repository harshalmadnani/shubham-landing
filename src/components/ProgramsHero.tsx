import { ButtonLink } from "@/components/Button";
import { CalendarIcon } from "@/components/icons";
import { programCategories, totalProgramCount } from "@/content/programs";
import { consultationMessage, whatsAppUrl } from "@/content/site";

export function ProgramsHero() {
  return (
    <section className="px-md tablet:px-lg">
      <div className="mx-auto max-w-content border-b border-hairline pb-xxl pt-xxl tablet:pt-xxxl">
        <p className="flex items-center gap-sm text-eyebrow uppercase text-ink-muted animate-fade-up">
          <span aria-hidden="true" className="h-px w-6 bg-ink/30" />
          Programs
        </p>

        <h1 className="mt-lg max-w-4xl font-serif text-display-xl-mobile tablet:text-display-lg text-ink animate-fade-up">
          {totalProgramCount} programs,{" "}
          <em className="text-primary">one route into work.</em>
        </h1>

        <p className="mt-xl max-w-2xl text-body-lg text-ink-muted animate-fade-up">
          Every program runs the same three stages — instructor-led training, a
          hands-on bootcamp, then resume marketing until you are hired. Pick
          the subject; the route through it is the same.
        </p>

        <div className="mt-xl flex flex-wrap items-center gap-md animate-fade-up">
          <ButtonLink href={whatsAppUrl(consultationMessage)}>
            <CalendarIcon className="h-md w-md" />
            Book free consultation
          </ButtonLink>
          <ButtonLink href="/training-structure" variant="outline">
            How the training works
          </ButtonLink>
        </div>

        <p className="mt-xl text-body-sm text-ink-subtle animate-fade-up">
          {programCategories.length} specializations · {totalProgramCount}{" "}
          programs · every one with a full curriculum
        </p>
      </div>
    </section>
  );
}
