import SectionTitle from "../../components/SectionTitle";
import { blogPosts } from "../../lib/site-data";
import Link from "next/link";

export default function BlogPage() {
  return (
    <section className="section-spacing bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle
          eyebrow="Travel blogs"
          title="Guides, seasonal highlights, and local secrets."
          subtitle="Every story is written to help you plan a smoother, more beautiful journey."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {blogPosts.map((post) => (
            <article key={post.slug} className="hover-lift rounded-3xl bg-slate-50 p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-emerald-500">{post.date}</p>
              <h3 className="mt-4 font-display text-xl text-slate-900">{post.title}</h3>
              <p className="mt-3 text-sm text-slate-600">{post.excerpt}</p>
              <Link href={`/blog/${post.slug}`} className="mt-6 inline-flex text-sm font-semibold text-emerald-600">
                Read story →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
