"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import SectionHeading from "@/components/section-heading";

import { faqData } from "@/data/faq";

export default function FAQContent() {
  // Track open item per section
  const [openMap, setOpenMap] = useState<Record<number, number | null>>({
    0: 0,
  });

  const toggle = (sectionIndex: number, itemIndex: number) => {
    setOpenMap((prev) => ({
      ...prev,
      [sectionIndex]: prev[sectionIndex] === itemIndex ? null : itemIndex,
    }));
  };

  return (
    <section className="py-16 px-6">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          title="Frequently asked questions"
          subtitle={
            "Slayt connects effort to outcomes. Kids earn points through consistency \u2014 not negotiation."
          }
        />

        {faqData.map((section, sectionIndex) => (
          <div key={section.title} className="mt-10 space-y-12">
            <h3 className="mb-4 font-bold text-navy">{section.title}</h3>

            {section.items.map((faq, itemIndex) => {
              const isOpen = openMap[sectionIndex] === itemIndex;

              return (
                <div key={faq.question}>
                  <button
                    onClick={() => toggle(sectionIndex, itemIndex)}
                    className={`flex w-full items-center justify-between py-3 text-left ${
                      isOpen ? "border-l-[2px] border-l-blue pl-3" : ""
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <span
                        className={`text-lg font-semibold ${
                          isOpen ? "text-navy" : "text-navy/80"
                        }`}
                      >
                        {faq.question}
                      </span>
                    </div>
                    <span className="shrink-0 text-navy">
                      {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                    </span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <p className="pb-5 pl-4 text-muted_foreground">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </section>
  );
}
