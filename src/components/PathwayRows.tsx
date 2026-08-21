"use client";

import { useEffect, useState } from "react";

import { RichTextContent } from "@/components/PendingData";
import { Reveal } from "@/components/Reveal";
import { RegionSwitch, readStoredRegion, storeRegion } from "@/components/RegionSwitch";
import { Section, SectionHead } from "@/components/Section";
import { pathways, pathwayTotal, stageCountLabel } from "@/content/pathways";
import type { Pathway } from "@/content/pathways";
import { formatAmount, formatPrice } from "@/content/regions";
import type { PriceKey, RegionId } from "@/content/regions";
import { whatsAppUrl } from "@/content/site";
import { commitments, pathwayStages } from "@/content/trainingStructure";
import type { PathwayStage } from "@/content/trainingStructure";

/** Stages by price key, so a route names what it contains rather than repeating it. */
const stageByKey = new Map<PriceKey, PathwayStage>(
  pathwayStages.map((stage) => [stage.priceKey, stage]),
);

/**
 * One stage of a route, priced.
 *
 * The stages of a route are cells of one ruled block rather than free-floating
 * cards, and the order is carried by a number rather than by an arrow — an
 * arrow has to change direction when the row wraps, and a number never does.
 */
function StageCell({
  stage,
  region,
  position,
}: {
  stage: PathwayStage;
  region: RegionId;
  position: number;
}) {
  return (
    <div className="flex h-full flex-col rounded-lg bg-card p-8">
      <div className="flex items-center justify-between gap-3">
        <p className="text-micro text-ink-3">{stage.kind}</p>
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-surface text-micro text-ink-2">
          {position}
        </span>
      </div>

      <h4 className="mt-5 text-heading">{stage.label}</h4>

      <p className="mt-2 text-small text-ink-2">
        <RichTextContent value={stage.body} />
      </p>

      <p className="mt-6 text-title">{formatPrice(region, stage.priceKey)}</p>

      {/* Only two stages publish a figure, so the row holds its height rather
          than leaving a hole in the two that do not. */}
      <p className="mt-1 flex min-h-[1.6em] items-baseline gap-2">
        {stage.stat && (
          <>
            <span className="text-small text-accent-ink">{stage.stat}</span>
            <span className="text-small text-ink-2">{stage.statLabel}</span>
          </>
        )}
      </p>

      <ul className="mt-6 flex flex-1 flex-col gap-3 border-t border-line pt-6">
        {stage.points.map((point, index) => (
          <li key={index} className="flex gap-3">
            <span
              aria-hidden="true"
              className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
            />
            <span className="text-small text-ink-2">
              <RichTextContent value={point} />
            </span>
          </li>
        ))}
      </ul>

      <a
        href={whatsAppUrl(`Hi! I'd like to know more about the ${stage.title}.`)}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 -mb-2 self-start py-2 text-label text-ink transition-colors duration-200 hover:text-accent-ink"
      >
        <span className="link-sweep">Ask about this stage</span>
      </a>
    </div>
  );
}

/**
 * One pathway: its number, the route in shorthand, who it is for, and the
 * chain of stages that makes it up.
 *
 * The total sits in the header rather than on a cell, because it belongs to
 * the route and not to any one stage — and because a reader comparing routes
 * should be able to do it from the headers alone, without adding anything up.
 */
function PathwayRow({ pathway, region }: { pathway: Pathway; region: RegionId }) {
  const total = pathwayTotal(region, pathway);

  return (
    <section
      id={`pathway-${pathway.id}`}
      aria-labelledby={`pathway-${pathway.id}-title`}
    >
      <div className="flex flex-col gap-4 tablet:flex-row tablet:items-end tablet:justify-between">
        <div>
          <p className="text-micro text-ink-3">{pathway.label}</p>
          <h3
            id={`pathway-${pathway.id}-title`}
            className="mt-2 text-title"
          >
            Pathway {pathway.number}
          </h3>
        </div>

        <div className="tablet:text-right">
          <p className="text-title">{formatAmount(region, total)}</p>
          <p className="mt-1 text-micro text-ink-3">
            {stageCountLabel[pathway.stages.length]}, tax included
          </p>
        </div>
      </div>

      <p className="mt-5 max-w-2xl text-body text-ink-2">
        {pathway.description}
      </p>

      <div className="mt-8 grid gap-4 tablet:grid-cols-2 desktop:grid-cols-3 desktop:gap-6">
        {pathway.stages.map((key, index) => {
          const stage = stageByKey.get(key);
          if (!stage) return null;
          return (
            <StageCell
              key={key}
              stage={stage}
              region={region}
              position={index + 1}
            />
          );
        })}
      </div>
    </section>
  );
}

/**
 * The four routes into work, each a chain of priced stages.
 *
 * Laid out as rows rather than as columns of a comparison table: these are not
 * tiers of one product that somebody picks by budget, they are different
 * starting points, and a table would invite reading them as cheap through to
 * expensive. Every row ends at the same place.
 *
 * Region is held here — this is the only section on the page that prices
 * anything — and read from storage after mount rather than during render, so
 * the prerendered HTML and the first client render agree.
 */
export function PathwayRows() {
  const [region, setRegion] = useState<RegionId>("uk");

  useEffect(() => {
    setRegion(readStoredRegion());
  }, []);

  const chooseRegion = (id: RegionId) => {
    setRegion(id);
    storeRegion(id);
  };

  return (
    <Section id="pathways" label="Choose your pathway" tone="surface">
      <SectionHead
        title={
          <>
            Pick the route that <em>describes you</em>
          </>
        }
        lead="Every route below runs from where you are today through to an offer. They differ only in the starting point, so take the one that fits and skip what you have already done."
      />

      {/* The switch sits above the figures, never below them. */}
      <div className="mt-12">
        <RegionSwitch value={region} onChange={chooseRegion} />
      </div>

      <div className="mt-16 flex flex-col gap-20">
        {pathways.map((pathway, index) => (
          <Reveal key={pathway.id} delay={index * 50}>
            <PathwayRow pathway={pathway} region={region} />
          </Reveal>
        ))}
      </div>

      {/* What the training asks of you in return. */}
      <Reveal delay={100}>
        <div className="mt-20 rounded-lg bg-night p-8 text-chalk tablet:p-12">
          <p className="text-micro text-chalk-2">What we ask in return</p>
          <dl className="mt-8 grid gap-8 tablet:grid-cols-3">
            {commitments.map((commitment) => (
              <div key={commitment.value}>
                <dt className="text-title text-chalk">{commitment.value}</dt>
                <dd className="mt-2 text-small text-chalk-2">
                  {commitment.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Reveal>
    </Section>
  );
}
