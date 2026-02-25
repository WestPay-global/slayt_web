"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import SectionHeading from "@/components/section-heading";
import slaytLogo from "@/images/Frame-logo.png";
import otherLogo from "@/images/Frame-other.png";

const rows = [
  { feature: "Habit Tracking", slayt: true, others: false },
  { feature: "Approval Workflow", slayt: true, others: "Limited" },
  { feature: "Independence Focus", slayt: true, others: false },
  { feature: "Parent Load Insights", slayt: true, others: false },
];

export default function ComparisonTable() {
  return (
    <section className="bg-secondary py-20 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title={"Why Slayt works when other chore apps don\u2019t."}
          subtitle={
            "Slayt connects effort to outcomes. Kids earn points through consistency \u2014 not negotiation."
          }
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mt-14 max-w-lg overflow-hidden rounded-2xl bg-background shadow-sm"
        >
          {/* Header row */}
          <div className="grid grid-cols-3 border-b border-border px-6 py-5">
            <span className="text-sm font-bold text-navy self-end">
              Features
            </span>

            {/* Slayt column header */}
            <div className="flex flex-col items-center gap-1">
              <Image
                src={slaytLogo}
                alt="Slayt"
                width={120}
                height={80}
                className="mx-auto mt-1 w-[1.8rem] h-auto"
              />
            </div>

            {/* Other apps column header */}
            <div className="flex flex-col items-center gap-1">
              <Image
                src={otherLogo}
                alt="Other chore apps"
                width={120}
                height={80}
                className="mx-auto mt-1 w-[6rem] h-auto"
              />
            </div>
          </div>

          {/* Data rows */}
          {rows.map((row, i) => (
            <div
              key={row.feature}
              className={`grid grid-cols-3 px-6 py-4 ${
                i % 2 === 0 ? "bg-[#f2fbff]" : "bg-background"
              } ${i < rows.length - 1 ? "border-b border-border" : ""}`}
            >
              <span className="text-sm text-navy self-center">
                {row.feature}
              </span>
              <span className="flex justify-center items-center">
                <Check size={18} className="text-[#1BBDD4]" />
              </span>
              <span className="flex justify-center items-center">
                {row.others === false ? (
                  <X size={18} className="text-red-500" />
                ) : (
                  <span className="text-sm text-muted_foreground">
                    {row.others}
                  </span>
                )}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
