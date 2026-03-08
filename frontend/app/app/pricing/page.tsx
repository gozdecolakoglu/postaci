import { Button } from "@/components/atoms/Button";
import { Badge } from "@/components/atoms/Badge";

const plans = [
  {
    name: "Free",
    price: "0₺",
    period: "/ay",
    description: "Başlamak için ideal",
    features: ["2.000 email / ay", "Tek kullanıcı", "Temel raporlama"],
  },
  {
    name: "Basic",
    price: "790₺",
    period: "/ay",
    description: "Büyüyen ekipler",
    highlight: false,
    features: [
      "20.000 email / ay",
      "Sınırsız liste",
      "Segmentleme & Tag yönetimi",
    ],
  },
  {
    name: "Pro",
    price: "1.890₺",
    period: "/ay",
    description: "ABM odaklı B2B ekipler",
    highlight: true,
    features: [
      "50.000 email / ay",
      "Otomasyon workflow builder",
      "Gelişmiş raporlama",
    ],
  },
  {
    name: "Enterprise",
    price: "İletişime geçin",
    period: "",
    description: "Özel ihtiyaçlar",
    features: [
      "Özel SLA",
      "SSO & gelişmiş güvenlik",
      "Özel entegrasyonlar",
    ],
  },
];

export default function PricingPage() {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-3">
        <h1 className="text-2xl font-semibold tracking-tight">
          Şeffaf ve ölçeklenebilir fiyatlandırma
        </h1>
        <p className="text-sm text-[color:var(--muted)] max-w-xl mx-auto">
          Her boyuttan B2B ekip için esnek paketler. Kullanıma göre ölçeklen,
          gereksiz karmaşaya takılma.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`card flex flex-col p-4 text-sm ${
              plan.highlight ? "border-primary-200 shadow-card" : ""
            }`}
          >
            <div className="flex items-center justify-between">
              <p className="text-xs text-[color:var(--muted)]">{plan.description}</p>
              {plan.highlight && <Badge variant="success">En popüler</Badge>}
            </div>
            <p className="mt-3 text-sm font-semibold text-[color:var(--fg)]">
              {plan.name}
            </p>
            <p className="mt-2 text-xl font-semibold">
              {plan.price}
              <span className="text-xs font-normal text-[color:var(--muted)]">
                {plan.period}
              </span>
            </p>
            <ul className="mt-4 flex-1 space-y-2 text-xs text-[color:var(--muted)]">
              {plan.features.map((f) => (
                <li key={f}>• {f}</li>
              ))}
            </ul>
            <Button className="mt-4" size="sm" variant={plan.highlight ? "primary" : "secondary"}>
              Seç ve devam et
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}

