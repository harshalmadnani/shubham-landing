import { site } from "@/content/site";

/**
 * The wordmark, set in the site's own typeface rather than shipped as art.
 *
 * The supplied lockup is a raster of the name over "CONSULTANCY" in spaced
 * capitals. Two things go wrong with it. At header size the second line is
 * roughly five pixels tall and reads as a grey smudge — it was legible in the
 * source file and is not legible here. And a raster cannot take the colour of
 * the surface it lands on, so it needs a second, reversed copy of itself for
 * the dark bands, which is two files to keep in step instead of none.
 *
 * Setting it in type fixes both. It stays crisp at any size, `currentColor`
 * means one component serves the white ground and the night bands, and
 * "CONSULTANCY" becomes a real mono label at a size where it can be read —
 * which is what the rest of the site does with a label anyway.
 *
 * The two weights on AVIRO/work keep the halves of the name distinguishable
 * the way the original lockup does. Both halves stay in the accessibility tree
 * as one string, because they are one word.
 */
export function Wordmark({
  tone = "light",
  showQualifier = true,
  className,
}: {
  tone?: "light" | "dark";
  /** The "CONSULTANCY" line. Off in tight spots, like the mobile header. */
  showQualifier?: boolean;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex flex-col justify-center${
        className ? ` ${className}` : ""
      }`}
      aria-label={site.name}
    >
      <span
        aria-hidden="true"
        className="font-display text-[1.125rem] leading-none tracking-[-0.035em] tablet:text-[1.25rem]"
      >
        <span className="font-extrabold">AVIRO</span>
        <span
          className={
            tone === "dark" ? "font-semibold text-night-ink-2" : "font-semibold text-ink-2"
          }
        >
          work
        </span>
      </span>

      {showQualifier && (
        <span
          aria-hidden="true"
          className={`mt-[3px] font-mono text-[0.5rem] uppercase leading-none tracking-[0.28em] ${
            tone === "dark" ? "text-night-ink-2" : "text-ink-3"
          }`}
        >
          Consultancy
        </span>
      )}
    </span>
  );
}
