"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import SectionHeading from "@/components/section-heading";

const items = [
  "Parents tired of repeating themselves",
  "Families with kids 4\u201312",
  "Parents who value calm over control",
  "Homes that want consistency without shouting",
];

export default function DesignedForFamilies() {
  return (
    <section className="bg-background py-20 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Designed for families raising responsible kids."
          subtitle="Slayt focuses on three key behaviours:"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 ml-6"
        >
          <ul className="space-y-4">
            {items.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 text-muted_foreground"
              >
                <CheckCircle2 size={16} className="text-blue shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
