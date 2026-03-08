import { Button } from "@/components/atoms/Button";
import { Badge } from "@/components/atoms/Badge";
import { Table } from "@/components/molecules/Table";

const campaigns = [
  {
    name: "Q1 Kurumsal Lansman",
    status: "Gönderildi",
    type: "Kampanya",
    sent: "12.300",
    openRate: "41,2%",
    clickRate: "11,3%",
  },
  {
    name: "Deneme • Aktivasyon Serisi",
    status: "Taslak",
    type: "Otomasyon",
    sent: "—",
    openRate: "—",
    clickRate: "—",
  },
];

export default function CampaignsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-lg font-semibold tracking-tight">Kampanya Yönetimi</h1>
          <p className="text-xs text-[color:var(--muted)]">
            Tüm kampanyalarını, A/B testlerini ve gönderim durumlarını tek ekrandan
            yönet.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Button variant="secondary">Şablonlar</Button>
          <Button>Yeni kampanya oluştur</Button>
        </div>
      </div>

      <Table
        columns={[
          {
            id: "name",
            header: "Kampanya",
            accessor: (row) => (
              <div>
                <p className="text-sm font-medium text-[color:var(--fg)]">
                  {(row as (typeof campaigns)[number]).name}
                </p>
                <p className="text-[11px] text-[color:var(--muted)]">
                  Son güncelleme • 10 Mart 2026
                </p>
              </div>
            ),
          },
          {
            id: "type",
            header: "Tür",
            accessor: (row) => (
              <Badge variant="outline">
                {(row as (typeof campaigns)[number]).type}
              </Badge>
            ),
          },
          {
            id: "sent",
            header: "Gönderilen",
            accessor: (row) => (row as (typeof campaigns)[number]).sent,
          },
          {
            id: "open",
            header: "Open",
            accessor: (row) => (row as (typeof campaigns)[number]).openRate,
          },
          {
            id: "click",
            header: "Click",
            accessor: (row) => (row as (typeof campaigns)[number]).clickRate,
          },
          {
            id: "status",
            header: "Durum",
            accessor: (row) => (
              <Badge variant="success">
                {(row as (typeof campaigns)[number]).status}
              </Badge>
            ),
          },
        ]}
        data={campaigns}
        emptyMessage="Henüz kampanya oluşturulmadı."
      />
    </div>
  );
}

