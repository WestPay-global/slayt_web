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
  {
    quote: "My son reminds ME now",
    name: "David, father of 6yo",
    stars: 3.5,
  },
  {
    quote: "Evenings are calm again",
    name: "Aisha, mum of 3",
    stars: 4.5,
  },
];

const StarIcon = ({ fill }: { fill: "full" | "half" | "empty" }) => (
  <svg width="14" height="14" viewBox="0 0 24 24">
    <defs>
      <clipPath id={`half-${fill}`}>
        <rect x="0" y="0" width="12" height="24" />
      </clipPath>
    </defs>
    {/* Empty star base */}
    <path
      d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
      className="fill-muted text-muted stroke-teal"
      strokeWidth="1"
    />
    {/* Filled overlay — full or half */}
    {fill !== "empty" && (
      <path
        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
        className="fill-teal text-teal"
        clipPath={fill === "half" ? `url(#half-half)` : undefined}
      />
    )}
  </svg>
);

const getStarFills = (rating: number): ("full" | "half" | "empty")[] =>
  Array.from({ length: 5 }, (_, i) => {
    if (rating >= i + 1) return "full";
    if (rating >= i + 0.5) return "half";
    return "empty";
  });

export default function Testimonials() {
  const [page, setPage] = useState(0);

  return (
    <section className="px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Why Parents Love Slayt"
          subtitle="Slayt helps parents build responsibility through tasks, rewards, and consistency"
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
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
              <p className="mt-3 font-bold text-teal">{t.name}</p>
              <div className="mt-2 flex gap-0.5">
                <div className="mt-2 flex gap-0.5">
                  {getStarFills(t.stars).map((fill, si) => (
                    <StarIcon key={si} fill={fill} />
                  ))}
                </div>
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
