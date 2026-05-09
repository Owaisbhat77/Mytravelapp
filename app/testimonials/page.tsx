import SectionTitle from "../../components/SectionTitle";
import { testimonials } from "../../lib/site-data";

export default function TestimonialsPage() {
  return (
    <section className="section-spacing">
      <div className="mx-auto max-w-5xl px-6">
        <SectionTitle
          eyebrow="Testimonials"
          title="The voices of travelers who trusted Advelux."
          subtitle="Every story reflects premium service and unforgettable moments."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {testimonials.map((item) => (
            <div key={item.name} className="rounded-3xl bg-white p-8 shadow-soft">
              <p className="text-sm text-slate-600">“{item.quote}”</p>
              <p className="mt-6 text-sm font-semibold text-slate-900">{item.name}</p>
              <p className="text-xs uppercase tracking-[0.3em] text-emerald-500">{item.trip}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
