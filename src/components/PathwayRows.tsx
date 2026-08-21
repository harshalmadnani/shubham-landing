"use client";

import { useEffect, useState } from "react";

import { ButtonLink } from "@/components/Button";
import { Marker } from "@/components/CheckIcon";
import { RichTextContent } from "@/components/PendingData";
import { Reveal } from "@/components/Reveal";
import {
  RegionSwitch,
  readStoredRegion,
  storeRegion,
} from "@/components/RegionSwitch";
import { SectionHeading } from "@/components/SectionHeading";
import { pathways, pathwayTotal, stageCountLabel } from "@/content/pathways";
import type { Pathway } from "@/content/pathways";
import { formatAmount, formatPrice } from "@/content/regions";
import type { PriceKey, RegionId } from "@/content/regions";
import { whatsAppUrl } from "@/content/site";
import { commitments, pathwayStages } from "@/content/trainingStructure";
import type { PathwayStage } from "@/content/trainingStructure";

const stageByKey = new Map<PriceKey, PathwayStage>(
  pathwayStages.map((stage) => [stage.priceKey, stage]),
);

/**
 * One stop on a route: what it is, what it costs, what it covers.
 *
 * Fixed width rather than flexible — a one-stop route and a three-stop route
 * have to look like the same kind of thing, and a cell that stretched to fill
 * its row would make the shortest route look like the biggest product.
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
    <div className="flex w-full flex-col border border-rule bg-paper desktop:w-[19rem]">
      <div className="flex items-center justify-between gap-sm border-b border-rule px-md py-xs">
        <span className="font-mono text-label uppercase text-ink-3">
          Stop {String(position).padStart(2, "0")} · {stage.kind}
        </span>
        <span
          aria-hidden="true"
          className="h-[9px] w-[9px] shrink-0 rounded-full border-2 border-signal bg-paper"
        />
      </div>

      <div className="flex flex-1 flex-col p-md">
        <h4 className="text-subtitle text-ink">{stage.label}</h4>
        <p className="mt-xs min-h-[4.4em] text-small text-ink-2">
          <RichTextContent value={stage.body} />
        </p>

        <p className="mt-md font-mono text-figure text-ink">
          {formatPrice(region, stage.priceKey)}
        </p>

        {/* Only two stops publish a figure, so the row holds its height
            rather than leaving a hole in the two that do not. */}
        <p className="mt-xxs flex min-h-[1.5em] items-baseline gap-xs font-mono text-data">
          {stage.stat && (
            <>
              <span className="text-signal-text">{stage.stat}</span>
              <span className="text-ink-3">{stage.statLabel}</span>
            </>
          )}
        </p>

        <ul className="mt-md flex flex-1 flex-col gap-xs border-t border-rule pt-md">
          {stage.points.map((point, index) => (
            <li key={index} className="flex gap-sm">
              <Marker />
              <span className="text-small text-ink">
                <RichTextContent value={point} />
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-lg">
          <ButtonLink
            href={whatsAppUrl(
              `Hi! I'd like to know more about the ${stage.title}.`,
            )}
            variant="outline"
            className="w-full"
          >
            Ask about this stop
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}

/** The connector between two stops — right when they sit in a row, down when they stack. */
function Connector() {
  return (
    <div
      aria-hidden="true"
      className="flex shrink-0 items-center justify-center self-center py-xs desktop:px-xs desktop:py-0"
    >
      <span className="hidden h-[2px] w-lg bg-rule-strong desktop:block" />
      <span className="h-lg w-[2px] bg-rule-strong desktop:hidden" />
    </div>
  );
}

/**
 * One route: its number, its shorthand, who it is for, and the chain of stops.
 *
 * The total lives in the header rather than on a stop, because it belongs to
 * the route and not to any one part of it — and because somebody comparing
 * routes should manage it from the headers alone, without adding anything up.
 */
function PathwayRow({
  pathway,
  region,
}: {
  pathway: Pathway;
  region: RegionId;
}) {
  const total = pathwayTotal(region, pathway);

  return (
    <section
      id={`pathway-${pathway.id}`}
      aria-labelledby={`pathway-${pathway.id}-title`}
      className="border-t-2 border-ink"
    >
      <div className="flex flex-col gap-md py-lg tablet:flex-row tablet:items-start tablet:justify-between">
        <div className="flex items-start gap-md">
          <span
            aria-hidden="true"
            className="mt-[3px] flex h-8 w-8 shrink-0 items-center justify-center bg-signal font-mono text-data text-ink"
          >
            {String(pathway.number).padStart(2, "0")}
          </span>
          <div>
            <h3
              id={`pathway-${pathway.id}-title`}
              className="text-subtitle text-ink"
            >
              {pathway.label}
            </h3>
            <p className="mt-xs max-w-[62ch] text-body text-ink-2">
              {pathway.description}
            </p>
          </div>
        </div>

        <div className="shrink-0 tablet:text-right">
          <p className="font-mono text-figure text-ink">
            {formatAmount(region, total)}
          </p>
          <p className="mt-xxs font-mono text-data text-ink-3">
            {stageCountLabel[pathway.stages.length]} · tax included
          </p>
        </div>
      </div>

      <div className="flex flex-col items-stretch pb-xxl desktop:flex-row desktop:items-stretch">
        {pathway.stages.map((key, index) => {
          const stage = stageByKey.get(key);
          if (!stage) return null;
          return (
            <div
              key={key}
              className="flex flex-col items-stretch desktop:flex-row"
            >
              <StageCell stage={stage} region={region} position={index + 1} />
              {index < pathway.stages.length - 1 && <Connector />}
            </div>
          );
        })}
      </div>
    </section>
  );
}

/**
 * The four routes, priced.
 *
 * Rows rather than columns of a comparison table: these are not tiers of one
 * product that somebody picks on budget, they are different starting points,
 * and a table would invite reading them cheap-to-expensive. Every row ends in
 * the same place.
 *
 * Region is held here — the only section on the page that prices anything —
 * and read from storage after mount rather than during render, so the
 * prerendered HTML and the first client render agree.
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
    <section id="pathways" className="mt-band">
      <div className="mx-auto max-w-page px-gutter tablet:px-rail">
        <SectionHeading
          label="Choose your route"
          title="Four routes, one terminus"
          lead="Each row below is a complete journey from where you are today to an offer. They differ only in the starting point."
        />

        {/* The switch sits above the figures, never below them. */}
        <div className="mt-xl">
          <RegionSwitch value={region} onChange={chooseRegion} />
        </div>

        <div className="mt-xxl">
          {pathways.map((pathway, index) => (
            <Reveal key={pathway.id} delay={index * 60}>
              <PathwayRow pathway={pathway} region={region} />
            </Reveal>
          ))}
        </div>

        {/* What the programme asks of you in return. */}
        <Reveal delay={120}>
          <div className="panel-night border-l-2 border-signal p-lg tablet:p-xl">
            <p className="font-mono text-label uppercase text-night-ink-2">
              What we ask in return
            </p>
            <dl className="mt-lg grid gap-lg tablet:grid-cols-3">
              {commitments.map((commitment) => (
                <div key={commitment.value}>
                  <dt className="font-mono text-figure text-night-ink">
                    {commitment.value}
                  </dt>
                  <dd className="mt-xs max-w-[28ch] text-small text-night-ink-2">
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
