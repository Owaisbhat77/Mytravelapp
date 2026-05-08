import SectionTitle from "../../components/SectionTitle";

const destinations = [
  {
    name: "Srinagar",
    description: "Lakefront stays, heritage gardens, and unforgettable sunset shikara rides.",
  },
  {
    name: "Gulmarg",
    description: "Snow adventures, alpine golf courses, and luxury ski escapes.",
  },
  {
    name: "Pahalgam",
    description: "Pine forests, riverside resorts, and curated treks.",
  },
  {
    name: "Sonamarg",
    description: "Glacial vistas, meadow picnics, and offbeat trails.",
  },
];

export default function DestinationsPage() {
  return (
    <section className="section-spacing">
      <div className="mx-auto max-w-5xl px-6">
        <SectionTitle eyebrow="Destinations" title="Explore Kashmir's most sought-after escapes." />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {destinations.map((item) => (
            <div key={item.name} className="rounded-3xl border border-slate-100 bg-white p-8 shadow-soft">
              <h3 className="font-display text-2xl text-midnight">{item.name}</h3>
              <p className="mt-3 text-sm text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
