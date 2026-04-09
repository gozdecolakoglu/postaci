import Link from "next/link";
import { Button } from "@/components/atoms/Button";
import { ArrowLeft } from "lucide-react";

export default function NewCampaignPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4">
        <Link
          href="/app/campaigns"
          className="inline-flex items-center gap-2 text-xs font-medium text-[color:var(--muted)] hover:text-primary-600 transition-colors"
        >
          <ArrowLeft className="h-3 w-3" />
          Kampanyalara Dön
        </Link>

        <div>
          <h1 className="text-lg font-semibold tracking-tight">Yeni Kampanya Oluştur</h1>
          <p className="text-xs text-[color:var(--muted)]">
            Kitlenize göndermek üzere yeni bir e-posta kampanyası tasarlayın.
          </p>
        </div>
      </div>

      <div className="rounded-xl border border-primary-100 bg-white p-12 text-center shadow-sm">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-50 text-primary-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </div>
        <h3 className="mb-2 text-sm font-semibold text-slate-900">
          Kampanya oluşturucu yakında burada olacak
        </h3>
        <p className="mx-auto max-w-xs text-xs text-[color:var(--muted)]">
          Yeni kampanya sihirbazı ve sürükle-bırak editörü üzerinde çalışıyoruz.
        </p>
        <div className="mt-6 flex justify-center">
          <Link href="/app/campaigns">
            <Button variant="secondary">Şimdilik Geri Dön</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
