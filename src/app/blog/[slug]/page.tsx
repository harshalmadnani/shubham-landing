import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ButtonLink } from "@/components/Button";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ArrowRightIcon } from "@/components/icons";
import { PageHero } from "@/components/PageHero";
import { RichTextContent } from "@/components/PendingData";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import {
  findPost,
  formatPublished,
  posts,
  readingMinutes,
  sortedPosts,
} from "@/content/blog";
import {
  allBenchmarks,
  formatSalary,
  formatVacancies,
  marketDataSource,
} from "@/content/marketData";
import { chatMessage, site, whatsAppUrl } from "@/content/site";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = findPost(slug);

  if (!post) return {};

  return {
    title: `${post.title} — ${site.name}`,
    description: post.summary,
    openGraph: {
      type: "article",
      title: post.title,
      description: post.summary,
      publishedTime: post.published,
    },
  };
}

/**
 * The UK salary and vacancy table.
 *
 * Rendered from `marketData.ts` rather than written into the post, so the
 * article and the programme cards cannot disagree about a figure. Every row
 * links to the page it came from — a salary without a checkable source is a
 * claim rather than data.
 */
function MarketTable() {
  return (
    <div className="my-10 overflow-x-auto rounded-lg border border-line">
      <table className="w-full text-left text-small">
        <caption className="sr-only">
          Median advertised salary and permanent vacancies by role, United
          Kingdom, six months to {marketDataSource.windowEnding}
        </caption>
        <thead>
          <tr className="bg-surface-2 text-micro text-ink-2">
            <th scope="col" className="px-5 py-3 font-medium">
              Role
            </th>
            <th scope="col" className="px-5 py-3 text-right font-medium">
              Median salary
            </th>
            <th scope="col" className="px-5 py-3 text-right font-medium">
              Jobs advertised
            </th>
          </tr>
        </thead>
        <tbody>
          {allBenchmarks.map((benchmark) => (
            <tr key={benchmark.role} className="border-t border-line">
              <th scope="row" className="px-5 py-3 font-normal text-ink">
                <a
                  href={benchmark.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-line-2 underline-offset-4 transition-colors hover:decoration-accent-ink"
                >
                  {benchmark.role}
                </a>
              </th>
              <td className="px-5 py-3 text-right tabular-nums text-ink">
                {formatSalary(benchmark.medianSalary)}
              </td>
              <td className="px-5 py-3 text-right tabular-nums text-ink-2">
                {formatVacancies(benchmark.vacancies)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/**
 * One post.
 *
 * Set at a single reading measure. A blog is read rather than scanned, and a
 * paragraph run to the full page width is one nobody finishes.
 */
export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = findPost(slug);

  if (!post) {
    notFound();
  }

  const others = sortedPosts.filter((other) => other.slug !== post.slug);

  return (
    <div className="flex flex-1 flex-col">
      <Header />

      <main className="flex flex-1 flex-col">
        <div className="mx-auto w-full max-w-page px-6 pt-10 tablet:px-8">
          <Link
            href="/blog"
            className="group -my-2 inline-flex items-center gap-2 py-2 text-micro text-ink-2 transition-colors hover:text-ink"
          >
            <ArrowRightIcon className="h-4 w-4 rotate-180 transition-transform duration-200 group-hover:-translate-x-1" />
            All posts
          </Link>
        </div>

        <PageHero
          label="Blog"
          title={post.title}
          lead={post.summary}
          meta={
            <>
              {formatPublished(post.published)} · {readingMinutes(post)} min read
            </>
          }
        />

        <Section tone="surface">
          <article className="max-w-2xl">
            {post.blocks.map((block, index) => {
              if (block.kind === "heading") {
                return (
                  <h2
                    key={index}
                    className="mt-12 text-title text-balance text-ink first:mt-0"
                  >
                    {block.text}
                  </h2>
                );
              }

              if (block.kind === "list") {
                return (
                  <ul key={index} className="mt-6 flex flex-col gap-3">
                    {block.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex gap-3">
                        <span
                          aria-hidden="true"
                          className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                        />
                        <span className="text-body text-ink-2">
                          <RichTextContent value={item} />
                        </span>
                      </li>
                    ))}
                  </ul>
                );
              }

              if (block.kind === "marketTable") {
                return <MarketTable key={index} />;
              }

              return (
                <p key={index} className="mt-6 text-body text-ink-2 first:mt-0">
                  <RichTextContent value={block.text} />
                </p>
              );
            })}
          </article>
        </Section>

        {others.length > 0 && (
          <Section label="More posts">
            <ul className="grid gap-4 tablet:grid-cols-2 desktop:grid-cols-3">
              {others.slice(0, 3).map((other) => (
                <Reveal key={other.slug} className="h-full">
                  <li className="h-full">
                    <Link
                      href={`/blog/${other.slug}`}
                      className="group flex h-full flex-col rounded-lg bg-surface p-7 transition-colors duration-200 hover:bg-surface-2"
                    >
                      <span className="text-micro text-ink-3">
                        {formatPublished(other.published)}
                      </span>
                      <span className="mt-3 text-heading text-ink transition-colors duration-200 group-hover:text-accent-ink">
                        {other.title}
                      </span>
                    </Link>
                  </li>
                </Reveal>
              ))}
            </ul>
          </Section>
        )}

        <section className="bg-canvas">
          <div className="mx-auto w-full max-w-page px-6 pb-24 tablet:px-8 tablet:pb-32">
            <div className="rounded-lg bg-night px-8 py-20 text-center tablet:px-16">
              <h2 className="mx-auto max-w-2xl text-display text-balance text-chalk">
                Not sure which route fits you?
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-body text-chalk-2">
                A free consultation, and an honest answer about whether we are
                the right fit — including if we are not.
              </p>
              <ButtonLink
                href={whatsAppUrl(chatMessage)}
                variant="light"
                className="mt-10"
              >
                Message us on WhatsApp
              </ButtonLink>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
