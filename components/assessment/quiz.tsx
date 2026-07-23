"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
    Heart,
    CheckCheck,
    UserRoundCheck,
    CalendarHeart,
    CalendarDays,
    Check,
    CheckCircle2,
    Circle,
    Lock,
    Send,
} from "lucide-react";

import Logo from "@/images/logo.png";
import Parent from "@/images/parent.png";
import Flower from "@/images/flower.png";
import AvatarBoy from "@/images/avatar-boy.png";
import AvatarGirl from "@/images/avatar-girl.png";
import Apple from "@/images/apple.png";
import Google from "@/images/google.png";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import {
    AGE_OPTIONS,
    ANALYSING_STEPS,
    QUIZ_STEPS,
    SCALE_OPTIONS,
    getResultTier,
} from "./data";

const PRIMARY_BTN =
    "bg-[#0B5CAD] text-white hover:bg-[#0A5199] transition-colors disabled:opacity-50 disabled:cursor-not-allowed";

type Phase = "intro" | "quiz" | "analysing" | "unlock" | "done";

const introBenefits = [
    { icon: Heart, label: "Your child’s Responsibility Score" },
    { icon: CheckCheck, label: "Personalised parenting recommendations" },
    { icon: UserRoundCheck, label: "Age-appropriate responsiilities" },
    { icon: CalendarHeart, label: "Family Routine Planner" },
    { icon: CalendarDays, label: "7-Day responsibility Challenge" },
];

const introPills = [
    "Less than 2-min",
    "No sign-up required",
    "Instant personalized results",
];

/** Max points from the five scored questions (steps 2-6). */
const MAX_RAW = 25;
const DISPLAY_MAX = 30;

