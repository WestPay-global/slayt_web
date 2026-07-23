"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import Logo from "@/images/logo.png";

const navLinks = [
    { href: "/features", label: "Features" },
    { href: "/about", label: "About" },
    { href: "/pricing", label: "Pricing" },
    { href: "/contact", label: "Contact" },
    {
        label: "Resources",
        children: [
            { href: "/blog", label: "Blog" },
            { href: "/assessment", label: "Assessment" },
        ],
    },
];

export default function Navbar() {
    const pathname = usePathname();

    const [mobileOpen, setMobileOpen] = useState(false);
    const [resourcesOpen, setResourcesOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
            <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
                <Link href="/" className="flex items-center gap-1.5">
                    <Image src={Logo} alt="Logo" priority />
                </Link>

                {/* Desktop Navigation */}
                <ul className="hidden items-center gap-8 md:flex">
                    {navLinks.map((link) => {
                        if ("children" in link) {
                            return (
                                <li
                                    key={link.label}
                                    className="relative"
                                    onMouseEnter={() => setResourcesOpen(true)}
                                    onMouseLeave={() => setResourcesOpen(false)}
                                >
                                    <button className="flex items-center gap-1 text-sm font-medium text-navy transition-colors hover:text-blue">
                                        {link.label}
                                        <ChevronDown
                                            size={16}
                                            className={`transition-transform duration-200 ${
                                                resourcesOpen
                                                    ? "rotate-180"
                                                    : ""
                                            }`}
                                        />
                                    </button>

                                    <AnimatePresence>
                                        {resourcesOpen && (
                                            <motion.div
                                                initial={{
                                                    opacity: 0,
                                                    y: 8,
                                                }}
                                                animate={{
                                                    opacity: 1,
                                                    y: 0,
                                                }}
                                                exit={{
                                                    opacity: 0,
                                                    y: 8,
                                                }}
                                                transition={{
                                                    duration: 0.18,
                                                }}
                                                className="absolute left-0 top-full mt-3 w-52 overflow-hidden rounded-xl border border-border bg-white shadow-xl"
                                            >
                                                {link.children.map((child) => (
                                                    <Link
                                                        key={child.href}
                                                        href={child.href}
                                                        className={`block px-5 py-3 text-sm transition-colors hover:bg-gray-50 hover:text-blue ${
                                                            pathname ===
                                                            child.href
                                                                ? "text-blue"
                                                                : "text-navy"
                                                        }`}
                                                    >
                                                        {child.label}
                                                    </Link>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </li>
                            );
                        }

                        return (
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
                        );
                    })}
                </ul>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="text-navy md:hidden"
                    aria-label={mobileOpen ? "Close menu" : "Open menu"}
                >
                    {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </nav>

            {/* Mobile Navigation */}
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
                            {navLinks.map((link) => {
                                if ("children" in link) {
                                    return (
                                        <li key={link.label}>
                                            <button
                                                onClick={() =>
                                                    setResourcesOpen(
                                                        !resourcesOpen
                                                    )
                                                }
                                                className="flex w-full items-center justify-between text-md font-medium text-navy"
                                            >
                                                {link.label}
                                                <ChevronDown
                                                    size={18}
                                                    className={`transition-transform ${
                                                        resourcesOpen
                                                            ? "rotate-180"
                                                            : ""
                                                    }`}
                                                />
                                            </button>

                                            <AnimatePresence>
                                                {resourcesOpen && (
                                                    <motion.div
                                                        initial={{
                                                            height: 0,
                                                            opacity: 0,
                                                        }}
                                                        animate={{
                                                            height: "auto",
                                                            opacity: 1,
                                                        }}
                                                        exit={{
                                                            height: 0,
                                                            opacity: 0,
                                                        }}
                                                        className="overflow-hidden"
                                                    >
                                                        <div className="mt-2 ml-4 flex flex-col gap-3">
                                                            {link.children.map(
                                                                (child) => (
                                                                    <Link
                                                                        key={
                                                                            child.href
                                                                        }
                                                                        href={
                                                                            child.href
                                                                        }
                                                                        onClick={() =>
                                                                            setMobileOpen(
                                                                                false
                                                                            )
                                                                        }
                                                                        className={`text-sm transition-colors hover:text-blue ${
                                                                            pathname ===
                                                                            child.href
                                                                                ? "text-blue"
                                                                                : "text-navy"
                                                                        }`}
                                                                    >
                                                                        {
                                                                            child.label
                                                                        }
                                                                    </Link>
                                                                )
                                                            )}
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </li>
                                    );
                                }

                                return (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            onClick={() =>
                                                setMobileOpen(false)
                                            }
                                            className={`block text-md font-medium transition-colors hover:text-blue ${
                                                pathname === link.href
                                                    ? "text-blue"
                                                    : "text-navy"
                                            }`}
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
