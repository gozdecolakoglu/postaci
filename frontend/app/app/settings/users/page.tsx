"use client";

import { Badge } from "@/components/atoms/Badge";
import { Button } from "@/components/atoms/Button";
import { Modal } from "@/components/molecules/Modal";
import { useState } from "react";

const members = [
  { name: "Berk Aksoy", email: "berk@postaci.app", role: "Owner" },
  { name: "Ece Yılmaz", email: "ece@postaci.app", role: "Admin" },
  { name: "Ali K.", email: "ali@agency.com", role: "Editor" },
];

export default function UsersSettingsPage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-lg font-semibold tracking-tight">
            Kullanıcı & Organizasyon Yönetimi
          </h1>
          <p className="text-xs text-[color:var(--muted)]">
            Ekip arkadaşlarını davet et, roller ata ve yetkileri yönet.
          </p>
        </div>
        <Button onClick={() => setOpen(true)}>Kullanıcı davet et</Button>
      </div>

      <div className="card divide-y divide-[color:var(--border-subtle)]">
        {members.map((m) => (
          <div
            key={m.email}
            className="flex items-center justify-between px-4 py-3 text-sm"
          >
            <div>
              <p className="font-medium text-[color:var(--fg)]">{m.name}</p>
              <p className="text-xs text-[color:var(--muted)]">{m.email}</p>
            </div>
            <div className="flex items-center gap-3">
              <Badge variant="outline">{m.role}</Badge>
              <Button size="sm" variant="ghost">
                Rolü değiştir
              </Button>
            </div>
          </div>
        ))}
      </div>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title="Yeni kullanıcı davet et"
        description="Kullanıcıya ait emaili gir, rolünü seç ve davet linkini ilet."
        primaryAction={{
          label: "Davet gönder",
          onClick: () => setOpen(false),
        }}
      >
        <p className="text-xs text-[color:var(--muted)]">
          Bu ekran bir rol atama modalı ve yetki matrisinin bir parçası olarak görev
          yapar.
        </p>
      </Modal>
    </div>
  );
}

