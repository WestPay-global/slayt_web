"use client";

import Link from "next/link";
import Image from "next/image";
import Logo from "@/images/logo.png";
import { MapPin, Mail, Phone } from "lucide-react";

import Apple from "@/images/apple.png";
import Google from "@/images/google.png";

const APP_STORE_URL =
    "https://apps.apple.com/ng/app/slayt-closer-together/id6470950940";
const PLAY_STORE_URL =
    "https://play.google.com/store/apps/details?id=com.slayt&hl=en";

const whySlayt = [
    { label: "About us", href: "/about" },
    { label: "Pricing", href: "/pricing" },
    { label: "Features", href: "/features" },
    { label: "Tasks and Rewards", href: "/tasks-and-rewards" },
];

const support = [
    { label: "Accessibility", href: "/accessibility" },
    { label: "Terms and Conditions", href: "/terms" },
    { label: "FAQs", href: "/faq" },
    { label: "Privacy Policy", href: "/privacy" },
];

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="border-t border-border" id="footer">
            <div className="mx-auto max-w-6xl px-6 py-16">
                <div className="grid gap-10 md:grid-cols-4">
                    {/* Brand */}
                    <div>
                        <Link
                            href="/"
                            className="flex items-center gap-1.5 mb-4"
                        >
                            <Image src={Logo} alt="logo image" priority />
                        </Link>
                        <p className="text-sm text-muted_foreground leading-relaxed mb-6">
                            Slayt helps parents raise responsible, confident
                            kids without shouting, chasing or daily stress
                        </p>
                        <p className="text-xs text-muted_foreground mb-4">
                            Join the 500+ families who signed up today
                        </p>
                        <div className="flex gap-3">
                            <a
                                href={APP_STORE_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Image
                                    src={Apple}
                                    alt="Download on the App Store"
                                    priority
                                    className="w-[130px] h-[40px]"
                                />
                            </a>
                            <a
                                href={PLAY_STORE_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Image
                                    src={Google}
                                    alt="Get it on Google Play"
                                    priority
                                    className="w-[130px] h-[40px]"
                                />
                            </a>
                        </div>
                    </div>

                    {/* Why Slayt? */}
                    <div>
                        <h4 className="mb-4 text-sm font-bold text-navy">
                            {"Why Slayt?"}
                        </h4>
                        <ul className="flex flex-col gap-3">
                            {whySlayt.map((item) => (
                                <li key={item.label}>
                                    <Link
                                        href={item.href}
                                        className="text-sm text-muted_foreground hover:text-blue transition-colors"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="mb-4 text-sm font-bold text-navy">
                            Support
                        </h4>
                        <ul className="flex flex-col gap-3">
                            {support.map((item) => (
                                <li key={item.label}>
                                    <Link
                                        href={item.href}
                                        className="text-sm text-muted_foreground hover:text-blue transition-colors"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="mb-4 text-sm font-bold text-navy">
                            Contact
                        </h4>
                        <ul className="flex flex-col gap-4">
                            <li className="flex items-start gap-2 text-sm text-muted_foreground">
                                <MapPin
                                    size={16}
                                    className="mt-0.5 shrink-0 text-muted_foreground"
                                />
                                <span>
                                    624 Hamilton Crescent, Milton, Ontario,
                                    Canada
                                </span>
                            </li>
                            <li className="flex items-center gap-2 text-sm text-muted_foreground">
                                <Phone
                                    size={16}
                                    className="shrink-0 text-muted_foreground"
                                />
                                <span>+16473666979</span>
                            </li>
                            <li className="flex items-center gap-2 text-sm text-muted_foreground">
                                <Mail
                                    size={16}
                                    className="shrink-0 text-muted_foreground"
                                />
                                <span>Support.slayt@earlybirdcrystals.com</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-border">
                <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
                    <div>
                        <div className="flex items-center gap-4">
                            <button
                                onClick={scrollToTop}
                                className="text-sm text-muted_foreground hover:text-blue transition-colors flex items-center gap-2"
                            >
                                Back to top
                                <span className="flex h-6 w-6 items-center justify-center rounded-full border border-border text-xs">
                                    &uarr;
                                </span>
                            </button>
                        </div>
                        <p className="mt-2 hidden text-xs text-muted_foreground sm:block">
                            &copy; 2026 Slayt. All Rights Reserved.
                        </p>
                    </div>
                    <div className="flex items-center gap-4">
                        {/* Social icons */}
                        {[
                            {
                                label: "X",
                                href: "#",
                                path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
                            },
                            {
                                label: "Facebook",
                                href: "https://www.facebook.com/share/1AU1cNY8DH/?mibextid=wwXIfr",
                                path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
                            },
                            {
                                label: "Instagram",
                                href: "https://www.instagram.com/slayt3131?igsh=NjU2ZnFmN25rczZj",
                                path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z",
                            },
                            {
                                label: "LinkedIn",
                                href: "#",
                                path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
                            },
                            {
                                label: "TikTok",
                                href: "https://www.tiktok.com/@theslayt?_r=1&_t=ZS-96J8DFwFAMH",
                                path: "M19.589 6.686a4.793 4.793 0 01-3.77-4.718h-3.193v13.548a2.896 2.896 0 11-2.896-2.896c.298 0 .587.044.861.125V9.486a6.084 6.084 0 00-.861-.061A6.09 6.09 0 1015.82 15.514V8.687a7.972 7.972 0 004.67 1.507V6.686h-.901z",
                            },
                        ].map(({ label, href, path }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted_foreground hover:text-blue transition-colors border rounded-full py-2 px-2"
                                aria-label={label}
                            >
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                    <path d={path} />
                                </svg>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
