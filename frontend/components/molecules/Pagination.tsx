"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/atoms/Button";

interface PaginationProps {
  page: number;
  pageCount: number;
  onPageChange: (page: number) => void;
}

export function Pagination({ page, pageCount, onPageChange }: PaginationProps) {
  const canPrev = page > 1;
  const canNext = page < pageCount;

  return (
    <div className="flex items-center justify-between gap-4 py-3 text-xs text-[color:var(--muted)]">
      <span>
        Sayfa {page} / {pageCount}
      </span>
      <div className="flex items-center gap-2">
        <Button
          size="sm"
          variant="ghost"
          iconLeft={<ChevronLeft className="h-3 w-3" />}
          disabled={!canPrev}
          onClick={() => canPrev && onPageChange(page - 1)}
        >
          Önceki
        </Button>
        <Button
          size="sm"
          variant="ghost"
          iconRight={<ChevronRight className="h-3 w-3" />}
          disabled={!canNext}
          onClick={() => canNext && onPageChange(page + 1)}
        >
          Sonraki
        </Button>
      </div>
    </div>
  );
}

