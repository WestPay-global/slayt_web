"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import SectionHeading from "@/components/section-heading";
import bind from "@/images/bind.png";

const metrics = [
  { label: "Reliability", score: 4.1, color: "bg-orange-400" },
  { label: "Usability", score: 4.5, color: "bg-cyan" },
  { label: "Performance", score: 4.3, color: "bg-teal" },
  { label: "Customer Support", score: 4.7, color: "bg-navy" },
];

// ── Half-star component ──────────────────────────────────────────────────────
const StarIcon = ({
  fill,
  index,
}: {
  fill: "full" | "half" | "empty";
  index: number;
}) => (
  <svg width="18" height="18" viewBox="0 0 24 24">
    <defs>
      <clipPath id={`half-clip-${index}`}>
        <rect x="0" y="0" width="12" height="24" />
      </clipPath>
    </defs>
    {/* Empty base */}
    <path
      d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
      fill="#e2e8f0"
    />
    {/* Filled overlay */}
    {fill !== "empty" && (
      <path
        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
        fill="hsl(var(--teal, 174 72% 46%))"
        className="fill-teal"
        clipPath={fill === "half" ? `url(#half-clip-${index})` : undefined}
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

export default function AppPreview() {
  return (
    <section className="pt-20 px-6 overflow-hidden">
      <div className="mx-auto max-w-6xl mb-20">
        <SectionHeading
          title="App Preview"
          subtitle="Used daily by real families who wanted less stress"
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[2fr_1.2fr_1.8fr] items-start">
          {/* ── Left: Rating + metrics card ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-border bg-background shadow-md p-8"
          >
            {/* Score + stars */}
            <div className="flex items-center justify-between mb-8">
              <span className="text-6xl font-extrabold text-navy leading-none">
                4.7
              </span>
              <div>
                <div className="flex gap-0.5">
                  {getStarFills(4.5).map((fill, i) => (
                    <StarIcon key={i} fill={fill} index={i} />
                  ))}
                </div>
                <p className="mt-1.5 text-muted_foreground">
                  Based on 563 ratings
                </p>
              </div>
            </div>

            {/* Progress bars */}
            <div className="space-y-5">
              {metrics.map((m) => (
                <div key={m.label}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-navy">
                      {m.label}
                    </span>
                    <span className="text-sm font-bold text-navy">
                      {m.score}
                    </span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-border">
                    <motion.div
                      className={`h-2 rounded-full ${m.color}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(m.score / 5) * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Middle: text ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col bg-red-500justify-center items-center text-center md:items-start md:text-left"
          >
            <h3 className="font-bold text-navy mb-1 md:whitespace-nowrap">
              This is what calm parenting looks like.
            </h3>
            <ul className="space-y-4">
              {[
                "Kids take ownership",
                "Parents stop chasing",
                "Habits stick",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-md text-muted_foreground"
                >
                  <CheckCircle2 size={16} className="text-navy shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ── Right: Phone mockup ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="overflow-visible mt-12 -mr-6 -mb-20 -ml-10 md:-ml-6 md:mt-[10.2rem] md:-mr-0 md:-mb-24"
          >
            <Image
              src={bind}
              alt="Slayt app preview"
              className="w-full h-auto object-contain scale-125 origin-bottom md:scale-150 md:origin-bottom"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
