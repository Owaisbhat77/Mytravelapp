import SectionTitle from "../../components/SectionTitle";
import PricingTable from "../../components/PricingTable";
import { pricingPlans } from "../../lib/site-data";
import Button from "../../components/Button";

export default function PricingPage() {
  return (
    <section className="section-spacing bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle
          eyebrow="Pricing"
          title="Transparent pricing for bespoke travel planning."
          subtitle="Choose a planning tier and we will customise every detail."
        />
        <div className="mt-12">
          <PricingTable plans={pricingPlans} />
        </div>
        <div className="mt-10 flex flex-wrap gap-4">
          <Button href="/booking">Start booking</Button>
          <Button href="/brochure.pdf" variant="ghost">
            Download brochure
          </Button>
        </div>
      </div>
    </section>
  );
}
