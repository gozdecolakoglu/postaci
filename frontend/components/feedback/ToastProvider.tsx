"use client";

import { CheckCircle2, Info } from "lucide-react";
import type { ReactNode } from "react";
import { createContext, useContext, useState } from "react";

type ToastVariant = "success" | "error" | "info";

interface Toast {
  id: number;
  title: string;
  description?: string;
  variant: ToastVariant;
}

interface ToastContextValue {
  push: (toast: Omit<Toast, "id">) => void;
}

const ToastContext = createContext<ToastContextValue | undefined>(undefined);

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const push = (toast: Omit<Toast, "id">) => {
    setToasts((prev) => [
      ...prev,
      { ...toast, id: Date.now() + Math.random() },
    ]);
    setTimeout(() => {
      setToasts((prev) => prev.slice(1));
    }, 3500);
  };

  return (
    <ToastContext.Provider value={{ push }}>
      {children}
      <div className="pointer-events-none fixed right-4 top-4 z-50 flex w-80 flex-col gap-3">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className="pointer-events-auto flex items-start gap-2 rounded-xl bg-[color:var(--bg-elevated)] px-4 py-3 text-sm shadow-card border border-[color:var(--border-subtle)]"
          >
            <span>
              {toast.variant === "success" && (
                <CheckCircle2 className="h-4 w-4 text-success" />
              )}
              {toast.variant === "error" && (
                <Info className="h-4 w-4 text-error" />
              )}
              {toast.variant === "info" && (
                <Info className="h-4 w-4 text-primary-600" />
              )}
            </span>
            <div>
              <p className="font-medium text-[color:var(--fg)]">
                {toast.title}
              </p>
              {toast.description && (
                <p className="mt-1 text-xs text-[color:var(--muted)]">
                  {toast.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) {
    throw new Error("useToast must be used within ToastProvider");
  }
  return ctx;
}

