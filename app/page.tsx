import Image from "next/image";
import Link from "next/link";
import SectionTitle from "../components/SectionTitle";

const highlights = [
  {
    title: "Luxury Houseboats",
    description: "Wake up on Dal Lake with handcrafted interiors and private butler service.",
  },
  {
    title: "Bespoke Itineraries",
    description: "From alpine meadows to heritage trails, every journey is tailored for you.",
  },
  {
    title: "Trusted Local Experts",
    description: "Curated by on-ground travel designers who know Kashmir intimately.",
  },
];

const signatureTrips = [
  {
    title: "Signature Kashmir Escape",
    nights: "6 Nights / 7 Days",
    price: "From ₹48,000",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Gulmarg Alpine Luxury",
    nights: "4 Nights / 5 Days",
    price: "From ₹38,500",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Pahalgam Riverside Retreat",
    nights: "5 Nights / 6 Days",
    price: "From ₹41,000",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function Home() {
  return (
    <div>
      <section className="relative h-[85vh] min-h-[520px]">
        <Image
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80"
          alt="Kashmir valley"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 gradient-overlay" />
        <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-center px-6 text-white">
          <p className="text-sm uppercase tracking-[0.4em] text-aurora">Advelux Journeys</p>
          <h1 className="mt-6 max-w-3xl font-display text-4xl font-semibold leading-tight md:text-6xl">
            Curated premium travel experiences across the timeless beauty of Kashmir.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-200">
            Discover luxury stays, private transfers, and immersive cultural moments designed around your pace and
            preferences.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/packages"
              className="rounded-full bg-aurora px-8 py-3 text-sm font-semibold text-sable shadow-soft"
            >
              View Packages
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-white/60 px-8 py-3 text-sm font-semibold text-white"
            >
              Plan My Trip
            </Link>
          </div>
        </div>
      </section>

      <section className="section-spacing bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle
            eyebrow="Why Advelux"
            title="Travel with confidence, comfort, and a dedicated concierge."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {highlights.map((item) => (
              <div key={item.title} className="rounded-3xl border border-slate-100 bg-pearl p-8 shadow-soft">
                <h3 className="font-display text-2xl text-midnight">{item.title}</h3>
                <p className="mt-3 text-sm text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing bg-slate-50">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle
            eyebrow="Signature Journeys"
            title="Handpicked itineraries that blend luxury, culture, and adventure."
          />
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {signatureTrips.map((trip) => (
              <div key={trip.title} className="overflow-hidden rounded-3xl bg-white shadow-soft">
                <div className="relative h-56">
                  <Image src={trip.image} alt={trip.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl text-midnight">{trip.title}</h3>
                  <p className="mt-2 text-sm text-slate-500">{trip.nights}</p>
                  <p className="mt-4 text-lg font-semibold text-slate-900">{trip.price}</p>
                  <Link href="/contact" className="mt-6 inline-flex text-sm font-semibold text-aurora">
                    Enquire now →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing bg-midnight text-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-[1.2fr_1fr]">
          <div>
            <SectionTitle
              eyebrow="Concierge Service"
              title="Every journey is personally designed for you."
              light
            />
            <p className="mt-6 text-slate-200">
              Share your preferred travel dates, group size, and dream experiences. Our concierge team will craft a
              premium itinerary within 24 hours.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-midnight">
                Request a proposal
              </Link>
              <Link href="/about" className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold">
                Learn more
              </Link>
            </div>
          </div>
          <div className="rounded-3xl bg-white/10 p-6">
            <h3 className="font-display text-xl">Quick Facts</h3>
            <ul className="mt-6 space-y-4 text-sm text-slate-200">
              <li>✔ Private airport transfers with premium vehicles.</li>
              <li>✔ Curated culinary experiences with local chefs.</li>
              <li>✔ 24/7 concierge assistance during your stay.</li>
              <li>✔ Flexible itineraries for families, couples, and groups.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
