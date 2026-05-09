export default function PricingTable({
  plans,
}: {
  plans: {
    name: string;
    price: string;
    description: string;
    features: string[];
    highlight?: boolean;
  }[];
}) {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {plans.map((plan) => (
        <div
          key={plan.name}
          className={`rounded-3xl border p-8 shadow-soft ${
            plan.highlight ? "border-emerald-400 bg-emerald-50" : "border-slate-100 bg-white"
          }`}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-emerald-500">{plan.name}</p>
          <h3 className="mt-4 font-display text-3xl text-slate-900">{plan.price}</h3>
          <p className="mt-3 text-sm text-slate-600">{plan.description}</p>
          <ul className="mt-6 space-y-2 text-sm text-slate-600">
            {plan.features.map((feature) => (
              <li key={feature}>• {feature}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
