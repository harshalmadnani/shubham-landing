import Link from "next/link";

import { ArrowRightIcon } from "@/components/icons";
import { RichTextContent } from "@/components/PendingData";
import { Reveal } from "@/components/Reveal";
import { Section, SectionHead } from "@/components/Section";
import { featuredPrograms, totalProgramCount } from "@/content/programs";
import { programEnquiryMessage, whatsAppUrl } from "@/content/site";

/**
 * Six programmes on the home page, then the door to the other thirty-one.
 *
 * The whole catalogue used to be a click away behind a nav entry, which meant
 * the home page never said what is actually taught. Six is enough to answer
 * that without turning this page back into the catalogue — the reason the list
 * was moved off it in the first place.
 *
 * The six are an editorial choice spread across five categories, not a
 * ranking; see `featuredProgramTitles`. Each card names its category, because
 * "Data Analyst" and "AI Data Analyst" are different programmes and the
 * category is what tells them apart at a glance.
 */
export function FeaturedPrograms() {
  return (
    <Section id="programs" label="Programs">
      <SectionHead
        title={
          <>
            Popular programmes, and{" "}
            <em className="text-accent-ink">{totalProgramCount} in total</em>
          </>
        }
        lead="Every programme runs the same way — live training, five projects, mentoring, then placement support. What changes is the subject."
      />

      <ul className="mt-16 grid gap-4 tablet:grid-cols-2 desktop:grid-cols-3">
        {featuredPrograms.map(({ program, category }, index) => {
          const href =
            program.href ?? whatsAppUrl(programEnquiryMessage(program.title));

          return (
            <Reveal
              key={program.title}
              delay={(index % 3) * 50}
              className="h-full"
            >
              <li className="h-full">
                <Link
                  href={href}
                  className="group flex h-full flex-col justify-between rounded-lg bg-surface p-7 transition-colors duration-200 hover:bg-surface-2"
                >
                  <span>
                    <span className="text-micro text-accent-ink">
                      {category}
                    </span>
                    <span className="mt-3 block text-heading transition-colors duration-200 group-hover:text-accent-ink">
                      {program.title}
                    </span>
                  </span>

                  <span className="mt-8 flex items-center justify-between gap-4">
                    <span className="text-micro text-ink-3">
                      <RichTextContent value={program.meta} />
                    </span>
                    <ArrowRightIcon className="h-4 w-4 shrink-0 text-ink-3 transition-transform duration-200 group-hover:translate-x-1" />
                  </span>
                </Link>
              </li>
            </Reveal>
          );
        })}
      </ul>

      <Reveal>
        <div className="mt-10">
          <Link
            href="/programs"
            className="group inline-flex items-center gap-2 text-body font-medium text-accent-ink underline decoration-line-2 underline-offset-4 transition-colors hover:decoration-accent-ink"
          >
            View all {totalProgramCount} programs
            <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </Reveal>
    </Section>
  );
}
