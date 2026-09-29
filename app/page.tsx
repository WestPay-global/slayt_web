import { Metadata } from "next";

import Navbar from "@/components/navbar";
import Hero from "@/components/home/hero";
import PainPoints from "@/components/home/pain-points";
import HowItWorks from "@/components/home/how-it-works";
import Testimonials from "@/components/home/testimonials";
import AppPreview from "@/components/home/app-preview";
import CTASection from "@/components/cta-section";
import Footer from "@/components/footer";

const title = "Slayt | Parenting App for Confident, Independent Kids";
const description =
  "Build family routines, encourage responsibility and celebrate your child’s progress. Slayt gives parents and children a shared way to grow together.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://theslayt.com",
    siteName: "SLAYT",
    title,
    description,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Slayt parenting app",
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
