import { Metadata } from "next";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import CTASection from "@/components/cta-section";
import AboutHero from "@/components/about/hero";
import OurStory from "@/components/about/our-story";
import OurBelief from "@/components/about/our-belief";
import NotJustChoreApp from "@/components/about/not-just-chore-app";
import DesignedForFamilies from "@/components/about/designed-for-families";
import FamiliesSeeing from "@/components/about/families-seeing";
import PrivacyAndMission from "@/components/about/privacy-and-mission";

export const metadata: Metadata = {
    title: "Our Mission | SLAYT Family Chore App",
    description:
        "SLAYT helps children grow responsibly using positive rewards, strong privacy, encryption, and full user control. Learn why we built this app.",
    keywords: [
        "slayt mission",
        "family chore app mission",
        "positive parenting",
        "kids responsibility",
        "family values app",
    ],
    openGraph: {
        title: "Our Mission | SLAYT",
        description: "Building better habits and stronger families.",
    },
};

export default function AboutPage() {
    return (
        <main>
            <Navbar />
            <AboutHero />
            <OurStory />
            <OurBelief />
            <NotJustChoreApp />
            <DesignedForFamilies />
            <FamiliesSeeing />
            <PrivacyAndMission />
            <CTASection
                heading="Ready to try a calmer way?"
                subtitle="Start free. No credit card. See changes in 7 days."
                note="Cancel anytime. No pressure. Just peace."
            />
            <Footer />
        </main>
    );
}
