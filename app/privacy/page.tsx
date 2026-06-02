import { Metadata } from "next";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import CTASection from "@/components/cta-section";
import PrivacyContent from "@/components/privacy/privacy-content";
import PrivacyHero from "@/components/privacy/hero";

export const metadata: Metadata = {
    title: "Privacy Policy | SLAYT Family Chore App",
    description:
        "We take your family's privacy seriously. Read our privacy policy to understand how we protect your data with strong encryption and full transparency.",
    keywords: [
        "privacy policy",
        "data protection",
        "family app privacy",
        "slayt privacy",
    ],
};

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
