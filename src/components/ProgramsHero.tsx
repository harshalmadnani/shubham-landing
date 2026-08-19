import { ButtonLink } from "@/components/Button";
import { programCategories, totalProgramCount } from "@/content/programs";
import { consultationMessage, whatsAppUrl } from "@/content/site";

export function ProgramsHero() {
  return (
    <section>
      <div className="mx-auto max-w-page border-b border-ink px-gutter pb-xxl pt-xxl tablet:px-rail tablet:pt-xxxl">
        <p className="flex items-center gap-sm font-mono text-label uppercase text-ink-3">
          <span
            aria-hidden="true"
            className="h-[7px] w-[7px] rounded-full bg-signal"
          />
          The catalogue
        </p>

        <h1 className="mt-lg max-w-[22ch] text-mega text-ink">
          {totalProgramCount} subjects,{" "}
          <em className="text-pine">the same four routes.</em>
        </h1>

        <p className="mt-xl max-w-[52ch] text-lead text-ink-2">
          Pick the subject. How you get from it to an offer does not change:
          instructor-led teaching, a project bootcamp, then resume marketing
          until you are hired.
        </p>

        <div className="mt-xl flex flex-wrap gap-sm">
          <ButtonLink href={whatsAppUrl(consultationMessage)}>
            Book a free consultation
          </ButtonLink>
          <ButtonLink href="/training-structure" variant="outline">
            See the four routes
          </ButtonLink>
        </div>

        <dl className="mt-xxl grid gap-lg tablet:grid-cols-3">
          {[
            { value: totalProgramCount, label: "programmes, each with a published curriculum" },
            { value: programCategories.length, label: "specialisations to choose between" },
            { value: 4, label: "routes through any of them" },
          ].map((fact) => (
            <div key={fact.label} className="border-t-2 border-signal pt-sm">
              <dt className="font-mono text-figure text-ink">
                {String(fact.value).padStart(2, "0")}
              </dt>
              <dd className="mt-xs max-w-[26ch] text-small text-ink-2">
                {fact.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
