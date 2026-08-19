import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

export type ButtonVariant = "primary" | "outline" | "quiet" | "onNight";

/*
 * Buttons are soft-cornered rectangles with a sentence-case label.
 *
 * No pills, no uppercase tracking, no gradient: the primary action is solid
 * ink and everything else is quieter than it. The accent is not used as a
 * button fill — it marks position and state elsewhere, and a page where the
 * accent means two different things means nothing.
 */
const base =
  "group/btn inline-flex items-center justify-center gap-2 rounded-md px-6 py-3.5 text-label transition-colors duration-200";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-ink text-canvas hover:bg-ink/85",
  outline: "border border-line-2 bg-transparent text-ink hover:bg-surface",
  quiet: "px-0 text-ink hover:text-accent-ink",
  onNight: "border border-chalk/25 bg-transparent text-chalk hover:bg-night-2",
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
