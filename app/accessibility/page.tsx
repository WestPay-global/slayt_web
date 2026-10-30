import { Metadata } from "next";
import { ogImage } from "@/lib/og";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import AccessibilityContent from "@/components/accessibility/accessibility-content";
import AccessibilityHero from "@/components/accessibility/hero";
import CTASection from "@/components/cta-section";

export const metadata: Metadata = {
    title: "Accessibility",
    description:
        "Slayt is committed to accessibility. Learn how we design an inclusive family chore app that works for every child and parent.",
    keywords: [
        "accessibility",
        "inclusive app",
        "family app accessibility",
        "slayt accessibility",
    ],
    alternates: { canonical: "/accessibility" },
    openGraph: {
        title: "Accessibility | Slayt",
        description: "Building an inclusive experience for every family.",
        images: [ogImage],
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
