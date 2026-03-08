"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/atoms/Button";
import { Input } from "@/components/atoms/Input";
import { useToast } from "@/components/feedback/ToastProvider";

export default function LoginPage() {
  const router = useRouter();
  const { push } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    push({
      variant: "success",
      title: "Hoş geldin!",
      description: "Demo için doğrudan dashboard ekranına yönlendiriliyorsun.",
    });
    router.push("/app/dashboard");
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-xl font-semibold tracking-tight">Tekrar hoş geldin</h2>
        <p className="text-sm text-[color:var(--muted)]">
          Hesabına giriş yaparak kampanyalarını yönetmeye devam et.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          label="Kurumsal email"
          type="email"
          required
          placeholder="sen@startup.com"
        />
        <Input label="Şifre" type="password" required placeholder="••••••••" />
        <div className="flex items-center justify-between text-xs">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="h-3 w-3 rounded border-slate-300" />
            <span>Beni hatırla</span>
          </label>
          <Link
            href="/auth/forgot-password"
            className="font-medium text-primary-600 hover:text-primary-700"
          >
            Şifremi unuttum
          </Link>
        </div>
        <Button type="submit" className="w-full" size="lg">
          Giriş yap
        </Button>
      </form>
      <p className="text-xs text-[color:var(--muted)]">
        Hesabın yok mu?{" "}
        <Link
          href="/auth/register"
          className="font-medium text-primary-600 hover:text-primary-700"
        >
          Ücretsiz hesap oluştur
        </Link>
      </p>
    </div>
  );
}

