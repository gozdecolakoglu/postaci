import { Badge } from "@/components/atoms/Badge";

const integrations = [
  { name: "Shopify", category: "E‑commerce", status: "Bağlı değil" },
  { name: "Salesforce", category: "CRM", status: "Bağlı değil" },
  { name: "HubSpot", category: "CRM", status: "Bağlı" },
];

export default function IntegrationsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-lg font-semibold tracking-tight">Entegrasyonlar</h1>
        <p className="text-xs text-[color:var(--muted)]">
          E‑ticaret platformları, CRM ve diğer sistemlerle native entegrasyonlar.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {integrations.map((int) => (
          <div key={int.name} className="card p-4 text-sm">
            <p className="text-xs text-[color:var(--muted)]">{int.category}</p>
            <p className="mt-1 text-sm font-semibold text-[color:var(--fg)]">
              {int.name}
            </p>
            <div className="mt-3 flex items-center justify-between">
              <Badge
                variant={int.status === "Bağlı" ? "success" : "outline"}
              >
                {int.status}
              </Badge>
              <button className="text-xs font-medium text-primary-600 hover:text-primary-700">
                Yapılandır
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

