import { RichTextContent } from "@/components/PendingData";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { includedGroups } from "@/content/sections";

/**
 * The full inventory, grouped.
 *
 * A dense manifest rather than cards — this is the section somebody reads when
 * they are deciding whether the price is fair, so it should look like a list of
 * what you get, not like marketing.
 */
export function WhatsIncluded() {
  return (
    <section id="whats-included" className="mt-band">
      <div className="mx-auto max-w-page px-gutter tablet:px-rail">
        <SectionHeading
          label="Inventory"
          title="What you are actually buying"
          lead="Everything the programme carries, in four groups."
        />

        <div className="mt-xxl flex flex-col gap-xxl">
          {includedGroups.map((group, groupIndex) => (
            <Reveal key={group.name} delay={groupIndex * 60}>
              <div className="grid gap-lg desktop:grid-cols-[minmax(0,15rem)_minmax(0,1fr)] desktop:gap-xxl">
                <div className="desktop:sticky desktop:top-[calc(var(--spacing-header)+24px)] desktop:self-start">
                  <div className="flex items-center gap-sm">
                    <span
                      aria-hidden="true"
                      className="h-[7px] w-[7px] shrink-0 rounded-full bg-signal"
                    />
                    <p className="font-mono text-label uppercase text-ink-3">
                      Group {String(groupIndex + 1).padStart(2, "0")}
                    </p>
                  </div>
                  <h3 className="mt-sm text-subtitle text-ink">{group.name}</h3>
                </div>

                <ul className="grid gap-px border-t border-rule bg-rule tablet:grid-cols-2">
                  {group.items.map((item) => (
                    <li key={item.title} className="bg-paper px-md py-md">
                      <p className="text-card text-ink">{item.title}</p>
                      <p className="mt-xxs text-small text-ink-2">
                        <RichTextContent value={item.body} />
                      </p>
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
