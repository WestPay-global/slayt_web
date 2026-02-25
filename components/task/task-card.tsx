"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import globe from "@/images/globe.png";

export default function TaskCard() {
  return (
    <section className="bg-[#E0F4FFCC] py-20 px-6">
      <div className="mx-auto max-w-[70rem]">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex-1"
          >
            <div className="mb-4">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="hsl(174, 100%, 35%)"
              >
                <path d="M12 2L2 8v8l10 6 10-6V8L12 2z" />
              </svg>
            </div>
            <h2 className="font-bold text-navy text-balance">
              Why most reward systems fail.
            </h2>

            <p className="mt-2 text-muted_foreground">Rewards become bribes.</p>
            <p className="mt-2 text-muted_foreground">
              Tasks become negotiations.
            </p>
            <p className="mt-2 text-muted_foreground">
              And consistency disappears.
            </p>
            <p className="mt-6 text-muted_foreground">
              {
                "When rewards aren\u2019t connected to effort and structure, kids learn to bargain - not build habits. "
              }
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex-1 flex justify-center"
          >
            <div className="overflow-hidden rounded-2xl">
              <Image
                src={globe}
                alt="Happy smiling child"
                width={400}
                height={500}
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
