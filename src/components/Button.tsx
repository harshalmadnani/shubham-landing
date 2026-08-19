import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

export type ButtonVariant = "primary" | "outline" | "quiet" | "onNight";

/*
 * Buttons are rectangles with a mono label.
 *
 * The label is set in the same face as the catalogue metadata and tracked
 * wide, which is what makes a control read as a control here without a pill,
 * a shadow or a gradient doing the work. Every variant shares one hover move:
 * the fill goes vermilion.
 */
const base =
  "group/btn inline-flex items-center justify-center gap-2.5 border px-6 py-3.5 text-label uppercase font-mono transition-colors duration-200";

const variants: Record<ButtonVariant, string> = {
  // Ink by default. The accent is reserved for what it points at, not for
  // every button on the page — a page of vermilion buttons has no emphasis.
  primary: "border-ink bg-ink text-paper hover:border-flame hover:bg-flame",
  outline: "border-ink-3 bg-transparent text-ink hover:border-ink hover:bg-ink hover:text-paper",
  quiet: "border-transparent bg-transparent px-0 text-ink hover:text-flame-ink",
  onNight: "border-bone/35 bg-transparent text-bone hover:border-flame hover:bg-flame",
};

function classesFor(variant: ButtonVariant, className?: string) {
  return `${base} ${variants[variant]}${className ? ` ${className}` : ""}`;
}

/**
 * An external link styled as a button — used for every WhatsApp CTA, which is
 * why it always opens in a new tab.
 */
export function ButtonLink({
  href,
  variant = "primary",
  className,
  children,
}: {
  href: string;
  variant?: ButtonVariant;
  className?: string;
  children: ReactNode;
}) {
  const isExternal = href.startsWith("http") || href.startsWith("mailto:");

  if (isExternal) {
    return (
      <a
        href={href}
        className={classesFor(variant, className)}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classesFor(variant, className)}>
      {children}
    </Link>
  );
}

export function Button({
  variant = "primary",
  className,
  children,
  ...props
}: ComponentPropsWithoutRef<"button"> & { variant?: ButtonVariant }) {
  return (
    <button type="button" className={classesFor(variant, className)} {...props}>
      {children}
    </button>
  );
}
