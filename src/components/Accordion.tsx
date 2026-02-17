import * as React from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { useTheme } from "@/contexts/useTheme";

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
  const { theme } = useTheme();
  return (
    <div className={cn("space-y-3", className)}>
      {items.map((it, idx) => {
        const isOpen = open === idx;
        return (
          <div
            key={idx}
            className={`rounded-[12px] border backdrop-blur transition-colors duration-200 ${
              theme === "dark"
                ? "border-white/10 bg-white/5"
                : "border-[var(--border)] bg-[var(--surface)]"
            }`}
            style={
              isOpen && accentColor
                ? { borderColor: `${accentColor}40` }
                : undefined
            }
          >
            <button
              className={`flex w-full items-center justify-between gap-4 p-5 text-left ${
                theme === "dark" ? "text-white" : "text-[var(--text)]"
              }`}
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
              <div
                className={`px-5 pb-5 text-sm ${
                  theme === "dark" ? "text-white/70" : "text-[var(--muted)]"
                }`}
              >
                {it.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
