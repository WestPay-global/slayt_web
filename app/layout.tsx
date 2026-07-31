import type { Metadata } from "next";
import Script from "next/script";
import { Smooch } from "next/font/google";
import ScrollToTop from "@/components/scroll-to-top";

import "./globals.css";

const smooch = Smooch({
    subsets: ["latin"],
    variable: "--font-smooch",
    weight: ["400"],
});

export const metadata: Metadata = {
    metadataBase: new URL("https://theslayt.com"),

    title: {
        default: "Family Chore App | SLAYT Turns Chores into Adventures",
        template: "%s | SLAYT",
    },

    description:
        "Family chore app that makes responsibilities fun for the whole family. Assign tasks, track progress in real time, reward kids, and start a free trial today.",

    keywords: [
        "family chore app",
        "kids responsibility app",
        "task management for families",
        "chore tracker",
        "reward system for kids",
        "parenting app",
        "habit building for families",
    ],

    authors: [{ name: "SLAYT" }],
    creator: "SLAYT",
    publisher: "SLAYT",

    robots: {
        index: true,
        follow: true,
    },

    verification: {
        google: "j9Q3L3d6Ugxp7ZSJF6JrFaQ3bOJuYkKPPCeh4iPvbHI",
    },

    openGraph: {
        type: "website",
        url: "https://theslayt.com",
        siteName: "SLAYT",
        images: [
            {
                url: "/og-image.png", // create this in /public
                width: 1200,
                height: 630,
                alt: "SLAYT Family Chore App",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        images: ["/og-image.png"],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${smooch.variable}`}>
          {/* Google Ads Global Site Tag */}
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
                              `}
            </Script>
            <body className="antialiased">
                <ScrollToTop />
                {children}
            </body>
        </html>
    );
}
