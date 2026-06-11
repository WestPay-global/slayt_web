"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

import Mockup1 from "@/images/mock1.png";
import Mockup2 from "@/images/mock2.png";
import Mockup3 from "@/images/mock3.png";

const blocks = [
    {
        title: "Kids take ownership \u2014 not reminders.",
        subtitle:
            "Slayt helps children check tasks themselves, track streaks, and earn rewards without being chased.",
        features: [
            "Self-check task system",
            "Visual streak tracking",
            "Smart reminders (optional)",
            "Clear task expectations",
        ],
        highlight: "Less nagging.\nMore responsibility.",
        image: Mockup1,
        bgClass: "bg-background",
        reversed: false,
    },
    {
        title: "You stop repeating yourself.",
        subtitle:
            "Set it once. Slayt handles reminders, approvals, and tracking.",
        features: [
            "Parent approval workflow",
            "Weekly habit insights",
            "Nudging analytics",
            "Overdue tracking",
        ],
        highlight: "You regain energy.",
        image: Mockup3,
        bgClass: "bg-[#E0F4FF]",
        reversed: false,
    },
    {
        title: "Rewards that build habits \u2014 not entitlement.",
        subtitle:
            "Slayt connects effort to outcomes. Kids earn points through consistency \u2014 not negotiation.",
        features: [
            "Custom rewards",
            "Habit Score tracking",
            "Streak bonuses",
            "Points transparency",
        ],
        highlight: "Responsibility becomes\nautomatic.",
        image: Mockup2,
        bgClass: "bg-background",
        reversed: false,
    },
];

export default function FeatureBlocks() {
    return (
        <>
            {blocks.map((block, i) => (
                <section
                    key={block.title}
                    className={`${block.bgClass} py-20 px-6`}
                >
                    <div className="mx-auto max-w-6xl">
                        <div className="text-center mb-4">
                            <h2 className="text-center font-bold text-navy text-balance">
                                {block.title}
                            </h2>
                            <p className="mt-3 mx-auto max-w-md text-muted_foreground ">
                                {block.subtitle}
                            </p>
                        </div>
                        <div
                            className={`flex flex-col gap-8 lg:flex-row lg:items-center ${block.reversed ? "lg:flex-row-reverse" : ""}`}
                        >
                            {/* Text */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="flex-1"
                            >
                                <ul className="mt-6 space-y-4">
                                    {block.features.map((f) => (
                                        <li
                                            key={f}
                                            className="flex items-center gap-3 text-base text-muted_foreground"
                                        >
                                            <CheckCircle2
                                                size={20}
                                                className="text-blue shrink-0"
                                            />{" "}
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                                <p className="mt-8 text-2xl font-bold text-blue whitespace-pre-line">
                                    {" "}
                                    {block.highlight}
                                </p>
                            </motion.div>

                            {/* Image */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.15 }}
                                className="flex-1 flex justify-center"
                            >
                                <div className="relative w-[30rem]">
                                    <Image
                                        src={block.image}
                                        alt={block.title}
                                        width={384}
                                        height={768}
                                        className="w-full h-auto drop-shadow-2xl"
                                    />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>
            ))}
        </>
    );
}
