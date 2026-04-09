import type { ReactNode } from "react";
import "@/app/globals.css";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="layout-container flex min-h-screen items-center justify-center px-4">
      <div className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-10 rounded-3xl bg-[color:var(--bg-elevated)] p-8 shadow-card md:grid-cols-[1.1fr,0.9fr]">
        <div className="flex flex-col justify-between gap-8 border-r border-dashed border-[color:var(--border-subtle)] pr-6">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary-600 text-xs font-bold text-white shadow-card">
                P
              </span>
              <div>
                <p className="text-sm font-semibold tracking-tight text-slate-900">
                  PostaCI
                </p>
                <p className="text-[11px] text-[color:var(--muted)]">
                  Email Marketing & Automation
                </p>
              </div>
            </div>
            <div className="mt-8 space-y-3">
              <h1 className="text-2xl font-semibold tracking-tight">
                Ekipler için premium email stüdyosu
              </h1>
              <p className="text-sm text-[color:var(--muted)]">
                Hesap bazlı pazarlama, otomasyon ve detaylı raporlama için modern bir
                arayüz. Güvenli oturum açma ve KVKK uyumlu alt yapı.
              </p>
            </div>
          </div>
          <div className="hidden text-[11px] text-[color:var(--muted)] md:block">
            <p>Yatırımcı notu: API‑first altyapı, multi‑tenant organizasyon modeli ve enterprise‑ready güvenlik özellikleri mevcut.</p>
          </div>
        </div>
        <div className="flex flex-col justify-center">{children}</div>
      </div>
    </div>
  );
}

