/* eslint-disable react-refresh/only-export-components */
import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

/** Scroll-reveal preset shared by every page. */
export const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
} as const;

const enter = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export function Eyebrow({
  children,
  className,
  onInk,
}: {
  children: ReactNode;
  className?: string;
  onInk?: boolean;
}) {
  return (
    <p className={cn("eyebrow", onInk && "eyebrow-on-ink", className)}>
      {children}
    </p>
  );
}

/**
 * Infinite horizontal ticker in pure CSS (see `.marquee` in index.css).
 * Content is rendered twice so the loop is seamless. No runtime-injected
 * <style> tags: the production CSP blocks those.
 */
export function Marquee({ children }: { children: ReactNode }) {
  return (
    <div className="marquee">
      <div className="marquee-track">{children}</div>
      <div className="marquee-track" aria-hidden>
        {children}
      </div>
    </div>
  );
}

/** Small mono index ("01"), used in lists instead of decorative numerals. */
export function Index({
  n,
  className,
}: {
  n: number;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex h-7 min-w-7 items-center justify-center border border-[var(--border)] px-1.5 font-mono text-[11px] tracking-[0.06em] text-[var(--accent)]",
        className,
      )}
    >
      {String(n).padStart(2, "0")}
    </span>
  );
}

/**
 * Top-of-page hero shared by every page: eyebrow + title on their own,
 * then one aligned row with the description on the left and actions on
 * the right.
 */
export function PageHero({
  eyebrow,
  title,
  description,
  actions,
  size = "lg",
}: {
  eyebrow: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  actions?: ReactNode;
  size?: "lg" | "xl";
}) {
  return (
    <div>
      <motion.div {...enter()}>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1
          className={cn(
            "mt-8 tracking-[var(--tk-hero)]",
            size === "xl"
              ? "max-w-[19ch] text-[2.6rem] leading-[1.02] sm:text-6xl sm:leading-[1] lg:text-[5.4rem] lg:leading-[0.96]"
              : "max-w-[20ch] text-[2.5rem] leading-[1.02] sm:text-6xl sm:leading-[1] lg:text-[4.6rem] lg:leading-[1]",
          )}
        >
          {title}
        </h1>
      </motion.div>

      {description || actions ? (
        <motion.div
          {...enter(0.1)}
          className={cn(
            "mt-12 grid gap-8 md:mt-14",
            actions && "lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-16",
          )}
        >
          {description ? (
            <p className="max-w-xl text-lg leading-8 text-[var(--text-muted)]">
              {description}
            </p>
          ) : null}
          {actions ? (
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              {actions}
            </div>
          ) : null}
        </motion.div>
      ) : null}
    </div>
  );
}

/** Section heading: eyebrow, title and optional lead paragraph, stacked. */
export function SectionHeading({
  eyebrow,
  title,
  aside,
  action,
  onInk,
  className,
}: {
  eyebrow: ReactNode;
  title: ReactNode;
  aside?: ReactNode;
  /** Optional link/button shown on the right, aligned with the title. */
  action?: ReactNode;
  onInk?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
      <Eyebrow onInk={onInk}>{eyebrow}</Eyebrow>
      <div className="mt-6 flex flex-col gap-6 md:flex-row md:items-end md:justify-between md:gap-12">
        <h2
          className={cn(
            "max-w-3xl text-[2.25rem] leading-[1.02] md:text-[3.4rem]",
            onInk && "text-[var(--ink-text)]",
          )}
        >
          {title}
        </h2>
        {action ? <div className="shrink-0 md:pb-2">{action}</div> : null}
      </div>
      {aside ? (
        <p
          className={cn(
            "mt-6 max-w-xl text-[15px] leading-7",
            onInk ? "text-[var(--ink-muted)]" : "text-[var(--text-muted)]",
          )}
        >
          {aside}
        </p>
      ) : null}
    </div>
  );
}
