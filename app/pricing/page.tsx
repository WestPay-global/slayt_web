import { Metadata } from "next";
import { ogImage } from "@/lib/og";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PricingHero from "@/components/pricing/hero";
import FreePlan from "@/components/pricing/free-plan";
import WhyFree from "@/components/pricing/why-free";
import ComparePlans from "@/components/pricing/compare-plans";
import Faq from "@/components/pricing/faqs";
import CTASection from "@/components/cta-section";

export const metadata: Metadata = {
    title: "Pricing",
    description:
        "Simple, transparent pricing. Start completely free. No hidden fees. Build better family habits without stress.",
    keywords: [
        "slayt pricing",
        "family app pricing",
        "free chore app",
        "kids reward app pricing",
    ],
    alternates: { canonical: "/pricing" },
    openGraph: {
        title: "Pricing | Slayt",
        description: "Start free today. No credit card required.",
        images: [ogImage],
    },
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
