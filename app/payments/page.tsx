import SectionTitle from "../../components/SectionTitle";

export default function PaymentsPage() {
  return (
    <section className="section-spacing bg-white">
      <div className="mx-auto max-w-4xl px-6">
        <SectionTitle
          eyebrow="Payments"
          title="Secure, transparent, and flexible payment options."
          subtitle="We offer bank transfer, UPI, and card payments for premium travel planning."
        />
        <div className="mt-10 space-y-6 rounded-3xl bg-slate-50 p-8 text-sm text-slate-600 shadow-soft">
          <p>
            After confirming your itinerary, our concierge team shares an official invoice with payment links and bank
            details. You can choose the method that is most convenient for you.
          </p>
          <ul className="space-y-2">
            <li>• UPI payments (UPI ID shared on invoice)</li>
            <li>• Debit/Credit card via secure gateway</li>
            <li>• Bank transfer for corporate bookings</li>
          </ul>
          <p>
            For any payment assistance, reach out at <strong>owaissbhatt7@gmail.com</strong> or call
            <strong> 6005721569</strong>.
          </p>
        </div>
      </div>
    </section>
  );
}
