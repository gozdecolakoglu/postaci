import { Badge } from "@/components/atoms/Badge";
import { Button } from "@/components/atoms/Button";
import { Input } from "@/components/atoms/Input";
import { Tabs } from "@/components/atoms/Tabs";

export default function DesignSystemPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between gap-3">
        <div>
          <h1 className="text-lg font-semibold tracking-tight">Design System</h1>
          <p className="text-xs text-[color:var(--muted)]">
            Renk paleti, tipografi, buton / form / tablo bileşenleri ve diğer UI
            pattern&apos;leri.
          </p>
        </div>
        <Tabs
          items={[
            { id: "light", label: "Light" },
            { id: "dark", label: "Dark" },
          ]}
        />
      </div>

      <section className="grid gap-4 md:grid-cols-3">
        <div className="card p-4">
          <h2 className="text-sm font-semibold">Renkler</h2>
          <div className="mt-3 grid grid-cols-3 gap-3 text-xs">
            <div>
              <div className="h-10 rounded-xl bg-primary-600" />
              <p className="mt-1 font-medium">Primary</p>
              <p className="text-[11px] text-[color:var(--muted)]">#2563EB</p>
            </div>
            <div>
              <div className="h-10 rounded-xl bg-navy-700" />
              <p className="mt-1 font-medium">Navy</p>
              <p className="text-[11px] text-[color:var(--muted)]">#0f172a</p>
            </div>
            <div>
              <div className="h-10 rounded-xl bg-success" />
              <p className="mt-1 font-medium">Success</p>
            </div>
          </div>
        </div>
        <div className="card p-4">
          <h2 className="text-sm font-semibold">Typography</h2>
          <p className="mt-3 text-xs text-[color:var(--muted)]">Font: Inter</p>
          <p className="mt-3 text-lg font-semibold">H1 – 24 px / Semibold</p>
          <p className="mt-1 text-sm">
            Body – 14 px / Regular, 1.6 satır aralığı ile geniş okuma alanı.
          </p>
        </div>
        <div className="card p-4">
          <h2 className="text-sm font-semibold">Badge & Tag</h2>
          <div className="mt-3 flex flex-wrap gap-2 text-xs">
            <Badge>Default</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="error">Error</Badge>
            <Badge variant="outline">Outline</Badge>
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-[minmax(0,1.3fr),minmax(0,0.7fr)]">
        <div className="card space-y-4 p-4">
          <h2 className="text-sm font-semibold">Buttons</h2>
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <Button>Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="danger">Danger</Button>
          </div>
        </div>
        <div className="card space-y-4 p-4">
          <h2 className="text-sm font-semibold">Form Inputs</h2>
          <Input label="Label" placeholder="Placeholder" hint="Yardım metni" />
        </div>
      </section>
    </div>
  );
}

