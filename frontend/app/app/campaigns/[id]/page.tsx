import { Badge } from "@/components/atoms/Badge";
import { Button } from "@/components/atoms/Button";

export default function CampaignDetailPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-lg font-semibold tracking-tight">
            Q1 Kurumsal Lansman
          </h1>
          <p className="text-xs text-[color:var(--muted)]">
            Gönderildi • 12.300 alıcı • 41,2% open • 11,3% click
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="success">Tamamlandı</Badge>
          <Button variant="secondary">Tekrar gönder</Button>
          <Button>Benzer kampanya oluştur</Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <div className="card p-4">
          <p className="text-xs text-[color:var(--muted)]">Open rate</p>
          <p className="mt-2 text-xl font-semibold">41,2%</p>
        </div>
        <div className="card p-4">
          <p className="text-xs text-[color:var(--muted)]">Click rate</p>
          <p className="mt-2 text-xl font-semibold">11,3%</p>
        </div>
        <div className="card p-4">
          <p className="text-xs text-[color:var(--muted)]">Unsubscribe</p>
          <p className="mt-2 text-xl font-semibold">0,4%</p>
        </div>
        <div className="card p-4">
          <p className="text-xs text-[color:var(--muted)]">Spam raporu</p>
          <p className="mt-2 text-xl font-semibold">0,02%</p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-[minmax(0,1.2fr),minmax(0,0.8fr)]">
        <div className="card p-4">
          <h2 className="text-sm font-semibold">Zaman içi performans</h2>
          <div className="mt-4 h-52 rounded-xl bg-gradient-to-br from-primary-50 via-slate-50 to-slate-100 dark:from-slate-900 dark:via-slate-900 dark:to-slate-900" />
        </div>
        <div className="space-y-4">
          <div className="card p-4">
            <h2 className="text-sm font-semibold">Cihaz kırılımı</h2>
            <p className="mt-3 text-xs text-[color:var(--muted)]">
              Masaüstü: %62 • Mobil: %34 • Tablet: %4
            </p>
          </div>
          <div className="card p-4">
            <h2 className="text-sm font-semibold">Lokasyon</h2>
            <div className="mt-3 h-32 rounded-xl bg-slate-100 dark:bg-slate-900" />
          </div>
        </div>
      </div>
    </div>
  );
}

