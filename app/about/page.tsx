import SectionTitle from "../../components/SectionTitle";
import { experiences, stats } from "../../lib/site-data";

export default function AboutPage() {
  return (
    <section className="section-spacing">
      <div className="mx-auto max-w-5xl px-6">
        <SectionTitle
          eyebrow="About Advelux"
          title="A premium travel studio built on local knowledge and global standards."
          subtitle="We craft bespoke itineraries, curate luxury stays, and deliver seamless travel coordination across Kashmir."
        />
        <div className="mt-10 grid gap-8 md:grid-cols-[1.4fr_1fr]">
          <div className="space-y-4 text-sm text-slate-600">
            <p>
              Founded by destination specialists, Advelux Journeys blends Kashmir's rich culture with luxury hospitality.
              Our on-ground concierge team manages every detail, from private airport transfers to curated culinary
              evenings.
            </p>
            <p>
              We collaborate with boutique hotels, heritage houseboats, and expert guides to deliver experiences that are
              immersive, safe, and unforgettable. Every itinerary is customised to your pace, preferences, and group
              size.
            </p>
          </div>
          <div className="rounded-3xl bg-slate-50 p-8 shadow-soft">
            <h3 className="font-display text-xl text-slate-900">At a glance</h3>
            <div className="mt-6 space-y-4">
              {stats.map((item) => (
                <div key={item.label} className="flex items-center justify-between text-sm">
                  <span className="text-slate-500">{item.label}</span>
                  <span className="font-semibold text-slate-900">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-16">
          <SectionTitle eyebrow="Signature Experiences" title="Luxury travel, curated with heart." />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {experiences.map((item) => (
              <div key={item.title} className="rounded-3xl bg-white p-6 shadow-soft">
                <h3 className="font-display text-xl text-slate-900">{item.title}</h3>
                <p className="mt-3 text-sm text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
