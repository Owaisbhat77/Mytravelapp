import SectionTitle from "../../components/SectionTitle";
import Button from "../../components/Button";

export default function ContactPage() {
  return (
    <section className="section-spacing water-bg">
      <div className="mx-auto max-w-5xl px-6">
        <SectionTitle
          eyebrow="Contact"
          title="Let’s plan your Advelux Kashmir journey."
          subtitle="We respond quickly with itinerary ideas, pricing, and travel advice."
        />
        <div className="mt-12 grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
          <form className="water-card p-8">
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
          <div className="water-card p-8">
            <h3 className="font-display text-xl">Contact options</h3>
            <p className="mt-4 text-sm text-slate-600">
              Reach us by phone, WhatsApp, or email and we will respond quickly.
            </p>
            <div className="mt-6 space-y-3 text-sm text-slate-600">
              <p>📞 6005947442</p>
              <p>📞 6005968784</p>
              <p>✉️ contact@adveluxjourneys.com</p>
              <p>💬 WhatsApp: +91 94697 61244</p>
            </div>
            <div className="mt-8 rounded-2xl bg-white/40 p-4 text-sm">
              <p className="font-semibold text-emerald-700">Operating hours</p>
              <p className="mt-2 text-slate-600">Mon–Sun · 9:00 AM – 9:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
