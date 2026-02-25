import Navbar from "@/components/navbar";
import Hero from "@/components/home/hero";
import PainPoints from "@/components/home/pain-points";
import HowItWorks from "@/components/home/how-it-works";
import Testimonials from "@/components/home/testimonials";
import AppPreview from "@/components/home/app-preview";
import CTASection from "@/components/cta-section";
import Footer from "@/components/footer";

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <PainPoints />
      <HowItWorks />
      <Testimonials />
      <AppPreview />
      <CTASection
        heading="Start your calm parenting journey today."
        subtitle="Most families notice changes within 7 days."
        note="Cancel anytime. No pressure. Just peace."
      />
      <Footer />
    </main>
  );
}
