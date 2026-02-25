"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

export default function FeaturesHero() {
  return (
    <section className="bg-background px-6 py-16 md:py-24 border border-b-1">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-bold text-navy">
            Raise responsible kids &mdash; <br className="hidden md:block" />
            <span className="text-blue">without daily battles.</span>
          </h1>
          <p className="mt-4 max-w-lg text-muted_foreground ">
            Slayt turns chores into habits kids actually follow.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              onClick={() => {
                const footer = document.getElementById("footer");
                footer?.scrollIntoView({ behavior: "smooth" });
              }}
              className="flex items-center gap-2 rounded-[0.5rem] bg-blue px-6 py-3 text-sm font-semibold text-background shadow-lg transition-transform hover:scale-105"
            >
              Start Free <ArrowRight size={16} />
            </button>
            <a
              href="https://youtu.be/Akhl01kY3LA?si=IbVGUnXQBs_Da1HU"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-semibold text-navy hover:text-teal transition-colors"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-teal text-white">
                <Play size={16} fill="currentColor" />
              </span>
              Watch 30s Demo
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
