import clsx from "classnames";

interface BadgeDotProps {
  color?: "success" | "error" | "warning" | "muted";
}

export function BadgeDot({ color = "muted" }: BadgeDotProps) {
  const map = {
    success: "bg-success",
    error: "bg-error",
    warning: "bg-amber-500",
    muted: "bg-[color:var(--muted)]",
  } as const;

  return (
    <span
      className={clsx(
        "inline-block h-2 w-2 rounded-full shadow-sm",
        map[color],
      )}
    />
  );
}

