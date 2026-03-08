"use client";

import { Badge } from "@/components/atoms/Badge";
import { Button } from "@/components/atoms/Button";
import { Modal } from "@/components/molecules/Modal";
import { useEffect, useState } from "react";
import { apiGet, apiPatch } from "@/lib/api";
import { useToast } from "@/components/feedback/ToastProvider";

type Role = "OWNER" | "ADMIN" | "EDITOR" | "VIEWER";

interface MemberRow {
  id: string; // membershipId
  role: Role;
  user: {
    id: string;
    email: string;
    fullName: string;
  };
}

export default function UsersSettingsPage() {
  const { push } = useToast();
  const [open, setOpen] = useState(false);
  const [members, setMembers] = useState<MemberRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedMember, setSelectedMember] = useState<MemberRow | null>(null);
  const [selectedRole, setSelectedRole] = useState<Role>("EDITOR");

  useEffect(() => {
    const load = async () => {
      try {
        const data = await apiGet<MemberRow[]>("/users");
        setMembers(data);
      } catch (error) {
        console.error(error);
        push({
          variant: "error",
          title: "Kullanıcılar yüklenemedi",
          description: "Örnek kullanıcı listesi gösteriliyor.",
        });
        setMembers([
          {
            id: "demo",
            role: "OWNER",
            user: {
              id: "1",
              email: "demo@postaci.app",
              fullName: "Demo Kullanıcı",
            },
          },
        ]);
      } finally {
        setLoading(false);
      }
    };

    void load();
  }, [push]);

  const openRoleModal = (member: MemberRow) => {
    setSelectedMember(member);
    setSelectedRole(member.role);
    setOpen(true);
  };

  const updateRole = async () => {
    if (!selectedMember) return;
    try {
      await apiPatch(`/users/${selectedMember.id}/role`, {
        role: selectedRole,
      });
      setMembers((prev) =>
        prev.map((m) =>
          m.id === selectedMember.id ? { ...m, role: selectedRole } : m,
        ),
      );
      push({
        variant: "success",
        title: "Rol güncellendi",
        description: `${selectedMember.user.fullName} için rol ${selectedRole} olarak ayarlandı.`,
      });
      setOpen(false);
    } catch (error) {
      console.error(error);
      push({
        variant: "error",
        title: "Rol güncellenemedi",
        description: "Lütfen daha sonra tekrar dene.",
      });
    }
  };

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
            key={m.id}
            className="flex items-center justify-between px-4 py-3 text-sm"
          >
            <div>
              <p className="font-medium text-[color:var(--fg)]">
                {m.user.fullName}
              </p>
              <p className="text-xs text-[color:var(--muted)]">
                {m.user.email}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Badge variant="outline">{m.role}</Badge>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => openRoleModal(m)}
              >
                Rolü değiştir
              </Button>
            </div>
          </div>
        ))}
        {members.length === 0 && !loading && (
          <div className="px-4 py-3 text-xs text-[color:var(--muted)]">
            Henüz ekip üyesi eklenmemiş.
          </div>
        )}
      </div>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title={selectedMember ? "Rolü düzenle" : "Yeni kullanıcı davet et"}
        description={
          selectedMember
            ? "Bu kullanıcının organizasyon içindeki rolünü güncelle."
            : "Kullanıcıya ait emaili gir, rolünü seç ve davet linkini ilet."
        }
        primaryAction={{
          label: selectedMember ? "Rolü güncelle" : "Davet gönder",
          onClick: selectedMember ? updateRole : () => setOpen(false),
        }}
      >
        {selectedMember ? (
          <div className="space-y-3 text-xs">
            <p className="text-[color:var(--muted)]">
              {selectedMember.user.fullName} ({selectedMember.user.email}) için yeni rol
              seç.
            </p>
            <div className="flex flex-wrap gap-2">
              {(["OWNER", "ADMIN", "EDITOR", "VIEWER"] as Role[]).map((role) => (
                <button
                  key={role}
                  onClick={() => setSelectedRole(role)}
                  className={`rounded-xl border px-3 py-1 text-xs ${
                    selectedRole === role
                      ? "border-primary-500 bg-primary-50 text-primary-700"
                      : "border-[color:var(--border-subtle)] text-[color:var(--muted)]"
                  }`}
                >
                  {role}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <p className="text-xs text-[color:var(--muted)]">
            Bu ekran bir rol atama modalı ve yetki matrisinin bir parçası olarak görev
            yapar.
          </p>
        )}
      </Modal>
    </div>
  );
}

