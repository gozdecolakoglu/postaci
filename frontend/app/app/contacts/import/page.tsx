import { Button } from "@/components/atoms/Button";
import { Input } from "@/components/atoms/Input";

export default function ContactsImportPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-3">
        <div>
          <h1 className="text-lg font-semibold tracking-tight">CSV Import</h1>
          <p className="text-xs text-[color:var(--muted)]">
            CSV dosyandaki alanları PostaCI kişi alanları ile eşleştir.
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-[minmax(0,1.1fr),minmax(0,0.9fr)]">
        <div className="card p-4 space-y-4">
          <h2 className="text-sm font-semibold">1. Dosyayı yükle</h2>
          <Input type="file" />
          <p className="text-[11px] text-[color:var(--muted)]">
            UTF‑8 kodlu, ilk satırda kolon başlıkları bulunan CSV dosyaları
            desteklenir.
          </p>
        </div>
        <div className="card p-4 space-y-4">
          <h2 className="text-sm font-semibold">2. Alan eşleştirme</h2>
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div>
              <p className="font-medium text-[color:var(--fg)]">CSV: email</p>
              <p className="text-[color:var(--muted)]">PostaCI alanı: Email</p>
            </div>
            <div>
              <p className="font-medium text-[color:var(--fg)]">CSV: first_name</p>
              <p className="text-[color:var(--muted)]">PostaCI alanı: Ad</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <p className="text-xs text-[color:var(--muted)]">
          Import sırasında tekrarlanan emailler güncellenir, yeni kayıtlar eklenir.
        </p>
        <div className="flex gap-2">
          <Button variant="ghost" size="sm">
            Geri
          </Button>
          <Button size="sm">Importu başlat</Button>
        </div>
      </div>
    </div>
  );
}

