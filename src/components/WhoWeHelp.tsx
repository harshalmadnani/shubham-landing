import { Marker } from "@/components/Marker";
import { Reveal } from "@/components/Reveal";
import { Section, SectionHead } from "@/components/Section";
import { audiences } from "@/content/sections";

/**
 * Four starting points, set as a ruled table.
 *
 * Name on the left, the summary beside it, what you get on the right. Four
 * rows of the same shape let a reader compare across them, which four cards
 * side by side never allow.
 */
export function WhoWeHelp() {
  return (
    <Section id="who-we-help" index="02" label="Who we help" tone="paper-2">
      <SectionHead
        title={
          <>
            Built around where you&apos;re <em>actually</em> starting from
          </>
        }
        lead="Four starting points, four different routes in — the program adapts to your background, not the other way round."
      />

      <div className="mt-16 border-t border-ink">
        {audiences.map((audience, index) => (
          <Reveal key={audience.title}>
            <article className="grid gap-6 border-b border-rule py-10 desktop:grid-cols-12 desktop:gap-10">
              <div className="flex gap-4 desktop:col-span-4">
                <span className="mt-1.5 font-mono text-index tnum text-flame-ink">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-title text-ink">
                  {audience.title}
                </h3>
              </div>

              <p className="text-body text-ink-2 desktop:col-span-4">
                {audience.body}
              </p>

              <ul className="flex flex-col gap-3 desktop:col-span-4">
                {audience.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3 text-small text-ink-2">
                    <Marker className="mt-1.5 h-2.5 w-2.5 shrink-0 text-flame" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
