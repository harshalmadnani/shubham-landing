import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { struggles } from "@/content/sections";

/**
 * The problem, as a numbered list on rules.
 *
 * Deliberately the quietest section on the page — it is the only one that
 * describes something going wrong, and giving it cards and colour would make
 * the page open on a note of alarm.
 */
export function Struggles() {
  return (
    <section id="struggles" className="mt-band">
      <div className="mx-auto max-w-page px-gutter tablet:px-rail">
        <SectionHeading
          label="The gap"
          title="Why the jump into tech work stalls"
          lead="Not for lack of effort. These are the things that actually stall it, and none of them is solved by another course."
        />

        <ol className="mt-xxl border-t border-ink">
          {struggles.map((struggle, index) => (
            <Reveal key={struggle.title} delay={index * 60}>
              <li className="grid gap-sm border-b border-rule py-lg desktop:grid-cols-[4rem_minmax(0,20rem)_minmax(0,1fr)] desktop:gap-xl desktop:py-xl">
                <span
                  aria-hidden="true"
                  className="font-mono text-label text-signal-text"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-subtitle text-ink">{struggle.title}</h3>
                <p className="max-w-[58ch] text-body text-ink-2">
                  {struggle.body}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
