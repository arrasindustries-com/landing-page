import * as React from "react";
import { cn } from "@/lib/utils";

export function Card({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-[30px] border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)]",
        className,
      )}
      {...props}
    />
  );
}
export function CardHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("p-7 pb-3 md:p-8 md:pb-4", className)} {...props} />;
}
export function CardTitle({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn("text-xl font-semibold tracking-tight text-[var(--text)]", className)}
      {...props}
    />
  );
}
export function CardDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn("text-sm leading-6 text-[var(--text-muted)]", className)} {...props} />
  );
}
export function CardContent({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("p-7 pt-3 md:p-8 md:pt-4", className)} {...props} />;
}
