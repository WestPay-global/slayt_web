"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import SectionHeading from "@/components/section-heading";

const faqs = [
  {
    question: "What if my child ignores it?",
    answer:
      "That\u2019s normal at the beginning. Slayt helps by making expectations clear and consistent. Over time, reminders fade as independence grows. Consistency \u2014 not pressure \u2014 builds the habit.",
  },
  {
    question: "What age is this best for?",
    answer:
      "Slayt works best for children ages 4\u201312. Task and reminders can be adjusted making it flexible for younger or older kids.",
  },
  {
    question: "Does Slayt replace parenting?",
    answer:
      "No Slayt supports parenting style. \n It helps create structure so you don't have to repeat yourself constantly.",
  },
  {
    question: "Is there a lot of screen time involved?",
    answer:
      "No. Children only check task briefly and mark them complete. Slayt reduces conflict \u2013 it doesn't increase screen time.",
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes. \n you are always in control.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-background py-20 px-6">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          title="Frequently asked questions"
          subtitle={
            "Slayt connects effort to outcomes. Kids earn points through consistency \u2014 not negotiation."
          }
        />

        <div className="mt-14 space-y-0">
          {faqs.map((faq, i) => (
            <div key={faq.question}>
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                // className="flex w-full items-center justify-between py-5 text-left"
                className={`flex w-full items-center justify-between py-5 text-left ${openIndex === i ? "h-0 border-l-[2px] border-l-blue" : ""}`}
              >
                <div className="flex items-start gap-3">
                  {openIndex === i && (
                    <span className="mt-0.5 h-full w-1 shrink-0 rounded-full bg-blue" />
                  )}
                  <span
                    className={`text-lg font-semibold ${openIndex === i ? "text-navy" : "text-navy/80"}`}
                  >
                    {faq.question}
                  </span>
                </div>
                <span className="shrink-0 text-navy">
                  {openIndex === i ? <Minus size={18} /> : <Plus size={18} />}
                </span>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-5 pl-4 text-muted_foreground ">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
