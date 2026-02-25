"use client";

import { motion } from "framer-motion";

interface CTASectionProps {
  heading: string;
  subtitle: string;
  note?: string;
}

export default function CTASection({
  heading,
  subtitle,
  note,
}: CTASectionProps) {
  return (
    <section className="bg-teal py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto text-center"
      >
        <h2 className="font-bold text-navy">{heading}</h2>
        <p className="mt-4 font-medium text-navy/80">{subtitle}</p>
        <button
          onClick={() => {
            const footer = document.getElementById("footer");
            footer?.scrollIntoView({ behavior: "smooth" });
          }}
          className="mt-4 rounded-[0.5rem] bg-background px-10 py-3 text-sm font-semibold text-navy shadow-lg transition-transform hover:scale-105"
        >
          Start Free
        </button>
        <p className="mt-4 text-navy/70 font-medium">{note}</p>
      </motion.div>
    </section>
  );
}
