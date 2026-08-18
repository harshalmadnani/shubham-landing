import type { Metadata } from "next";

import { ButtonLink } from "@/components/Button";
import { CtaBanner } from "@/components/CtaBanner";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { AboutIllustration } from "@/components/Illustrations";
import { ArrowRightIcon, CalendarIcon } from "@/components/icons";
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
      <main className="flex flex-1 flex-col">
        <section className="bg-inverse-canvas px-md tablet:px-lg">
          <div className="mx-auto grid max-w-content items-center gap-xl pb-xxxl pt-xxl desktop:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] desktop:gap-xxl desktop:pt-xxxl">
            <div>
              <p className="flex items-center gap-sm text-eyebrow uppercase text-inverse-ink-muted animate-fade-up">
                <span aria-hidden="true" className="h-px w-6 bg-inverse-ink/40" />
                {aboutHero.eyebrow}
              </p>

              <h1 className="mt-lg max-w-3xl text-display-xl-mobile tablet:text-display-lg text-inverse-ink animate-fade-up">
                {aboutHero.headline}{" "}
                <em className="text-primary-bright">
                  {aboutHero.headlineAccent}
                </em>
              </h1>

              <p className="mt-lg max-w-2xl text-body-lg text-inverse-ink-muted animate-fade-up">
                {aboutHero.body}
              </p>

              <dl className="mt-xl grid gap-sm tablet:grid-cols-3 animate-fade-up">
                {aboutFacts.map((fact) => (
                  <div
                    key={fact.label}
                    className="rounded-lg border border-inverse-hairline bg-inverse-surface-1 px-md py-sm"
                  >
                    <dt className="text-body-emphasis text-primary-bright">
                      {fact.value}
                    </dt>
                    <dd className="mt-xxs text-body-sm text-inverse-ink-muted">
                      {fact.label}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-xl flex flex-wrap gap-sm animate-fade-up">
                <ButtonLink href={whatsAppUrl(consultationMessage)}>
                  <CalendarIcon className="h-md w-md" />
                  Book free consultation
                </ButtonLink>
                <ButtonLink href="/how-it-works" variant="glass">
                  See how the programme runs
                  <ArrowRightIcon className="h-md w-md transition-transform duration-200 group-hover/btn:translate-x-1" />
                </ButtonLink>
              </div>
            </div>

            <div className="animate-fade-up rounded-lg bg-canvas p-md tablet:p-lg">
              <AboutIllustration className="w-full" />
            </div>
          </div>
        </section>

        {/* What the business actually does. */}
        <section className="px-md pt-section tablet:px-lg">
          <div className="mx-auto max-w-content">
            <SectionHeading
              eyebrow="What we do"
              title="Four things, in this order"
              lead="Take one of them or all four — but this is the sequence, and the last one is the reason the first three matter."
            />
            <div className="mt-xl grid gap-md tablet:grid-cols-2">
              {whatWeDo.map((item, index) => (
                <Reveal key={item.title} delay={index * 60} className="h-full">
                  <div className="h-full rounded-lg border border-hairline bg-canvas p-xl transition-colors duration-300 hover:border-ink/40">
                    <span
                      aria-hidden="true"
                      className="flex h-lg w-lg items-center justify-center rounded-full bg-primary-soft text-caption text-primary"
                    >
                      {index + 1}
                    </span>
                    <h3 className="mt-md text-card-title text-ink">
                      {item.title}
                    </h3>
                    <p className="mt-xs text-body-sm text-ink-muted">
                      <RichTextContent value={item.body} />
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* How the business chooses to behave. */}
        <section className="px-md pt-section tablet:px-lg">
          <div className="mx-auto max-w-content">
            <SectionHeading
              eyebrow="How we work"
              title="What we hold ourselves to"
              lead="Four commitments that shape what you see on this site — including the things we have deliberately left off it."
            />
            <ol className="mt-xl border-b border-hairline">
              {principles.map((principle, index) => (
                <Reveal key={principle.title} delay={index * 50}>
                  <li className="grid gap-sm border-t border-hairline py-lg desktop:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] desktop:gap-xl desktop:py-xl">
                    <div className="flex items-start gap-sm">
                      <span
                        aria-hidden="true"
                        className="flex h-lg w-lg shrink-0 items-center justify-center rounded-full bg-primary-soft text-caption text-primary"
                      >
                        {index + 1}
                      </span>
                      <p className="text-card-title text-ink">
                        {principle.title}
                      </p>
                    </div>
                    <p className="max-w-[46rem] text-body text-ink-muted">
                      <RichTextContent value={principle.body} />
                    </p>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* Where we operate, and how to reach a person. */}
        <section className="px-md pt-section tablet:px-lg">
          <div className="mx-auto max-w-content">
            <Reveal>
              <div className="grid gap-lg rounded-lg bg-inverse-canvas p-xl tablet:p-xxl desktop:grid-cols-[minmax(0,1fr)_minmax(0,0.7fr)] desktop:gap-xxl">
                <div>
                  <p className="text-eyebrow uppercase text-inverse-ink-muted">
                    Reach
                  </p>
                  <h2 className="mt-sm text-headline-sm text-inverse-ink">
                    {reach.title}
                  </h2>
                  <p className="mt-md max-w-2xl text-body text-inverse-ink-muted">
                    {reach.body}
                  </p>
                </div>

                <div className="desktop:border-l desktop:border-inverse-hairline desktop:pl-xxl">
                  <p className="text-eyebrow uppercase text-inverse-ink-muted">
                    Get in touch
                  </p>
                  <ul className="mt-md flex flex-col gap-sm">
                    {footerContacts.map((contact) => (
                      <li key={contact.label} className="text-body-sm">
                        {contact.href ? (
                          <a
                            href={contact.href}
                            className="text-inverse-ink underline underline-offset-4 hover:no-underline"
                          >
                            {contact.label}
                          </a>
                        ) : (
                          <span className="text-inverse-ink-muted">
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
