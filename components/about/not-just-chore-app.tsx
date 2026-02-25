"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckIcon, Calendar, Coins } from "lucide-react";
import SectionHeading from "@/components/section-heading";
import choreImage from "@/images/bind.png";
import slaytmini from "@/images/slayt-mini.png";

const comparisons = [
  {
    gray: "Most chore apps track tasks.",
    teal: "Slayt builds habits.",
    icon: CheckIcon,
  },
  {
    gray: "Most reward systems create entitlement.",
    teal: "Slayt links effort to growth.",
    icon: Coins,
  },
  {
    gray: "Most reminders create dependence.",
    teal: "Slayt reduces reminders over time.",
    icon: Calendar,
  },
];

export default function NotJustChoreApp() {
  return (
    <section className="py-20 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title={"We\u2019re not just a chore app."}
          subtitle="Slayt focuses on three key behaviours:"
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {comparisons.map((c, i) => (
            <motion.div
              key={c.teal}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="text-center"
            >
              <p className="flex justify-center items-center gap-2 w-full text-muted_foreground mb-2">
                {<c.icon />} {c.gray}
              </p>
              <div className="inline-flex items-center justify-center gap-2 rounded-b-3xl bg-teal px-4 py-2 w-full">
                <Image src={slaytmini} alt={"chore image alt"} />
                <span className="text-md font-semibold text-navy">
                  {c.teal}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center items-center">
          <Image className="mx-auto" src={choreImage} alt={"chore image alt"} />
        </div>
      </div>
    </section>
  );
}
