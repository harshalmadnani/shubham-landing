import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

export type ButtonVariant =
  | "primary"
  | "outline"
  | "ghost"
  | "inverse"
  | "glass";

/* Pills, flat fills, no glow. The primary action is an ink pill — quieter and
   more confident than a gradient ever was. */
const base =
  "group/btn inline-flex items-center justify-center gap-xs rounded-full px-lg py-sm text-button transition-[background-color,border-color,color,box-shadow] duration-200";

const variants: Record<ButtonVariant, string> = {
  primary:
    "border border-transparent bg-ink text-inverse-ink hover:bg-ink/85",
  outline:
    "border border-ink/25 bg-transparent text-ink hover:border-ink hover:bg-surface-1",
  ghost:
    "border border-transparent bg-transparent text-primary hover:bg-primary-soft",
  inverse:
    "border border-transparent bg-canvas text-ink hover:bg-surface-1",
  glass:
    "border border-inverse-ink/30 bg-transparent text-inverse-ink hover:border-inverse-ink/70",
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
  const isExternal = href.startsWith("http");

  if (isExternal) {
    return (
      <a
        href={href}
        className={classesFor(variant, className)}
        target="_blank"
        rel="noopener noreferrer"
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
