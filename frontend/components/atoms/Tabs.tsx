"use client";

import clsx from "classnames";
import type { ReactNode } from "react";
import { useState } from "react";

export interface TabItem {
  id: string;
  label: string;
}

interface TabsProps {
  items: TabItem[];
  defaultActiveId?: string;
  onChange?: (id: string) => void;
}

export function Tabs({ items, defaultActiveId, onChange }: TabsProps) {
  const [active, setActive] = useState<string>(
    defaultActiveId || (items.length ? items[0].id : ""),
  );

  const handleClick = (id: string) => {
    setActive(id);
    onChange?.(id);
  };

  return (
    <div className="inline-flex rounded-xl border border-[color:var(--border-subtle)] bg-[color:var(--bg-elevated)] p-1 text-xs">
      {items.map((item) => (
        <button
          key={item.id}
          onClick={() => handleClick(item.id)}
          className={clsx(
            "px-3 py-1.5 rounded-lg font-medium transition",
            active === item.id
              ? "bg-primary-600 text-white shadow-sm"
              : "text-[color:var(--muted)] hover:bg-primary-50",
          )}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}

