"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import SectionHeading from "@/components/section-heading";

const privacyItems = [
  "Parent-controlled accounts",
  "No ads",
  "No selling data",
  "Privacy-first design",
];

const missionItems = [
  "We\u2019re building a generation of self-managing kids.",
  "Confident kids.",
  "Responsible kids.",
  "And calmer evenings for parents.",
];

export default function PrivacyAndMission() {
  return (
    <>
      <section className="py-20 px-6">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            title="Built with care and privacy in mind."
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
              {privacyItems.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-md text-muted_foreground"
                >
                  <CheckCircle2 size={16} className="text-blue shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      <section className="bg-background py-20 px-6">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            title={"We\u2019re building more than an app."}
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
              {missionItems.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-md text-muted_foreground"
                >
                  <CheckCircle2 size={16} className="text-blue shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>
    </>
  );
}
