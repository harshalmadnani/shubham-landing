import { ButtonLink } from "@/components/Button";
import { ArrowRightIcon } from "@/components/icons";
import { PageHero } from "@/components/PageHero";
import { bookingPath } from "@/content/booking";
import { structureHero } from "@/content/trainingStructure";

export function StructureHero() {
  return (
    <PageHero
      label={structureHero.eyebrow}
      title={
        <>
          {structureHero.headline} <em>{structureHero.headlineAccent}</em>
        </>
      }
      lead={structureHero.body}
      actions={
        <>
          <ButtonLink href={bookingPath}>
            Book free consultation
          </ButtonLink>
          <ButtonLink href="/programs" variant="outline">
            Browse programs
            <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
          </ButtonLink>
        </>
      }
    />
  );
}
