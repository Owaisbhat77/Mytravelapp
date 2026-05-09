import SectionTitle from "../../components/SectionTitle";
import { destinations } from "../../lib/site-data";
import Image from "next/image";

export default function DestinationsPage() {
  return (
    <section className="section-spacing bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle
          eyebrow="Destinations"
          title="The most beautiful places to visit in Kashmir."
          subtitle="Inspired by the region's iconic routes with enhanced comfort and premium service."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {destinations.map((item) => (
            <div key={item.name} className="hover-lift overflow-hidden rounded-3xl bg-slate-50 shadow-soft">
              <div className="relative h-56">
                <Image src={item.image} alt={item.name} fill className="object-cover" />
              </div>
              <div className="p-8">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
