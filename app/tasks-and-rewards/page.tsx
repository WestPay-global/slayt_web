import { Metadata } from "next";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import CTASection from "@/components/cta-section";
import TaskHero from "@/components/task/hero";
import TaskCard from "@/components/task/task-card";
import TaskContent from "@/components/task/task-content";
import Habit from "@/components/task/habit";
import TaskExpect from "@/components/task/task-expect";

export const metadata: Metadata = {
    title: "Tasks & Rewards | SLAYT Family Chore App",
    description:
        "Discover how SLAYT turns chores into exciting tasks with meaningful rewards. Build responsibility through positive reinforcement.",
    keywords: [
        "tasks and rewards",
        "chore rewards",
        "kids reward system",
        "positive parenting",
    ],
};

export default function TasksAndRewardsPage() {
    return (
        <main>
            <Navbar />
            <TaskHero />
            <TaskCard />
            <Habit />
            <TaskExpect />
            <TaskContent />
            <CTASection
                heading="Build habits that work for your family"
                subtitle=""
                note="No credit card required."
            />
            <Footer />
        </main>
    );
}
