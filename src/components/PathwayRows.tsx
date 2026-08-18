"use client";

import { useEffect, useState } from "react";

import { ButtonLink } from "@/components/Button";
import { CheckIcon } from "@/components/CheckIcon";
import { RichTextContent } from "@/components/PendingData";
import { Reveal } from "@/components/Reveal";
import { RegionSwitch, readStoredRegion, storeRegion } from "@/components/RegionSwitch";
import { SectionHeading } from "@/components/SectionHeading";
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
 * The connector between two stages of a route.
 *
 * Points right when the stages sit side by side and down when they stack, so
 * it always agrees with the reading order. Decorative — the sequence is
 * already carried by the list order and by each card's step number.
 */
function StageArrow() {
  return (
    <div
      aria-hidden="true"
      className="flex shrink-0 items-center justify-center self-center text-primary/60"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.75}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-lg w-lg rotate-90 desktop:rotate-0"
      >
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </svg>
    </div>
  );
}

/**
 * One stage of a route, priced.
 *
 * Fixed width rather than flexible: a route with one stage and a route with
 * three have to look like the same kind of thing, and a card that stretches to
 * fill its row would make the shortest route look like the biggest product.
 */
function StageCard({ stage, region }: { stage: PathwayStage; region: RegionId }) {
  return (
    <div className="flex w-full flex-col rounded-lg border border-hairline bg-canvas p-lg shadow-sm desktop:w-[17rem]">
      <p className="text-eyebrow uppercase text-ink-subtle">{stage.kind}</p>
      <h4 className="mt-xs text-card-title font-semibold text-ink">
        {stage.label}
      </h4>
      <p className="mt-xs min-h-[4.5em] text-body-sm text-ink-muted">
        <RichTextContent value={stage.body} />
      </p>

      <p className="mt-md text-headline-sm text-ink">
        {formatPrice(region, stage.priceKey)}
      </p>

      {/* Only two stages publish a figure, so the row holds its height rather
          than leaving a hole in the two that do not. */}
      <p className="mt-xxs flex min-h-[1.6em] items-baseline gap-xs">
        {stage.stat && (
          <>
            <span className="text-body-emphasis text-primary">{stage.stat}</span>
            <span className="text-body-sm text-ink-muted">{stage.statLabel}</span>
          </>
        )}
      </p>

      <ul className="mt-md flex flex-1 flex-col gap-xs border-t border-hairline pt-md">
        {stage.points.map((point, index) => (
          <li key={index} className="flex gap-xs">
            <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            <span className="text-body-sm text-ink">
              <RichTextContent value={point} />
            </span>
          </li>
        ))}
      </ul>

      <ButtonLink
        href={whatsAppUrl(`Hi! I'd like to know more about the ${stage.title}.`)}
        variant="outline"
        className="mt-lg w-full"
      >
        Ask about this stage
      </ButtonLink>
    </div>
  );
}

/**
 * One pathway: its number, the route in shorthand, who it is for, and the
 * chain of stages that makes it up.
 *
 * The total sits in the header rather than on a card, because it belongs to
 * the route and not to any one stage — and because a reader comparing routes
 * should be able to do it from the headers alone, without adding anything up.
 */
function PathwayRow({ pathway, region }: { pathway: Pathway; region: RegionId }) {
  const total = pathwayTotal(region, pathway);

  return (
    <section
      id={`pathway-${pathway.id}`}
      aria-labelledby={`pathway-${pathway.id}-title`}
      className="rounded-xl border border-primary/20 bg-primary-soft/40 p-lg tablet:p-xl"
    >
      <div className="flex flex-col gap-md tablet:flex-row tablet:items-start tablet:justify-between">
        <div className="flex items-center gap-sm">
          <span
            aria-hidden="true"
            className="flex h-xl w-xl shrink-0 items-center justify-center rounded-full bg-primary text-body-emphasis text-on-primary"
          >
            {pathway.number}
          </span>
          <div>
            <h3
              id={`pathway-${pathway.id}-title`}
              className="text-card-title font-semibold text-ink"
            >
              Pathway {pathway.number}
            </h3>
            <p className="mt-xxs text-eyebrow uppercase text-primary">
              {pathway.label}
            </p>
          </div>
        </div>

        <div className="tablet:text-right">
          <p className="text-headline-sm text-ink">
            {formatAmount(region, total)}
          </p>
          <p className="mt-xxs text-body-sm text-ink-muted">
            {stageCountLabel[pathway.stages.length]}, tax included
          </p>
        </div>
      </div>

      <p className="mt-md max-w-3xl text-body-sm text-ink-muted">
        {pathway.description}
      </p>

      <div className="mt-lg flex flex-col items-stretch justify-center gap-md desktop:flex-row desktop:items-stretch desktop:gap-lg">
        {pathway.stages.map((key, index) => {
          const stage = stageByKey.get(key);
          if (!stage) return null;
          return (
            <div
              key={key}
              className="flex flex-col items-stretch gap-md desktop:flex-row desktop:gap-lg"
            >
              <StageCard stage={stage} region={region} />
              {index < pathway.stages.length - 1 && <StageArrow />}
            </div>
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
    <section id="pathways" className="px-md pt-section tablet:px-lg">
      <div className="mx-auto max-w-content">
        <SectionHeading
          eyebrow="Choose your pathway"
          title="Pick the row that describes you"
          lead="Each row below is a complete route from where you are today through to an offer. They differ only in the starting point — every one of them ends with your profile in front of employers — so take the one that fits and skip what you have already done."
        />

        {/* The switch sits above the figures, never below them. */}
        <div className="mt-xl">
          <RegionSwitch value={region} onChange={chooseRegion} />
        </div>

        <div className="mt-xl flex flex-col gap-lg">
          {pathways.map((pathway, index) => (
            <Reveal key={pathway.id} delay={index * 60}>
              <PathwayRow pathway={pathway} region={region} />
            </Reveal>
          ))}
        </div>

        {/* What the training asks of you in return. */}
        <Reveal delay={120}>
          <div className="mt-lg rounded-lg bg-inverse-canvas p-lg tablet:p-xl">
            <p className="text-eyebrow uppercase text-inverse-ink-muted">
              What we ask in return
            </p>
            <dl className="mt-lg grid gap-lg tablet:grid-cols-3">
              {commitments.map((commitment) => (
                <div key={commitment.value}>
                  <dt className="text-headline-sm text-inverse-ink">
                    {commitment.value}
                  </dt>
                  <dd className="mt-xxs text-body-sm text-inverse-ink-muted">
                    {commitment.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
