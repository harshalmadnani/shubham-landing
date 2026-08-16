import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

export type ButtonVariant =
  | "primary"
  | "outline"
  | "ghost"
  | "inverse"
  | "glass";

/* Pills, not rectangles — and a 1px lift on hover so the CTA feels pressable. */
const base =
  "group/btn inline-flex items-center justify-center gap-xs rounded-full px-lg py-sm text-button transition-[transform,box-shadow,background-color,border-color,color] duration-200 hover:-translate-y-px active:translate-y-0";

const variants: Record<ButtonVariant, string> = {
  primary:
    "border border-transparent bg-brand-gradient text-on-primary shadow-primary hover:shadow-lift",
  outline:
    "border border-hairline bg-canvas text-ink shadow-sm hover:border-primary hover:text-primary hover:shadow-card",
  ghost: "border border-transparent bg-transparent text-primary hover:bg-primary-soft",
  inverse:
    "border border-transparent bg-canvas text-ink shadow-card hover:shadow-lift",
  glass: "glass rounded-full text-inverse-ink hover:bg-white/15",
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
