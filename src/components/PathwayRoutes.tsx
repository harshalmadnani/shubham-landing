"use client";

import { ButtonLink } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { RegionSwitch } from "@/components/RegionSwitch";
import { SectionHeading } from "@/components/SectionHeading";
import { TiltCard } from "@/components/TiltCard";
import { useRegion } from "@/components/RegionProvider";
import { pathways, pathwayTotal } from "@/content/pathways";
import { formatAmount, formatPrice } from "@/content/regions";
import { pathwayStages } from "@/content/trainingStructure";
import { whatsAppUrl } from "@/content/site";

/**
 * Short stage names, looked up by price key so a rename cannot break the list.
 * The build-up uses the label rather than the full title: at card width the
 * titles wrap onto a second line, and a line item that wraps stops reading as
 * a line item.
 */
const stageLabel = new Map(
  pathwayStages.map((stage) => [stage.priceKey, stage.label]),
);

const stageCount = ["", "one stage", "two stages", "three stages"];

/**
 * The four routes through the programme, priced.
 *
 * Each card shows its own build-up rather than a single number: the stages it
 * contains, each at its own price, adding to the total underneath. A reader
 * comparing two routes can see exactly which stage accounts for the
 * difference, which a headline figure hides.
 *
 * The region switch lives here because this is the first priced thing on the
 * page; the stages below read the same context.
 */
export function PathwayRoutes() {
  const { region, setRegion } = useRegion();

  return (
    <section id="pathways" className="px-md pt-section tablet:px-lg">
      <div className="mx-auto max-w-content">
        <SectionHeading
          eyebrow="Choose your route"
          title="Four pathways to the same destination"
          lead="Every route ends the same way — with your profile in front of employers. They differ only in where you are starting from, so pick the one that describes you and skip what you have already done."
        />

        <div className="mt-xl">
          <RegionSwitch value={region} onChange={setRegion} />
        </div>

        <div className="mt-xl grid gap-lg tablet:grid-cols-2 desktop:grid-cols-4">
          {pathways.map((pathway, index) => (
            <Reveal key={pathway.id} delay={index * 80} className="h-full">
              <TiltCard className="h-full">
                <div className="flex h-full flex-col rounded-lg border border-hairline bg-canvas p-lg transition-colors duration-300 hover:border-primary/50">
                  <p className="text-eyebrow uppercase text-ink-subtle">
                    {pathway.step}
                  </p>
                  <h3 className="mt-sm text-card-title font-semibold text-ink">
                    {pathway.name}
                  </h3>
                  <p className="mt-xs min-h-[3em] text-body-sm text-ink-muted">
                    {pathway.tagline}
                  </p>

                  {/* The build-up: which stages, at what price each. The list
                      holds the height of the longest route so the four totals
                      sit on one line and can be compared at a glance. */}
                  <ul className="mt-lg flex min-h-[6.5em] flex-col gap-xs border-t border-hairline pt-md">
                    {pathway.includes.map((key) => (
                      <li
                        key={key}
                        className="flex items-baseline justify-between gap-sm"
                      >
                        <span className="text-body-sm text-ink">
                          {stageLabel.get(key)}
                        </span>
                        <span className="shrink-0 text-body-sm text-ink-subtle">
                          {formatPrice(region, key)}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-md border-t border-hairline pt-md">
                    <p className="font-serif text-display-md text-ink">
                      {formatAmount(region, pathwayTotal(region, pathway))}
                    </p>
                    <p className="mt-xxs text-body-sm text-ink-subtle">
                      {stageCount[pathway.includes.length]}, tax included
                    </p>
                  </div>

                  <div className="mt-lg border-t border-hairline pt-md">
                    <p className="text-body-emphasis text-ink">Best for</p>
                    <p className="mt-xxs text-body-sm text-ink-muted">
                      {pathway.bestFor}
                    </p>
                  </div>

                  <p className="mt-md text-body-sm text-ink-muted">
                    {pathway.outcome}
                  </p>

                  {/* mt-auto on the wrapper, not the button: the prose above
                      runs to different lengths, and the four buttons should
                      still align on the floor of the row. */}
                  <div className="mt-auto pt-lg">
                    <ButtonLink
                      href={whatsAppUrl(
                        `Hi! I'd like to talk about the ${pathway.name}.`,
                      )}
                      variant="outline"
                    >
                      Ask about this route
                    </ButtonLink>
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
