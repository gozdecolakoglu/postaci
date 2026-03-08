"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/atoms/Button";
import { Input } from "@/components/atoms/Input";
import { Tabs } from "@/components/atoms/Tabs";
import { apiPost } from "@/lib/api";
import { useToast } from "@/components/feedback/ToastProvider";

export default function CampaignWizardPage() {
  const router = useRouter();
  const { push } = useToast();

  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [fromName, setFromName] = useState("");
  const [fromEmail, setFromEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleCreate = async () => {
    if (!name || !subject || !fromName || !fromEmail) {
      push({
        variant: "error",
        title: "Eksik bilgi",
        description: "Lütfen tüm temel kampanya alanlarını doldurun.",
      });
      return;
    }

    try {
      setLoading(true);
      const created = await apiPost<{ id: string }>("/campaigns", {
        name,
        subject,
        fromName,
        fromEmail,
      });

      push({
        variant: "success",
        title: "Kampanya oluşturuldu",
        description: "Artık içerik tasarımı ve zamanlama adımlarına geçebilirsin.",
      });
      router.push(`/app/campaigns/${created.id}`);
    } catch (error) {
      console.error(error);
      push({
        variant: "error",
        title: "Kampanya oluşturulamadı",
        description: "Lütfen daha sonra tekrar deneyin.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-3">
        <div>
          <h1 className="text-lg font-semibold tracking-tight">
            Yeni kampanya oluştur
          </h1>
          <p className="text-xs text-[color:var(--muted)]">
            Alıcı listeni seç, içerik tasarla, A/B testleri ekle ve gönderimi planla.
          </p>
        </div>
        <Tabs
          items={[
            { id: "step-1", label: "1. Temel bilgiler" },
            { id: "step-2", label: "2. Hedef kitle" },
            { id: "step-3", label: "3. İçerik" },
            { id: "step-4", label: "4. A/B & Zamanlama" },
          ]}
        />
      </div>

      <div className="grid gap-4 md:grid-cols-[minmax(0,1.2fr),minmax(0,0.8fr)]">
        <div className="card space-y-4 p-4">
          <h2 className="text-sm font-semibold">Temel kampanya bilgileri</h2>
          <Input
            label="Kampanya adı"
            placeholder="Q2 Kurumsal Lansman"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            label="Konu satırı"
            placeholder="Yeni nesil PostaCI lansmanını keşfet"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          <Input
            label="Gönderen isim"
            placeholder="Berk • PostaCI"
            value={fromName}
            onChange={(e) => setFromName(e.target.value)}
          />
          <Input
            label="Gönderen email"
            placeholder="berk@postaci.app"
            value={fromEmail}
            onChange={(e) => setFromEmail(e.target.value)}
          />
        </div>

        <div className="space-y-4">
          <div className="card p-4">
            <h2 className="text-sm font-semibold">Özet</h2>
            <p className="mt-2 text-xs text-[color:var(--muted)]">
              Alıcı listesi, tahmini gönderim sayısı ve AB test konfigürasyonlarını bu
              panelde görebilirsin.
            </p>
          </div>
          <div className="card p-4">
            <h2 className="text-sm font-semibold">A/B test ayarları</h2>
            <p className="mt-2 text-xs text-[color:var(--muted)]">
              Örneğin konu satırını iki varyant ile %20&apos;lik bir test grubunda
              deneyip kazananı tüm listeye gönderebilirsin.
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <Button variant="ghost" size="sm">
          Taslak olarak kaydet
        </Button>
        <div className="flex gap-2">
          <Button variant="secondary" size="sm">
            Önizleme
          </Button>
          <Button size="sm" onClick={handleCreate} disabled={loading}>
            {loading ? "Oluşturuluyor..." : "Kampanyayı oluştur"}
          </Button>
        </div>
      </div>
    </div>
  );
}

