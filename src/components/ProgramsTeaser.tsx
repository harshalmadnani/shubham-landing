import Link from "next/link";

import { ButtonLink } from "@/components/Button";
import { ArrowRightIcon } from "@/components/icons";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { programCategories, totalProgramCount } from "@/content/programs";

/**
 * The home page's stand-in for the catalogue.
 *
 * The full grid of 37 cards lives on `/programs`. Putting it here as well made
 * the landing page mostly catalogue, and a visitor who has not yet decided
 * they want training does not need 37 options — they need to know the range
 * exists. So this lists the specializations and their counts, and hands off.
 */
export function ProgramsTeaser() {
  return (
    <section id="programs" className="px-md pt-section tablet:px-lg">
      <div className="mx-auto max-w-content">
        <SectionHeading
          eyebrow="Programs"
          title={`${totalProgramCount} programs across ${programCategories.length} specializations`}
          lead="From hands-on technical roles to the analyst and support paths around them. Every program carries a full curriculum and the same placement support."
        />

        <Reveal>
          {/* Three columns, not four: the nine specializations tile exactly,
              where a four-wide grid leaves one card stranded on its own row. */}
          <ul className="mt-xxl grid gap-sm tablet:grid-cols-2 desktop:grid-cols-3">
            {programCategories.map((category, index) => (
              <li key={category.name}>
                <Link
                  href="/programs"
                  className="group flex h-full items-baseline justify-between gap-sm rounded-lg border border-hairline bg-canvas p-lg transition-colors duration-300 hover:border-ink/40"
                  style={{ transitionDelay: `${index * 20}ms` }}
                >
                  <span className="font-serif text-headline-sm text-ink">
                    {category.name}
                  </span>
                  <span className="shrink-0 rounded-full bg-surface-1 px-sm text-caption text-ink-subtle">
                    {category.programs.length}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-xl flex justify-center">
            <ButtonLink href="/programs">
              Browse all {totalProgramCount} programs
              <ArrowRightIcon className="h-md w-md transition-transform duration-200 group-hover/btn:translate-x-1" />
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
