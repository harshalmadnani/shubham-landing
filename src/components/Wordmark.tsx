import Image from "next/image";
import { site } from "@/content/site";

/**
 * The wordmark, set in the site's own typeface rather than shipped as art.
 *
 * The supplied lockup is a 2060×339 raster of the name plus "CONSULTANCY" in
 * spaced capitals; at header size it renders as a grey smear, and it cannot
 * take on the colour of whatever surface it lands on. Setting it in Instrument
 * Sans fixes both: "AVIRO" at 600 and "work" at 400 keeps the two halves of
 * the name distinguishable the way the original lockup does, it stays crisp at
 * any size, and it inherits `currentColor` so one component works on paper and
 * on the inverse surface.
 */
export function Wordmark({
  tone = "light",
  showMark = true,
  className,
}: {
  tone?: "light" | "dark";
  /** The monogram tile beside the name. Off where the mark already appears. */
  showMark?: boolean;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2.5${className ? ` ${className}` : ""}`}
    >
      {showMark && (
        <Image
          src="/logo/mark.png"
          alt=""
          width={512}
          height={512}
          className={`h-9 w-9 rounded-md ${
            tone === "dark" ? "ring-1 ring-night-line" : ""
          }`}
          priority
        />
      )}

      <span
        className="text-[1.0625rem] leading-none tracking-[-0.03em]"
        // The full name stays in the accessibility tree as one string; the
        // two weights below are presentation, not two separate words.
        aria-label={site.name}
      >
        <span aria-hidden="true" className="font-semibold">
          AVIRO
        </span>
        <span
          aria-hidden="true"
          className={tone === "dark" ? "text-chalk-2" : "text-ink-2"}
        >
          work
        </span>
      </span>
    </span>
  );
}
