import { Badge } from "@/components/atoms/Badge";
import { Button } from "@/components/atoms/Button";

export default function ContactDetailPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-lg font-semibold tracking-tight">Ayşe Kara</h1>
          <p className="text-xs text-[color:var(--muted)]">
            ayse.kara@kurumsal.com • Beta Ajans
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="success">Aktif subscriber</Badge>
          <Button variant="secondary">Listeye ekle</Button>
          <Button variant="danger">Unsubscribe</Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-[minmax(0,1.1fr),minmax(0,0.9fr)]">
        <div className="space-y-4">
          <div className="card p-4">
            <h2 className="text-sm font-semibold">Kişi bilgileri</h2>
            <dl className="mt-3 grid grid-cols-2 gap-3 text-xs">
              <div>
                <dt className="text-[color:var(--muted)]">Email</dt>
                <dd className="font-medium text-[color:var(--fg)]">
                  ayse.kara@kurumsal.com
                </dd>
              </div>
              <div>
                <dt className="text-[color:var(--muted)]">Şirket</dt>
                <dd className="font-medium text-[color:var(--fg)]">
                  Beta Ajans
                </dd>
              </div>
              <div>
                <dt className="text-[color:var(--muted)]">Kaynak</dt>
                <dd className="font-medium text-[color:var(--fg)]">
                  Website formu
                </dd>
              </div>
              <div>
                <dt className="text-[color:var(--muted)]">Oluşturulma</dt>
                <dd className="font-medium text-[color:var(--fg)]">
                  12.02.2026 • 14:21
                </dd>
              </div>
            </dl>
          </div>

          <div className="card p-4">
            <h2 className="text-sm font-semibold">Etkinlikler</h2>
            <p className="mt-1 text-xs text-[color:var(--muted)]">
              Açılan mailler, tıklanan linkler ve unsubscribe işlemleri.
            </p>
            <div className="mt-3 space-y-3 text-xs">
              <div className="flex justify-between">
                <p className="font-medium text-[color:var(--fg)]">
                  Q1 Kurumsal Lansman
                </p>
                <p className="text-[color:var(--muted)]">Açıldı • 2 tıklama</p>
              </div>
              <div className="flex justify-between">
                <p className="font-medium text-[color:var(--fg)]">
                  Deneme • Aktivasyon
                </p>
                <p className="text-[color:var(--muted)]">Açıldı • 1 tıklama</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="card p-4">
            <h2 className="text-sm font-semibold">Listeler & Segmentler</h2>
            <div className="mt-3 flex flex-wrap gap-2 text-xs">
              <Badge variant="outline">ABM – Finans Direktörleri</Badge>
              <Badge variant="outline">Deneme kullanıcıları</Badge>
              <Badge variant="outline">Newsletter</Badge>
            </div>
          </div>
          <div className="card p-4">
            <h2 className="text-sm font-semibold">Consent / KVKK geçmişi</h2>
            <div className="mt-3 space-y-3 text-xs">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-medium text-[color:var(--fg)]">
                    Subscribed – ticari ileti izni
                  </p>
                  <p className="text-[11px] text-[color:var(--muted)]">
                    12.02.2026 • 14:21 • IP 185.24.124.21 • Web formu
                  </p>
                </div>
                <Badge variant="success">Geçerli</Badge>
              </div>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-medium text-[color:var(--fg)]">
                    KVKK – Aydınlatma metni onayı
                  </p>
                  <p className="text-[11px] text-[color:var(--muted)]">
                    12.02.2026 • 14:21 • IP 185.24.124.21
                  </p>
                </div>
                <Badge variant="outline">Loglandı</Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

