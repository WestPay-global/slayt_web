import { Metadata } from "next";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import CTASection from "@/components/cta-section";
import FaqHero from "@/components/faq/hero";
import FAQContent from "@/components/faq/faq-content";

export const metadata: Metadata = {
    title: "Frequently Asked Questions | SLAYT",
    description:
        "Find answers to common questions about SLAYT family chore app, pricing, features, rewards, and how it helps build responsibility in kids.",
    keywords: ["faq", "slayt questions", "chore app faq", "family app help"],
};

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
