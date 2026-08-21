import { Section } from "@/components/Section";
import { technologyMarks } from "@/content/logos";

/**
 * The technologies the catalogue covers, given a section of their own.
 *
 * Drawn in one ink rather than in vendor colours: two dozen logos at full
 * saturation is a fruit salad, and the point of the row is breadth.
 */
export function TechIndex() {
  return (
    <Section tone="surface">
      <p className="text-label text-ink-2">
        Technologies covered across the catalogue
      </p>

      <ul className="mt-12 grid grid-cols-3 items-center gap-x-8 gap-y-12 tablet:grid-cols-5 desktop:grid-cols-7">
        {technologyMarks.map((mark) => (
          <li key={mark.label} className="flex items-center justify-center">
            <svg
              viewBox={mark.viewBox}
              role="img"
              aria-label={mark.label}
              className="h-7 w-auto max-w-full fill-ink-3 opacity-80 transition-opacity duration-200 hover:opacity-100"
            >
              {mark.paths.map((path, index) => (
                <path key={index} d={path} />
              ))}
            </svg>
          </li>
        ))}
      </ul>
    </Section>
  );
}
