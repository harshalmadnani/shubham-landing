"use client";

import { useEffect, useState } from "react";

import { ArrowUpIcon } from "@/components/icons";

/** Appears once the reader is far enough down to want it back. */
const SHOW_AFTER_PX = 600;

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsVisible(window.scrollY > SHOW_AFTER_PX);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      tabIndex={isVisible ? 0 : -1}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-lg right-lg z-40 flex h-xxl w-xxl items-center justify-center rounded-none border border-transparent bg-primary text-on-primary transition-opacity duration-200 hover:bg-violet-hover active:bg-violet-80 ${
        isVisible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <ArrowUpIcon className="h-md w-md" />
    </button>
  );
}
