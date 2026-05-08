import SectionTitle from "../../components/SectionTitle";

const posts = [
  {
    title: "A Luxury Guide to Kashmir's Houseboats",
    date: "April 5, 2026",
    excerpt: "Sail through Dal Lake in style with our curated list of premium houseboat stays.",
  },
  {
    title: "Top 5 Winter Experiences in Gulmarg",
    date: "March 21, 2026",
    excerpt: "Snow safaris, gondola rides, and cozy evenings with panoramic views.",
  },
  {
    title: "Cultural Trails of Srinagar",
    date: "February 11, 2026",
    excerpt: "Explore heritage bazaars, craft ateliers, and hidden culinary gems.",
  },
];

export default function BlogPage() {
  return (
    <section className="section-spacing bg-slate-50">
      <div className="mx-auto max-w-5xl px-6">
        <SectionTitle eyebrow="Journal" title="Stories, guides, and travel inspiration." />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <article key={post.title} className="rounded-3xl bg-white p-6 shadow-soft">
              <p className="text-xs uppercase tracking-[0.3em] text-aurora">{post.date}</p>
              <h3 className="mt-4 font-display text-xl text-midnight">{post.title}</h3>
              <p className="mt-3 text-sm text-slate-600">{post.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
