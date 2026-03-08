import { Button } from "@/components/atoms/Button";
import { Input } from "@/components/atoms/Input";
import { Badge } from "@/components/atoms/Badge";
import { Table } from "@/components/molecules/Table";

const contacts = [
  {
    name: "Ayşe Kara",
    email: "ayse.kara@kurumsal.com",
    company: "Beta Ajans",
    status: "Aktif",
    tags: ["ABM", "Finance"],
  },
  {
    name: "Mehmet Demir",
    email: "mehmet.demir@holding.com",
    company: "Delta Holding",
    status: "Aktif",
    tags: ["Enterprise"],
  },
];

export default function ContactsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-lg font-semibold tracking-tight">Kişiler & Listeler</h1>
          <p className="text-xs text-[color:var(--muted)]">
            Kişi listelerini yönet, segmentler oluştur ve KVKK onay geçmişini takip et.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Button variant="secondary">CSV import</Button>
          <Button>Yeni kişi ekle</Button>
        </div>
      </div>

      <div className="card flex flex-wrap items-center gap-3 px-4 py-3">
        <div className="flex-1 min-w-[220px]">
          <Input placeholder="İsim, email veya şirket ara…" />
        </div>
        <div className="flex items-center gap-2 text-xs">
          <Button variant="ghost" size="sm">
            Segment filtreleri
          </Button>
          <Button variant="ghost" size="sm">
            Tag filtreleri
          </Button>
        </div>
      </div>

      <Table
        columns={[
          {
            id: "name",
            header: "Kişi",
            accessor: (row) => (
              <div>
                <p className="text-sm font-medium text-[color:var(--fg)]">
                  {(row as (typeof contacts)[number]).name}
                </p>
                <p className="text-[11px] text-[color:var(--muted)]">
                  {(row as (typeof contacts)[number]).email}
                </p>
              </div>
            ),
          },
          {
            id: "company",
            header: "Şirket",
            accessor: (row) => (row as (typeof contacts)[number]).company,
          },
          {
            id: "tags",
            header: "Tagler",
            accessor: (row) => (
              <div className="flex flex-wrap gap-1">
                {(row as (typeof contacts)[number]).tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            ),
          },
          {
            id: "status",
            header: "Durum",
            accessor: (row) => (
              <Badge variant="success">
                {(row as (typeof contacts)[number]).status}
              </Badge>
            ),
          },
        ]}
        data={contacts}
        emptyMessage="Henüz kişi eklenmedi."
      />
    </div>
  );
}

