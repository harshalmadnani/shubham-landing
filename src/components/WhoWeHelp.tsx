import { Reveal } from "@/components/Reveal";
import { TiltCard } from "@/components/TiltCard";
import { CheckIcon } from "@/components/CheckIcon";
import { SectionHeading } from "@/components/SectionHeading";
import { audiences } from "@/content/sections";

/**
 * Four starting points as editorial cards — a serif numeral, a title, and the
 * bullets. The generated portrait photos are gone; nothing here pretends to be
 * a person who does not exist.
 */
export function WhoWeHelp() {
  return (
    <section id="who-we-help" className="px-md pt-section tablet:px-lg">
      <div className="mx-auto max-w-content">
        <SectionHeading
          eyebrow="Who we help"
          title="Built around where you're actually starting from"
          lead="Four starting points, four different routes in — the program adapts to your background, not the other way round."
        />

        <div className="mt-xxl grid grid-cols-1 gap-xl desktop:grid-cols-2">
          {audiences.map((audience, index) => (
            <Reveal key={audience.title} delay={index * 80} className="h-full">
              <TiltCard className="h-full">
                <div className="group flex h-full flex-col rounded-lg border border-hairline bg-canvas p-xl transition-colors duration-300 hover:border-ink/40">
                <div className="flex items-baseline justify-between gap-md">
                  <p className="font-serif text-headline-sm text-ink">
                    {audience.title}
                  </p>
                  <span
                    aria-hidden="true"
                    className="font-serif text-headline-sm text-ink-subtle"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="mt-xs text-body-sm text-ink-muted">
                  {audience.body}
                </p>

                <ul className="mt-lg flex flex-col gap-sm border-t border-hairline pt-lg">
                  {audience.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-sm">
                      <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-primary" />
                      <span className="text-body-sm text-ink">{bullet}</span>
                    </li>
                  ))}
                </ul>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
