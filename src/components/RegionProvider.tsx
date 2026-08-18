"use client";

import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";

import { readStoredRegion, storeRegion } from "@/components/RegionSwitch";
import { DEFAULT_REGION } from "@/content/regions";
import type { RegionId } from "@/content/regions";

type RegionContextValue = {
  region: RegionId;
  setRegion: (id: RegionId) => void;
};

const RegionContext = createContext<RegionContextValue>({
  region: DEFAULT_REGION,
  setRegion: () => {},
});

/**
 * Holds the chosen market for every section that prices anything.
 *
 * Two sections show money now — the routes and the stages — and they must
 * never disagree. Lifting the choice here means one switch governs both; two
 * independent switches on one page is how a reader ends up comparing a route
 * total in one currency against stage prices in another.
 *
 * Storage is read after mount rather than during render, so the prerendered
 * HTML and the first client render agree.
 */
export function RegionProvider({ children }: { children: ReactNode }) {
  const [region, setRegionState] = useState<RegionId>(DEFAULT_REGION);

  useEffect(() => {
    setRegionState(readStoredRegion());
  }, []);

  const setRegion = (id: RegionId) => {
    setRegionState(id);
    storeRegion(id);
  };

  return (
    <RegionContext.Provider value={{ region, setRegion }}>
      {children}
    </RegionContext.Provider>
  );
}

export function useRegion() {
  return useContext(RegionContext);
}
