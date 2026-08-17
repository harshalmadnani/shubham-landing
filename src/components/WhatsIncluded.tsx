import { CheckIcon } from "@/components/CheckIcon";
import { RichTextContent } from "@/components/PendingData";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { includedGroups } from "@/content/sections";

export function WhatsIncluded() {
  return (
    <section id="whats-included" className="px-md pt-section tablet:px-lg">
      <div className="mx-auto max-w-content">
        <SectionHeading
          eyebrow="What's included"
          title="Every pathway draws from the same complete set of support"
          lead="Whichever route you take, none of these are add-ons or upsells."
        />

        {/* Masonry columns — groups have very different lengths, and a grid
            would leave the short ones trailing whitespace. */}
        <div className="mt-xxl columns-1 gap-xl tablet:columns-2 desktop:columns-3">
          {includedGroups.map((group, index) => (
            <div key={group.name} className="mb-xl break-inside-avoid">
              <Reveal delay={(index % 3) * 60}>
                <div className="rounded-lg border border-hairline bg-canvas p-xl">
                  <div className="flex items-baseline justify-between gap-md border-b-2 border-ink pb-md">
                    <h3 className="text-card-title font-semibold text-ink">
                      {group.name}
                    </h3>
                    <span
                      aria-hidden="true"
                      className="text-body font-semibold text-ink-subtle"
                    >
                      {group.items.length}
                    </span>
                  </div>

                  <ul className="flex flex-col">
                    {group.items.map((item, itemIndex) => (
                      <li
                        key={item.title}
                        className={`flex items-start gap-sm py-lg ${
                          itemIndex === 0 ? "" : "border-t border-hairline"
                        }`}
                      >
                        <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <div>
                          <p className="text-body-emphasis text-ink">
                            {item.title}
                          </p>
                          <p className="mt-xxs text-body-sm text-ink-muted">
                            <RichTextContent value={item.body} />
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
