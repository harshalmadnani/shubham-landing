import Image from "next/image";

import { Reveal } from "@/components/Reveal";
import { Section, SectionHead } from "@/components/Section";
import {
  hasProof,
  instructors,
  placements,
  studentProjects,
  testimonials,
} from "@/content/proof";

/**
 * Proof: what students said, what they built, who taught them, where they went.
 *
 * The whole section returns null while `src/content/proof.ts` is empty, and
 * each group renders only if it has entries. That is the design, not a
 * fallback: this is the one kind of content that has to be real, so the page
 * is built to be complete without it and to grow the moment it exists. See
 * the header comment in `proof.ts` before adding anything here.
 */
export function Proof() {
  if (!hasProof) return null;

  return (
    <Section id="proof" label="Proof">
      <SectionHead
        title={
          <>
            What students said, and{" "}
            <em className="text-accent-ink">where they went</em>
          </>
        }
        lead="Named people, named programmes, and work you can look at."
      />

      {testimonials.length > 0 && (
        <ul className="mt-16 grid gap-4 tablet:grid-cols-2 desktop:grid-cols-3">
          {testimonials.map((item, index) => (
            <Reveal key={item.name} delay={(index % 3) * 50} className="h-full">
              <li className="flex h-full flex-col justify-between rounded-lg bg-surface p-7">
                <blockquote className="text-body text-ink">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>

                <div className="mt-6 flex items-center gap-3">
                  {item.photo && (
                    <Image
                      src={item.photo}
                      alt=""
                      width={40}
                      height={40}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                  )}
                  <div>
                    <p className="text-small font-medium text-ink">
                      {item.name}
                    </p>
                    <p className="text-micro text-ink-3">
                      {[item.programme, item.role, item.employer]
                        .filter(Boolean)
                        .join(" · ")}
                    </p>
                  </div>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
      )}

      {studentProjects.length > 0 && (
        <div className="mt-20">
          <h3 className="text-heading text-ink">Student projects</h3>
          <ul className="mt-8 grid gap-4 tablet:grid-cols-2 desktop:grid-cols-3">
            {studentProjects.map((project, index) => {
              const inner = (
                <>
                  <span className="block text-heading text-ink">
                    {project.title}
                  </span>
                  <span className="mt-2 block text-small text-ink-2">
                    {project.summary}
                  </span>
                  <span className="mt-6 block text-micro text-ink-3">
                    {project.student} · {project.programme}
                  </span>
                  {project.stack.length > 0 && (
                    <span className="mt-2 block text-micro text-ink-3">
                      {project.stack.join(" · ")}
                    </span>
                  )}
                </>
              );

              return (
                <Reveal
                  key={project.title}
                  delay={(index % 3) * 50}
                  className="h-full"
                >
                  <li className="h-full">
                    {project.href ? (
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-full flex-col rounded-lg bg-surface p-7 transition-colors duration-200 hover:bg-surface-2"
                      >
                        {inner}
                      </a>
                    ) : (
                      <div className="flex h-full flex-col rounded-lg bg-surface p-7">
                        {inner}
                      </div>
                    )}
                  </li>
                </Reveal>
              );
            })}
          </ul>
        </div>
      )}

      {instructors.length > 0 && (
        <div className="mt-20">
          <h3 className="text-heading text-ink">Who teaches</h3>
          <ul className="mt-8 grid gap-4 tablet:grid-cols-2 desktop:grid-cols-3">
            {instructors.map((person, index) => (
              <Reveal
                key={person.name}
                delay={(index % 3) * 50}
                className="h-full"
              >
                <li className="flex h-full flex-col rounded-lg bg-surface p-7">
                  <div className="flex items-center gap-3">
                    {person.photo && (
                      <Image
                        src={person.photo}
                        alt=""
                        width={48}
                        height={48}
                        className="h-12 w-12 rounded-full object-cover"
                      />
                    )}
                    <div>
                      <p className="text-heading text-ink">{person.name}</p>
                      <p className="text-micro text-ink-3">
                        {person.teaches.join(" · ")}
                      </p>
                    </div>
                  </div>

                  <p className="mt-4 text-small text-ink-2">
                    {person.experience}
                  </p>

                  {person.linkedIn && (
                    <a
                      href={person.linkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 text-micro text-accent-ink underline decoration-line-2 underline-offset-4 hover:decoration-accent-ink"
                    >
                      LinkedIn
                    </a>
                  )}
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      )}

      {placements.length > 0 && (
        <div className="mt-20">
          <h3 className="text-heading text-ink">Recent placements</h3>
          <ul className="mt-8 overflow-hidden rounded-lg border border-line">
            {placements.map((placement, index) => (
              <li
                key={`${placement.name}-${index}`}
                className="grid gap-1 border-b border-line bg-surface p-6 last:border-b-0 tablet:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_auto] tablet:items-baseline tablet:gap-6"
              >
                <span className="text-body text-ink">{placement.name}</span>
                <span className="text-small text-ink-2">
                  {placement.role}
                  {placement.employer ? ` — ${placement.employer}` : ""}
                </span>
                <span className="text-micro text-ink-3">
                  {placement.programme} · {placement.started}
                </span>
                {placement.note && (
                  <span className="text-micro text-ink-3 tablet:col-span-3">
                    {placement.note}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </Section>
  );
}
