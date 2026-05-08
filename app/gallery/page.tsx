import Image from "next/image";
import SectionTitle from "../../components/SectionTitle";

const gallery = [
  "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1459666644539-a9755287d6b0?auto=format&fit=crop&w=1200&q=80",
];

export default function GalleryPage() {
  return (
    <section className="section-spacing">
      <div className="mx-auto max-w-5xl px-6">
        <SectionTitle eyebrow="Gallery" title="Moments from our most loved journeys." />
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {gallery.map((image) => (
            <div key={image} className="relative h-56 overflow-hidden rounded-3xl">
              <Image src={image} alt="Travel moment" fill className="object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
