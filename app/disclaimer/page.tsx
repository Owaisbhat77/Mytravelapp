import SectionTitle from "../../components/SectionTitle";

export default function DisclaimerPage() {
  return (
    <section className="section-spacing bg-slate-50">
      <div className="mx-auto max-w-4xl px-6">
        <SectionTitle
          eyebrow="Disclaimer"
          title="Travel information & service disclaimer."
          subtitle="We aim for accuracy, transparency, and responsible travel planning."
        />
        <div className="mt-10 space-y-4 rounded-3xl bg-white p-8 text-sm text-slate-600 shadow-soft">
          <p>
            Discover Kashmir provides curated travel planning and concierge services. While we strive to keep all
            information current, travel conditions may change due to weather, local regulations, or operational factors.
          </p>
          <p>
            All bookings are subject to availability and confirmation from third-party partners. Guests are encouraged to
            review itineraries and inclusions before final confirmation.
          </p>
          <p>
            By using our services, you agree to communicate any requirements or constraints so we can deliver the best
            possible experience.
          </p>
        </div>
      </div>
    </section>
  );
}
