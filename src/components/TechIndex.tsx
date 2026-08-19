import { technologyMarks } from "@/content/logos";

/**
 * The technologies the catalogue covers, set as a specimen sheet.
 *
 * The marks are drawn in ink rather than in their own brand colours: two dozen
 * logos at full saturation is a fruit salad, and the point of the row is
 * breadth, not vendor branding. They sit still — a marquee would be the only
 * thing moving on a page built to be read.
 */
export function TechIndex() {
  return (
    <div className="relative border-t border-rule bg-paper-2">
      <div className="mx-auto w-full max-w-page px-6 py-10 tablet:px-10">
        <p className="font-mono text-label uppercase text-ink-3">
          Technologies across the catalogue
        </p>

        <ul className="mt-8 grid grid-cols-3 gap-x-8 gap-y-8 tablet:grid-cols-6 desktop:grid-cols-9">
          {technologyMarks.map((mark) => (
            <li key={mark.label} className="flex items-center justify-center">
              <svg
                viewBox={mark.viewBox}
                role="img"
                aria-label={mark.label}
                className="h-6 w-auto max-w-full fill-ink-3 transition-colors duration-200 hover:fill-ink"
              >
                {mark.paths.map((path, index) => (
                  <path key={index} d={path} />
                ))}
              </svg>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
