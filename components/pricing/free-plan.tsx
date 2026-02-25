"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";

const features = [
  "Assign unlimited tasks",
  "Points & rewards system",
  "Parent approval workflow",
  "Smart reminders",
  "Weekly habit summary",
  "1\u20132 children (if you want limit)",
];

export default function FreePlan() {
  return (
    <section className="px-6 pb-20">
      <div className="mx-auto max-w-6xl">
        <div className="border-t border-border pt-16" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-sm"
        >
          <div className="rounded-2xl bg-background p-8 shadow-md">
            <h3 className="font-bold text-navy">
              $0{" "}
              <span className="text-lg font-medium text-muted_foreground">
                / forever
              </span>
            </h3>
            <p className="mt-4 font-bold text-navy">What you get:</p>
            <ul className="mt-4 space-y-3">
              {features.map((f) => (
                <li
                  key={f}
                  className="flex items-center gap-2 text-md text-muted_foreground"
                >
                  <CheckCircle2 size={16} className="text-blue shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <button className="mt-8 flex w-full items-center justify-center gap-2 rounded-[0.5rem] bg-blue px-6 py-3 text-sm font-semibold text-background shadow-lg transition-transform hover:scale-105">
              Start Free <ArrowRight size={16} />
            </button>
            <p className="mt-3 text-center text-muted_foreground">
              Cancel anytime. No pressure.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
