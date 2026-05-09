import SectionTitle from "../../components/SectionTitle";
import FAQAccordion from "../../components/FAQAccordion";
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
        <div className="mt-10">
          <FAQAccordion items={faqs} />
        </div>
      </div>
    </section>
  );
}
