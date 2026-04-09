import Link from "next/link";
import { Button } from "@/components/atoms/Button";

export default function MarketingHomePage() {
  return (
    <main className="layout-container flex min-h-screen items-center justify-center px-4">
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-10 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary-100 bg-primary-50 px-4 py-1 text-xs font-medium text-primary-700 shadow-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-success" />
          <span>Yeni nesil Email Marketing Stüdyosu</span>
        </div>
        <div className="space-y-6">
          <h1 className="text-balance text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            PostaCI ile kampanyalarınızı <span className="text-primary-600">planla</span>,{" "}
            <span className="text-primary-600">otomatikleştir</span> ve{" "}
            <span className="text-primary-600">ölç</span>.
          </h1>
          <p className="mx-auto max-w-2xl text-sm text-[color:var(--muted)]">
            Satış ekipleri için tasarlanmış modern, minimal ve performans odaklı
            email marketing & marketing automation platformu. Hesap bazlı pazarlama,
            kurumsal ekip yapısı ve detaylı raporlama tek yerde.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link href="/auth/register">
            <Button size="lg">Hemen Ücretsiz Dene</Button>
          </Link>
          <Link href="/auth/login">
            <Button size="lg" variant="secondary">
              Zaten hesabım var
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}

