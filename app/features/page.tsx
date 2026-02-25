import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import CTASection from "@/components/cta-section";
import FeaturesHero from "@/components/features/hero";
import FeatureBlocks from "@/components/features/feature-blocks";
import HabitPsychology from "@/components/features/habit-psychology";
import BeforeAfter from "@/components/features/before-after";
import ComparisonTable from "@/components/features/comparison-table";
import FAQ from "@/components/features/faq";

export const metadata = {
  title: "Family Chore App Features | Task Management and Progress",
  description:
    "Family chore app features: create tasks with deadlines, monitor progress in real time, get notifications, and motivate kids with rewards.",
};

export default function FeaturesPage() {
  return (
    <main>
      <Navbar />
      <FeaturesHero />
      <FeatureBlocks />
      <HabitPsychology />
      <BeforeAfter />
      <ComparisonTable />
      <FAQ />
      <CTASection
        heading="Stop arguing about chores."
        subtitle="Start free. No credit card. See changes in 7 days."
        note="Cancel anytime. No pressure. Just peace."
      />
      <Footer />
    </main>
  );
}
