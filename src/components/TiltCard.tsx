"use client";

import { useRef } from "react";
import type { ReactNode } from "react";

/**
 * Wraps a card in a subtle pointer-following 3D tilt.
 *
 * Capped at a few degrees so it reads as material responding to the hand, not
 * as a gimmick. Transforms are written straight to the node — no state, no
 * re-renders — and the effect simply never engages on touch devices or under
 * reduced motion.
 */
export function TiltCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const frame = useRef(0);

  const canTilt = () =>
    window.matchMedia("(hover: hover)").matches &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const node = ref.current;
    if (!node || frame.current || !canTilt()) return;
    const { clientX, clientY } = event;
    frame.current = requestAnimationFrame(() => {
      frame.current = 0;
      const rect = node.getBoundingClientRect();
      const relX = (clientX - rect.left) / rect.width - 0.5;
      const relY = (clientY - rect.top) / rect.height - 0.5;
      node.style.transform = `perspective(900px) rotateX(${relY * -4}deg) rotateY(${relX * 4}deg) translateY(-2px)`;
    });
  };

  const onPointerLeave = () => {
    const node = ref.current;
    if (!node) return;
    if (frame.current) {
      cancelAnimationFrame(frame.current);
      frame.current = 0;
    }
    node.style.transform = "";
  };

  return (
    <div
      ref={ref}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      className={`transition-transform duration-300 ease-out will-change-transform${
        className ? ` ${className}` : ""
      }`}
    >
      {children}
    </div>
  );
}
