import { cva, type VariantProps } from "class-variance-authority";
import clsx from "classnames";
import type { ButtonHTMLAttributes, ReactNode } from "react";

const buttonStyles = cva(
  "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-500 disabled:opacity-60 disabled:cursor-not-allowed gap-2",
  {
    variants: {
      variant: {
        primary:
          "bg-primary-600 text-white hover:bg-primary-700 shadow-card border border-transparent",
        secondary:
          "bg-[color:var(--bg-elevated)] text-[color:var(--fg)] border border-[color:var(--border-subtle)] hover:bg-primary-50",
        ghost:
          "bg-transparent text-[color:var(--muted)] hover:bg-primary-50 border border-transparent",
        danger:
          "bg-error text-white hover:bg-red-700 shadow-card border border-transparent",
        outline:
          "bg-transparent border border-[color:var(--border-subtle)] text-[color:var(--fg)] hover:bg-primary-50",
      },
      size: {
        sm: "h-8 px-3 text-xs",
        md: "h-9 px-4 text-sm",
        lg: "h-11 px-5 text-sm",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonStyles> {
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
}

export function Button({
  className,
  children,
  iconLeft,
  iconRight,
  variant,
  size,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(buttonStyles({ variant, size }), className)}
      {...props}
    >
      {iconLeft}
      {children}
      {iconRight}
    </button>
  );
}

