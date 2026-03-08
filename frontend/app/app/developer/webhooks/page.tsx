import { Button } from "@/components/atoms/Button";
import { Badge } from "@/components/atoms/Badge";

const webhooks = [
  { url: "https://api.startup.com/postaci/events", events: "email.opened, clicked", status: "Aktif" },
];

export default function WebhooksPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-lg font-semibold tracking-tight">Webhooklar</h1>
          <p className="text-xs text-[color:var(--muted)]">
            PostaCI olaylarını (sent, opened, clicked, unsubscribed) gerçek zamanlı olarak kendi sistemine ilet.
          </p>
        </div>
        <Button>Webhook ekle</Button>
      </div>

      <div className="card divide-y divide-[color:var(--border-subtle)]">
        {webhooks.map((wh) => (
          <div key={wh.url} className="flex items-center justify-between px-4 py-3 text-sm">
            <div>
              <p className="font-medium text-[color:var(--fg)]">{wh.url}</p>
              <p className="text-xs text-[color:var(--muted)]">{wh.events}</p>
            </div>
            <Badge variant="success">{wh.status}</Badge>
          </div>
        ))}
      </div>
    </div>
  );
}

