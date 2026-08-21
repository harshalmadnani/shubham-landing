"use client";

import { DEFAULT_REGION, findRegion, regions } from "@/content/regions";
import type { RegionId } from "@/content/regions";

const STORAGE_KEY = "aviro:region";

/** Reads a saved choice, ignoring anything that is not a region we serve. */
export function readStoredRegion(): RegionId {
  if (typeof window === "undefined") return DEFAULT_REGION;
  const saved = window.localStorage.getItem(STORAGE_KEY);
  return regions.some((region) => region.id === saved)
    ? (saved as RegionId)
    : DEFAULT_REGION;
}

export function storeRegion(id: RegionId) {
  try {
    window.localStorage.setItem(STORAGE_KEY, id);
  } catch {
    // Private browsing can refuse writes; the choice just will not persist.
  }
}

/**
 * The market switch that governs which price list is shown.
 *
 * Deliberately sits directly above the prices rather than in the footer, where
 * the site this pattern came from puts it. A control placed after the figures
 * lets someone read an entire price list in the wrong currency before they
 * discover it was switchable — the one mistake a pricing page must not invite.
 *
 * It is a radio group, not a set of buttons: these are two states of one
 * setting, and arrow keys should move between them.
 */
export function RegionSwitch({
  value,
  onChange,
}: {
  value: RegionId;
  onChange: (id: RegionId) => void;
}) {
  const active = findRegion(value);

  return (
    <div className="flex flex-col gap-sm">
      <div
        role="radiogroup"
        aria-label="Choose your region"
        className="inline-flex w-max border border-ink"
      >
        {regions.map((region) => {
          const isActive = region.id === value;
          return (
            <button
              key={region.id}
              type="button"
              role="radio"
              aria-checked={isActive}
              onClick={() => onChange(region.id)}
              className={`px-lg py-sm font-mono text-nav uppercase transition-colors duration-150 ${
                isActive
                  ? "bg-ink text-paper"
                  : "bg-transparent text-ink-2 hover:text-ink"
              }`}
            >
              {region.shortLabel}
            </button>
          );
        })}
      </div>

      <p className="font-mono text-data text-ink-3">
        Prices in {active.currencyName} ({active.currencyCode}).{" "}
        {active.taxNote}
      </p>
    </div>
  );
}
