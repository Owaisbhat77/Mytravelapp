import SectionTitle from "../../components/SectionTitle";

const packages = [
  {
    title: "Luxury Kashmir Grandeur",
    nights: "7 Nights / 8 Days",
    highlights: [
      "5-star boutique stays",
      "Private sightseeing",
      "Exclusive culinary experiences",
    ],
  },
  {
    title: "Romantic Lakeside Escape",
    nights: "4 Nights / 5 Days",
    highlights: ["Houseboat suite", "Shikara sunset cruise", "Private garden dinner"],
  },
  {
    title: "Adventure & Culture Mix",
    nights: "6 Nights / 7 Days",
    highlights: ["Guided treks", "Heritage village tour", "Luxury camp stay"],
  },
];

export default function PackagesPage() {
  return (
    <section className="section-spacing bg-slate-50">
      <div className="mx-auto max-w-5xl px-6">
        <SectionTitle eyebrow="Packages" title="Premium itineraries designed for every traveler." />
        <div className="mt-12 grid gap-6">
          {packages.map((item) => (
            <div key={item.title} className="rounded-3xl bg-white p-8 shadow-soft">
              <div className="flex flex-col justify-between gap-4 md:flex-row">
                <div>
                  <h3 className="font-display text-2xl text-midnight">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-500">{item.nights}</p>
                </div>
                <button className="h-fit rounded-full bg-midnight px-6 py-2 text-sm font-semibold text-white">
                  Request quote
                </button>
              </div>
              <ul className="mt-6 grid gap-3 text-sm text-slate-600 md:grid-cols-3">
                {item.highlights.map((highlight) => (
                  <li key={highlight}>• {highlight}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
