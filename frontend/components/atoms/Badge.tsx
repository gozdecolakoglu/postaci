import clsx from "classnames";
import type { HTMLAttributes, ReactNode } from "react";

type BadgeVariant = "default" | "success" | "error" | "warning" | "outline";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  children: ReactNode;
}

export function Badge({ variant = "default", className, ...props }: BadgeProps) {
  const styles: Record<BadgeVariant, string> = {
    default: "bg-primary-50 text-primary-700",
    success: "bg-green-50 text-success",
    error: "bg-red-50 text-error",
    warning: "bg-amber-50 text-amber-700",
    outline:
      "border border-[color:var(--border-subtle)] text-[color:var(--muted)] bg-[color:var(--bg-elevated)]",
  };

  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        styles[variant],
        className,
      )}
      {...props}
    />
  );
}

