"use client";

import { Button } from "@/components/atoms/Button";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  console.error(error);

  return (
    <html>
      <body>
        <main className="layout-container flex min-h-screen items-center justify-center px-4">
          <div className="card flex max-w-md flex-col items-center gap-4 p-6 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-error">
              500 • Beklenmeyen hata
            </p>
            <p className="text-sm text-[color:var(--muted)]">
              Bir şeyler ters gitti. Sayfayı yenilemeyi deneyebilirsin; sorun devam
              ederse teknik ekibimize haber ver.
            </p>
            <Button onClick={reset}>Tekrar dene</Button>
          </div>
        </main>
      </body>
    </html>
  );
}

