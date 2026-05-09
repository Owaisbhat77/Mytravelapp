import SectionTitle from "../../components/SectionTitle";
import { stays } from "../../lib/site-data";

export default function StaysPage() {
  return (
    <section className="section-spacing bg-slate-50">
      <div className="mx-auto max-w-5xl px-6">
        <SectionTitle
          eyebrow="Luxury stays"
          title="Handpicked boutique hotels and houseboat suites."
          subtitle="We partner with the finest properties to elevate every moment."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {stays.map((stay) => (
            <div key={stay.name} className="rounded-3xl bg-white p-8 shadow-soft">
              <h3 className="font-display text-2xl text-slate-900">{stay.name}</h3>
              <p className="mt-3 text-sm text-slate-600">{stay.description}</p>
              <ul className="mt-5 space-y-2 text-sm text-slate-500">
                {stay.features.map((feature) => (
                  <li key={feature}>• {feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
