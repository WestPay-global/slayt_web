"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Logo from "@/images/logo.png";
// import Blog from "@/images/blog-post.gif";

const navLinks = [
    { href: "/features", label: "Features" },
    { href: "/about", label: "About" },
    { href: "/pricing", label: "Pricing" },
    { href: "/contact", label: "Contact" },
    { href: "/blog", label: "Blog" },
];

export default function Navbar() {
    const pathname = usePathname();
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
            <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
                <Link href="/" className="flex items-center gap-1.5">
                    <Image src={Logo} alt="logo image" priority />
                </Link>

                {/* Desktop Nav */}
                <ul className="hidden items-center gap-8 md:flex">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                className={`text-sm font-medium transition-colors hover:text-blue ${
                                    pathname === link.href
                                        ? "text-blue"
                                        : "text-navy"
                                }`}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Mobile toggle */}
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="md:hidden text-navy"
                    aria-label={mobileOpen ? "Close menu" : "Open menu"}
                >
                    {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </nav>

            {/* Mobile Nav */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden border-b border-border bg-background md:hidden"
                    >
                        <ul className="flex flex-col gap-4 px-6 py-4">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        onClick={() => setMobileOpen(false)}
                                        className={`block text-md font-medium transition-colors hover:text-blue ${
                                            pathname === link.href
                                                ? "text-blue"
                                                : "text-navy"
                                        }`}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
