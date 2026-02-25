import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import CTASection from "@/components/cta-section";
import TermsContent from "@/components/terms/terms-content";
import TermsHero from "@/components/terms/hero";

export default function TermsPage() {
  return (
    <main>
      <Navbar />
      <TermsHero />
      <TermsContent />
      <CTASection
        heading="Build habits that work for your family"
        subtitle=""
        note="No credit card required."
      />
      <Footer />
    </main>
  );
}
