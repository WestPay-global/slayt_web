import { Metadata } from "next";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Quiz from "@/components/assessment/quiz";

export const metadata: Metadata = {
    title: "How Responsible Is Your Child? | Free Parenting Assessment",
    description:
        "Take SLAYT's free 2-minute parenting assessment to discover your child's responsibility level and get a personalised action plan to build confidence, independence and lifelong habits.",
    keywords: [
        "parenting assessment",
        "child responsibility quiz",
        "responsibility score",
        "parenting quiz",
        "slayt assessment",
    ],
    openGraph: {
        title: "How Responsible Is Your Child, Really?",
        description:
            "Discover your child's responsibility level with SLAYT's free parenting assessment.",
    },
};

export default function Page() {
    return (
        <main>
            <Navbar />
            <Quiz />
            <Footer />
        </main>
    );
}
