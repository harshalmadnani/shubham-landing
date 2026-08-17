import { technologyMarks } from "@/content/logos";

/**
 * A continuously sliding strip of vendor and platform marks, between hairlines.
 *
 * The label above it matters as much as the marks: these identify what the
 * programmes teach, and nothing here claims a partnership, an accreditation or
 * a hiring relationship with any of these companies. Keep it that way.
 *
 * The track renders the list twice and slides -50%, so the loop is seamless.
 * `prefers-reduced-motion` freezes it through the global media rule, leaving a
 * static strip that still reads.
 */
export function Ticker() {
  return (
    <div className="mt-xxl">
      <p className="mx-auto max-w-content px-md text-eyebrow uppercase text-ink-subtle tablet:px-lg">
        Technologies taught across our programmes
      </p>

      <div
        aria-hidden="true"
        className="mt-md overflow-hidden border-y border-hairline py-xl"
      >
        <div className="flex w-max animate-marquee items-center gap-xxl hover:[animation-play-state:paused]">
          {[0, 1].map((copy) => (
            <ul key={copy} className="flex shrink-0 items-center gap-xxl">
              {technologyMarks.map((mark) => (
                <li key={mark.label} className="shrink-0">
                  <svg
                    role="img"
                    aria-label={mark.label}
                    viewBox={mark.viewBox}
                    fill="currentColor"
                    className="h-xxl w-xxl text-ink-muted transition-colors duration-300 hover:text-ink"
                  >
                    {mark.paths.map((d, index) => (
                      <path key={index} d={d} />
                    ))}
                  </svg>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}
