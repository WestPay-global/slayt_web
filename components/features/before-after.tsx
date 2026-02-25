"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import SectionHeading from "@/components/section-heading";

import frameArrow from "@/images/Frame.png";

const beforeItems = [
  "Parent repeats task 6 times.",
  "Child resists.",
  "Evening ends in tension.",
];

const afterItems = [
  "Task reminder.",
  "Child checks off.",
  "Parent approves.",
  "Points earned.",
  "Evening calm.",
];

export default function BeforeAfter() {
  return (
    <section className="py-20 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex text-left">
          <SectionHeading
            title="What it looks like in real life."
            subtitle={
              "Slayt connects effort to outcomes. Kids earn points through consistency \u2014 not negotiation."
            }
          />
        </div>
        <div className="relative mt-14 flex flex-col items-center gap-6 md:flex-row md:justify-center md:gap-12">
          {/* Before */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-xs rounded-2xl p-6"
          >
            <h3 className="mb-4 font-bold text-blue">Before Slayt</h3>
            <div className="bg-background px-2">
              <ul className="space-y-0 shadow-md rounded-md px-2">
                {beforeItems.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-1 text-[20px] text-muted_foreground py-2 border-b border-[#d1d5db] last:border-b-0"
                  >
                    <CheckCircle2 size={16} className="text-navy shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Arrow  desktop*/}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="md:block"
          >
            <Image
              src={frameArrow}
              alt="arrow"
              width={120}
              height={80}
              className="rotate-90 md:rotate-0 w-[15rem] h-auto drop-shadow-2xl absolute top-[-1.3rem] right-[30rem]"
            />
          </motion.div>
          {/* Arrow - Mobile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex md:hidden justify-center w-full absolute left-[8rem] top-[10rem]"
          >
            <Image
              src={frameArrow}
              alt="arrow"
              width={120}
              height={80}
              className="w-[18rem] h-auto drop-shadow-2xl rotate-[110deg]"
            />
          </motion.div>

          {/* After */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="w-full max-w-xs rounded-2xl p-6"
          >
            <h3 className="mb-4 font-bold text-blue">After Slayt</h3>
            <div className="bg-background px-2">
              <ul className="space-y-0 shadow-md rounded-md px-2">
                {afterItems.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-1 text-[20px] text-muted_foreground py-2 border-b border-[#d1d5db] last:border-b-0"
                  >
                    <CheckCircle2 size={16} className="text-blue shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
