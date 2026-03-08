"use client";

import { X } from "lucide-react";
import type { ReactNode } from "react";
import { Button } from "@/components/atoms/Button";

interface ModalProps {
  open: boolean;
  title: string;
  description?: string;
  onClose: () => void;
  children: ReactNode;
  primaryAction?: {
    label: string;
    onClick: () => void;
    tone?: "primary" | "danger";
  };
}

export function Modal({
  open,
  title,
  description,
  onClose,
  children,
  primaryAction,
}: ModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-slate-950/40 backdrop-blur-sm">
      <div className="card w-full max-w-lg">
        <div className="flex items-start justify-between border-b border-[color:var(--border-subtle)] px-5 py-4">
          <div>
            <h2 className="text-sm font-semibold text-[color:var(--fg)]">
              {title}
            </h2>
            {description && (
              <p className="mt-1 text-xs text-[color:var(--muted)]">
                {description}
              </p>
            )}
          </div>
          <button
            className="rounded-full p-1 text-[color:var(--muted)] hover:bg-slate-100 dark:hover:bg-slate-800"
            onClick={onClose}
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <div className="px-5 py-4 text-sm">{children}</div>
        <div className="flex items-center justify-end gap-2 border-t border-[color:var(--border-subtle)] px-5 py-3">
          <Button variant="ghost" size="sm" onClick={onClose}>
            İptal
          </Button>
          {primaryAction && (
            <Button
              size="sm"
              variant={primaryAction.tone === "danger" ? "danger" : "primary"}
              onClick={primaryAction.onClick}
            >
              {primaryAction.label}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

