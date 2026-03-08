import { Input } from "@/components/atoms/Input";
import { Button } from "@/components/atoms/Button";

export default function ProfileSettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-lg font-semibold tracking-tight">Profil</h1>
        <p className="text-xs text-[color:var(--muted)]">
          Kişisel bilgilerini, bildirim tercihlerini ve 2FA ayarlarını yönet.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="card space-y-4 p-4">
          <h2 className="text-sm font-semibold">Kişisel bilgiler</h2>
          <Input label="Ad Soyad" defaultValue="Berk Aksoy" />
          <Input label="Email" defaultValue="berk@postaci.app" />
          <Button size="sm">Kaydet</Button>
        </div>
        <div className="card space-y-4 p-4">
          <h2 className="text-sm font-semibold">Güvenlik</h2>
          <p className="text-xs text-[color:var(--muted)]">
            İki faktörlü kimlik doğrulama ve aktif oturumlarını yönet.
          </p>
        </div>
      </div>
    </div>
  );
}

