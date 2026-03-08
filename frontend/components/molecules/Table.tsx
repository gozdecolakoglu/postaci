import clsx from "classnames";
import type { ReactNode } from "react";

export interface TableColumn<T> {
  id: string;
  header: string;
  accessor: (row: T) => ReactNode;
  width?: string;
}

interface TableProps<T> {
  columns: TableColumn<T>[];
  data: T[];
  emptyMessage?: string;
}

export function Table<T>({ columns, data, emptyMessage }: TableProps<T>) {
  return (
    <div className="overflow-hidden rounded-xl border border-[color:var(--border-subtle)] bg-[color:var(--bg-elevated)] shadow-card">
      <table className="min-w-full border-collapse text-sm">
        <thead className="bg-slate-50/80 dark:bg-slate-900/40">
          <tr>
            {columns.map((col) => (
              <th
                key={col.id}
                className={clsx(
                  "px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500",
                  col.width && `w-[${col.width}]`,
                )}
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td
                className="px-4 py-6 text-center text-sm text-[color:var(--muted)]"
                colSpan={columns.length}
              >
                {emptyMessage || "Kayıt bulunamadı."}
              </td>
            </tr>
          ) : (
            data.map((row, idx) => (
              <tr
                key={idx}
                className="border-t border-[color:var(--border-subtle)] hover:bg-slate-50/80 dark:hover:bg-slate-900/40"
              >
                {columns.map((col) => (
                  <td key={col.id} className="px-4 py-3 align-middle text-sm">
                    {col.accessor(row)}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

