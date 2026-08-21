import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

export type ButtonVariant = "signal" | "pine" | "outline" | "ghost" | "onPine";

/*
 * Buttons are signs: square, set in mono, tracked out, and they say exactly
 * what happens. The signal variant carries ink rather than white type —
 * vermilion under white is 3.3:1 and under ink is 5.4:1, and the ink version
 * also looks like a road sign, which is the point. The label stays ink through
 * the hover, which is why the hover tint lightens instead of deepening.
 */
const base =
  "group/btn inline-flex items-center justify-center gap-xs border font-mono text-nav uppercase px-lg py-sm transition-[background-color,color,border-color,transform] duration-150 active:translate-y-px";

const variants: Record<ButtonVariant, string> = {
  signal:
    "border-signal bg-signal text-ink hover:bg-signal-hover hover:border-signal-hover",
  pine: "border-pine bg-pine text-pine-ink hover:bg-pine-deep hover:border-pine-deep",
  outline:
    "border-rule-strong bg-transparent text-ink hover:border-ink hover:bg-ink hover:text-paper",
  ghost:
    "border-transparent bg-transparent text-ink px-0 hover:text-signal-text",
  onPine:
    "border-pine-ink/40 bg-transparent text-pine-ink hover:bg-pine-ink hover:text-pine hover:border-pine-ink",
};

function classesFor(variant: ButtonVariant, className?: string) {
  return `${base} ${variants[variant]}${className ? ` ${className}` : ""}`;
}

/**
 * An external link styled as a button — every WhatsApp route uses this, which
 * is why it always opens in a new tab.
 */
export function ButtonLink({
  href,
  variant = "signal",
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
  variant = "signal",
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
