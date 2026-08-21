import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

export type ButtonVariant = "signal" | "night" | "outline" | "ghost" | "onNight";

/*
 * Buttons are signs: square, set in mono, tracked out, and they say exactly
 * what happens. The signal variant is white on blue at 5.8:1, and deepens to
 * 8.0:1 on hover. Worth knowing if this ever changes colour again: the orange
 * this replaced could not carry white type at all (3.3:1), so it had to run an
 * ink label and a *lightening* hover. Blue needs neither workaround.
 */
const base =
  "group/btn inline-flex items-center justify-center gap-xs border font-mono text-nav uppercase px-lg py-sm transition-[background-color,color,border-color,transform] duration-150 active:translate-y-px";

const variants: Record<ButtonVariant, string> = {
  signal:
    "border-signal bg-signal text-on-signal hover:bg-signal-hover hover:border-signal-hover",
  night: "border-night bg-night text-night-ink hover:bg-night-deep hover:border-night-deep",
  outline:
    "border-rule-strong bg-transparent text-ink hover:border-ink hover:bg-ink hover:text-paper",
  ghost:
    "border-transparent bg-transparent text-ink px-0 hover:text-signal-text",
  onNight:
    "border-night-ink/40 bg-transparent text-night-ink hover:bg-night-ink hover:text-night hover:border-night-ink",
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
