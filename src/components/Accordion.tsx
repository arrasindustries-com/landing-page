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
            className="rounded-[12px] border border-white/10 bg-white/5 backdrop-blur transition-colors duration-200"
            style={
              isOpen && accentColor
                ? { borderColor: `${accentColor}40` }
                : undefined
            }
          >
            <button
              className="flex w-full items-center justify-between gap-4 p-5 text-left text-white"
              onClick={() => setOpen(isOpen ? null : idx)}
            >
              <span className="font-medium">{it.title}</span>
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
              <div className="px-5 pb-5 text-sm text-white/70">
                {it.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
