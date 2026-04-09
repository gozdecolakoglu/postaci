import { Button } from "@/components/atoms/Button";
import { Badge } from "@/components/atoms/Badge";
import { Table } from "@/components/molecules/Table";

const kpiCards = [
  { label: "Toplam Gönderim", value: "48.230", trend: "+18%", tone: "up" },
  { label: "Open Rate", value: "38,4%", trend: "+4,1pt", tone: "up" },
  { label: "Click Rate", value: "9,6%", trend: "+1,3pt", tone: "up" },
  { label: "Aktif Subscriber", value: "12.540", trend: "+620", tone: "up" },
];

const lastCampaigns = [
  {
    name: "Q1 Kurumsal Lansman",
    status: "Tamamlandı",
    sent: "12.300",
    openRate: "41,2%",
    clickRate: "11,3%",
  },
  {
    name: "Deneme • Ücretsiz Kullanıcı Aktivasyonu",
    status: "Devam ediyor",
    sent: "4.110",
    openRate: "35,8%",
    clickRate: "8,9%",
  },
];

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-lg font-semibold tracking-tight">
            Genel görünüm
          </h1>
          <p className="text-xs text-[color:var(--muted)]">
            Son 30 gündeki gönderimler, etkileşimler ve aktif kampanyalar.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Button variant="secondary">Kişi listesi oluştur</Button>
          <Button>Yeni kampanya başlat</Button>
        </div>
      </div>

      <section className="grid gap-4 md:grid-cols-4">
        {kpiCards.map((kpi) => (
          <div key={kpi.label} className="card px-4 py-3">
            <p className="text-xs font-medium text-[color:var(--muted)]">
              {kpi.label}
            </p>
            <p className="mt-3 text-xl font-semibold text-[color:var(--fg)]">
              {kpi.value}
            </p>
            <p className="mt-1 text-xs text-success">{kpi.trend} vs. önceki dönem</p>
          </div>
        ))}
      </section>

      <section className="grid gap-4 md:grid-cols-[minmax(0,1.2fr),minmax(0,0.8fr)]">
        <div className="card p-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-sm font-semibold">Performans eğrisi</h2>
              <p className="text-xs text-[color:var(--muted)]">
                Gönderim, açılma ve tıklanma trendleri
              </p>
            </div>
            <Badge variant="outline">Son 30 gün</Badge>
          </div>
          <div className="mt-4 h-44 rounded-xl bg-gradient-to-br from-primary-50 via-slate-50 to-slate-100 dark:from-slate-900 dark:via-slate-900 dark:to-slate-900" />
        </div>

        <div className="card flex flex-col p-4">
          <h2 className="text-sm font-semibold">Aktivite akışı</h2>
          <p className="text-xs text-[color:var(--muted)]">
            Son oluşturulan kampanyalar, workflow ve import işlemleri.
          </p>
          <div className="mt-4 space-y-3 text-xs">
            <div className="flex gap-3">
              <span className="mt-1 h-6 w-6 rounded-full bg-primary-100 text-[11px] font-semibold text-primary-700 flex items-center justify-center">
                M
              </span>
              <div>
                <p className="font-medium text-[color:var(--fg)]">
                  &ldquo;Kurumsal onboarding&rdquo; otomasyonu aktive edildi
                </p>
                <p className="text-[11px] text-[color:var(--muted)]">
                  12 dk önce • Berk Aksoy
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="mt-1 h-6 w-6 rounded-full bg-emerald-100 text-[11px] font-semibold text-emerald-700 flex items-center justify-center">
                L
              </span>
              <div>
                <p className="font-medium text-[color:var(--fg)]">
                  &ldquo;ABM – Finans Direktörleri&rdquo; segmentine 245 kişi eklendi
                </p>
                <p className="text-[11px] text-[color:var(--muted)]">
                  35 dk önce • CSV import
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-semibold">Son kampanyalar</h2>
          <Button variant="ghost" size="sm">
            Tüm kampanyaları görüntüle
          </Button>
        </div>
        <Table
          columns={[
            {
              id: "name",
              header: "Kampanya",
              accessor: (row) => (
                <div>
                  <p className="text-sm font-medium text-[color:var(--fg)]">
                    {(row as (typeof lastCampaigns)[number]).name}
                  </p>
                  <p className="text-[11px] text-[color:var(--muted)]">
                    aktivasyon • 14 Şubat 2026
                  </p>
                </div>
              ),
            },
            {
              id: "sent",
              header: "Gönderilen",
              accessor: (row) => (row as (typeof lastCampaigns)[number]).sent,
            },
            {
              id: "open",
              header: "Open rate",
              accessor: (row) => (row as (typeof lastCampaigns)[number]).openRate,
            },
            {
              id: "click",
              header: "Click rate",
              accessor: (row) => (row as (typeof lastCampaigns)[number]).clickRate,
            },
            {
              id: "status",
              header: "Durum",
              accessor: (row) => (
                <Badge variant="success">
                  {(row as (typeof lastCampaigns)[number]).status}
                </Badge>
              ),
            },
          ]}
          data={lastCampaigns}
          emptyMessage="Henüz kampanya oluşturulmadı."
        />
      </section>
    </div>
  );
}

