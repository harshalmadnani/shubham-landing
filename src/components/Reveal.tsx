"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

/**
 * Fades its children up the first time they scroll into view.
 *
 * Content starts visible and is only hidden once the observer is known to be
 * running, so the page still reads correctly without JavaScript rather than
 * leaving every section blank. `prefers-reduced-motion` skips the effect
 * entirely.
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

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reducedMotion) return;

    // Already on screen at mount — don't hide it just to animate it back in.
    const rect = node.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.85) {
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
      { rootMargin: "0px 0px -12% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${
        state === "hidden"
          ? "translate-y-5 opacity-0"
          : "translate-y-0 opacity-100"
      } transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]${
        className ? ` ${className}` : ""
      }`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
