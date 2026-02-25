import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import CTASection from "@/components/cta-section";
import PrivacyContent from "@/components/privacy/privacy-content";
import PrivacyHero from "@/components/privacy/hero";

export default function PrivacyPage() {
  return (
    <main>
      <Navbar />
      <PrivacyHero />
      <PrivacyContent />
      <CTASection
        heading="Build habits that work for your family"
        subtitle=""
        note="No credit card required."
      />
      <Footer />
    </main>
  );
}
