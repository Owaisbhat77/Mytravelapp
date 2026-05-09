import SectionTitle from "../../components/SectionTitle";
import Button from "../../components/Button";

export default function ItineraryPage() {
  return (
    <section className="section-spacing bg-white">
      <div className="mx-auto max-w-4xl px-6">
        <SectionTitle
          eyebrow="Itinerary Builder"
          title="Design a custom Kashmir journey in minutes."
          subtitle="Tell us your preferences and our concierge team will respond within 24 hours."
        />
        <form className="mt-12 grid gap-6 rounded-3xl bg-slate-50 p-8 shadow-soft">
          <div className="grid gap-4 md:grid-cols-2">
            <input className="rounded-2xl border border-slate-200 px-4 py-3 text-sm" placeholder="Full name" />
            <input className="rounded-2xl border border-slate-200 px-4 py-3 text-sm" placeholder="Email address" />
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <input className="rounded-2xl border border-slate-200 px-4 py-3 text-sm" placeholder="Phone number" />
            <input className="rounded-2xl border border-slate-200 px-4 py-3 text-sm" placeholder="City" />
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <input className="rounded-2xl border border-slate-200 px-4 py-3 text-sm" placeholder="Travel dates" />
            <input className="rounded-2xl border border-slate-200 px-4 py-3 text-sm" placeholder="Group size" />
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <input className="rounded-2xl border border-slate-200 px-4 py-3 text-sm" placeholder="Budget range" />
            <input className="rounded-2xl border border-slate-200 px-4 py-3 text-sm" placeholder="Accommodation style" />
          </div>
          <textarea
            className="rounded-2xl border border-slate-200 px-4 py-3 text-sm"
            rows={5}
            placeholder="Tell us about your dream itinerary"
          />
          <Button type="button" className="w-full">
            Submit itinerary request
          </Button>
        </form>
      </div>
    </section>
  );
}
