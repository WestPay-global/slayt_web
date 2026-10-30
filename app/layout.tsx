import type { Metadata } from "next";
import Script from "next/script";
import { Smooch } from "next/font/google";
import ScrollToTop from "@/components/scroll-to-top";
import { APP_STORE_URL, PLAY_STORE_URL } from "@/lib/links";
import { ogImage } from "@/lib/og";

import "./globals.css";

const smooch = Smooch({
    subsets: ["latin"],
    variable: "--font-smooch",
    weight: ["400"],
});

const description =
    "Build family routines, encourage responsibility and celebrate your child’s progress. Slayt gives parents and children a shared way to grow together.";

export const metadata: Metadata = {
    metadataBase: new URL("https://theslayt.com"),

    title: {
        default: "Slayt | Parenting App for Confident, Independent Kids",
        template: "%s | Slayt",
    },

    description,

    keywords: [
        "family chore app",
        "kids responsibility app",
        "task management for families",
        "chore tracker",
        "reward system for kids",
        "parenting app",
        "habit building for families",
    ],

    authors: [{ name: "Slayt" }],
    creator: "Slayt",
    publisher: "Slayt",

    robots: {
        index: true,
        follow: true,
    },

    verification: {
        google: "j9Q3L3d6Ugxp7ZSJF6JrFaQ3bOJuYkKPPCeh4iPvbHI",
        other: {
            "p:domain_verify": "558b08c592d49ca75d738a2af92a2e76",
        },
    },

    // Canonicals are set per page; a root canonical would be inherited by
    // pages without their own (e.g. blog posts) and point them at "/".

    openGraph: {
        type: "website",
        siteName: "Slayt",
        images: [ogImage],
    },

    twitter: {
        card: "summary_large_image",
        images: [ogImage.url],
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Organization",
            "@id": "https://theslayt.com/#org",
            name: "Slayt",
            url: "https://theslayt.com",
            logo: "https://theslayt.com/icon.png",
            sameAs: [
                "https://www.instagram.com/slayt3131",
                "https://www.tiktok.com/@theslayt",
                "https://www.facebook.com/share/1AU1cNY8DH/",
                APP_STORE_URL,
                PLAY_STORE_URL,
            ],
        },
        {
            "@type": "MobileApplication",
            name: "Slayt",
            operatingSystem: "iOS, Android",
            applicationCategory: "LifestyleApplication",
            description,
            url: "https://theslayt.com",
            image: "https://theslayt.com/og-image.png",
            installUrl: [APP_STORE_URL, PLAY_STORE_URL],
            audience: {
                "@type": "PeopleAudience",
                audienceType: "Parents of children aged 4–18",
            },
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
            publisher: { "@id": "https://theslayt.com/#org" },
        },
    ],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${smooch.variable}`}>
          {/* Google tag for Ads and Analytics */}
            <Script
                 src="https://www.googletagmanager.com/gtag/js?id=AW-17360140927"
                 strategy="afterInteractive"
            />
            <Script id="google-ads" strategy="afterInteractive">
                              {`
                                window.dataLayer = window.dataLayer || [];
                                function gtag(){dataLayer.push(arguments);}
                                gtag('js', new Date());
                                gtag('config', 'AW-17360140927');
                                gtag('config', 'G-T5W4G6JK46');
                              `}
            </Script>
            <body className="antialiased">
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
                    }}
                />
                <ScrollToTop />
                {children}
            </body>
        </html>
    );
}
