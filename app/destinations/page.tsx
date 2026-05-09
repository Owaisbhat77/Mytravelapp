import SectionTitle from "../../components/SectionTitle";
import { destinations } from "../../lib/site-data";

export default function DestinationsPage() {
  return (
    <section className="section-spacing bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle
          eyebrow="Destinations"
          title="Explore Kashmir's most iconic landscapes with local experts."
          subtitle="From lakeside serenity to alpine adventures, every stop is designed for comfort."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {destinations.map((item) => (
            <div key={item.name} className="rounded-3xl border border-slate-100 bg-slate-50 p-8 shadow-soft">
              <h3 className="font-display text-2xl text-slate-900">{item.name}</h3>
              <p className="mt-3 text-sm text-slate-600">{item.description}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-500">
                {item.highlights.map((highlight) => (
                  <li key={highlight}>• {highlight}</li>
                ))}
              </ul>
              <p className="mt-6 text-xs uppercase tracking-[0.35em] text-emerald-500">Best season</p>
              <p className="mt-2 text-sm text-slate-600">{item.season}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
