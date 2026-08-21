import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { audiences } from "@/content/sections";

/**
 * Who the programme is for — the page's first night panel.
 *
 * Full-bleed dark, because after two light sections the page needs a change of
 * ground rather than another row of cards. Columns are divided by rules
 * instead of being cards, which keeps the panel reading as one object.
 */
export function WhoWeHelp() {
  return (
    <section id="who-we-help" className="mt-band panel-night py-xxxl">
      <div className="mx-auto max-w-page px-gutter tablet:px-rail">
        <SectionHeading
          tone="night"
          label="Who we help"
          title="Four situations we know how to move"
          lead="If one of these is you, the route is already mapped. If none of them is, the consultation is free and we will say so."
        />

        <div className="mt-xxl grid gap-px bg-night-rule tablet:grid-cols-2 desktop:grid-cols-4">
          {audiences.map((audience, index) => (
            <Reveal key={audience.title} delay={index * 70} className="h-full">
              <div className="flex h-full flex-col bg-night p-lg">
                <span
                  aria-hidden="true"
                  className="font-mono text-label text-signal-on-night"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-md text-card text-night-ink">
                  {audience.title}
                </h3>
                <p className="mt-xs text-small text-night-ink-2">
                  {audience.body}
                </p>

                <ul className="mt-lg flex flex-col gap-sm border-t border-night-rule pt-md">
                  {audience.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-sm">
                      <span
                        aria-hidden="true"
                        className="mt-[9px] h-[2px] w-3 shrink-0 bg-signal"
                      />
                      <span className="text-small text-night-ink">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
