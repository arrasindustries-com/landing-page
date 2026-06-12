/* eslint-disable react-refresh/only-export-components */
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-ring)] focus-visible:ring-offset-0 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-[var(--button-bg)] text-[var(--button-text)] hover:bg-[var(--button-hover)] active:scale-[0.98] uppercase tracking-[0.08em]",
        outline:
          "border border-[var(--border)] bg-transparent text-[var(--text)] hover:border-[var(--border-strong)] hover:bg-[var(--surface-strong)] uppercase tracking-[0.08em]",
        ghost:
          "text-sm text-[var(--text-muted)] hover:bg-[var(--surface-strong)] hover:text-[var(--text)]",
        secondary:
          "text-sm bg-[var(--surface)] text-[var(--text)] hover:bg-[var(--surface-strong)]",
      },
      size: {
        default: "min-h-[3rem] py-3 px-4 sm:px-6 text-xs sm:text-sm",
        sm: "h-10 px-4 text-sm",
        lg: "h-13 px-7 text-sm",
        icon: "h-11 w-11 rounded-full text-sm",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  },
);

export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
