import { Section } from "@/components/Section";
import { technologyMarks } from "@/content/logos";

/**
 * The technologies the catalogue covers, given a section of their own.
 *
 * Drawn in each vendor's own colour, which is how these marks are recognised —
 * the AWS orange and the Docker blue do more work at 28px than the shapes do.
 * The row is deliberately the only place on the site with more than one accent
 * in it; everything around it is quiet enough to carry that.
 *
 * No hover state, because nothing here is clickable. `color` is optional on the
 * type, so the inline fill falls back to the neutral class if a mark ever
 * arrives without one.
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
              style={mark.color ? { fill: mark.color } : undefined}
              className="h-7 w-auto max-w-full fill-ink-3"
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
