import SectionTitle from "../../components/SectionTitle";
import Button from "../../components/Button";

export default function BookingPage() {
  return (
    <section className="section-spacing bg-slate-50">
      <div className="mx-auto max-w-5xl px-6">
        <SectionTitle
          eyebrow="Booking request"
          title="Reserve your preferred travel dates."
          subtitle="Share your details and we will confirm availability within 12 hours."
        />
        <form className="mt-12 grid gap-6 rounded-3xl bg-white p-8 shadow-soft">
          <div className="grid gap-4 md:grid-cols-2">
            <input className="rounded-2xl border border-slate-200 px-4 py-3 text-sm" placeholder="Full name" />
            <input className="rounded-2xl border border-slate-200 px-4 py-3 text-sm" placeholder="Email address" />
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <input className="rounded-2xl border border-slate-200 px-4 py-3 text-sm" placeholder="Phone number" />
            <input className="rounded-2xl border border-slate-200 px-4 py-3 text-sm" placeholder="Preferred package" />
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            <input className="rounded-2xl border border-slate-200 px-4 py-3 text-sm" placeholder="Check-in" />
            <input className="rounded-2xl border border-slate-200 px-4 py-3 text-sm" placeholder="Check-out" />
            <input className="rounded-2xl border border-slate-200 px-4 py-3 text-sm" placeholder="Guests" />
          </div>
          <textarea
            className="rounded-2xl border border-slate-200 px-4 py-3 text-sm"
            rows={5}
            placeholder="Special requests"
          />
          <Button type="button" className="w-full">
            Submit booking request
          </Button>
        </form>
      </div>
    </section>
  );
}
