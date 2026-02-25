import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PricingHero from "@/components/pricing/hero";
import FreePlan from "@/components/pricing/free-plan";
import WhyFree from "@/components/pricing/why-free";
import ComparePlans from "@/components/pricing/compare-plans";
import Faq from "@/components/pricing/faqs";
import CTASection from "@/components/cta-section";

export const metadata = {
  title: "Pricing - Slayt",
  description:
    "Simple pricing. Real results. Start free. Build responsibility without shouting.",
};

export default function PricingPage() {
  return (
    <main>
      <Navbar />
      <PricingHero />
      <FreePlan />
      <WhyFree />
      <ComparePlans />
      <Faq />
      <CTASection
        heading="Start building better habits today."
        subtitle="Start free. No credit card. See changes in 7 days."
        note="Cancel anytime. No pressure. Just peace."
      />
      <Footer />
    </main>
  );
}
