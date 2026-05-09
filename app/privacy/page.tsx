import SectionTitle from "../../components/SectionTitle";

export default function PrivacyPage() {
  return (
    <section className="section-spacing bg-white">
      <div className="mx-auto max-w-4xl px-6">
        <SectionTitle
          eyebrow="Privacy policy"
          title="Your data is protected with care."
          subtitle="We only use your information to deliver your travel experience."
        />
        <div className="mt-10 space-y-4 rounded-3xl bg-slate-50 p-8 text-sm text-slate-600 shadow-soft">
          <p>
            We collect only the information needed to create your itinerary, communicate updates, and arrange bookings.
          </p>
          <p>
            We do not sell or share your personal data with third parties except for booking partners required to deliver
            your travel services.
          </p>
          <p>
            You can request data updates or deletion by emailing owaissbhatt7@gmail.com.
          </p>
        </div>
      </div>
    </section>
  );
}
