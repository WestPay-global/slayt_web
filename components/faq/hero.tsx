"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function FaqHero() {
  return (
    <section className="px-6 py-20 md:py-24 border-b ">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-bold text-navy ">
            Questions before you. <br className="hidden md:block" />
            <span className="text-blue">Start?</span>
          </h1>
          <p className="mt-4 max-w-lg text-muted_foreground ">
            We've answered the most common ones below
          </p>
          <div className="mt-8">
            <button
              onClick={() => {
                const footer = document.getElementById("footer");
                footer?.scrollIntoView({ behavior: "smooth" });
              }}
              className="flex items-center gap-2 rounded-[0.5rem] bg-blue px-6 py-3 text-sm font-semibold text-background shadow-lg transition-transform hover:scale-105"
            >
              Start Free <ArrowRight size={16} />
            </button>
            <p className="mt-3 text-muted_foreground">
              No credit card required.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
