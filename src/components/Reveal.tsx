"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

/**
 * Uncovers its children the first time they scroll into view.
 *
 * A left-to-right wipe rather than a fade-up: signage is revealed by taking
 * the cover off it, and that reads differently from the scroll-fade every
 * other site uses.
 *
 * Content starts visible and is only hidden once the observer is known to be
 * running, so the page still reads without JavaScript instead of rendering
 * blank. `prefers-reduced-motion` skips the effect entirely.
 */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  /** Stagger, in milliseconds, for items revealed as a group. */
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<"static" | "hidden" | "shown">("static");

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Already on screen at mount — don't hide it just to animate it back in.
    if (node.getBoundingClientRect().top < window.innerHeight * 0.86) {
      setState("shown");
      return;
    }

    setState("hidden");

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setState("shown");
            observer.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={
        state === "hidden"
          ? { opacity: 0, clipPath: "inset(0 100% 0 0)" }
          : state === "shown"
            ? {
                animation: `var(--animate-wipe)`,
                animationDelay: `${delay}ms`,
              }
            : undefined
      }
    >
      {children}
    </div>
  );
}
