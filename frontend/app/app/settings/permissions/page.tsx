export default function PermissionsMatrixPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-lg font-semibold tracking-tight">Yetki Matrisi</h1>
        <p className="text-xs text-[color:var(--muted)]">
          Owner, Admin, Editor ve Viewer rollerinin hangi modüllere erişimi olduğunu
          tablo üzerinde yönet.
        </p>
      </div>
      <div className="card p-4">
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse text-xs">
            <thead>
              <tr>
                <th className="px-3 py-2 text-left font-semibold text-[color:var(--muted)]">
                  Modül
                </th>
                {["Owner", "Admin", "Editor", "Viewer"].map((role) => (
                  <th
                    key={role}
                    className="px-3 py-2 text-center font-semibold text-[color:var(--muted)]"
                  >
                    {role}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                "Kampanyalar",
                "Otomasyon",
                "Kişiler & Listeler",
                "Raporlama",
                "Faturalandırma",
                "API & Entegrasyonlar",
              ].map((module) => (
                <tr key={module} className="border-t border-[color:var(--border-subtle)]">
                  <td className="px-3 py-2 text-sm">{module}</td>
                  {Array.from({ length: 4 }).map((_, idx) => (
                    <td key={idx} className="px-3 py-2 text-center">
                      <span className="inline-flex h-4 w-4 items-center justify-center rounded border border-[color:var(--border-subtle)] bg-primary-50 text-[10px] text-primary-700">
                        ✓
                      </span>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

