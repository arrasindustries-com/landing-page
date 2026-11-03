/* eslint-disable react-refresh/only-export-components */
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group/btn inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium tracking-[-0.01em] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-ring)] focus-visible:ring-offset-0 disabled:pointer-events-none disabled:opacity-50 [&_svg]:transition-transform [&_svg]:duration-200 hover:[&_svg]:translate-x-0.5",
  {
    variants: {
      variant: {
        default:
          "bg-[var(--button-bg)] text-[var(--button-text)] hover:bg-[var(--button-hover)] active:scale-[0.98]",
        accent:
          "bg-[var(--accent-bright)] text-[#111317] hover:brightness-110 active:scale-[0.98]",
        outline:
          "border border-[var(--border-strong)] bg-transparent text-[var(--text)] hover:border-[var(--text)] hover:bg-[var(--surface-strong)]",
        inverse:
          "bg-[var(--ink-text)] text-[#111317] hover:bg-white active:scale-[0.98]",
        inkOutline:
          "border border-[var(--ink-border)] bg-transparent text-[var(--ink-text)] hover:border-[var(--ink-muted)] hover:bg-white/5",
        ghost:
          "text-sm text-[var(--text-muted)] hover:bg-[var(--surface-strong)] hover:text-[var(--text)]",
        secondary:
          "text-sm bg-[var(--surface)] text-[var(--text)] hover:bg-[var(--surface-strong)]",
      },
      size: {
        default: "h-12 px-5 text-[15px]",
        sm: "h-10 px-4 text-sm",
        lg: "h-14 px-7 text-base",
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
