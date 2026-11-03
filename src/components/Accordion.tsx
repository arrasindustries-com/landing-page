import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

type Item = { title: string; content: React.ReactNode };

export function Accordion({
  items,
  className,
}: {
  items: Item[];
  className?: string;
  /** Kept for API compatibility; the accent now comes from the theme. */
  accentColor?: string;
}) {
  const [open, setOpen] = React.useState<number | null>(0);
  return (
    <div className={cn("border-t border-[var(--border)]", className)}>
      {items.map((it, idx) => {
        const isOpen = open === idx;
        return (
          <div key={idx} className="border-b border-[var(--border)]">
            <button
              className="group flex w-full items-start justify-between gap-6 py-6 text-left text-[var(--text)]"
              onClick={() => setOpen(isOpen ? null : idx)}
              aria-expanded={isOpen}
            >
              <span className="flex gap-5">
                <span className="mt-1 font-mono text-xs text-[var(--text-soft)]">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-lg font-medium leading-7 tracking-[-0.02em] md:text-xl">
                  {it.title}
                </span>
              </span>
              <span
                className={cn(
                  "mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center border border-[var(--border)] text-[var(--text-muted)] transition-colors duration-300 group-hover:border-[var(--border-strong)]",
                  isOpen && "border-[var(--accent-bright)] text-[var(--accent)]",
                )}
              >
                <Plus
                  className={cn(
                    "h-3.5 w-3.5 transition-transform duration-300",
                    isOpen && "rotate-45",
                  )}
                />
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="max-w-2xl pb-7 pl-9 text-[15px] leading-7 text-[var(--text-muted)]">
                    {it.content}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
