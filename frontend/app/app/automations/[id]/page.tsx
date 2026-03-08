import { Button } from "@/components/atoms/Button";

export default function AutomationBuilderPage() {
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-lg font-semibold tracking-tight">
            Workflow: Deneme → Aktivasyon
          </h1>
          <p className="text-xs text-[color:var(--muted)]">
            Trigger, koşul (if/else), email gönderim node&apos;ları, delay ve split
            test bloklarını node‑based canvas üzerinde düzenle.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="secondary">Taslak olarak kaydet</Button>
          <Button>Workflow&apos;u aktif et</Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-[minmax(0,1.2fr),minmax(0,0.8fr)]">
        <section className="card relative h-[460px] overflow-hidden bg-slate-50 dark:bg-slate-950">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#e2e8f0_1px,transparent_0)] bg-[length:24px_24px] opacity-70 dark:bg-[radial-gradient(circle_at_1px_1px,#1f2937_1px,transparent_0)]" />
          <div className="relative flex h-full items-center justify-center">
            <div className="flex flex-col items-center gap-6">
              <div className="rounded-2xl bg-white px-4 py-3 text-xs shadow-card">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-primary-600">
                  Trigger
                </p>
                <p className="mt-1 text-sm font-semibold text-slate-900">
                  Listeye eklendiğinde
                </p>
                <p className="mt-1 text-[11px] text-slate-500">
                  &ldquo;Deneme kullanıcıları&rdquo; listesine giren yeni kişiler
                  workflow&apos;a alınır.
                </p>
              </div>
              <div className="flex items-start gap-8">
                <div className="rounded-2xl bg-white px-4 py-3 text-xs shadow-card">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                    Delay
                  </p>
                  <p className="mt-1 text-sm font-semibold text-slate-900">
                    1 gün bekle
                  </p>
                </div>
                <div className="rounded-2xl bg-white px-4 py-3 text-xs shadow-card">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-primary-600">
                    Email
                  </p>
                  <p className="mt-1 text-sm font-semibold text-slate-900">
                    Aktivasyon – ilk adım
                  </p>
                </div>
                <div className="rounded-2xl bg-white px-4 py-3 text-xs shadow-card">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-emerald-600">
                    If / Else
                  </p>
                  <p className="mt-1 text-sm font-semibold text-slate-900">
                    Son 3 gün içinde tıkladı mı?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <aside className="card flex flex-col gap-4 p-4 text-xs">
          <h2 className="text-sm font-semibold">Node ayarları</h2>
          <div>
            <p className="text-[11px] font-medium text-[color:var(--muted)]">
              Seçili node
            </p>
            <p className="mt-1 text-sm font-semibold text-[color:var(--fg)]">
              Email: Aktivasyon – ilk adım
            </p>
          </div>
          <div>
            <p className="text-[11px] font-medium text-[color:var(--muted)]">
              Gönderim ayarları
            </p>
            <p className="mt-1">
              Gönderen: Berk • PostaCI{" "}
              <span className="text-[color:var(--muted)]">
                &lt;berk@postaci.app&gt;
              </span>
            </p>
          </div>
          <div>
            <p className="text-[11px] font-medium text-[color:var(--muted)]">
              Split test
            </p>
            <p className="mt-1">
              %50 A / %50 B • konu satırı varyasyonu • kazanan metrik: click rate
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}

