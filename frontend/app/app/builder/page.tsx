import { Button } from "@/components/atoms/Button";

export default function EmailBuilderPage() {
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-lg font-semibold tracking-tight">
            Email Tasarım Builder
          </h1>
          <p className="text-xs text-[color:var(--muted)]">
            Sol blok paneli, orta canvas ve sağ ayar paneli ile sürükle‑bırak email
            şablonları oluştur.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="secondary">Mobil önizleme</Button>
          <Button>Kaydet</Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-[260px,minmax(0,1fr),280px]">
        <aside className="card flex flex-col gap-3 p-3 text-xs">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[color:var(--muted)]">
            Bloklar
          </p>
          <button className="rounded-xl border border-dashed border-[color:var(--border-subtle)] bg-slate-50 px-3 py-2 text-left hover:border-primary-200 hover:bg-primary-50">
            <p className="text-sm font-medium text-[color:var(--fg)]">Text</p>
            <p className="text-[11px] text-[color:var(--muted)]">
              Paragraf, başlık ve liste blokları
            </p>
          </button>
          <button className="rounded-xl border border-dashed border-[color:var(--border-subtle)] bg-slate-50 px-3 py-2 text-left hover:border-primary-200 hover:bg-primary-50">
            <p className="text-sm font-medium text-[color:var(--fg)]">Image</p>
            <p className="text-[11px] text-[color:var(--muted)]">
              Görsel ve logo blokları
            </p>
          </button>
          <button className="rounded-xl border border-dashed border-[color:var(--border-subtle)] bg-slate-50 px-3 py-2 text-left hover:border-primary-200 hover:bg-primary-50">
            <p className="text-sm font-medium text-[color:var(--fg)]">Button</p>
            <p className="text-[11px] text-[color:var(--muted)]">
              CTA butonları ve linkler
            </p>
          </button>
          <button className="rounded-xl border border-dashed border-[color:var(--border-subtle)] bg-slate-50 px-3 py-2 text-left hover:border-primary-200 hover:bg-primary-50">
            <p className="text-sm font-medium text-[color:var(--fg)]">Divider</p>
            <p className="text-[11px] text-[color:var(--muted)]">
              Bölücü çizgiler
            </p>
          </button>
          <button className="rounded-xl border border-dashed border-[color:var(--border-subtle)] bg-slate-50 px-3 py-2 text-left hover:border-primary-200 hover:bg-primary-50">
            <p className="text-sm font-medium text-[color:var(--fg)]">Product card</p>
            <p className="text-[11px] text-[color:var(--muted)]">
              E‑ticaret ürün kartları
            </p>
          </button>
        </aside>

        <section className="card flex flex-col items-center justify-center bg-slate-50/80 py-6 dark:bg-slate-900/40">
          <div className="w-full max-w-[520px] rounded-2xl border border-[color:var(--border-subtle)] bg-white p-6 shadow-card">
            <div className="h-2 w-20 rounded-full bg-slate-200" />
            <div className="mt-6 h-3 w-40 rounded-full bg-slate-200" />
            <div className="mt-3 h-3 w-64 rounded-full bg-slate-200" />
            <div className="mt-6 h-28 rounded-xl bg-slate-200" />
            <div className="mt-6 h-10 w-32 rounded-full bg-primary-500/80" />
          </div>
        </section>

        <aside className="card flex flex-col gap-4 p-4 text-xs">
          <h2 className="text-sm font-semibold">Blok ayarları</h2>
          <div>
            <p className="text-[11px] font-medium text-[color:var(--muted)]">
              Typography
            </p>
            <div className="mt-2 space-y-1">
              <p>Font: Inter</p>
              <p>Size: 14px</p>
              <p>Line height: 1.6</p>
            </div>
          </div>
          <div>
            <p className="text-[11px] font-medium text-[color:var(--muted)]">
              Renkler
            </p>
            <div className="mt-2 flex gap-2">
              <span className="h-6 w-6 rounded-full bg-primary-600" />
              <span className="h-6 w-6 rounded-full bg-slate-900" />
              <span className="h-6 w-6 rounded-full bg-slate-100" />
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

