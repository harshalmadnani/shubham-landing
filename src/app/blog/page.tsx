import type { Metadata } from "next";
import Link from "next/link";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ArrowRightIcon } from "@/components/icons";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { formatPublished, readingMinutes, sortedPosts } from "@/content/blog";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: `Blog — ${site.name}`,
  description:
    "Straight answers about IT careers in the UK and Canada: what roles pay, how many jobs there are, and what it actually takes to change career into tech.",
};

/**
 * The blog index.
 *
 * Renders whatever is in `content/blog.ts`, newest first, and copes with an
 * empty list rather than shipping a page that says nothing — the footer link
 * points here permanently, so this must never be a dead end.
 */
export default function BlogPage() {
  return (
    <div className="flex flex-1 flex-col">
      <Header />

      <main className="flex flex-1 flex-col">
        <PageHero
          label="Blog"
          title="Straight answers about IT careers"
          lead="What roles actually pay, how many jobs there are, and what changing career into tech really involves. Sourced and dated, so you can check it."
        />

        <Section tone="surface">
          {sortedPosts.length === 0 ? (
            <p className="max-w-2xl text-body text-ink-2">
              Nothing published yet. The first posts are being written — in the
              meantime, the{" "}
              <Link
                href="/programs"
                className="text-accent-ink underline decoration-line-2 underline-offset-4 transition-colors hover:decoration-accent-ink"
              >
                programme pages
              </Link>{" "}
              carry the UK salary and vacancy figures for every role we teach.
            </p>
          ) : (
            <ul className="flex flex-col gap-4">
              {sortedPosts.map((post, index) => (
                <Reveal key={post.slug} delay={index * 60}>
                  <li>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="group flex flex-col rounded-lg bg-canvas p-8 transition-colors duration-200 hover:bg-surface-2 tablet:p-10"
                    >
                      <span className="text-micro text-ink-3">
                        {formatPublished(post.published)} ·{" "}
                        {readingMinutes(post)} min read
                      </span>

                      <span className="mt-4 text-title text-balance text-ink transition-colors duration-200 group-hover:text-accent-ink">
                        {post.title}
                      </span>

                      <span className="mt-4 max-w-2xl text-body text-ink-2">
                        {post.summary}
                      </span>

                      <span className="mt-6 inline-flex items-center gap-2 text-micro font-medium text-accent-ink">
                        Read it
                        <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                      </span>
                    </Link>
                  </li>
                </Reveal>
              ))}
            </ul>
          )}
        </Section>
      </main>

      <Footer />
    </div>
  );
}
