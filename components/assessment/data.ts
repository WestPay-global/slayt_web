import {
    Calendar,
    Home,
    Shield,
    Sun,
    Users,
    UsersRound,
    type LucideIcon,
} from "lucide-react";

export type ScaleOption = {
    label: string;
    emoji: string;
    value: number;
};

export const SCALE_OPTIONS: ScaleOption[] = [
    { label: "Always", emoji: "😄", value: 5 },
    { label: "Often", emoji: "😁", value: 4 },
    { label: "Sometimes", emoji: "🤨", value: 3 },
    { label: "Rarely", emoji: "😩", value: 2 },
    { label: "Never", emoji: "😡", value: 1 },
];

export type QuizStep = {
    id: string;
    icon: LucideIcon;
    iconBg: string;
    iconColor: string;
    title: string;
    question?: string;
    example?: string;
    type: "child-info" | "scale" | "choice";
    options?: { label: string; value: number }[];
};

/**
 * Six-step assessment. The first step collects the child's info and is not
 * scored; steps 2-6 each contribute up to 5 points to the responsibility score.
 */
export const QUIZ_STEPS: QuizStep[] = [
    {
        id: "child",
        icon: Users,
        iconBg: "bg-[#D7EEF3]",
        iconColor: "text-navy",
        title: "Tell us About Your Child",
        type: "child-info",
    },
    {
        id: "daily-habits",
        icon: Calendar,
        iconBg: "bg-[#DCF3E4]",
        iconColor: "text-[#1F9D57]",
        title: "Daily Habits",
        question:
            "How often does your child complete simple daily responsibilities without reminders?",
        example: "Examples: makes their bed, packs their school bage, feeds a pet",
        type: "scale",
    },
    {
        id: "personal-responsibility",
        icon: Home,
        iconBg: "bg-[#DCF3E4]",
        iconColor: "text-[#1F9D57]",
        title: "Personal Responsibility",
        question: "How often does your child clean up after themselves?",
        example: "Examples: Toys, bedroom, clothes, study area.",
        type: "scale",
    },
    {
        id: "building-habits",
        icon: Sun,
        iconBg: "bg-[#FBEECB]",
        iconColor: "text-[#E0A100]",
        title: "Building Good Habits",
        question: "How often does your child follow daily routines?",
        example: "Examples: Morning routine, homework, bedtime.",
        type: "scale",
    },
    {
        id: "ownership",
        icon: Shield,
        iconBg: "bg-[#EFE3F9]",
        iconColor: "text-[#8B3FC7]",
        title: "Ownership",
        question: "When your child makes a mistake, what usually happens?",
        example: "Examples: Morning routine, homework, bedtime.",
        type: "choice",
        options: [
            { label: "They usually admit it", value: 5 },
            { label: "They sometimes admit it", value: 4 },
            { label: "They often blame others", value: 2 },
            { label: "They avoid responsibility.", value: 1 },
        ],
    },
    {
        id: "family-contribution",
        icon: UsersRound,
        iconBg: "bg-[#DCE9FB]",
        iconColor: "text-navy",
        title: "Family Contribution",
        question:
            "How often does your child help around the house without being asked?",
        example:
            "Examples: Helping set the table, helping with groceries, helping siblings.",
        type: "scale",
    },
];

export const AGE_OPTIONS = Array.from({ length: 15 }, (_, i) => `${i + 4}`);

export const ANALYSING_STEPS = [
    "Analyzing your answers...",
    "Comparing responsibility habits...",
    "Building your personalized report..",
    "Almost ready...",
];

export type ResultTier = {
    label: string;
    badgeBg: string;
    badgeText: string;
    ringFrom: string;
    ringTo: string;
    summary: string;
    strengths: string[];
    opportunity: string;
};

export function getResultTier(score: number, max: number): ResultTier {
    const pct = score / max;

    if (pct >= 0.8) {
        return {
            label: "Strong Responsibility",
            badgeBg: "bg-[#DCF3E4]",
            badgeText: "text-[#1F9D57]",
            ringFrom: "#6FCF97",
            ringTo: "#27AE60",
            summary:
                "Your child shows strong, consistent responsibility habits. Keep nurturing their independence with new challenges and trust.",
            strengths: [
                "Takes initiative without being asked",
                "Follows through on routines",
                "Owns their mistakes",
            ],
            opportunity:
                "Stretch their independence with bigger responsibilities that match their growing confidence.",
        };
    }

    if (pct >= 0.5) {
        return {
            label: "Developing Responsibility",
            badgeBg: "bg-[#FBEECB]",
            badgeText: "text-navy",
            ringFrom: "#8FCf6f",
            ringTo: "#F4C64A",
            summary:
                "Your child is already developing good responsibility habits. With more consistency and clear routines, they can become even more confident and independent.",
            strengths: [
                "Shows responsibility in familiar situations",
                "Responds well to encouragement",
                "Wants to do well",
            ],
            opportunity:
                "Create consistent routines that help responsibility become a habit rather than a reminder.",
        };
    }

    return {
        label: "Building Responsibility",
        badgeBg: "bg-[#FBE0CB]",
        badgeText: "text-[#C2410C]",
        ringFrom: "#F4C64A",
        ringTo: "#EB8A4A",
        summary:
            "Your child is at the beginning of their responsibility journey. Small, consistent routines and lots of encouragement will help them build confidence fast.",
        strengths: [
            "Responds to gentle guidance",
            "Capable of more with support",
            "Ready to build new habits",
        ],
        opportunity:
            "Start with one small daily routine and celebrate every win to build momentum.",
    };
}
