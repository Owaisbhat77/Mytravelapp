import SectionTitle from "../../components/SectionTitle";
import Button from "../../components/Button";

export default function ContactPage() {
  return (
    <section className="section-spacing bg-slate-50">
      <div className="mx-auto max-w-5xl px-6">
        <SectionTitle
          eyebrow="Contact"
          title="Begin your bespoke Kashmir experience."
          subtitle="Share your travel dates and preferences, and we will respond within 24 hours."
        />
        <div className="mt-12 grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
          <form className="rounded-3xl bg-white p-8 shadow-soft">
            <div className="grid gap-4 md:grid-cols-2">
              <input
                className="rounded-2xl border border-slate-200 px-4 py-3 text-sm"
                placeholder="Full name"
              />
              <input
                className="rounded-2xl border border-slate-200 px-4 py-3 text-sm"
                placeholder="Email address"
              />
            </div>
            <input
              className="mt-4 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm"
              placeholder="Phone number"
            />
            <input
              className="mt-4 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm"
              placeholder="Preferred travel dates"
            />
            <textarea
              className="mt-4 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm"
              rows={5}
              placeholder="Tell us about your dream trip"
            />
            <Button className="mt-6 w-full" type="button">
              Request itinerary
            </Button>
          </form>
          <div className="rounded-3xl bg-slate-900 p-8 text-white">
            <h3 className="font-display text-xl">Concierge desk</h3>
            <p className="mt-4 text-sm text-slate-300">
              Personalised itinerary design, luxury stays, private transfers, and 24/7 support.
            </p>
            <div className="mt-6 space-y-3 text-sm">
              <p>📞 +91 90123 45678</p>
              <p>✉️ concierge@adveluxjourneys.com</p>
              <p>📍 Residency Road, Srinagar, Kashmir</p>
            </div>
            <div className="mt-8 rounded-2xl bg-white/10 p-4 text-sm">
              <p className="font-semibold text-emerald-200">Operating hours</p>
              <p className="mt-2 text-slate-300">Mon–Sat · 9:00 AM – 8:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
