"use client";

import { motion } from "framer-motion";

export default function WhyFree() {
  return (
    <section className="bg-[#E0F4FFCC] py-20 px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
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
          <h2 className="font-bold text-navy ">{"Why is Slayt free?"}</h2>
          <p className="mt-4 text-muted_foreground max-w-lg">
            We believe every family deserves calm evenings.
          </p>
          <p className="mt-4 text-muted_foreground max-w-lg">
            Our free plan includes everything you need to build habits.
          </p>
          <p className="mt-4 text-muted_foreground max-w-lg">
            Future premium features will expand customization &mdash; but habit
            building will always stay accessible.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
