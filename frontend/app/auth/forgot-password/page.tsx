"use client";

import { Button } from "@/components/atoms/Button";
import { Input } from "@/components/atoms/Input";
import { useToast } from "@/components/feedback/ToastProvider";

export default function ForgotPasswordPage() {
  const { push } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    push({
      variant: "info",
      title: "Şifre sıfırlama maili gönderildi",
      description:
        "Demo ortamında mail gönderimi simüle edilmektedir. Gelen kutunu kontrol et.",
    });
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-xl font-semibold tracking-tight">
          Şifre sıfırlama bağlantısı gönder
        </h2>
        <p className="text-sm text-[color:var(--muted)]">
          Hesabına kayıtlı email adresini gir, sana tek kullanımlık bir bağlantı
          gönderelim.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          label="Kurumsal email"
          type="email"
          required
          placeholder="sen@startup.com"
        />
        <Button type="submit" className="w-full" size="lg">
          Bağlantı gönder
        </Button>
      </form>
    </div>
  );
}

