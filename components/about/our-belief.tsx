"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import belife1 from "@/images/image1.png";
import belife2 from "@/images/image2.png";
import belife3 from "@/images/image3.png";

import star from "@/images/Star.png";

const beliefs = [
  {
    image: belife1,
    title: "Structure Builds Confidence",
    description: "Kids thrive when expectations are clear.",
  },
  {
    image: belife2,
    title: "Ownership Builds Responsibility",
    description: "When children track their own progress, they grow.",
  },
  {
    image: belife3,
    title: "Consistency Builds Habits",
    description: "Small repeated actions create long-term change.",
  },
];

export default function OurBelief() {
  return (
    <section className="bg-background py-16 px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-3 mb-4"
        >
          <Image src={star} alt="logo image" priority />
          <h2 className="font-bold text-navy">Our belief is simple.</h2>
          <Image src={star} alt="logo image" priority />
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {beliefs.map((belief, i) => (
            <motion.div
              key={belief.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="overflow-hidden rounded-2xl border border-border bg-background shadow-sm"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={belief.image}
                  alt={belief.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-navy">{belief.title}</h3>
                <p className="mt-2 text-muted_foreground">
                  {belief.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
