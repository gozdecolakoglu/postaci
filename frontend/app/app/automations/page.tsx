import { Button } from "@/components/atoms/Button";
import { Badge } from "@/components/atoms/Badge";

const workflows = [
  {
    name: "Deneme → Aktivasyon serisi",
    status: "Aktif",
    trigger: "Listeye eklendiğinde",
    steps: 6,
  },
  {
    name: "Uyuyan hesapları geri kazan",
    status: "Taslak",
    trigger: "Son 90 günde açmayanlar",
    steps: 4,
  },
];

export default function AutomationsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-lg font-semibold tracking-tight">Otomasyon Modülü</h1>
          <p className="text-xs text-[color:var(--muted)]">
            Trigger ve koşullara göre çalışan görsel workflow builder ile otomatik
            seriler oluştur.
          </p>
        </div>
        <Button>Yeni workflow</Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {workflows.map((wf) => (
          <div key={wf.name} className="card p-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-sm font-semibold text-[color:var(--fg)]">
                  {wf.name}
                </h2>
                <p className="text-[11px] text-[color:var(--muted)]">
                  Trigger: {wf.trigger}
                </p>
              </div>
              <Badge variant={wf.status === "Aktif" ? "success" : "outline"}>
                {wf.status}
              </Badge>
            </div>
            <p className="mt-3 text-xs text-[color:var(--muted)]">
              {wf.steps} adım • Email, delay, split test ve update contact action
              bloklarını içeriyor.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

