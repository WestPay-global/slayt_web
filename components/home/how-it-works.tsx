"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/section-heading";
import Image from "next/image";

import numberImg1 from "@/images/1.png";
import numberImg2 from "@/images/2.png";
import numberImg3 from "@/images/3.png";
import phone1 from "@/images/slider1.png";
import phone2 from "@/images/slider2.png";
import phone3 from "@/images/slider3.png";

const phoneScreens = [
    { src: phone1, alt: "Set date & time for task assignment" },
    { src: phone2, alt: "Child marks task as complete" },
    { src: phone3, alt: "Streak bonus applied automatically" },
];

// The wave SVG viewBox is 1000 x 260
// Path: starts bottom-left, arcs UP to top-center, arcs back DOWN to bottom-right
// M 80 210  C 200 210, 350 50, 500 50  C 650 50, 800 210, 920 210
const WAVE_PATH =
    "M 80 210 C 200 210, 350 50, 500 50 C 650 50, 800 210, 920 210";

// Badge positions in SVG coordinate space (out of 1000 x 260 viewBox)
// Step1: x=80, y=210 (bottom-left)
// Step2: x=500, y=50 (top-center)
// Step3: x=920, y=210 (bottom-right)

export default function HowItWorks() {
    const [activeStep, setActiveStep] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveStep((prev) => (prev + 1) % 3);
        }, 3500);
        return () => clearInterval(interval);
    }, []);

    const badgeClass = (stepIndex: number) =>
        `flex h-10 w-10 items-center justify-center rounded-full shadow-md transition-all duration-500 ${
            activeStep >= stepIndex ? "bg-blue" : "bg-gray-200"
        }`;

    const CheckIcon = () => (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
                d="M3.5 8l3 3 6-6"
                stroke="white"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );

    const DotIcon = () => <div className="h-3 w-3 rounded-full bg-gray-400" />;

    return (
        <section className="py-20 px-6">
            <div className="mx-auto max-w-6xl">
                <SectionHeading
                    title="How Slayt turns chaos into calm"
                    subtitle="Slayt helps parents build responsibility through tasks, rewards, and consistency"
                />

                {/* ─── Desktop Wave Layout ─── */}
                <div className="hidden md:block mt-10 ">
                    <div
                        className="relative w-full"
                        style={{ height: "340px" }}
                    >
                        {/* ─── Wave SVG ─── */}
                        <svg
                            className="absolute inset-0 w-full"
                            style={{ height: "260px" }}
                            viewBox="0 0 1000 260"
                            preserveAspectRatio="none"
                            fill="none"
                        >
                            {/* Gray base wave — always visible */}
                            <path
                                d={WAVE_PATH}
                                stroke="#d1d5db"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                fill="none"
                            />

                            {/* Blue animated wave — draws progressively */}
                            <motion.path
                                d={WAVE_PATH}
                                stroke="#12A0F5"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                fill="none"
                                initial={{ pathLength: 0 }}
                                animate={{
                                    pathLength:
                                        activeStep === 0
                                            ? 0
                                            : activeStep === 1
                                              ? 0.5
                                              : 1,
                                }}
                                transition={{
                                    duration: 1.4,
                                    ease: "easeInOut",
                                }}
                            />

                            {/* Travelling dot */}
                            <motion.circle
                                r="7"
                                fill="white"
                                stroke="#12A0F5"
                                strokeWidth="2.5"
                                animate={{
                                    offsetDistance:
                                        activeStep === 0
                                            ? "0%"
                                            : activeStep === 1
                                              ? "50%"
                                              : "100%",
                                }}
                                transition={{
                                    duration: 1.6,
                                    ease: "easeInOut",
                                }}
                                style={
                                    {
                                        offsetPath: `path('${WAVE_PATH}')`,
                                    } as any
                                }
                            />
                        </svg>

                        {/* ─── Step 1 badge + text: bottom-left ─── */}
                        {/* Badge center at 8%, 80.8% of SVG height (260px) = ~210px from top */}
                        {/* SVG is 260px tall, container is 340px, so badge top = 210 - 20 = 190px */}
                        <div
                            className="absolute"
                            style={{ left: "6%", top: "190px" }}
                        >
                            {/* Badge */}
                            <div className={badgeClass(0)}>
                                <CheckIcon />
                            </div>
                            {/* Text + number below badge */}
                            <div className="-mt-32 flex items-start gap-2">
                                <div>
                                    <h3
                                        className={`text-sm font-bold leading-snug transition-colors duration-300 whitespace-nowrap ${activeStep === 0 ? "text-[#0B2E4E]" : "text-[#0B2E4E]/40"}`}
                                    >
                                        Assign tasks once
                                    </h3>
                                    <p className="mt-1 text-xs text-gray-400 leading-relaxed max-w-[150px]">
                                        Set it. Forget it. Slayt handles
                                        reminders.
                                    </p>
                                </div>
                                {/* Big faded number to the right */}
                                <Image
                                    src={numberImg1}
                                    alt="1"
                                    width={50}
                                    height={65}
                                    className={`select-none flex-shrink-0 -mt-12 transition-opacity duration-500 ${activeStep === 0 ? "opacity-100" : "opacity-25"}`}
                                />
                            </div>
                        </div>

                        {/* ─── Step 2 badge + text: top-center ─── */}
                        {/* Badge center at 50%, y=50px from top → top = 50 - 20 = 30px */}
                        <div
                            className="absolute"
                            style={{
                                left: "50%",
                                top: "30px",
                                transform: "translateX(-50%)",
                            }}
                        >
                            {/* Badge */}
                            <div className={`${badgeClass(1)} mx-auto`}>
                                {activeStep >= 1 ? <CheckIcon /> : <DotIcon />}
                            </div>
                            {/* Text + number below */}
                            <div className="mt-8 flex items-start gap-6">
                                <div>
                                    <h3
                                        className={`text-sm font-bold leading-snug transition-colors duration-300 ${activeStep === 1 ? "text-[#0B2E4E]" : "text-[#0B2E4E]/40"}`}
                                    >
                                        Kids check tasks themselves
                                    </h3>
                                    <p className="mt-1 text-xs text-gray-400 leading-relaxed max-w-[160px]">
                                        No chasing. No nagging. No shouting.
                                    </p>
                                </div>
                                <Image
                                    src={numberImg2}
                                    alt="2"
                                    width={50}
                                    height={65}
                                    className={`select-none flex-shrink-0 -mt-1 transition-opacity duration-500 ${activeStep === 1 ? "opacity-100" : "opacity-25"}`}
                                />
                            </div>
                        </div>

                        {/* ─── Step 3 badge + text: bottom-right ─── */}
                        {/* Badge center at 92%, y=210px → top = 190px */}
                        <div
                            className="absolute"
                            style={{ left: "90%", top: "190px" }}
                        >
                            <div className={badgeClass(2)}>
                                {activeStep >= 2 ? <CheckIcon /> : <DotIcon />}
                            </div>
                            <div className="mt-3 -ml-16 flex items-start gap-2">
                                <div>
                                    <h3
                                        className={`text-sm font-bold leading-snug transition-colors duration-300 whitespace-nowrap ${activeStep === 2 ? "text-[#0B2E4E]" : "text-[#0B2E4E]/40"}`}
                                    >
                                        Rewards build habits
                                    </h3>
                                    <p className="mt-1 text-xs text-gray-400 leading-relaxed max-w-[150px]">
                                        Responsibility becomes automatic.
                                    </p>
                                </div>
                                <Image
                                    src={numberImg3}
                                    alt="3"
                                    width={50}
                                    height={65}
                                    className={`select-none flex-shrink-0 -mt-1 transition-opacity duration-500 ${activeStep === 2 ? "opacity-100" : "opacity-25"}`}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* ─── Mobile: zigzag ─── */}
                <div className="flex flex-col mt-10 md:hidden relative px-4">
                    {/* Static wave SVG */}
                    <svg
                        className="absolute inset-0 w-full h-full"
                        viewBox="0 0 100 300"
                        preserveAspectRatio="none"
                        fill="none"
                    >
                        <path
                            d="M 50 20 C 70 80, 30 150, 50 280"
                            stroke="#F5F5F5"
                            strokeWidth="1"
                            strokeLinecap="round"
                            opacity="0.4"
                        />
                    </svg>

                    {[
                        {
                            img: numberImg1,
                            title: "Assign tasks once",
                            desc: "Set it. Forget it. Slayt handles reminders.",
                            step: 0,
                            side: "right",
                        },
                        {
                            img: numberImg2,
                            title: "Kids check tasks themselves",
                            desc: "No chasing. No nagging. No shouting.",
                            step: 1,
                            side: "left",
                        },
                        {
                            img: numberImg3,
                            title: "Rewards build habits",
                            desc: "Responsibility becomes automatic.",
                            step: 2,
                            side: "right",
                        },
                    ].map(({ img, title, desc, step, side }) => (
                        <div
                            key={step}
                            className="relative flex items-center py-10"
                        >
                            {/* Badge centered on the line */}
                            <div className="absolute left-1/2 -translate-x-1/2 z-10">
                                {step === 0 ? (
                                    <div className="flex h-9 w-9 items-center justify-center border rounded-full border-gray-400">
                                        <svg
                                            width="13"
                                            height="13"
                                            viewBox="0 0 13 13"
                                            fill="none"
                                        >
                                            <path
                                                d="M3 6.5l2.5 2.5 4.5-4.5"
                                                stroke="gray"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                ) : (
                                    <div className="flex h-9 w-9 items-center justify-center">
                                        {/* <div className="h-2.5 w-2.5 rounded-full bg-gray-900" /> */}
                                    </div>
                                )}
                            </div>

                            {/* Text left side */}
                            {side === "left" && (
                                <>
                                    <div className="w-1/2 pr-8 text-left">
                                        <h3
                                            className={`text-[1.25rem] font-bold transition-colors duration-300 ${activeStep === step ? "text-navy" : "text-navy/30"}`}
                                        >
                                            {title}
                                        </h3>
                                        <p className=" text-muted_foreground mt-1">
                                            {desc}
                                        </p>
                                    </div>
                                    <div className="w-1/2 pl-8 flex justify-start">
                                        <Image
                                            src={img}
                                            alt={`${step + 1}`}
                                            width={40}
                                            height={50}
                                            className={`select-none transition-opacity duration-500 ${activeStep === step ? "opacity-100" : "opacity-20"}`}
                                        />
                                    </div>
                                </>
                            )}

                            {/* Text right side */}
                            {side === "right" && (
                                <>
                                    <div className="w-1/2 pr-8 flex justify-end">
                                        <Image
                                            src={img}
                                            alt={`${step + 1}`}
                                            width={40}
                                            height={50}
                                            className={`select-none transition-opacity duration-500 ${activeStep === step ? "opacity-100" : "opacity-20"}`}
                                        />
                                    </div>
                                    <div className="w-1/2 pl-8 text-left">
                                        <h3
                                            className={`font-bold transition-colors duration-300 ${activeStep === step ? "text-navy" : "text-navy/30"}`}
                                        >
                                            {title}
                                        </h3>

                                        <p className=" text-muted_foreground mt-1">
                                            {desc}
                                        </p>
                                    </div>
                                </>
                            )}
                        </div>
                    ))}
                </div>

                {/* ─── Phone image ─── */}
                <div className="mt-10 left-1/2 right-1/2 w-screen -mx-[50vw] flex justify-center overflow-hidden bg-gradient-to-b from-[#F4FBF9] via-[#CFF3EC] to-[#33E4C6] relative">
                    <div
                        className="relative w-[1400px] h-[620px]"
                        style={{ marginBottom: "-210px" }}
                    >
                        <AnimatePresence mode="sync">
                            <motion.div
                                key={activeStep}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="absolute inset-0"
                            >
                                <Image
                                    src={phoneScreens[activeStep].src}
                                    alt={phoneScreens[activeStep].alt}
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
