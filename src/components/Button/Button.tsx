/* eslint-disable react-refresh/only-export-components */
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-ring)] focus-visible:ring-offset-0 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-[var(--button-bg)] text-[var(--button-text)] shadow-[var(--shadow)] hover:bg-[var(--button-hover)] active:scale-[0.98]",
        outline:
          "border border-[var(--border)] bg-transparent text-[var(--text)] hover:border-[var(--border-strong)] hover:bg-[var(--surface-strong)]",
        ghost:
          "text-[var(--text-muted)] hover:bg-[var(--surface-strong)] hover:text-[var(--text)]",
        secondary:
          "bg-[var(--surface)] text-[var(--text)] hover:bg-[var(--surface-strong)]",
      },
      size: {
        default: "h-12 px-6",
        sm: "h-10 px-4",
        lg: "h-13 px-7",
        icon: "h-11 w-11",
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
