import { Reveal } from "@/components/Reveal";
import { Section, SectionHead } from "@/components/Section";
import { audiences } from "@/content/sections";

/** Four starting points, one card each. */
export function WhoWeHelp() {
  return (
    <Section id="who-we-help" label="Who we help" tone="surface">
      <SectionHead
        title={
          <>
            Built around where you&apos;re <em>actually</em> starting from
          </>
        }
        lead="Four starting points, four different routes in — the program adapts to your background, not the other way round."
      />

      <div className="mt-16 grid gap-4 tablet:grid-cols-2 desktop:gap-6">
        {audiences.map((audience, index) => (
          <Reveal key={audience.title} delay={(index % 2) * 60}>
            <article className="flex h-full flex-col rounded-lg bg-card p-8 tablet:p-10">
              <h3 className="text-title">{audience.title}</h3>
              <p className="mt-4 text-body text-ink-2">{audience.body}</p>

              <ul className="mt-8 flex flex-col gap-3 border-t border-line pt-8">
                {audience.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3 text-small text-ink-2">
                    <span
                      aria-hidden="true"
                      className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                    />
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
