import Image from "next/image";
import Link from "next/link";
import {
  destinations,
  experiences,
  packages,
  stats,
  testimonials,
  pricingPlans,
  teamMembers,
  instagramFeed,
  faqs,
} from "../lib/site-data";
import SectionTitle from "../components/SectionTitle";
import Button from "../components/Button";
import ReviewsSlider from "../components/ReviewsSlider";
import PricingTable from "../components/PricingTable";
import FAQAccordion from "../components/FAQAccordion";
import InstagramGrid from "../components/InstagramGrid";
import NewsletterForm from "../components/NewsletterForm";

export default function Home() {
  return (
    <div>
      <section className="relative h-[90vh] min-h-[640px]">
        <Image
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=80"
          alt="Kashmir valley"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 gradient-overlay" />
        <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-center gap-8 px-6 text-white">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.45em] text-emerald-200">
              Luxury travel studio · Kashmir
            </p>
            <h1 className="max-w-3xl font-display text-4xl font-semibold leading-tight md:text-6xl">
              Bespoke journeys through the Himalayan heartland.
            </h1>
            <p className="max-w-2xl text-lg text-slate-200">
              Advelux Journeys curates premium travel experiences with private transfers, luxury stays, and handcrafted
              itineraries designed around your pace and passions.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button href="/packages">Explore packages</Button>
            <Button href="/itinerary" variant="outline">
              Build itinerary
            </Button>
          </div>
          <div className="grid gap-6 pt-6 md:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="glass-panel rounded-3xl p-6">
                <p className="text-3xl font-semibold text-slate-900">{stat.value}</p>
                <p className="mt-2 text-sm text-slate-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle
            eyebrow="Why Advelux"
            title="A premium concierge team for Kashmir's most extraordinary escapes."
            subtitle="We handle everything from luxury stays to on-ground hosts, so you travel with total ease."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {experiences.slice(0, 3).map((item) => (
              <div key={item.title} className="rounded-3xl border border-slate-100 bg-slate-50 p-8 shadow-soft">
                <h3 className="font-display text-2xl text-slate-900">{item.title}</h3>
                <p className="mt-3 text-sm text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing bg-slate-50">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle
            eyebrow="Destinations"
            title="Lakefront serenity, alpine peaks, and heritage villages."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {destinations.map((destination) => (
              <div key={destination.name} className="rounded-3xl bg-white p-8 shadow-soft">
                <h3 className="font-display text-2xl text-slate-900">{destination.name}</h3>
                <p className="mt-3 text-sm text-slate-600">{destination.description}</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-500">
                  {destination.highlights.map((highlight) => (
                    <li key={highlight}>• {highlight}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle
            eyebrow="Signature Packages"
            title="Curated itineraries with luxury stays and immersive experiences."
          />
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {packages.map((item) => (
              <div key={item.title} className="rounded-3xl border border-slate-100 bg-white p-8 shadow-soft">
                <p className="text-xs uppercase tracking-[0.3em] text-emerald-500">{item.nights}</p>
                <h3 className="mt-4 font-display text-2xl text-slate-900">{item.title}</h3>
                <p className="mt-3 text-sm text-slate-600">{item.summary}</p>
                <ul className="mt-6 space-y-2 text-sm text-slate-500">
                  {item.highlights.map((highlight) => (
                    <li key={highlight}>• {highlight}</li>
                  ))}
                </ul>
                <div className="mt-6 text-lg font-semibold text-slate-900">{item.price}</div>
                <Button href="/booking" className="mt-6 w-full">
                  Request booking
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing bg-slate-900 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle
            eyebrow="Client stories"
            title="Every journey leaves a lasting memory."
            subtitle="From honeymooners to corporate retreats, we deliver exceptional service."
            light
          />
          <div className="mt-12">
            <ReviewsSlider testimonials={testimonials} />
          </div>
        </div>
      </section>

      <section className="section-spacing bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle eyebrow="Pricing" title="Transparent pricing for premium travel planning." />
          <div className="mt-12">
            <PricingTable plans={pricingPlans} />
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/pricing">View full pricing</Button>
            <Button href="/brochure.pdf" variant="ghost">
              Download brochure
            </Button>
          </div>
        </div>
      </section>

      <section className="section-spacing bg-slate-50">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle
            eyebrow="Meet the team"
            title="Local experts with global hospitality standards."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {teamMembers.slice(0, 3).map((member) => (
              <div key={member.name} className="rounded-3xl bg-white p-8 shadow-soft">
                <p className="text-xs uppercase tracking-[0.3em] text-emerald-500">{member.role}</p>
                <h3 className="mt-4 font-display text-2xl text-slate-900">{member.name}</h3>
                <p className="mt-3 text-sm text-slate-600">{member.bio}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Button href="/team" variant="ghost">
              View full team
            </Button>
          </div>
        </div>
      </section>

      <section className="section-spacing bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle
            eyebrow="Instagram"
            title="Follow our latest journeys and behind-the-scenes stories."
          />
          <div className="mt-12">
            <InstagramGrid images={instagramFeed} />
          </div>
        </div>
      </section>

      <section className="section-spacing bg-slate-50">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionTitle
              eyebrow="Concierge"
              title="Tell us your dream itinerary. We’ll craft the rest."
              subtitle="Receive a premium proposal within 24 hours including stays, routes, and experiences."
            />
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/itinerary">Start itinerary builder</Button>
              <Button href="/contact" variant="ghost">
                Request a call
              </Button>
            </div>
          </div>
          <div className="rounded-3xl bg-slate-50 p-8 shadow-soft">
            <h3 className="font-display text-2xl text-slate-900">Planning snapshot</h3>
            <ol className="mt-6 space-y-4 text-sm text-slate-600">
              <li>1. Share your dates, group size, and interests.</li>
              <li>2. Receive a curated itinerary with stays.</li>
              <li>3. Confirm, and we manage everything end-to-end.</li>
            </ol>
          </div>
        </div>
      </section>

      <section className="section-spacing bg-white">
        <div className="mx-auto max-w-4xl px-6">
          <SectionTitle
            eyebrow="FAQs"
            title="Quick answers before you book."
            subtitle="We are happy to answer anything else in a personalised call."
          />
          <div className="mt-10">
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>

      <section className="section-spacing bg-slate-900 text-white">
        <div className="mx-auto max-w-4xl px-6">
          <SectionTitle
            eyebrow="Newsletter"
            title="Get seasonal updates and private offers."
            subtitle="Join our travel journal to receive curated inspiration every month."
            light
          />
          <div className="mt-8">
            <NewsletterForm />
          </div>
        </div>
      </section>
    </div>
  );
}
