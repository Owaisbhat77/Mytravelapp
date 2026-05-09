import Image from "next/image";
import Link from "next/link";
import {
  destinations,
  packages,
  stats,
  testimonials,
  blogPosts,
  quickLinks,
} from "../lib/site-data";
import SectionTitle from "../components/SectionTitle";
import Button from "../components/Button";
import ReviewsSlider from "../components/ReviewsSlider";
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
              Premium Kashmir journeys
            </p>
            <h1 className="max-w-3xl font-display text-4xl font-semibold leading-tight md:text-6xl">
              <span className="magic-title">Discover Kashmir</span> with handcrafted itineraries and concierge care.
            </h1>
            <p className="max-w-2xl text-lg text-slate-200">
              We design modern, immersive travel experiences across Kashmir with luxury stays, curated adventures, and
              24/7 on-ground support.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button href="/packages">Explore packages</Button>
            <Button href="/contact" variant="outline">
              Plan my trip
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
            eyebrow="Quick access"
            title="Everything you need to start planning."
            subtitle="Every section is clickable so you can move through the experience effortlessly."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {quickLinks.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="hover-lift rounded-3xl border border-slate-100 bg-slate-50 p-8"
              >
                <h3 className="font-display text-2xl text-slate-900">{item.title}</h3>
                <p className="mt-3 text-sm text-slate-600">{item.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing bg-slate-50" id="destinations">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle
            eyebrow="Destinations"
            title="Iconic valleys, alpine meadows, and heritage towns."
            subtitle="Inspired by the most loved routes in Kashmir, now reimagined for a premium experience."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {destinations.map((destination) => (
              <Link
                key={destination.name}
                href="/destinations"
                className="hover-lift overflow-hidden rounded-3xl bg-white shadow-soft"
              >
                <div className="relative h-56">
                  <Image src={destination.image} alt={destination.name} fill className="object-cover" />
                </div>
                <div className="p-8">
                  <h3 className="font-display text-2xl text-slate-900">{destination.name}</h3>
                  <p className="mt-3 text-sm text-slate-600">{destination.description}</p>
                  <ul className="mt-4 space-y-2 text-sm text-slate-500">
                    {destination.highlights.map((highlight) => (
                      <li key={highlight}>• {highlight}</li>
                    ))}
                  </ul>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing bg-white" id="packages">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle
            eyebrow="Packages"
            title="Curated itineraries with luxury stays and immersive experiences."
          />
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {packages.map((item) => (
              <div key={item.title} className="hover-lift rounded-3xl border border-slate-100 bg-white p-8 shadow-soft">
                <p className="text-xs uppercase tracking-[0.3em] text-emerald-500">{item.nights}</p>
                <h3 className="mt-4 font-display text-2xl text-slate-900">{item.title}</h3>
                <p className="mt-3 text-sm text-slate-600">{item.summary}</p>
                <ul className="mt-6 space-y-2 text-sm text-slate-500">
                  {item.highlights.map((highlight) => (
                    <li key={highlight}>• {highlight}</li>
                  ))}
                </ul>
                <div className="mt-6 text-lg font-semibold text-slate-900">{item.price}</div>
                <Button href="/contact" className="mt-6 w-full">
                  Plan this trip
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
            subtitle="From honeymooners to family escapes, we deliver exceptional service."
            light
          />
          <div className="mt-12">
            <ReviewsSlider testimonials={testimonials} />
          </div>
        </div>
      </section>

      <section className="section-spacing bg-white" id="blogs">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle
            eyebrow="Travel blogs"
            title="Stories, guides, and insider tips from Kashmir."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {blogPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="hover-lift rounded-3xl bg-slate-50 p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-emerald-500">{post.date}</p>
                <h3 className="mt-4 font-display text-xl text-slate-900">{post.title}</h3>
                <p className="mt-3 text-sm text-slate-600">{post.excerpt}</p>
                <span className="mt-6 inline-flex text-sm font-semibold text-emerald-600">Read story →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing bg-slate-50" id="contact">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionTitle
              eyebrow="Concierge"
              title="Let’s design a Kashmir itinerary that feels like magic."
              subtitle="Share your travel dates and preferences, and we will respond within 24 hours."
            />
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/contact">Request a call</Button>
              <Button href="/packages" variant="ghost">
                Browse packages
              </Button>
            </div>
          </div>
          <div className="rounded-3xl bg-white p-8 shadow-soft">
            <h3 className="font-display text-2xl text-slate-900">Contact options</h3>
            <div className="mt-6 space-y-3 text-sm text-slate-600">
              <p>📞 6005721569</p>
              <p>✉️ owaissbhatt7@gmail.com</p>
              <p>💬 WhatsApp: +91 6005721569</p>
              <p>📍 Srinagar, Kashmir</p>
            </div>
            <Link
              href="https://wa.me/916005721569"
              target="_blank"
              className="mt-6 inline-flex text-sm font-semibold text-emerald-600"
            >
              Chat on WhatsApp →
            </Link>
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
