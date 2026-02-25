"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

import Mockup2 from "@/images/Mockup-2.png";

const blocks = [
  {
    title: "Clear task, Clear expectations.",
    features: [
      "Custom tasks",
      "Age-based reminders",
      "Clear completion rules",
      "Optional parent approval",
    ],
    highlight:
      "Parents assign tasks once. Children check tasks independently. Approval reinforces effort.",
    image: Mockup2,
  },
];

export default function TaskExpect() {
  return (
    <>
      {blocks.map((block, i) => (
        <section key={block.title} className="py-4 px-6">
          <div className="mx-auto max-w-[70rem]">
            <div className="mb-4">
              <h2 className="font-bold text-navy text-balance">
                {block.title}
              </h2>
            </div>
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center ">
              {/* Text */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex-1"
              >
                <p className="mb-2 text-muted_foreground">{block.highlight}</p>
                <ul className="mt-6 space-y-4">
                  {block.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-3 text-base text-muted_foreground"
                    >
                      <CheckCircle2 size={20} className="text-blue shrink-0" />{" "}
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="flex-1 flex justify-center"
              >
                <div className="relative w-[30rem]">
                  <Image
                    src={block.image}
                    alt={block.title}
                    width={384}
                    height={768}
                    className="w-full h-auto drop-shadow-2xl"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
