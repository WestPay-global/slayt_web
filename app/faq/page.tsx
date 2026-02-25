import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import CTASection from "@/components/cta-section";
import FaqHero from "@/components/faq/hero";
import FAQContent from "@/components/faq/faq-content";

export default function FAQPage() {
  return (
    <main>
      <Navbar />
      <FaqHero />
      <FAQContent />
      <CTASection
        heading="Ready to try a calmer way "
        subtitle="Start free. No credit card. See changes in 7 days"
        note="No credit card required."
      />
      <Footer />
    </main>
  );
}
