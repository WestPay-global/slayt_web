"use client";

import { motion } from "framer-motion";
import { Timer, Swords, Gift } from "lucide-react";
import SectionHeading from "@/components/section-heading";

const cards = [
  {
    icon: Timer,
    title: "You feel like a broken record.",
    description:
      '"Clean your room", "Do your homework", "Brush your teeth" \u2014 again and again.',
  },
  {
    icon: Swords,
    title: "Every simple task turns into a battle",
    description: "You\u2019re tired of being the bad guy.",
  },
  {
    icon: Gift,
    title: "Rewards stop working",
    description: "Motivation disappears as soon as you stop pushing.",
  },
];

export default function PainPoints() {
  return (
    <section className="bg-background py-16 px-6 border border-b-1">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="The Problem (Pain Points)"
          subtitle="Slayt helps parents build responsibility through tasks, rewards, and consistency"
        />

        <div className="mt-14 grid md:grid-cols-3">
          {cards.map((card, i) => (
            <div key={card.title} className="flex flex-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex-1 p-6 md:px-8 mx-2 group cursor-pointer transition-all duration-300 hover:shadow hover:bg-white hover:rounded-sm"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#E0F4FF] text-navy transition-all duration-300">
                  <card.icon size={20} />
                </div>
                <h3 className="font-normal text-navy">{card.title}</h3>
                <p className="mt-2 text-muted_foreground">{card.description}</p>
              </motion.div>

              {/* Half-height divider between cards, not after last */}
              {i < cards.length - 1 && (
                <div className="hidden md:flex items-center">
                  <div className="h-1/2 w-px bg-border" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
