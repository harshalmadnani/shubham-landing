"use client";

import { useEffect, useRef } from "react";

/**
 * The hero's 3D piece: the three programme stages as a fanned stack of index
 * cards in real CSS 3D, drifting on an idle sway and tilting toward the
 * pointer.
 *
 * Built by hand from the design system — paper, hairlines, serif numerals,
 * one cobalt edge — because a generated 3D render is exactly the look this
 * site just walked away from. The content is real: 50 hours, 20 hours, then
 * placement until hired.
 */
const CARDS = [
  {
    stage: "Stage 01",
    title: "Training",
    stat: "50h",
    note: "instructor-led",
    z: -100,
    x: -150,
    y: 96,
    delay: "0s",
  },
  {
    stage: "Stage 02",
    title: "Bootcamp",
    stat: "20h",
    note: "five real projects",
    z: 0,
    x: 0,
    y: 0,
    delay: "-2.4s",
  },
  {
    stage: "Stage 03",
    title: "Placement",
    stat: "→ hired",
    note: "resume marketing",
    z: 100,
    x: 150,
    y: -96,
    delay: "-4.8s",
  },
] as const;

export function HeroScene() {
  const sceneRef = useRef<HTMLDivElement>(null);

  // Pointer tilt, written to CSS vars so the idle sway keyframe and the
  // interaction compose without fighting over `transform`.
  useEffect(() => {
    const node = sceneRef.current;
    if (!node) return;
    if (!window.matchMedia("(hover: hover)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const onMove = (event: PointerEvent) => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const rect = node.getBoundingClientRect();
        const relX = (event.clientX - rect.left) / rect.width - 0.5;
        const relY = (event.clientY - rect.top) / rect.height - 0.5;
        node.style.setProperty("--tilt-y", `${relX * 10}deg`);
        node.style.setProperty("--tilt-x", `${relY * -10}deg`);
      });
    };
    const onLeave = () => {
      node.style.setProperty("--tilt-x", "0deg");
      node.style.setProperty("--tilt-y", "0deg");
    };

    node.addEventListener("pointermove", onMove);
    node.addEventListener("pointerleave", onLeave);
    return () => {
      node.removeEventListener("pointermove", onMove);
      node.removeEventListener("pointerleave", onLeave);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={sceneRef}
      aria-hidden="true"
      className="relative hidden h-[470px] select-none [perspective:1400px] desktop:block"
    >
      <div
        className="absolute inset-0 transition-transform duration-500 ease-out [transform-style:preserve-3d] [transform:rotateX(var(--tilt-x,0deg))_rotateY(var(--tilt-y,0deg))]"
      >
        <div className="absolute inset-0 animate-sway [transform-style:preserve-3d]">
          {/* Dot lattice floor, receding under the stack. */}
          <div
            className="absolute left-1/2 top-1/2 h-[460px] w-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60 [transform:rotateX(90deg)_translateZ(-180px)]"
            style={{
              backgroundImage:
                "radial-gradient(var(--color-hairline) 1.5px, transparent 1.5px)",
              backgroundSize: "26px 26px",
              maskImage:
                "radial-gradient(closest-side, black 30%, transparent 100%)",
              WebkitMaskImage:
                "radial-gradient(closest-side, black 30%, transparent 100%)",
            }}
          />

          {CARDS.map((card) => (
            <div
              key={card.stage}
              className="absolute left-1/2 top-1/2 [transform-style:preserve-3d]"
              style={{
                transform: `translate(-50%, -50%) translate3d(${card.x}px, ${card.y}px, ${card.z}px)`,
              }}
            >
              {/* Float on a child of the positioned node — a keyframe's
                  transform replaces the inline one, so they cannot share. */}
              <div
                className="relative h-[210px] w-[300px] animate-float rounded-lg border border-ink/15 bg-canvas p-lg shadow-lift"
                style={{ animationDelay: card.delay }}
              >
              <p className="text-eyebrow uppercase text-ink-subtle">
                {card.stage}
              </p>
              <p className="mt-xs font-serif text-headline-sm text-ink">
                {card.title}
              </p>
              <p className="mt-md font-serif text-display-md text-primary">
                {card.stat}
              </p>
              <p className="mt-xs text-body-sm text-ink-muted">{card.note}</p>
                <span
                  aria-hidden="true"
                  className="absolute inset-x-lg bottom-lg h-px bg-hairline"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
