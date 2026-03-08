import { Button } from "@/components/atoms/Button";
import { Badge } from "@/components/atoms/Badge";

const keys = [
  { name: "Prod – website formu", lastUsed: "2 dk önce", status: "Aktif" },
  { name: "Test – staging", lastUsed: "3 gün önce", status: "Aktif" },
];

export default function ApiKeysPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-lg font-semibold tracking-tight">API Key Yönetimi</h1>
          <p className="text-xs text-[color:var(--muted)]">
            Uygulaman için okuma / yazma yetkileri olan API keyler oluştur.
          </p>
        </div>
        <Button>Yeni API key oluştur</Button>
      </div>

      <div className="card divide-y divide-[color:var(--border-subtle)]">
        {keys.map((key) => (
          <div
            key={key.name}
            className="flex items-center justify-between px-4 py-3 text-sm"
          >
            <div>
              <p className="font-medium text-[color:var(--fg)]">{key.name}</p>
              <p className="text-xs text-[color:var(--muted)]">
                Son kullanım: {key.lastUsed}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Badge variant="outline">{key.status}</Badge>
              <Button size="sm" variant="ghost">
                Kopyala
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

