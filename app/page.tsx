import Image from "next/image";
import Link from "next/link";
import {
  destinations,
  packages,
  stats,
  testimonials,
  blogPosts,
  quickLinks,
  gallery,
} from "../lib/site-data";
import SectionTitle from "../components/SectionTitle";
import Button from "../components/Button";
import ReviewsSlider from "../components/ReviewsSlider";
import NewsletterForm from "../components/NewsletterForm";

export default function Home() {
  return (
    <div>
      <section className="relative min-h-[100vh]">
        <Image
          src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1800&q=80"
          alt="Kashmir valley"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 gradient-overlay" />
        <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-center gap-8 px-6 text-white hero-safe">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.45em] text-emerald-200">
              Advelux Journeys · Kashmir
            </p>
            <h1 className="max-w-3xl font-display font-semibold leading-tight hero-title md:text-6xl">
              <span className="magic-title">Advelux Journeys</span> designs premium Kashmir escapes with a modern,
              effortless aesthetic.
            </h1>
            <p className="max-w-2xl text-lg text-slate-200 hero-subtitle">
              Luxury stays, curated adventures, and on-ground concierge service for couples, families, and executive
              groups.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button href="/packages">Explore packages</Button>
            <Button href="/contact" variant="outline">
              Plan my trip
            </Button>
          </div>

          <div className="grid gap-5 pt-8 md:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="glass-panel rounded-3xl p-6 watery-float">
                <p className="text-3xl font-semibold text-slate-900">{stat.value}</p>
                <p className="mt-2 text-sm text-slate-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="wave-divider">
        <svg viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#f8fafc"
            d="M0,64L80,69.3C160,75,320,85,480,90.7C640,96,800,96,960,90.7C1120,85,1280,75,1360,69.3L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
          />
        </svg>
      </div>

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
                className="water-card p-8 watery-float-slow"
              >
                <h3 className="font-display text-2xl text-slate-900">{item.title}</h3>
                <p className="mt-3 text-sm text-slate-600">{item.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing water-bg" id="destinations">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle
            eyebrow="Destinations"
            title="Every iconic place in Kashmir, beautifully curated."
            subtitle="From alpine meadows to heritage gardens — explore the full Kashmir journey."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {destinations.map((destination) => (
              <Link
                key={destination.name}
                href="/destinations"
                className="water-card overflow-hidden"
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
              <div key={item.title} className="water-card p-8">
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
              <Link key={post.slug} href={`/blog/${post.slug}`} className="water-card p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-emerald-500">{post.date}</p>
                <h3 className="mt-4 font-display text-xl text-slate-900">{post.title}</h3>
                <p className="mt-3 text-sm text-slate-600">{post.excerpt}</p>
                <span className="mt-6 inline-flex text-sm font-semibold text-emerald-600">Read story →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing water-bg" id="gallery">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle
            eyebrow="Gallery"
            title="50+ high‑definition moments from Kashmir."
            subtitle="A full visual experience of the landscapes, lakes, and luxury stays."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {gallery.map((image) => (
              <div key={image} className="relative h-48 overflow-hidden rounded-3xl water-card">
                <Image src={image} alt="Kashmir gallery" fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing water-bg" id="contact">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionTitle
              eyebrow="Concierge"
              title="Let’s design your Advelux Kashmir journey."
              subtitle="Tell us your dates and preferences — we respond within 24 hours."
            />
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/contact">Request a call</Button>
              <Button href="/packages" variant="ghost">
                Browse packages
              </Button>
            </div>
          </div>
          <div className="water-card p-8">
            <h3 className="font-display text-2xl text-slate-900">Contact options</h3>
            <div className="mt-6 space-y-3 text-sm text-slate-600">
              <p>📞 6005947442</p>
              <p>📞 6005968784</p>
              <p>✉️ contact@adveluxjourneys.com</p>
              <p>📍 Srinagar, Kashmir</p>
            </div>
            <Link
              href="https://wa.me/919469761244"
              target="_blank"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-emerald-600"
            >
              <span>WhatsApp</span>
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
