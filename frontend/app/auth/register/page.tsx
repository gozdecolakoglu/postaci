"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/atoms/Button";
import { Input } from "@/components/atoms/Input";
import { useToast } from "@/components/feedback/ToastProvider";

export default function RegisterPage() {
  const router = useRouter();
  const { push } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Kayıt sırasında bir hata oluştu");
      }

      // Token'i sakla (Basit demo için localStorage, gerçek projede cookie önerilir)
      localStorage.setItem("token", result.token);

      push({
        variant: "success",
        title: "Hesap oluşturuldu",
        description: "Dashboard ekranına yönlendiriliyorsun.",
      });

      router.push("/app/dashboard");
    } catch (error: any) {
      push({
        variant: "error",
        title: "Kayıt Başarısız",
        description: error.message,
      });
    }
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-xl font-semibold tracking-tight">
          PostaCI&apos;ya hoş geldin
        </h2>
        <p className="text-sm text-[color:var(--muted)]">
          Takımın için yeni bir organizasyon oluştur ve ilk kampanyanı birkaç dakika
          içinde gönder.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input label="Ad Soyad" required placeholder="Berk Aksoy" />
        <Input
          label="Kurumsal email"
          type="email"
          required
          placeholder="sen@startup.com"
        />
        <Input label="Şirket adı" required placeholder="Beta Ajans" />
        <Input label="Şifre" type="password" required placeholder="En az 8 karakter" />
        <Button type="submit" className="w-full" size="lg">
          Hesap oluştur
        </Button>
      </form>
      <p className="text-xs text-[color:var(--muted)]">
        Zaten hesabın var mı?{" "}
        <Link
          href="/auth/login"
          className="font-medium text-primary-600 hover:text-primary-700"
        >
          Giriş yap
        </Link>
      </p>
    </div>
  );
}

