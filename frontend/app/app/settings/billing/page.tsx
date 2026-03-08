import { Badge } from "@/components/atoms/Badge";
import { Button } from "@/components/atoms/Button";

export default function BillingPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-lg font-semibold tracking-tight">
            Faturalandırma & Plan
          </h1>
          <p className="text-xs text-[color:var(--muted)]">
            Mevcut planını görüntüle, kota kullanımını takip et ve üst pakete geç.
          </p>
        </div>
        <Button>Plan yükselt</Button>
      </div>

      <div className="card flex flex-wrap items-center justify-between gap-4 p-4">
        <div>
          <p className="text-xs text-[color:var(--muted)]">Mevcut plan</p>
          <p className="mt-1 text-sm font-semibold text-[color:var(--fg)]">
            Pro – Aylık
          </p>
          <p className="mt-1 text-xs text-[color:var(--muted)]">
            50.000 email / ay • Sınırsız kullanıcı • Gelişmiş otomasyon
          </p>
        </div>
        <div className="flex flex-col items-end gap-2 text-xs">
          <Badge variant="success">Aktif</Badge>
          <p className="text-[color:var(--muted)]">
            Bir sonraki yenileme: 08 Nisan 2026
          </p>
        </div>
      </div>
    </div>
  );
}

