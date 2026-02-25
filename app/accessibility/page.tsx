import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import AccessibilityContent from "@/components/accessibility/accessibility-content";
import AccessibilityHero from "@/components/accessibility/hero";
import CTASection from "@/components/cta-section";

export default function AccessibilityPage() {
  return (
    <main>
      <Navbar />
      <AccessibilityHero />
      <AccessibilityContent />
      <CTASection
        heading="Build habits that work for your family"
        subtitle=""
        note="No credit card required."
      />
      <Footer />
    </main>
  );
}
