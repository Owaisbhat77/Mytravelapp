import SectionTitle from "../../components/SectionTitle";
import { faqs } from "../../lib/site-data";

export default function FaqsPage() {
  return (
    <section className="section-spacing bg-slate-50">
      <div className="mx-auto max-w-4xl px-6">
        <SectionTitle
          eyebrow="FAQs"
          title="Answers to the most common questions."
          subtitle="Reach out for anything not covered here."
        />
        <div className="mt-10 space-y-6">
          {faqs.map((item) => (
            <div key={item.question} className="rounded-3xl bg-white p-8 shadow-soft">
              <h3 className="font-display text-xl text-slate-900">{item.question}</h3>
              <p className="mt-3 text-sm text-slate-600">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
