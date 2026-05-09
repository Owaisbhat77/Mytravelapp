import Image from "next/image";

export default function InstagramGrid({ images }: { images: string[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-4">
      {images.map((image) => (
        <div key={image} className="relative h-48 overflow-hidden rounded-3xl">
          <Image src={image} alt="Instagram" fill className="object-cover" />
        </div>
      ))}
    </div>
  );
}
