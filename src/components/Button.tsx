import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

export type ButtonVariant = "primary" | "outline" | "ghost";

const base =
  "inline-flex items-center justify-center gap-xs rounded-none px-md py-sm text-button transition-colors";

const variants: Record<ButtonVariant, string> = {
  primary:
    "border border-transparent bg-primary text-on-primary hover:bg-violet-hover active:bg-violet-80",
  outline: "border border-primary bg-canvas text-primary hover:bg-surface-1",
  ghost: "border border-transparent bg-canvas text-primary hover:bg-surface-1",
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
    <button
      type="button"
      className={classesFor(variant, className)}
      {...props}
    >
      {children}
    </button>
  );
}
