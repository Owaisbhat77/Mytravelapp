import SectionTitle from "../../components/SectionTitle";

export default function TermsPage() {
  return (
    <section className="section-spacing bg-slate-50">
      <div className="mx-auto max-w-4xl px-6">
        <SectionTitle
          eyebrow="Terms & conditions"
          title="Service terms for premium travel planning."
          subtitle="We aim for clarity, trust, and smooth communication."
        />
        <div className="mt-10 space-y-4 rounded-3xl bg-white p-8 text-sm text-slate-600 shadow-soft">
          <p>
            By confirming your itinerary, you agree to the booking terms, payment schedule, and travel timelines shared by
            our concierge team.
          </p>
          <p>
            All itineraries are customised based on availability, seasonal conditions, and guest preferences. We reserve
            the right to make minor adjustments to improve safety and logistics.
          </p>
          <p>
            Guests are responsible for providing accurate travel documents and sharing any medical or mobility needs in
            advance.
          </p>
        </div>
      </div>
    </section>
  );
}
