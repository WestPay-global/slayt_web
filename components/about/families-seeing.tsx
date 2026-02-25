"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import SectionHeading from "@/components/section-heading";

const testimonials = [
  {
    quote: "I stopped yelling after the first week.",
    name: "Sarah, mum of 2",
    stars: 3,
  },
  { quote: "My son reminds ME now", name: "David, father of 6yo", stars: 4 },
  { quote: "Evenings are calm again", name: "Aisha, mum of 3", stars: 5 },
];

export default function FamiliesSeeing() {
  const [page, setPage] = useState(0);

  return (
    <section className="bg-secondary py-16 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="Families are already seeing changes." />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-6 flex items-center justify-center gap-3"
        >
          <span className="text-4xl font-extrabold text-navy">4.7</span>
          <div className="flex flex-col">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className={
                    i < 4 ? "fill-teal text-teal" : "fill-teal/30 text-teal/30"
                  }
                />
              ))}
            </div>
            <span className="text-sm text-muted_foreground">
              Based on 563 ratings
            </span>
          </div>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="rounded-2xl border border-border p-6"
            >
              <div className="mb-1 text-6xl font-serif text-muted_foreground/30 text-center">
                {"\u201C"}
              </div>
              <p className="font-medium text-navy">{t.quote}</p>
              <p className="mt-3 text-sm font-bold text-teal">{t.name}</p>
              <div className="mt-2 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, si) => (
                  <Star
                    key={si}
                    size={14}
                    className={
                      si < t.stars
                        ? "fill-teal text-teal"
                        : "fill-muted text-teal"
                    }
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            onClick={() => setPage(Math.max(0, page - 1))}
            className="flex h-8 w-8 items-center justify-center text-muted_foreground hover:text-teal transition-colors"
            aria-label="Previous testimonials"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={() => setPage(page + 1)}
            className="flex h-8 w-8 items-center justify-center text-muted_foreground hover:text-teal transition-colors"
            aria-label="Next testimonials"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
