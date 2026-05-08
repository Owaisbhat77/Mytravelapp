import SectionTitle from "../../components/SectionTitle";

export default function ContactPage() {
  return (
    <section className="section-spacing bg-slate-50">
      <div className="mx-auto max-w-4xl px-6">
        <SectionTitle eyebrow="Contact" title="Plan your Kashmir escape." />
        <div className="mt-10 grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
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
            <textarea
              className="mt-4 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm"
              rows={5}
              placeholder="Tell us about your dream trip"
            />
            <button className="mt-6 rounded-full bg-midnight px-6 py-3 text-sm font-semibold text-white">
              Request itinerary
            </button>
          </form>
          <div className="rounded-3xl bg-midnight p-8 text-white">
            <h3 className="font-display text-xl">Concierge Desk</h3>
            <p className="mt-4 text-sm text-slate-200">
              We reply within 24 hours with a tailored proposal and curated stays.
            </p>
            <div className="mt-6 space-y-2 text-sm">
              <p>📞 +91 00000 00000</p>
              <p>✉️ hello@adveluxjourneys.com</p>
              <p>📍 Srinagar, Kashmir</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
