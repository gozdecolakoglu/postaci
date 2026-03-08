import clsx from "classnames";
import type { InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  hint?: string;
  error?: string;
}

export function Input({ label, hint, error, className, ...props }: InputProps) {
  return (
    <label className="flex flex-col gap-1 text-sm">
      {label && <span className="font-medium text-slate-700 dark:text-slate-200">{label}</span>}
      <input
        className={clsx(
          "h-10 rounded-xl border px-3 text-sm bg-[color:var(--bg-elevated)] text-[color:var(--fg)] outline-none transition",
          "placeholder:text-[color:var(--muted)]",
          "focus:ring-2 focus:ring-primary-500 focus:border-primary-500",
          error && "border-error focus:ring-error",
          className,
        )}
        {...props}
      />
      {error ? (
        <span className="text-xs text-error">{error}</span>
      ) : hint ? (
        <span className="text-xs text-[color:var(--muted)]">{hint}</span>
      ) : null}
    </label>
  );
}

