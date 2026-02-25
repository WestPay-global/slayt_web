"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import SectionHeading from "@/components/section-heading";

const faqs = [
  {
    question: "Will my child actually use this?",
    answer:
      "Yes \u2013 because Slayt is built around ownership, not reminders. Children check task themselves, earn visible points, and track streaks. Most families report noticeable changes within the first 7 days.",
  },
  {
    question: "Is slayt really free?",
    answer:
      "That\u2019s normal at the beginning. Slayt helps by making expectations clear and consistent. Over time, reminders fades as independence grow. Consistency \u2013 not pressure \u2013 builds the habit.",
  },
  {
    question: "Does Slayt replace parenting?",
    answer:
      "Not at all. Slayt is a tool that supports your parenting style. It helps structure tasks and rewards so you can focus on connection instead of constant reminding.",
  },
  {
    question: "Is there a lot of screen time involved?",
    answer:
      "Minimal. Kids interact briefly to check off tasks and view their progress. The app is designed to reduce screen dependency, not increase it.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes. Slayt is free to use, and if you ever decide to stop, you can cancel or delete your account at any time with no questions asked.",
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

        <div className="mt-10 space-y-0">
          <h3 className="mb-4 font-bold text-navy">Most important question</h3>
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
