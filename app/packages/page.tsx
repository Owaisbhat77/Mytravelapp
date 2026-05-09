import SectionTitle from "../../components/SectionTitle";
import { packages } from "../../lib/site-data";
import Button from "../../components/Button";

export default function PackagesPage() {
  return (
    <section className="section-spacing bg-slate-50">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle
          eyebrow="Packages"
          title="Premium itineraries designed for couples, families, and executive groups."
          subtitle="Each package can be customised with extra nights, upgrades, and special moments."
        />
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {packages.map((item) => (
            <div key={item.title} className="hover-lift rounded-3xl bg-white p-8 shadow-soft">
              <p className="text-xs uppercase tracking-[0.3em] text-emerald-500">{item.nights}</p>
              <h3 className="mt-4 font-display text-2xl text-slate-900">{item.title}</h3>
              <p className="mt-3 text-sm text-slate-600">{item.summary}</p>
              <ul className="mt-6 space-y-2 text-sm text-slate-500">
                {item.highlights.map((highlight) => (
                  <li key={highlight}>• {highlight}</li>
                ))}
              </ul>
              <div className="mt-6 text-lg font-semibold text-slate-900">{item.price}</div>
              <Button href="/contact" className="mt-6 w-full">
                Request itinerary
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
