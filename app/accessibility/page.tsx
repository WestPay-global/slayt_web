import { Metadata } from "next";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import AccessibilityContent from "@/components/accessibility/accessibility-content";
import AccessibilityHero from "@/components/accessibility/hero";
import CTASection from "@/components/cta-section";

export const metadata: Metadata = {
    title: "Accessibility | SLAYT Family Chore App",
    description:
        "SLAYT is committed to accessibility. Learn how we design an inclusive family chore app that works for every child and parent.",
    keywords: [
        "accessibility",
        "inclusive app",
        "family app accessibility",
        "slayt accessibility",
    ],
    openGraph: {
        title: "Accessibility | SLAYT",
        description: "Building an inclusive experience for every family.",
    },
};

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
