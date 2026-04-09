"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BarChart3,
  Boxes,
  FolderGit2,
  ListChecks,
  Mail,
  Settings,
  Users,
  Workflow,
  Zap,
  SunMedium,
  MoonStar,
} from "lucide-react";
import type { ReactNode } from "react";
import { useTheme } from "@/components/theme/ThemeProvider";

interface AppShellProps {
  children: ReactNode;
}

const mainNav = [
  { href: "/app/dashboard", label: "Dashboard", icon: BarChart3 },
  { href: "/app/campaigns", label: "Kampanyalar", icon: Mail },
  { href: "/app/automations", label: "Otomasyon", icon: Workflow },
  { href: "/app/contacts", label: "Kişiler & Listeler", icon: Users },
  { href: "/app/analytics", label: "Raporlama", icon: Zap },
];

const secondaryNav = [
  { href: "/app/developer/api-keys", label: "API & Entegrasyonlar", icon: FolderGit2 },
  { href: "/app/settings/users", label: "Kullanıcı & Roller", icon: ListChecks },
  { href: "/app/settings/account", label: "Hesap & Fatura", icon: Settings },
  { href: "/app/design-system", label: "Design System", icon: Boxes },
];

export function AppShell({ children }: AppShellProps) {
  const pathname = usePathname();
  const { theme, toggle } = useTheme();

  return (
    <div className="layout-container flex">
      <aside className="hidden w-64 flex-col border-r border-[color:var(--border-subtle)] bg-[color:var(--bg-elevated)] px-4 py-5 lg:flex">
        <div className="flex items-center justify-between pb-6">
          <Link href="/app/dashboard" className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary-600 text-xs font-bold text-white shadow-card">
              P
            </span>
            <div>
              <p className="text-sm font-semibold tracking-tight">
                PostaCI
              </p>
              <p className="text-[11px] text-[color:var(--muted)]">
                Email Marketing Studio
              </p>
            </div>
          </Link>
        </div>
        <nav className="space-y-6 text-sm">
          <div>
            <p className="mb-2 px-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-[color:var(--muted)]">
              Genel
            </p>
            <ul className="space-y-1">
              {mainNav.map((item) => {
                const Icon = item.icon;
                const active = pathname.startsWith(item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`flex items-center gap-2 rounded-xl px-2.5 py-2 text-sm transition ${active
                          ? "bg-primary-50 text-primary-700 dark:bg-slate-900 dark:text-primary-300"
                          : "text-[color:var(--muted)] hover:bg-slate-100 dark:hover:bg-slate-900"
                        }`}
                    >
                      <Icon className="h-4 w-4" />
                      <span>{item.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <p className="mb-2 px-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-[color:var(--muted)]">
              Yönetim
            </p>
            <ul className="space-y-1">
              {secondaryNav.map((item) => {
                const Icon = item.icon;
                const active = pathname.startsWith(item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`flex items-center gap-2 rounded-xl px-2.5 py-2 text-sm transition ${active
                          ? "bg-primary-50 text-primary-700 dark:bg-slate-900 dark:text-primary-300"
                          : "text-[color:var(--muted)] hover:bg-slate-100 dark:hover:bg-slate-900"
                        }`}
                    >
                      <Icon className="h-4 w-4" />
                      <span>{item.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>
        <div className="mt-auto space-y-4 border-t border-[color:var(--border-subtle)] pt-4 text-xs text-[color:var(--muted)]">
          <button
            onClick={toggle}
            className="flex w-full items-center justify-between rounded-xl border border-[color:var(--border-subtle)] bg-[color:var(--bg)] px-3 py-2 text-xs font-medium"
          >
            <span>Tema</span>
            <span className="flex items-center gap-1">
              {theme === "light" ? (
                <>
                  <SunMedium className="h-3.5 w-3.5" /> <span>Light</span>
                </>
              ) : (
                <>
                  <MoonStar className="h-3.5 w-3.5" /> <span>Dark</span>
                </>
              )}
            </span>
          </button>
          <div className="rounded-xl bg-slate-50 px-3 py-2 text-[11px] dark:bg-slate-900">
            <p className="font-medium text-slate-900 dark:text-slate-100">
              Kurumsal Erişim
            </p>
            <p className="mt-1 text-[11px] text-[color:var(--muted)]">
              Takım arkadaşlarını davet ederek kampanyaları birlikte yönetin.
            </p>
          </div>
        </div>
      </aside>
      <main className="flex min-h-screen flex-1 flex-col">
        <header className="flex items-center justify-between border-b border-[color:var(--border-subtle)] bg-[color:var(--bg-elevated)] px-4 py-3">
          <div className="space-y-0.5">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary-600">
              Email Marketing & Automation
            </p>
            <p className="text-sm text-[color:var(--muted)]">
              Ekipler için performans odaklı posta stüdyosu
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={toggle}
              className="inline-flex items-center justify-center rounded-xl border border-[color:var(--border-subtle)] bg-[color:var(--bg)] p-2 text-[color:var(--muted)] hover:bg-primary-50"
            >
              {theme === "light" ? (
                <SunMedium className="h-4 w-4" />
              ) : (
                <MoonStar className="h-4 w-4" />
              )}
            </button>
            <div className="flex items-center gap-2 rounded-full border border-[color:var(--border-subtle)] bg-[color:var(--bg)] px-3 py-1.5">
              <span className="h-7 w-7 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 text-xs font-semibold text-white flex items-center justify-center">
                BA
              </span>
              <div className="text-xs">
                <p className="font-medium text-[color:var(--fg)]">Beta Ajans</p>
                <p className="text-[10px] text-[color:var(--muted)]">
                  Owner • demo@postaci.app
                </p>
              </div>
            </div>
          </div>
        </header>
        <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-6 px-4 py-6">
          {children}
        </div>
      </main>
    </div>
  );
}

