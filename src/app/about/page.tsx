import type { Metadata } from "next";

import { ButtonLink } from "@/components/Button";
import { CtaBanner } from "@/components/CtaBanner";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { AboutIllustration } from "@/components/Illustrations";
import { RichTextContent } from "@/components/PendingData";
import { Reveal } from "@/components/Reveal";
import { ScrollToTop } from "@/components/ScrollToTop";
import { SectionHeading } from "@/components/SectionHeading";
import { aboutFacts, aboutHero, principles, reach, whatWeDo } from "@/content/about";
import {
  consultationMessage,
  footerContacts,
  site,
  whatsAppUrl,
} from "@/content/site";

export const metadata: Metadata = {
  title: `About — ${site.name}`,
  description:
    "AVIROwork Consultancy is an IT training and placement business working across the UK and Canada: live instruction, reviewed project work, and resume marketing that runs until you are hired.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <main id="main" className="flex flex-1 flex-col">
        <section className="panel-pine">
          <div className="mx-auto grid max-w-page items-center gap-xxl px-gutter pb-xxxl pt-xxl tablet:px-rail tablet:pt-xxxl desktop:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)]">
            <div>
              <p className="flex items-center gap-sm font-mono text-label uppercase text-pine-ink-2">
                <span
                  aria-hidden="true"
                  className="h-[7px] w-[7px] rounded-full bg-signal"
                />
                {aboutHero.eyebrow}
              </p>

              <h1 className="mt-lg max-w-[20ch] text-display text-pine-ink">
                {aboutHero.headline}{" "}
                <em className="text-signal-on-pine">{aboutHero.headlineAccent}</em>
              </h1>

              <p className="mt-lg max-w-[52ch] text-lead text-pine-ink-2">
                {aboutHero.body}
              </p>

              <dl className="mt-xl grid gap-px bg-pine-rule tablet:grid-cols-3">
                {aboutFacts.map((fact) => (
                  <div key={fact.label} className="bg-pine py-md pr-md">
                    <dt className="font-mono text-figure text-signal-on-pine">
                      {fact.value}
                    </dt>
                    <dd className="mt-xs text-small text-pine-ink-2">
                      {fact.label}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-xl flex flex-wrap gap-sm">
                <ButtonLink href={whatsAppUrl(consultationMessage)}>
                  Book a free consultation
                </ButtonLink>
                <ButtonLink href="/how-it-works" variant="onPine">
                  See how the programme runs
                </ButtonLink>
              </div>
            </div>

            <div className="border border-pine-rule bg-paper p-md">
              <AboutIllustration className="w-full" />
            </div>
          </div>
        </section>

        {/* What the business actually does. */}
        <section className="mt-band">
          <div className="mx-auto max-w-page px-gutter tablet:px-rail">
            <SectionHeading
              label="What we do"
              title="Four things, in this order"
              lead="Take one of them or all four — but this is the sequence, and the last one is the reason the first three matter."
            />
            <div className="mt-xxl grid gap-px border border-rule bg-rule tablet:grid-cols-2">
              {whatWeDo.map((item, index) => (
                <Reveal key={item.title} delay={index * 60} className="h-full">
                  <div className="flex h-full flex-col bg-paper p-lg">
                    <span
                      aria-hidden="true"
                      className="font-mono text-label text-signal-text"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-sm text-subtitle text-ink">
                      {item.title}
                    </h3>
                    <p className="mt-xs max-w-[54ch] text-body text-ink-2">
                      <RichTextContent value={item.body} />
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* How the business chooses to behave. */}
        <section className="mt-band">
          <div className="mx-auto max-w-page px-gutter tablet:px-rail">
            <SectionHeading
              label="How we work"
              title="What we hold ourselves to"
              lead="Four commitments that shape what you see on this site — including the things we have deliberately left off it."
            />
            <ol className="mt-xxl border-t border-ink">
              {principles.map((principle, index) => (
                <Reveal key={principle.title} delay={index * 50}>
                  <li className="grid gap-sm border-b border-rule py-lg desktop:grid-cols-[4rem_minmax(0,22rem)_minmax(0,1fr)] desktop:gap-xl desktop:py-xl">
                    <span
                      aria-hidden="true"
                      className="font-mono text-label text-signal-text"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-subtitle text-ink">
                      {principle.title}
                    </h3>
                    <p className="max-w-[62ch] text-body text-ink-2">
                      <RichTextContent value={principle.body} />
                    </p>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* Where we operate, and how to reach a person. */}
        <section className="mt-band">
          <div className="mx-auto max-w-page px-gutter tablet:px-rail">
            <Reveal>
              <div className="panel-pine grid gap-xxl border-l-2 border-signal p-lg tablet:p-xl desktop:grid-cols-[minmax(0,1fr)_minmax(0,0.6fr)] desktop:gap-xxxl">
                <div>
                  <p className="font-mono text-label uppercase text-pine-ink-2">
                    Reach
                  </p>
                  <h2 className="mt-sm max-w-[20ch] text-title text-pine-ink">
                    {reach.title}
                  </h2>
                  <p className="mt-md max-w-[58ch] text-body text-pine-ink-2">
                    {reach.body}
                  </p>
                </div>

                <div className="desktop:border-l desktop:border-pine-rule desktop:pl-xxl">
                  <p className="font-mono text-label uppercase text-pine-ink-2">
                    Get in touch
                  </p>
                  <ul className="mt-md flex flex-col">
                    {footerContacts.map((contact) => (
                      <li key={contact.label} className="border-b border-pine-rule">
                        {contact.href ? (
                          <a
                            href={contact.href}
                            className="block py-sm font-mono text-data text-pine-ink underline decoration-pine-rule underline-offset-4 transition-colors hover:decoration-signal"
                          >
                            {contact.label}
                          </a>
                        ) : (
                          <span className="block py-sm font-mono text-data text-pine-ink-2">
                            {contact.label}
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <CtaBanner />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
