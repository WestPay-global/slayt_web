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

const title = "About Slayt | Helping Children Grow with Confidence";
const description =
    "Discover why we built Slayt: to help parents guide everyday growth through clear routines, encouragement and age-appropriate responsibility.";

export const metadata: Metadata = {
    title: { absolute: title },
    description,
    keywords: [
        "about slayt",
        "parenting app",
        "positive parenting",
        "kids responsibility",
        "family routines",
    ],
    alternates: { canonical: "/about" },
    openGraph: {
        type: "website",
        url: "https://theslayt.com/about",
        siteName: "SLAYT",
        title,
        description,
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "About Slayt",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title,
        description,
        images: ["/og-image.png"],
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
