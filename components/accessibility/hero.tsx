"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function AccessibilityHero() {
  const router = useRouter();

  return (
    <section className="px-6 py-20 md:py-24 border-b ">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-bold text-navy ">
            Designed for every. <br className="hidden md:block" />
            <span className="text-blue">Family.</span>
          </h1>
          <p className="mt-4 max-w-lg text-muted_foreground ">
            Slayt is built to be accessible, flexible, and supportive for
            children
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-4">
            <button
              onClick={() => {
                const footer = document.getElementById("footer");
                footer?.scrollIntoView({ behavior: "smooth" });
              }}
              className="flex items-center gap-2 rounded-[0.5rem] bg-blue px-6 py-3 text-sm font-semibold text-background shadow-lg transition-transform hover:scale-105"
            >
              Start Free <ArrowRight size={16} />
            </button>
            <button
              onClick={() => router.push("/features")}
              className="flex items-center gap-2 rounded-[0.5rem] border border-blue px-6 py-3 text-sm font-semibold text-blue shadow-lg transition-transform hover:scale-105"
            >
              See Features
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
