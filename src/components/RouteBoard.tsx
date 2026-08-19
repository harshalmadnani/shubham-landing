import { pathways } from "@/content/pathways";
import { pathwayStages } from "@/content/trainingStructure";

/** Short stage names by price key, so renaming a stage cannot break the board. */
const stageLabel = new Map(
  pathwayStages.map((stage) => [stage.priceKey, stage.label]),
);

/**
 * The four routes, drawn as a board.
 *
 * This is the whole proposition in one graphic: four lines, different numbers
 * of stops, all terminating at the same place. It is built from the same
 * `pathways` data that prices them, so the picture cannot drift from the
 * product — and it is HTML rather than an illustration, which means it sets in
 * the site's own faces and reflows instead of scaling down to nothing.
 */
export function RouteBoard({ className }: { className?: string }) {
  return (
    <div className={`border border-ink bg-raised ${className ?? ""}`}>
      <div className="flex items-center justify-between border-b border-ink px-md py-sm">
        <p className="font-mono text-label uppercase text-ink-3">
          Routes to placement
        </p>
        <p className="flex items-center gap-xs font-mono text-label uppercase text-ink-3">
          <span
            aria-hidden="true"
            className="h-[6px] w-[6px] animate-blink rounded-full bg-signal"
          />
          Live
        </p>
      </div>

      <div className="flex">
        <ul className="flex-1">
          {pathways.map((pathway) => (
            <li
              key={pathway.id}
              className="border-b border-rule px-md py-md last:border-b-0"
            >
              <div className="flex items-baseline gap-sm">
                <span className="font-mono text-label uppercase text-signal-text">
                  {String(pathway.number).padStart(2, "0")}
                </span>
                <span className="font-display text-card text-ink">
                  {pathway.label.split(" → ")[0]}
                </span>
              </div>

              {/* The stops, as a line of nodes. */}
              <div className="mt-sm flex items-center gap-xxs">
                {pathway.stages.map((key, index) => (
                  <div key={key} className="flex flex-1 items-center gap-xxs">
                    <span
                      aria-hidden="true"
                      className="h-[9px] w-[9px] shrink-0 rounded-full border-2 border-signal bg-raised"
                    />
                    <span
                      aria-hidden="true"
                      className="h-[2px] flex-1 bg-rule-strong"
                    />
                    <span className="sr-only">
                      {index + 1}. {stageLabel.get(key)}
                    </span>
                  </div>
                ))}
              </div>

              <p className="mt-xs font-mono text-data text-ink-3">
                {pathway.stages.map((key) => stageLabel.get(key)).join(" · ")}
              </p>
            </li>
          ))}
        </ul>

        {/* All four lines run into the same terminus. */}
        <div className="flex w-[74px] shrink-0 items-center justify-center border-l border-ink bg-pine tablet:w-[92px]">
          <p className="rotate-180 font-display text-[1.05rem] font-bold uppercase tracking-[0.3em] text-pine-ink [writing-mode:vertical-rl]">
            Hired
          </p>
        </div>
      </div>
    </div>
  );
}
