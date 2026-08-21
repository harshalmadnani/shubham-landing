import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageHero } from "@/components/PageHero";
import { RichTextContent } from "@/components/PendingData";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { findLegalDocument, legalDocuments } from "@/content/legal";
import { site } from "@/content/site";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return legalDocuments.map((document) => ({ slug: document.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const document = findLegalDocument(slug);

  if (!document) return {};

  return {
    title: `${document.title} — ${site.name}`,
    description: document.summary,
  };
}

/**
 * One policy document: privacy, terms, or refunds.
 *
 * All three share this layout because they are the same kind of document and
 * giving each its own shape would only make them harder to scan. Set at a
 * single comfortable measure — these are read, not skimmed, and a policy run
 * to the full page width is a policy nobody finishes.
 *
 * Values the business has not confirmed render as visible "pending" chips.
 * That is intentional and it is the point of `src/content/legal.ts` — read the
 * comment at the top of that file before publishing these.
 */
export default async function LegalPage({ params }: PageProps) {
  const { slug } = await params;
  const document = findLegalDocument(slug);

  if (!document) {
    notFound();
  }

  return (
    <div className="flex flex-1 flex-col">
      <Header />

      <main className="flex flex-1 flex-col">
        <PageHero
          label="Legal"
          title={document.title}
          lead={document.summary}
        />

        <Section tone="surface">
          <p className="text-micro text-ink-3">
            Last updated: <RichTextContent value={document.updated} />
          </p>

          <div className="mt-12 flex max-w-2xl flex-col gap-12">
            {document.sections.map((section) => (
              <Reveal key={section.heading}>
                <section>
                  <h2 className="text-title text-ink">{section.heading}</h2>

                  <div className="mt-4 flex flex-col gap-4">
                    {section.paragraphs.map((paragraph, index) => (
                      <p key={index} className="text-body text-ink-2">
                        <RichTextContent value={paragraph} />
                      </p>
                    ))}
                  </div>

                  {section.bullets && section.bullets.length > 0 && (
                    <ul className="mt-4 flex flex-col gap-2">
                      {section.bullets.map((bullet, index) => (
                        <li
                          key={index}
                          className="flex gap-3 text-body text-ink-2"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                          />
                          <span>
                            <RichTextContent value={bullet} />
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              </Reveal>
            ))}
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
