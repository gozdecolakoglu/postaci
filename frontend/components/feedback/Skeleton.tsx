import clsx from "classnames";
import type { HTMLAttributes } from "react";

interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  rounded?: "sm" | "md" | "xl" | "full";
}

export function Skeleton({ className, rounded = "md", ...props }: SkeletonProps) {
  const radius = {
    sm: "rounded-md",
    md: "rounded-lg",
    xl: "rounded-xl",
    full: "rounded-full",
  }[rounded];

  return (
    <div
      className={clsx(
        "animate-pulse bg-slate-200/70 dark:bg-slate-700/60",
        radius,
        className,
      )}
      {...props}
    />
  );
}

