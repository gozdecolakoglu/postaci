"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/atoms/Button";
import { Input } from "@/components/atoms/Input";
import { Badge } from "@/components/atoms/Badge";
import { Table } from "@/components/molecules/Table";
import { Modal } from "@/components/molecules/Modal";
import { apiGet, apiPost } from "@/lib/api";
import { useToast } from "@/components/feedback/ToastProvider";

interface ContactRow {
  id: string;
  email: string;
  firstName?: string | null;
  lastName?: string | null;
  status: string;
}

export default function ContactsPage() {
  const { push } = useToast();
  const [contacts, setContacts] = useState<ContactRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const load = async () => {
      try {
        const data = await apiGet<ContactRow[]>("/contacts");
        setContacts(data);
      } catch (error) {
        console.error(error);
        push({
          variant: "error",
          title: "Kişiler yüklenemedi",
          description: "Şimdilik örnek veriler gösteriliyor.",
        });
        setContacts([
          {
            id: "1",
            email: "ayse.kara@kurumsal.com",
            firstName: "Ayşe",
            lastName: "Kara",
            status: "ACTIVE",
          },
        ]);
      } finally {
        setLoading(false);
      }
    };

    void load();
  }, [push]);

  const handleCreate = async () => {
    if (!email) {
      push({
        variant: "error",
        title: "Email zorunlu",
        description: "Yeni kişi eklemek için en az email adresi girmelisin.",
      });
      return;
    }

    try {
      const created = await apiPost<ContactRow>("/contacts", {
        email,
        firstName,
        lastName,
      });
      setContacts((prev) => [created, ...prev]);
      setModalOpen(false);
      setFirstName("");
      setLastName("");
      setEmail("");
      push({
        variant: "success",
        title: "Kişi eklendi",
        description: "Yeni kişi başarıyla listeye eklendi.",
      });
    } catch (error) {
      console.error(error);
      push({
        variant: "error",
        title: "Kişi eklenemedi",
        description: "Lütfen daha sonra tekrar dene.",
      });
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-lg font-semibold tracking-tight">Kişiler & Listeler</h1>
          <p className="text-xs text-[color:var(--muted)]">
            Kişi listelerini yönet, segmentler oluştur ve KVKK onay geçmişini takip et.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Button variant="secondary">CSV import</Button>
          <Button onClick={() => setModalOpen(true)}>Yeni kişi ekle</Button>
        </div>
      </div>

      <div className="card flex flex-wrap items-center gap-3 px-4 py-3">
        <div className="flex-1 min-w-[220px]">
          <Input placeholder="İsim, email veya şirket ara…" />
        </div>
        <div className="flex items-center gap-2 text-xs">
          <Button variant="ghost" size="sm">
            Segment filtreleri
          </Button>
          <Button variant="ghost" size="sm">
            Tag filtreleri
          </Button>
        </div>
      </div>

      <Table
        columns={[
          {
            id: "name",
            header: "Kişi",
            accessor: (row) => {
              const c = row as ContactRow;
              const fullName =
                [c.firstName, c.lastName].filter(Boolean).join(" ") || "İsimsiz kişi";
              return (
                <div>
                  <p className="text-sm font-medium text-[color:var(--fg)]">
                    {fullName}
                  </p>
                  <p className="text-[11px] text-[color:var(--muted)]">{c.email}</p>
                </div>
              );
            },
          },
          {
            id: "status",
            header: "Durum",
            accessor: (row) => {
              const c = row as ContactRow;
              const label =
                c.status === "ACTIVE"
                  ? "Aktif"
                  : c.status === "UNSUBSCRIBED"
                  ? "Unsubscribed"
                  : "Bounced";
              return <Badge variant="success">{label}</Badge>;
            },
          },
        ]}
        data={contacts}
        emptyMessage={loading ? "Yükleniyor..." : "Henüz kişi eklenmedi."}
      />

      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Yeni kişi ekle"
        description="Email adresi zorunludur, diğer bilgiler opsiyoneldir."
        primaryAction={{
          label: "Kişiyi oluştur",
          onClick: handleCreate,
        }}
      >
        <div className="space-y-3">
          <Input
            label="Ad"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <Input
            label="Soyad"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <Input
            label="Email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </Modal>
    </div>
  );
}

