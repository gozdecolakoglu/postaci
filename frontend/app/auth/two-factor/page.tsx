"use client";

import { Button } from "@/components/atoms/Button";
import { Input } from "@/components/atoms/Input";
import { useRouter } from "next/navigation";

export default function TwoFactorPage() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/app/dashboard");
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-xl font-semibold tracking-tight">2FA doğrulaması</h2>
        <p className="text-sm text-[color:var(--muted)]">
          Authenticator uygulaman veya SMS ile gelen 6 haneli kodu girerek oturumunu
          tamamla.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          label="6 haneli kod"
          inputMode="numeric"
          pattern="[0-9]*"
          maxLength={6}
          required
          placeholder="••••••"
        />
        <Button type="submit" className="w-full" size="lg">
          Giriş yap
        </Button>
      </form>
      <p className="text-xs text-[color:var(--muted)]">
        Cihazını kaybettin mi? Admin veya owner rolündeki bir ekip arkadaşından
        yardım isteyebilirsin.
      </p>
    </div>
  );
}

