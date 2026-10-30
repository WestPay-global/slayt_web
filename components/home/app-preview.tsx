"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import SectionHeading from "@/components/section-heading";
import bind from "@/images/App_preview.png";

const metrics = [
    { label: "Reliability", score: 4.1, color: "bg-orange-400" },
    { label: "Usability", score: 4.5, color: "bg-cyan" },
    { label: "Performance", score: 4.3, color: "bg-teal" },
    { label: "Customer Support", score: 4.7, color: "bg-navy" },
];

export default function AppPreview() {
    return (
        <section className="pt-20 px-6 overflow-hidden">
            <div className="mx-auto max-w-6xl mb-20">
                <SectionHeading
                    title="App Preview"
                    subtitle="Used daily by real families who wanted less stress"
                />

                <div className="mt-14 grid gap-8 lg:grid-cols-[2fr_1.2fr_1.8fr] items-start">
                    {/* ── Left: Metrics card ── */}
                    <motion.div
                        initial={{ x: -30 }}
                        whileInView={{ x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="rounded-2xl border border-border bg-background shadow-md p-8"
                    >
                        {/* Progress bars */}
                        <div className="space-y-5">
                            {metrics.map((m) => (
                                <div key={m.label}>
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-sm font-semibold text-navy">
                                            {m.label}
                                        </span>
                                        <span className="text-sm font-bold text-navy">
                                            {m.score}
                                        </span>
                                    </div>
                                    <div className="h-2 w-full rounded-full bg-border">
                                        <motion.div
                                            className={`h-2 rounded-full ${m.color}`}
                                            initial={{ width: 0 }}
                                            whileInView={{
                                                width: `${(m.score / 5) * 100}%`,
                                            }}
                                            viewport={{ once: true }}
                                            transition={{
                                                duration: 0.8,
                                                ease: "easeOut",
                                            }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* ── Middle: text ── */}
                    <motion.div
                        initial={{ y: 20 }}
                        whileInView={{ y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="flex flex-col bg-red-500justify-center items-center text-center md:items-start md:text-left"
                    >
                        <h3 className="font-bold text-navy mb-1 md:whitespace-nowrap">
                            This is what calm parenting looks like.
                        </h3>
                        <ul className="space-y-4">
                            {[
                                "Kids take ownership",
                                "Parents stop chasing",
                                "Habits stick",
                            ].map((item) => (
                                <li
                                    key={item}
                                    className="flex items-center gap-2 text-md text-muted_foreground"
                                >
                                    <CheckCircle2
                                        size={16}
                                        className="text-navy shrink-0"
                                    />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* ── Right: Phone mockup ── */}
                    <motion.div
                        initial={{ x: 30 }}
                        whileInView={{ x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="overflow-visible mt-12 -mr-6 -mb-20 -ml-10 md:-ml-6 md:mt-[10.2rem] md:-mr-0 md:-mb-24"
                    >
                        <Image
                            src={bind}
                            alt="Slayt parent dashboard showing weekly points, completed chores and each child's streak"
                            className="w-full h-auto object-contain scale-125 origin-bottom md:scale-150 md:origin-bottom"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
