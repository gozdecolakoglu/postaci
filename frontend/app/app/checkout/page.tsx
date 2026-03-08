import { Button } from "@/components/atoms/Button";
import { Input } from "@/components/atoms/Input";

export default function CheckoutPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-lg font-semibold tracking-tight">Ödeme</h1>
        <p className="text-xs text-[color:var(--muted)]">
          Kart bilgilerini girerek planını aktive et. Güvenli 3D Secure alt yapısı.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-[minmax(0,1.2fr),minmax(0,0.8fr)]">
        <div className="card space-y-4 p-4">
          <h2 className="text-sm font-semibold">Kart bilgileri</h2>
          <Input label="Kart üzerindeki isim" placeholder="Berk Aksoy" />
          <Input label="Kart numarası" placeholder="4242 4242 4242 4242" />
          <div className="grid grid-cols-2 gap-3">
            <Input label="Son kullanma" placeholder="12 / 28" />
            <Input label="CVC" placeholder="123" />
          </div>
          <Button className="w-full">Ödemeyi tamamla</Button>
        </div>
        <div className="card space-y-3 p-4 text-sm">
          <h2 className="text-sm font-semibold">Sipariş özeti</h2>
          <p className="text-xs text-[color:var(--muted)]">
            Pro – Aylık plan • 50.000 email / ay
          </p>
          <div className="flex items-center justify-between text-xs">
            <span>Aylık ücret</span>
            <span>1.890₺</span>
          </div>
          <div className="flex items-center justify-between text-xs">
            <span>KDV (%20)</span>
            <span>378₺</span>
          </div>
          <div className="mt-2 flex items-center justify-between border-t border-[color:var(--border-subtle)] pt-2 text-xs font-semibold">
            <span>Toplam</span>
            <span>2.268₺</span>
          </div>
        </div>
      </div>
    </div>
  );
}

