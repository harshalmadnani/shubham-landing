import { ButtonLink } from "@/components/Button";
import { ArrowRightIcon } from "@/components/icons";
import { PageHero } from "@/components/PageHero";
import { programCategories, totalProgramCount } from "@/content/programs";
import { consultationMessage, whatsAppUrl } from "@/content/site";

export function ProgramsHero() {
  return (
    <PageHero
      label="Programs"
      title={
        <>
          {totalProgramCount} programs, <em>one route into work.</em>
        </>
      }
      lead="Every program runs through the same four pathways — instructor-led training, a hands-on bootcamp, then resume marketing until you are hired."
      actions={
        <>
          <ButtonLink href={whatsAppUrl(consultationMessage)}>
            Book free consultation
          </ButtonLink>
          <ButtonLink href="/training-structure" variant="outline">
            How the training works
            <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
          </ButtonLink>
        </>
      }
      meta={
        <>
          {programCategories.length} specializations · {totalProgramCount}{" "}
          programs
        </>
      }
    />
  );
}
