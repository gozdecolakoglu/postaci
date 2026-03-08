"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/atoms/Button";
import { Input } from "@/components/atoms/Input";
import { useToast } from "@/components/feedback/ToastProvider";

export default function RegisterPage() {
  const router = useRouter();
  const { push } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    push({
      variant: "success",
      title: "Hesap oluşturuldu",
      description:
        "Demo ortamında mail doğrulaması atlanarak doğrudan dashboard ekranına yönlendiriliyorsun.",
    });
    router.push("/app/dashboard");
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

