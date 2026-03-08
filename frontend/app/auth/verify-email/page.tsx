"use client";

import { Button } from "@/components/atoms/Button";
import { useRouter } from "next/navigation";

export default function VerifyEmailPage() {
  const router = useRouter();

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-xl font-semibold tracking-tight">Email adresini doğrula</h2>
        <p className="text-sm text-[color:var(--muted)]">
          Güvenli bir deneyim için hesabına gönderdiğimiz doğrulama linkine tıkla. Bu
          demo ortamında doğrulama adımını atlayabilirsin.
        </p>
      </div>
      <div className="space-y-3 text-sm">
        <p>
          <span className="font-medium">1.</span> Gelen kutunda{" "}
          <span className="font-mono text-primary-600">verify@postaci.app</span>{" "}
          adresinden gelen maili bul.
        </p>
        <p>
          <span className="font-medium">2.</span> &ldquo;Email adresini doğrula&rdquo;
          butonuna tıkla.
        </p>
      </div>
      <Button
        className="w-full"
        size="lg"
        onClick={() => router.push("/app/dashboard")}
      >
        Demo için devam et
      </Button>
    </div>
  );
}

