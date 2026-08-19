import Link from "next/link";

import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { pathways } from "@/content/pathways";
import { pathwayStages } from "@/content/trainingStructure";

/** Stage names by price key, so a rename cannot desync this from the prices. */
const stageLabel = new Map(
  pathwayStages.map((stage) => [stage.priceKey, stage.label]),
);

/**
 * The four routes, listed.
 *
 * Driven by `pathways` — the same array the pricing page reads — because this
 * section previously carried its own hand-written list and drifted: it
 * advertised a self-paced route the business does not sell and omitted the AI
 * route entirely. Reading the real data is the only fix that stays fixed.
 */
export function OurApproach() {
  return (
    <section id="our-approach" className="mt-band">
      <div className="mx-auto max-w-page px-gutter tablet:px-rail">
        <SectionHeading
          label="The routes"
          title="Four ways in, one place they all end"
          lead="They differ only in where you are standing now. Take the whole route or join it partway."
        />

        <ol className="mt-xxl border-t border-ink">
          {pathways.map((pathway, index) => (
            <Reveal key={pathway.id} delay={index * 60}>
              <li className="group border-b border-rule">
                <Link
                  href={`/training-structure#pathway-${pathway.id}`}
                  className="grid items-start gap-sm py-lg transition-colors desktop:grid-cols-[4rem_minmax(0,16rem)_minmax(0,1fr)_auto] desktop:gap-xl desktop:py-xl"
                >
                  <span
                    aria-hidden="true"
                    className="font-mono text-label text-signal-text"
                  >
                    {String(pathway.number).padStart(2, "0")}
                  </span>

                  <div>
                    <h3 className="text-subtitle text-ink">Pathway {pathway.number}</h3>
                    <p className="mt-xs font-mono text-data text-ink-3">
                      {pathway.stages
                        .map((key) => stageLabel.get(key))
                        .join(" → ")}
                    </p>
                  </div>

                  <p className="max-w-[52ch] text-body text-ink-2">
                    {pathway.description}
                  </p>

                  <span
                    aria-hidden="true"
                    className="font-mono text-nav text-ink-3 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-signal-text"
                  >
                    →
                  </span>
                </Link>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
