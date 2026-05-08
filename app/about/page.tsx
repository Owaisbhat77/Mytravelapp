import SectionTitle from "../../components/SectionTitle";

export default function AboutPage() {
  return (
    <section className="section-spacing">
      <div className="mx-auto max-w-4xl px-6">
        <SectionTitle eyebrow="About" title="Advelux Journeys, crafted with heart." />
        <p className="mt-6 text-base text-slate-600">
          Advelux Journeys is a premium travel design studio focused on bespoke Kashmir experiences. We partner with
          local storytellers, luxury hospitality teams, and curated artisans to deliver immersive itineraries that feel
          both indulgent and authentic.
        </p>
        <p className="mt-4 text-base text-slate-600">
          From alpine adventures to heritage walks, every journey is crafted around comfort, safety, and unforgettable
          memories. Our concierge team provides end-to-end support for couples, families, and corporate retreats.
        </p>
      </div>
    </section>
  );
}
