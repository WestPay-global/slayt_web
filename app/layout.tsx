import type { Metadata } from "next";
import { Smooch } from "next/font/google";

import "./globals.css";

const smooch = Smooch({
  subsets: ["latin"],
  variable: "--font-smooch",
  weight: ["400"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://slayt.app"),

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
    url: "https://slayt.app",
    title: "Family Chore App | SLAYT Turns Chores into Adventures",
    description:
      "Assign tasks, track progress in real time, reward kids, and turn daily chores into meaningful habits.",
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
    title: "Family Chore App | SLAYT",
    description:
      "Turn chores into habits kids actually follow. Assign tasks, reward progress, and build responsibility.",
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
      <body className="antialiased">{children}</body>
    </html>
  );
}
