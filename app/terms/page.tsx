import { Metadata } from "next";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import CTASection from "@/components/cta-section";
import TermsContent from "@/components/terms/terms-content";
import TermsHero from "@/components/terms/hero";

export const metadata: Metadata = {
    title: "Terms of Service | SLAYT",
    description:
        "Read our Terms of Service to understand the rules and guidelines for using the SLAYT family chore and habit-building platform.",
    keywords: ["terms of service", "slayt terms", "user agreement"],
};

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
