import { Input } from "@/components/atoms/Input";
import { Button } from "@/components/atoms/Button";

export default function AccountSettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-lg font-semibold tracking-tight">Hesap ayarları</h1>
        <p className="text-xs text-[color:var(--muted)]">
          Organizasyon adı, domain ayarları ve fatura bilgilerini yapılandır.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="card space-y-4 p-4">
          <h2 className="text-sm font-semibold">Organizasyon</h2>
          <Input label="Şirket adı" defaultValue="Beta Ajans" />
          <Input label="Gönderim domaini" defaultValue="mg.betaajans.com" />
          <Button size="sm">Kaydet</Button>
        </div>
        <div className="card space-y-4 p-4">
          <h2 className="text-sm font-semibold">Bildirimler</h2>
          <p className="text-xs text-[color:var(--muted)]">
            Gönderim hataları, kota uyarıları ve rapor özetleri için email bildirim
            tercihlerini yönet.
          </p>
        </div>
      </div>
    </div>
  );
}

