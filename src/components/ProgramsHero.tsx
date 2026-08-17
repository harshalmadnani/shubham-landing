import { ButtonLink } from "@/components/Button";
import { CalendarIcon } from "@/components/icons";
import { programCategories, totalProgramCount } from "@/content/programs";
import { consultationMessage, whatsAppUrl } from "@/content/site";

export function ProgramsHero() {
  return (
    <section className="px-md pt-md tablet:px-lg tablet:pt-lg">
      <div className="relative mx-auto max-w-content overflow-hidden rounded-2xl bg-inverse-canvas px-lg py-xxxl tablet:px-xxl">
        <div aria-hidden="true" className="absolute inset-0 bg-mesh" />
        <div aria-hidden="true" className="absolute inset-0 bg-grid" />

        <div className="relative max-w-3xl animate-fade-up">
          <p className="inline-flex items-center gap-xs rounded-full glass px-md py-xs text-eyebrow uppercase text-inverse-ink">
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full bg-accent"
            />
            Programs
          </p>

          <h1 className="mt-lg text-display-xl-mobile tablet:text-display-xl-tablet text-inverse-ink">
            {totalProgramCount} programs,{" "}
            <span className="text-gradient">one route into work.</span>
          </h1>

          <p className="mt-lg max-w-2xl text-body-lg text-inverse-ink-muted">
            Every program runs the same three stages — instructor-led training, a
            hands-on bootcamp, then resume marketing until you are hired. Pick
            the subject; the route through it is the same.
          </p>

          <div className="mt-xl flex flex-wrap gap-sm">
            <ButtonLink href={whatsAppUrl(consultationMessage)}>
              <CalendarIcon className="h-md w-md" />
              Book free consultation
            </ButtonLink>
            <ButtonLink href="/training-structure" variant="glass">
              How the training works
            </ButtonLink>
          </div>

          <p className="mt-xl text-body-sm text-inverse-ink-muted">
            {programCategories.length} specializations ·{" "}
            {totalProgramCount} programs · every one with a full curriculum
          </p>
        </div>
      </div>
    </section>
  );
}
