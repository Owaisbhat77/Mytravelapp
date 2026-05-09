import SectionTitle from "../../components/SectionTitle";
import { gallery } from "../../lib/site-data";
import Image from "next/image";

export default function GalleryPage() {
  return (
    <section className="section-spacing bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle
          eyebrow="Gallery"
          title="Signature moments from our curated journeys."
          subtitle="A glimpse into the landscapes, stays, and culture of Kashmir."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {gallery.map((image) => (
            <div key={image} className="relative h-56 overflow-hidden rounded-3xl">
              <Image src={image} alt="Kashmir moment" fill className="object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
