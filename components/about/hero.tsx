"use client";

import { useState } from "react";
import { ArrowRight, Play } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function AboutHero() {
    const [showVideo, setShowVideo] = useState(false);

    return (
        <section className="bg-background px-6 py-16 md:py-24">
            <div className="mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="font-bold text-navy ">
                        We built Slayt for families{" "}
                        <br className="hidden md:block" />
                        <span className="text-blue">like ours.</span>
                    </h1>
                    <p className="mt-4 max-w-lg text-muted_foreground ">
                        {
                            "Because parenting shouldn\u2019t feel like a daily argument"
                        }
                    </p>
                    <div className="mt-8 flex flex-wrap items-center gap-4">
                        <button
                            onClick={() => {
                                const footer =
                                    document.getElementById("footer");
                                footer?.scrollIntoView({ behavior: "smooth" });
                            }}
                            className="flex items-center gap-2 rounded-[0.5rem] bg-blue px-6 py-3 text-sm font-semibold text-background shadow-lg transition-transform hover:scale-105"
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
                    </div>
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
