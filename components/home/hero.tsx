"use client";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Play, CheckCircle2 } from "lucide-react";
import heroImage from "@/images/hero-kid-mom.png";
import kid1 from "@/images/kid-chores-1.png";
import kid2 from "@/images/kid-chores-2.png";
import kid3 from "@/images/kid-chores-3.png";
import Vector from "@/images/Vector.png";
import { BouncingText } from "../word-animate";

const images = [
    { src: heroImage, alt: "Mother and son doing dishes together" },
    { src: kid1, alt: "Child making their bed" },
    { src: kid2, alt: "Child setting the table" },
    { src: kid3, alt: "Child cleaning the counter" },
];

export default function Hero() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [blinkingArrow, setBlinkingArrow] = useState<"left" | "right" | null>(
        null,
    );
    const [showVideo, setShowVideo] = useState(false);

    const MotionImage = motion(Image);

    const goToNext = useCallback(() => {
        setBlinkingArrow("right");
        setTimeout(() => {
            setActiveIndex((prev) => (prev + 1) % images.length);
            setBlinkingArrow(null);
        }, 300);
    }, []);

    useEffect(() => {
        const interval = setInterval(goToNext, 4000);
        return () => clearInterval(interval);
    }, [goToNext]);

    const smallImages = Array.from({ length: images.length - 1 }, (_, i) => {
        const index = (activeIndex + 1 + i) % images.length;
        return { ...images[index], originalIndex: index };
    });

    return (
        <section className="relative overflow-hidden px-6 pb-16 pt-12 md:pt-20 md:pb-24 border-b">
            <div className="mx-auto max-w-6xl">
                <div className="text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="font-bold text-navy text-balance"
                    >
                        Stop arguing about chores.{" "}
                        <br className="hidden md:block" />
                        Start raising <BouncingText text="responsible kids" />
                        &mdash; without reminders.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="mx-auto mt-6 max-w-lg text-muted_foreground"
                    >
                        Slayt turns daily battles into habits kids actually
                        follow. <br />
                        Most parents see changes in the first 7 days.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="mt-8 flex flex-wrap items-center justify-center gap-4"
                    >
                        <button
                            onClick={() => {
                                const footer =
                                    document.getElementById("footer");
                                footer?.scrollIntoView({ behavior: "smooth" });
                            }}
                            className="flex items-center gap-2 rounded-[0.5rem] bg-blue px-6 py-3 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-105"
                        >
                            Start Free <ArrowRight size={16} />
                        </button>

                        {/* Watch Demo Button */}
                        <motion.button
                            onClick={() => setShowVideo(true)}
                            className="flex items-center gap-2 text-sm font-semibold text-navy hover:text-teal transition-colors group"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-teal text-white shadow-lg group-hover:scale-110 transition-transform">
                                <Play size={18} fill="currentColor" />
                            </span>
                            Watch 30s Demo
                        </motion.button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.45 }}
                        className="mt-6 flex flex-wrap items-center justify-center gap-2 text-xs text-muted_foreground"
                    >
                        <span className="flex items-center gap-1.5">
                            <CheckCircle2 size={14} className="text-navy" />
                            No credit card
                        </span>
                        <span className="flex items-center gap-1.5">
                            <CheckCircle2 size={14} className="text-navy" />
                            Works for ages 4–12
                        </span>
                        <span className="flex items-center gap-1.5">
                            <CheckCircle2 size={14} className="text-navy" />
                            Parent approved
                        </span>
                    </motion.div>
                </div>

                {/* Animated image gallery */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                    className="mt-8"
                >
                    <div className="relative mt-12 hidden md:block">
                        <MotionImage
                            key={activeIndex}
                            src={Vector}
                            alt="Vector image pointer"
                            animate={{ opacity: [1, 0.6, 1] }}
                            transition={{
                                duration: 1.4,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="absolute top-[-14rem] right-[20rem]"
                        />
                    </div>

                    <div className="grid grid-cols-3 gap-3 md:grid-cols-5 md:gap-4">
                        {/* Main Image */}
                        <div className="col-span-3 md:col-span-3 row-span-3 relative overflow-hidden rounded-2xl aspect-[4/3]">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeIndex}
                                    initial={{ opacity: 0, scale: 1.05 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.5 }}
                                    className="absolute inset-0"
                                >
                                    <Image
                                        src={images[activeIndex].src}
                                        alt={images[activeIndex].alt}
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Small Images */}
                        {smallImages.map((img, i) => {
                            const originalIndex = images.findIndex(
                                (im) => im.src === img.src,
                            );
                            return (
                                <motion.div
                                    key={img.alt}
                                    onClick={() =>
                                        setActiveIndex(originalIndex)
                                    }
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.3,
                                        delay: i * 0.05,
                                    }}
                                    className="col-span-1 md:col-span-2 relative overflow-hidden rounded-2xl cursor-pointer group aspect-square md:aspect-[28/10]"
                                >
                                    <Image
                                        src={img.src}
                                        alt={img.alt}
                                        fill
                                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-[#001F30]/45" />
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>

                {/* Social Proof */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-navy"
                >
                    <span className="flex items-center gap-1.5 font-semibold">
                        4.7 <span className="text-yellow-400">★</span> Rating
                    </span>
                    <span className="h-4 w-[2px] bg-navy" />
                    <span className="text-navy font-semibold">
                        Used by 500+ families
                    </span>
                </motion.div>
            </div>

            {/* ==================== VIDEO MODAL ==================== */}
            <AnimatePresence>
                {showVideo && (
                    <div
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4"
                        onClick={() => setShowVideo(false)}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.4 }}
                            className="relative w-full max-w-5xl rounded-3xl overflow-hidden shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setShowVideo(false)}
                                className="absolute -top-[-5] -right-[-2] z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white text-xl font-bold text-black shadow-xl hover:bg-gray-100 transition-all"
                            >
                                ✕
                            </button>

                            {/* YouTube Video */}
                            <div className="aspect-video bg-navy">
                                <iframe
                                    src="https://www.youtube.com/embed/hkv8SgRZ7J8?autoplay=1&rel=0&modestbranding=1"
                                    title="Slayt Demo"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="w-full h-full"
                                />
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}
