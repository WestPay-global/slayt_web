"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import globe from "@/images/globe.png";

export default function OurStory() {
  return (
    <section className="bg-[#E0F4FFCC] py-20 px-6">
      <div className="mx-auto max-w-6xl">
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
              It started with the same frustration you feel.
            </h2>
            <p className="mt-4 max-w-md text-muted_foreground">
              Slayt helps children check tasks themselves, track streaks, and
              earn rewards without being chased.
            </p>
            <ul className="mt-6 space-y-2 text-md text-muted_foreground">
              <li>{"- You repeat yourself."}</li>
              <li>{"- You remind."}</li>
              <li>{"- You negotiate."}</li>
              <li>
                {"- You raise your voice \u2014 and feel bad about it later."}
              </li>
            </ul>
            <p className="mt-6 text-muted_foreground">
              We experienced the same cycle.
            </p>
            <p className="mt-3 text-muted_foreground">
              {"We didn\u2019t want a louder system."}
              <br />
              We wanted a smarter one.
            </p>
            <p className="mt-6 font-bold text-navy">
              So we built Slayt &mdash; a way to turn daily battles into
              consistent habits.
            </p>
            <ul className="mt-4 space-y-1 text-md text-muted_foreground">
              <li>{"- Not through pressure."}</li>
              <li>{"- Not through fear."}</li>
              <li>{"- But through structure and ownership."}</li>
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
