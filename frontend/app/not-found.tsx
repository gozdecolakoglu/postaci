import Link from "next/link";
import { Button } from "@/components/atoms/Button";

export default function NotFound() {
  return (
    <main className="layout-container flex min-h-screen items-center justify-center px-4">
      <div className="card flex max-w-md flex-col items-center gap-4 p-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary-600">
          404 • Sayfa bulunamadı
        </p>
        <p className="text-sm text-[color:var(--muted)]">
          Aradığın sayfa taşınmış veya hiç var olmamış olabilir. Navigasyon menüsünü
          kullanarak devam edebilirsin.
        </p>
        <Link href="/app/dashboard">
          <Button>Dashboard&apos;a dön</Button>
        </Link>
      </div>
    </main>
  );
}

