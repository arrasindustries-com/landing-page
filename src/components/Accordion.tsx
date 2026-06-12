import * as React from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

type Item = { title: string; content: React.ReactNode };

export function Accordion({
  items,
  className,
  accentColor,
}: {
  items: Item[];
  className?: string;
  accentColor?: string;
}) {
  const [open, setOpen] = React.useState<number | null>(0);
  return (
    <div className={cn("space-y-3", className)}>
      {items.map((it, idx) => {
        const isOpen = open === idx;
        return (
          <div
            key={idx}
            className="rounded-[20px] border border-[var(--border)] bg-[var(--surface)] transition-colors duration-200"
            style={
              isOpen && accentColor
                ? { borderColor: `${accentColor}55` }
                : undefined
            }
          >
            <button
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-[var(--text)] md:px-7"
              onClick={() => setOpen(isOpen ? null : idx)}
            >
              <span className="font-medium leading-6">{it.title}</span>
              <ChevronDown
                className={cn(
                  "h-4 w-4 shrink-0 transition-transform",
                  isOpen && "rotate-180",
                )}
                style={
                  isOpen && accentColor ? { color: accentColor } : undefined
                }
              />
            </button>
            {isOpen && (
              <div className="px-6 pb-6 text-sm leading-6 text-[var(--text-muted)] md:px-7">
                {it.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
