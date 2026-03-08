import { Badge } from "@/components/atoms/Badge";
import { Button } from "@/components/atoms/Button";

export default function AnalyticsDashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-lg font-semibold tracking-tight">
            Raporlama & Analitik
          </h1>
          <p className="text-xs text-[color:var(--muted)]">
            Tüm kampanyalar, otomasyonlar ve listeler için performans metrikleri.
          </p>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <Button variant="secondary" size="sm">
            CSV olarak dışa aktar
          </Button>
          <Button size="sm">PDF rapor oluştur</Button>
        </div>
      </div>

      <section className="grid gap-4 md:grid-cols-4">
        <div className="card p-4">
          <p className="text-xs text-[color:var(--muted)]">Toplam gönderim</p>
          <p className="mt-2 text-xl font-semibold">48.230</p>
        </div>
        <div className="card p-4">
          <p className="text-xs text-[color:var(--muted)]">Ortalama open rate</p>
          <p className="mt-2 text-xl font-semibold">36,8%</p>
        </div>
        <div className="card p-4">
          <p className="text-xs text-[color:var(--muted)]">Ortalama click rate</p>
          <p className="mt-2 text-xl font-semibold">9,4%</p>
        </div>
        <div className="card p-4">
          <p className="text-xs text-[color:var(--muted)]">Aktif otomasyon</p>
          <p className="mt-2 text-xl font-semibold">7</p>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-[minmax(0,1.2fr),minmax(0,0.8fr)]">
        <div className="card p-4">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-semibold">Kampanya performansı</h2>
            <Badge variant="outline">Son 90 gün</Badge>
          </div>
          <div className="mt-4 h-52 rounded-xl bg-gradient-to-br from-primary-50 via-slate-50 to-slate-100 dark:from-slate-900 dark:via-slate-900 dark:to-slate-900" />
        </div>
        <div className="space-y-4">
          <div className="card p-4">
            <h2 className="text-sm font-semibold">Device breakdown</h2>
            <p className="mt-3 text-xs text-[color:var(--muted)]">
              Masaüstü • %62 — Mobil • %34 — Tablet • %4
            </p>
          </div>
          <div className="card p-4">
            <h2 className="text-sm font-semibold">Lokasyon haritası</h2>
            <div className="mt-3 h-32 rounded-xl bg-slate-100 dark:bg-slate-900" />
          </div>
        </div>
      </section>
    </div>
  );
}

