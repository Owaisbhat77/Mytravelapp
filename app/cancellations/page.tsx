import SectionTitle from "../../components/SectionTitle";

export default function CancellationsPage() {
  return (
    <section className="section-spacing bg-white">
      <div className="mx-auto max-w-4xl px-6">
        <SectionTitle
          eyebrow="Cancellations policy"
          title="Clear and fair cancellation guidelines."
          subtitle="We recommend confirming dates before making payments."
        />
        <div className="mt-10 space-y-4 rounded-3xl bg-slate-50 p-8 text-sm text-slate-600 shadow-soft">
          <p>• 30+ days before travel: 90% refund after service fees.</p>
          <p>• 15–29 days before travel: 70% refund after service fees.</p>
          <p>• 7–14 days before travel: 50% refund after service fees.</p>
          <p>• Within 7 days: non-refundable (trip preparation costs are incurred).</p>
          <p>
            Certain premium stays and experiences may have stricter cancellation rules. Final cancellation terms are
            shared on your invoice.
          </p>
        </div>
      </div>
    </section>
  );
}
