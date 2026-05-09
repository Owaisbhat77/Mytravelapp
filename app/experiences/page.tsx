import SectionTitle from "../../components/SectionTitle";
import { experiences } from "../../lib/site-data";

export default function ExperiencesPage() {
  return (
    <section className="section-spacing">
      <div className="mx-auto max-w-5xl px-6">
        <SectionTitle
          eyebrow="Experiences"
          title="Moments that connect you to Kashmir's soul."
          subtitle="Private guides, handcrafted itineraries, and exclusive access."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {experiences.map((item) => (
            <div key={item.title} className="rounded-3xl bg-white p-8 shadow-soft">
              <h3 className="font-display text-2xl text-slate-900">{item.title}</h3>
              <p className="mt-3 text-sm text-slate-600">{item.description}</p>
              <p className="mt-5 text-xs uppercase tracking-[0.35em] text-emerald-500">Ideal for</p>
              <p className="mt-2 text-sm text-slate-600">{item.idealFor}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