export default function Quiz() {
    const [phase, setPhase] = useState<Phase>("intro");
    const [step, setStep] = useState(0);

    // answers
    const [age, setAge] = useState("");
    const [childFor, setChildFor] = useState<"Son" | "Daughter" | "">("");
    const [answers, setAnswers] = useState<Record<string, number>>({});

    // unlock form
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [consent, setConsent] = useState(false);
    const [submitting, setSubmitting] = useState(false);

    const totalSteps = QUIZ_STEPS.length;
    const current = QUIZ_STEPS[step];

    const scaledScore = useMemo(() => {
        const raw = Object.entries(answers)
            .filter(([id]) => id !== "child")
            .reduce((sum, [, v]) => sum + v, 0);
        return Math.round((raw / MAX_RAW) * DISPLAY_MAX);
    }, [answers]);

    const tier = useMemo(
        () => getResultTier(scaledScore, DISPLAY_MAX),
        [scaledScore],
    );

    const canContinue = () => {
        if (current.type === "child-info") return age !== "" && childFor !== "";
        return answers[current.id] !== undefined;
    };

    const handleNext = () => {
        if (step < totalSteps - 1) {
            setStep((s) => s + 1);
        } else {
            setPhase("analysing");
        }
    };

    const handleBack = () => {
        if (step === 0) {
            setPhase("intro");
        } else {
            setStep((s) => s - 1);
        }
    };

    const submitReport = async () => {
        setSubmitting(true);
        try {
            await fetch("/api/quiz-report", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    fullName,
                    email,
                    consent,
                    age,
                    childFor,
                    score: scaledScore,
                    maxScore: DISPLAY_MAX,
                    tier: tier.label,
                    summary: tier.summary,
                    strengths: tier.strengths,
                    opportunity: tier.opportunity,
                }),
            });
        } catch {
            // network failure shouldn't trap the user — the report is queued
        } finally {
            setSubmitting(false);
            setPhase("done");
        }
    };

    return (
        <div className="min-h-[70vh] bg-[#F5FAFD] px-4 py-10 md:py-16">
            <div
                className={`mx-auto ${
                    phase === "intro" ? "max-w-5xl" : "max-w-3xl"
                }`}
            >
                <AnimatePresence mode="wait">
                    {phase === "intro" && (
                        <IntroCard
                            key="intro"
                            onStart={() => {
                                setPhase("quiz");
                                setStep(0);
                            }}
                        />
                    )}

                    {phase === "quiz" && (
                        <motion.div
                            key={`quiz-${step}`}
                            initial={{ opacity: 0, x: 24 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -24 }}
                            transition={{ duration: 0.25 }}
                            className="rounded-3xl bg-white p-6 shadow-[0_20px_60px_-30px_rgba(0,55,85,0.35)] md:p-10"
                        >
                            {/* progress */}
                            <div className="text-center text-sm text-navy">
                                <span className="font-bold">
                                    Step {step + 1}
                                </span>{" "}
                                of {totalSteps}
                            </div>
                            <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-[#CDE8FB]">
                                <motion.div
                                    className="h-full rounded-full bg-[#12A0F5]"
                                    initial={false}
                                    animate={{
                                        width: `${
                                            ((step + 1) / totalSteps) * 100
                                        }%`,
                                    }}
                                    transition={{ duration: 0.35 }}
                                />
                            </div>

                            {/* icon */}
                            <div className="mt-8 flex justify-center">
                                <span
                                    className={`flex h-20 w-20 items-center justify-center rounded-full ${current.iconBg}`}
                                >
                                    <current.icon
                                        size={34}
                                        className={current.iconColor}
                                    />
                                </span>
                            </div>

                            <h2 className="mt-5 text-center !text-3xl !leading-tight font-bold text-navy">
                                {current.title}
                            </h2>

                            {current.question && (
                                <p className="mx-auto mt-3 max-w-xl text-center text-base text-muted_foreground">
                                    {current.question}
                                </p>
                            )}
                            {current.example && (
                                <p className="mx-auto mt-1 max-w-xl text-center text-sm text-muted_foreground/80">
                                    {current.example}
                                </p>
                            )}

                            {/* body */}
                            <div className="mt-6">
                                {current.type === "child-info" && (
                                    <ChildInfo
                                        age={age}
                                        setAge={setAge}
                                        childFor={childFor}
                                        setChildFor={setChildFor}
                                    />
                                )}

                                {current.type === "scale" && (
                                    <div className="space-y-3">
                                        {SCALE_OPTIONS.map((opt) => {
                                            const active =
                                                answers[current.id] ===
                                                opt.value;
                                            return (
                                                <OptionRow
                                                    key={opt.label}
                                                    active={active}
                                                    onClick={() =>
                                                        setAnswers((a) => ({
                                                            ...a,
                                                            [current.id]:
                                                                opt.value,
                                                        }))
                                                    }
                                                    leading={
                                                        <span className="text-2xl">
                                                            {opt.emoji}
                                                        </span>
                                                    }
                                                    label={opt.label}
                                                />
                                            );
                                        })}
                                    </div>
                                )}

                                {current.type === "choice" && (
                                    <div className="space-y-3">
                                        {current.options!.map((opt) => {
                                            const active =
                                                answers[current.id] ===
                                                opt.value;
                                            return (
                                                <OptionRow
                                                    key={opt.label}
                                                    active={active}
                                                    onClick={() =>
                                                        setAnswers((a) => ({
                                                            ...a,
                                                            [current.id]:
                                                                opt.value,
                                                        }))
                                                    }
                                                    leading={
                                                        <span
                                                            className={`flex h-5 w-5 items-center justify-center rounded-full border-2 ${
                                                                active
                                                                    ? "border-[#12A0F5] bg-[#12A0F5]"
                                                                    : "border-gray-300"
                                                            }`}
                                                        >
                                                            {active && (
                                                                <Check
                                                                    size={12}
                                                                    className="text-white"
                                                                />
                                                            )}
                                                        </span>
                                                    }
                                                    label={opt.label}
                                                />
                                            );
                                        })}
                                    </div>
                                )}
                            </div>

                            {/* actions */}
                            <div className="mt-8">
                                {step === 0 ? (
                                    <button
                                        onClick={handleNext}
                                        disabled={!canContinue()}
                                        className={`w-full rounded-full py-4 text-sm font-bold ${PRIMARY_BTN}`}
                                    >
                                        Continue
                                    </button>
                                ) : (
                                    <div className="flex gap-3">
                                        <button
                                            onClick={handleBack}
                                            className="flex-1 rounded-full bg-[#E9EBED] py-4 text-sm font-bold text-navy transition-colors hover:bg-[#dfe1e4]"
                                        >
                                            Back
                                        </button>
                                        <button
                                            onClick={handleNext}
                                            disabled={!canContinue()}
                                            className={`flex-1 rounded-full py-4 text-sm font-bold ${PRIMARY_BTN}`}
                                        >
                                            {step === totalSteps - 1
                                                ? "See My Results"
                                                : "Continue"}
                                        </button>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    )}

                    {phase === "analysing" && (
                        <Analysing
                            key="analysing"
                            onDone={() => setPhase("unlock")}
                        />
                    )}

                    {phase === "unlock" && (
                        <Unlock
                            key="unlock"
                            fullName={fullName}
                            setFullName={setFullName}
                            email={email}
                            setEmail={setEmail}
                            consent={consent}
                            setConsent={setConsent}
                            submitting={submitting}
                            onSubmit={submitReport}
                        />
                    )}

                    {phase === "done" && <Done key="done" />}
                </AnimatePresence>
            </div>
        </div>
    );
}

/* ------------------------------------------------------------------ */
/* Intro                                                               */
/* ------------------------------------------------------------------ */

function IntroCard({ onStart }: { onStart: () => void }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="relative"
        >
            <div className="relative overflow-hidden rounded-[2rem] bg-white shadow-[0_20px_60px_-30px_rgba(0,55,85,0.35)]">
                {/* content */}
                <div className="relative z-10 p-6 md:p-12">
                    <Image src={Logo} alt="Slayt" className="h-8 w-auto" />

                    <span className="mt-5 inline-block rounded-lg bg-[#E4F4FE] px-3 py-1.5 text-xs font-bold tracking-wide text-[#12A0F5]">
                        FREE PARENTING ASSESSMENT
                    </span>

                    <h1 className="mt-4 !text-4xl !leading-[1.05] font-bold text-navy md:!text-5xl">
                        How Responsible <br className="hidden md:block" />
                        Is Your Child,{" "}
                        <span className="font-smooch !font-normal text-[#12A0F5]">
                            Really?
                        </span>
                    </h1>

                    <p className="mt-4 max-w-md text-base text-muted_foreground md:max-w-2xl">
                        Discover your child&apos;s responsibility level and
                        receive a personalised action plan to help them build
                        confidence, independence and lifelong habits.
                    </p>

                    {/* parent image — mobile: sits right, benefits tuck under it */}
                    <div className="relative z-20 mt-6 -mr-6 md:hidden">
                        <Image
                            src={Parent}
                            alt="Parent and child writing together"
                            className="ml-auto h-auto w-[62%]"
                            priority
                        />
                    </div>

                    <ul className="relative z-0 -mt-14 space-y-3 md:mt-6">
                        {introBenefits.map((b) => (
                            <li
                                key={b.label}
                                className="flex items-center gap-3"
                            >
                                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#E4F4FE]">
                                    <b.icon
                                        size={16}
                                        className="text-[#12A0F5]"
                                    />
                                </span>
                                <span className="text-sm font-medium text-navy">
                                    {b.label}
                                </span>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 rounded-2xl border border-border bg-white px-4 py-4 shadow-sm md:flex-nowrap md:items-center md:gap-x-8 md:px-6 md:py-5 md:shadow-[0_12px_35px_-18px_rgba(0,55,85,0.4)]">
                        {introPills.map((p) => (
                            <span
                                key={p}
                                className="flex items-center gap-2 text-sm font-medium text-navy md:flex-1"
                            >
                                <Heart
                                    size={16}
                                    className="shrink-0 text-[#12A0F5]"
                                />
                                {p}
                            </span>
                        ))}
                    </div>

                    <button
                        onClick={onStart}
                        className={`mt-6 w-full rounded-full py-4 text-sm font-bold ${PRIMARY_BTN}`}
                    >
                        Start My Free Assessment
                    </button>
                    <Link
                        href="/"
                        className="mt-3 block w-full rounded-full bg-[#E9EBED] py-4 text-center text-sm font-bold text-navy transition-colors hover:bg-[#dfe1e4]"
                    >
                        Skip Assessment
                    </Link>

                    <div className="mt-6 flex items-center gap-3 md:justify-center">
                        <span className="text-yellow-400">★★★★★</span>
                        <span className="text-xs text-muted_foreground">
                            Trusted by parents raising confident, responsible &
                            independent children
                        </span>
                    </div>
                </div>
            </div>

            {/* parent image — desktop: overflows the card on the right, pushed up */}
            <div className="pointer-events-none absolute bottom-20 right-0 hidden w-[50%] md:block lg:right-[-2rem] lg:w-[54%]">
                <Image
                    src={Parent}
                    alt="Parent and child writing together"
                    className="h-auto w-full"
                    priority
                />
            </div>

            {/* flower — bottom-right corner */}
            <Image
                src={Flower}
                alt=""
                aria-hidden
                className="pointer-events-none absolute bottom-[-1.25rem] right-[-0.75rem] w-24 md:bottom-[-2rem] md:right-[-1.5rem] md:w-44"
            />
        </motion.div>
    );
}

/* ------------------------------------------------------------------ */
/* Step 1 - child info                                                 */
/* ------------------------------------------------------------------ */

function ChildInfo({
    age,
    setAge,
    childFor,
    setChildFor,
}: {
    age: string;
    setAge: (v: string) => void;
    childFor: "Son" | "Daughter" | "";
    setChildFor: (v: "Son" | "Daughter") => void;
}) {
    return (
        <div className="space-y-5 text-left">
            <div>
                <label className="text-sm font-medium text-navy">
                    What is your child&apos;s age?
                </label>
                <Select value={age} onValueChange={setAge}>
                    <SelectTrigger className="mt-2 h-12 rounded-xl border-border bg-[#F3F5F7] text-navy">
                        <SelectValue placeholder="Select age" />
                    </SelectTrigger>
                    <SelectContent>
                        {AGE_OPTIONS.map((a) => (
                            <SelectItem key={a} value={a}>
                                {a} years
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>

            <div>
                <p className="text-sm font-medium text-navy">
                    Is this assessment for?
                </p>
                <div className="mt-2 grid grid-cols-2 gap-4">
                    {(
                        [
                            { label: "Son", avatar: AvatarBoy },
                            { label: "Daughter", avatar: AvatarGirl },
                        ] as const
                    ).map((opt) => {
                        const active = childFor === opt.label;
                        return (
                            <button
                                key={opt.label}
                                onClick={() => setChildFor(opt.label)}
                                className={`flex flex-col items-center gap-3 rounded-2xl border py-6 transition-all ${
                                    active
                                        ? "border-[#12A0F5] bg-[#F0F9FF] ring-2 ring-[#12A0F5]/30"
                                        : "border-border hover:border-[#12A0F5]/50"
                                }`}
                            >
                                <Image
                                    src={opt.avatar}
                                    alt={opt.label}
                                    className="h-14 w-14 rounded-full object-cover"
                                />
                                <span className="text-sm font-medium text-navy">
                                    {opt.label}
                                </span>
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

/* ------------------------------------------------------------------ */
/* Option row                                                          */
/* ------------------------------------------------------------------ */

function OptionRow({
    active,
    onClick,
    leading,
    label,
}: {
    active: boolean;
    onClick: () => void;
    leading: React.ReactNode;
    label: string;
}) {
    return (
        <button
            onClick={onClick}
            className={`flex w-full items-center gap-3 rounded-xl border px-4 py-3.5 text-left transition-all ${
                active
                    ? "border-[#12A0F5] bg-[#F0F9FF] shadow-sm"
                    : "border-border bg-white hover:border-[#12A0F5]/50"
            }`}
        >
            {leading}
            <span className="text-sm font-medium text-navy">{label}</span>
        </button>
    );
}

/* ------------------------------------------------------------------ */
/* Analysing                                                           */
/* ------------------------------------------------------------------ */

function Analysing({ onDone }: { onDone: () => void }) {
    const [done, setDone] = useState(0);

    useEffect(() => {
        const timers = ANALYSING_STEPS.map((_, i) =>
            setTimeout(() => setDone(i + 1), (i + 1) * 800),
        );
        const finish = setTimeout(onDone, ANALYSING_STEPS.length * 800 + 700);
        return () => {
            timers.forEach(clearTimeout);
            clearTimeout(finish);
        };
    }, [onDone]);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="flex min-h-[70vh] flex-col items-center justify-center rounded-3xl bg-[#1B1259] px-6 py-16"
        >
            <motion.div
                animate={{ scale: [1, 1.03, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="flex h-56 w-56 items-center justify-center rounded-full border-2 border-[#7C6FD6]/60 text-center"
            >
                <span className="text-2xl font-medium text-white">
                    Analysing
                    <br />
                    Your Answers...
                </span>
            </motion.div>

            <ul className="mt-10 space-y-5">
                {ANALYSING_STEPS.map((label, i) => {
                    const complete = i < done;
                    return (
                        <li key={label} className="flex items-center gap-3">
                            {complete ? (
                                <CheckCircle2
                                    size={20}
                                    className="text-[#7C6FF0]"
                                    fill="#7C6FF0"
                                    stroke="#1B1259"
                                />
                            ) : (
                                <Circle
                                    size={20}
                                    className="text-[#7C6FD6]/70"
                                />
                            )}
                            <span
                                className={`text-base ${
                                    complete
                                        ? "text-white"
                                        : "text-[#9C93D6]"
                                }`}
                            >
                                {label}
                            </span>
                        </li>
                    );
                })}
            </ul>
        </motion.div>
    );
}

/* ------------------------------------------------------------------ */
/* Unlock                                                              */
/* ------------------------------------------------------------------ */

function Unlock({
    fullName,
    setFullName,
    email,
    setEmail,
    consent,
    setConsent,
    submitting,
    onSubmit,
}: {
    fullName: string;
    setFullName: (v: string) => void;
    email: string;
    setEmail: (v: string) => void;
    consent: boolean;
    setConsent: (v: boolean) => void;
    submitting: boolean;
    onSubmit: () => void;
}) {
    const valid =
        fullName.trim() !== "" && /\S+@\S+\.\S+/.test(email) && consent;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="rounded-3xl bg-white p-6 shadow-[0_20px_60px_-30px_rgba(0,55,85,0.35)] md:p-10"
        >
            <h2 className="text-center !text-3xl font-bold text-navy">
                Unlock Your Free Parenting Report
            </h2>
            <p className="mx-auto mt-2 max-w-lg text-center text-base text-muted_foreground">
                Get your personalised report with pratcial recommendations
                tailored to your child.
            </p>

            {/* blurred locked preview */}
            <div className="mt-6 flex justify-center">
                <div className="relative w-56 overflow-hidden rounded-2xl border border-border p-5 shadow-md">
                    <div className="pointer-events-none select-none blur-[3px]">
                        <p className="text-center text-sm font-bold text-navy/70">
                            Your Child&apos;s Responsibility Profile
                        </p>
                        <div className="mx-auto mt-3 h-24 w-24 rounded-full border-8 border-[#F4C64A]/40" />
                        <div className="mx-auto mt-3 h-6 w-32 rounded-full bg-[#FBEECB]" />
                        <div className="mx-auto mt-3 h-2 w-full rounded bg-gray-100" />
                        <div className="mx-auto mt-1.5 h-2 w-4/5 rounded bg-gray-100" />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-500/80">
                            <Lock size={24} className="text-white" />
                        </span>
                    </div>
                </div>
            </div>

            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    if (valid && !submitting) onSubmit();
                }}
                className="mt-8 space-y-5"
            >
                <div>
                    <label className="text-sm font-medium text-navy">
                        Full name
                    </label>
                    <input
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Enter your full name"
                        className="mt-2 w-full rounded-full border border-border px-5 py-3.5 text-sm text-navy outline-none placeholder:text-muted_foreground focus:border-[#12A0F5]"
                    />
                </div>

                <div>
                    <label className="text-sm font-medium text-navy">
                        Email Address
                    </label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        className="mt-2 w-full rounded-full border border-border px-5 py-3.5 text-sm text-navy outline-none placeholder:text-muted_foreground focus:border-[#12A0F5]"
                    />
                </div>

                <label className="flex cursor-pointer items-start gap-3 rounded-2xl p-4 transition-colors hover:border-[#12A0F5]/50">
                    <button
                        type="button"
                        role="checkbox"
                        aria-checked={consent}
                        onClick={() => setConsent(!consent)}
                        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border-2 transition-colors ${
                            consent
                                ? "border-[#0B5CAD] bg-[#0B5CAD]"
                                : "border-gray-300 bg-white"
                        }`}
                    >
                        {consent && (
                            <Check
                                size={13}
                                className="text-white"
                                strokeWidth={3}
                            />
                        )}
                    </button>
                    <span className="text-sm text-muted_foreground">
                        Yes, email me my free parenting report and occasional
                        tips to help my child build responsibility. You can
                        unsubscribe at any time.
                    </span>
                </label>

                <button
                    type="submit"
                    disabled={!valid || submitting}
                    className={`w-full rounded-full py-4 text-sm font-bold ${PRIMARY_BTN}`}
                >
                    {submitting ? "Sending..." : "Send My Free Report"}
                </button>

                <div className="flex items-center justify-center gap-2 text-xs text-muted_foreground">
                    <Lock size={14} />
                    <span>
                        We respect your privacy.
                        <br />
                        No spam. Ever
                    </span>
                </div>
            </form>
        </motion.div>
    );
}

/* ------------------------------------------------------------------ */
/* Done                                                                */
/* ------------------------------------------------------------------ */

const APP_STORE_URL =
    "https://apps.apple.com/ng/app/slayt-closer-together/id6470950940";
const PLAY_STORE_URL =
    "https://play.google.com/store/apps/details?id=com.slayt&hl=en";

function Done() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="mx-auto max-w-md rounded-3xl bg-white p-8 text-center shadow-[0_20px_60px_-30px_rgba(0,55,85,0.35)]"
        >
            <div className="flex justify-center">
                <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                    className="flex h-16 w-16 items-center justify-center rounded-full bg-[#27AE60]"
                >
                    <Check size={32} className="text-white" strokeWidth={3} />
                </motion.span>
            </div>

            <h2 className="mt-5 !text-3xl font-bold text-navy">
                Congratulations!
            </h2>
            <p className="mt-1 text-lg font-semibold text-[#12A0F5]">
                Your report is on its way.
            </p>
            <p className="mt-2 text-base text-muted_foreground">
                Check your email for your personalized report and next steps.
            </p>

            <div className="mt-6 rounded-2xl bg-[#F5EFFB] p-6">
                <h3 className="!text-lg font-bold text-navy">
                    While you wait...
                </h3>
                <p className="mt-1 text-sm text-muted_foreground">
                    Start buikding responsibility today with Slayt.
                </p>
                <div className="mt-4 flex flex-col items-center gap-3">
                    <a
                        href={APP_STORE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            src={Apple}
                            alt="Download on the App Store"
                            className="h-[44px] w-auto"
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
                            className="h-[44px] w-auto"
                        />
                    </a>
                </div>
            </div>

            <div className="mt-4 flex items-center justify-between gap-3 rounded-2xl bg-[#F5EFFB] p-5 text-left">
                <span className="text-sm text-muted_foreground">
                    Share this assessment with another parent.
                </span>
                <button
                    onClick={() => {
                        if (navigator.share) {
                            navigator
                                .share({
                                    title: "Slayt Parenting Assessment",
                                    url: typeof window !== "undefined"
                                        ? window.location.href
                                        : "",
                                })
                                .catch(() => {});
                        }
                    }}
                    aria-label="Share assessment"
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white shadow-md transition-transform hover:scale-105"
                >
                    <Send size={18} className="text-[#8B3FC7]" />
                </button>
            </div>
        </motion.div>
    );
}
