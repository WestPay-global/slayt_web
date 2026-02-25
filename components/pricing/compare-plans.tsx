"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import SectionHeading from "@/components/section-heading";

const rows = [
  { feature: "Unlimited Tasks", free: true, pro: true },
  { feature: "Habit Score", free: true, pro: true },
  { feature: "Advanced Analytics", free: false, pro: true },
  { feature: "Multi-family View", free: false, pro: true },
  { feature: "Custom Streak Rewards", free: false, pro: true },
];

export default function ComparePlans() {
  return (
    <section className="bg-background py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="Compare Future-Proof"
          subtitle="Slayt focuses on three key behaviours:"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 flex justify-center"
        >
          {/* LEFT — Features Column */}
          <div className="bg-muted/30 px-4 md:px-12 py-8 md:py-14">
            <h3 className="font-bold text-navy mb-8 md:mb-12 h-12 md:h-20 text-sm md:text-base">
              Featuress
            </h3>
            <div className="space-y-6 md:space-y-12">
              {rows.map((row) => (
                <p
                  key={row.feature}
                  className="text-muted_foreground text-xs md:text-sm whitespace-nowrap"
                >
                  {row.feature}
                </p>
              ))}
            </div>
          </div>

          {/* MIDDLE — Free Plan */}
          <div className="relative bg-white px-4 md:px-12 py-8 md:py-14 shadow-lg">
            <div className="absolute top-0 left-0 h-1 w-full bg-blue" />
            <div className="text-center mb-8 md:mb-14 h-12 md:h-20 flex flex-col justify-center">
              <h3 className="font-bold text-navy text-xs md:text-base">
                Free plan
              </h3>
              <p className="mt-1 font-bold text-navy text-xs md:text-sm">
                $0 / forever
              </p>
            </div>
            <div className="space-y-6 md:space-y-12 flex flex-col items-center">
              {rows.map((row) =>
                row.free ? (
                  <Check
                    key={row.feature}
                    size={18}
                    className="text-blue md:w-[26px] md:h-[26px]"
                  />
                ) : (
                  <X
                    key={row.feature}
                    size={18}
                    className="text-destructive md:w-[26px] md:h-[26px]"
                  />
                ),
              )}
            </div>
          </div>

          {/* RIGHT — Pro Plan */}
          <div className="bg-muted/20 px-4 md:px-12 py-8 md:py-14">
            <div className="text-center mb-8 md:mb-12 h-12 md:h-20 flex flex-col justify-center items-center gap-2">
              <h3 className="font-bold text-navy text-xs md:text-base">
                Pro plan
              </h3>
              <div className="bg-teal px-3 md:px-8 py-1 md:py-2 text-xs md:text-xl font-bold text-navy whitespace-nowrap">
                Coming soon
              </div>
            </div>
            <div className="space-y-6 md:space-y-12 flex flex-col items-center">
              {rows.map((row) =>
                row.pro ? (
                  <Check
                    key={row.feature}
                    size={18}
                    className="text-blue md:w-[26px] md:h-[26px]"
                  />
                ) : (
                  <X
                    key={row.feature}
                    size={26}
                    className="text-destructive md:w-[26px] md:h-[26px]"
                  />
                ),
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
