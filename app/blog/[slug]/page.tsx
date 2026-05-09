import { notFound } from "next/navigation";
import Image from "next/image";
import SectionTitle from "../../../components/SectionTitle";
import { blogPosts } from "../../../lib/site-data";

export const dynamic = "force-static";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((item) => item.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <section className="section-spacing bg-white">
      <div className="mx-auto max-w-3xl px-6">
        <SectionTitle eyebrow="Journal" title={post.title} subtitle={post.date} />
        <div className="relative mt-8 h-72 overflow-hidden rounded-3xl">
          <Image src={post.image} alt={post.title} fill className="object-cover" />
        </div>
        <div className="mt-8 space-y-4 text-sm text-slate-600">
          {post.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
