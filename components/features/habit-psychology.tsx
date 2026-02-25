"use client";

import { motion } from "framer-motion";
import { Timer, Swords, Heart } from "lucide-react";
import SectionHeading from "@/components/section-heading";

const pillars = [
  {
    icon: Timer,
    title: "Consistency",
    description:
      '"Clean your room", "Do your homework", "Brush your teeth" \u2014 again and again.',
  },
  {
    icon: Swords,
    title: "Responsibility",
    description: "You\u2019re tired of being the bad guy.",
  },
  {
    icon: Heart,
    title: "Independence",
    description: "Motivation disappears as soon as you stop pushing.",
  },
];

export default function HabitPsychology() {
  return (
    <section className="bg-[#f2fbff] py-20 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Built on habit psychology."
          subtitle="Slayt focuses on three key behaviours:"
        />
        <div className="mt-14 grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className=" bg-background shadow-sm p-6 md:px-8 mx-2 group cursor-pointer transition-all duration-300 hover:shadow hover:bg-white hover:rounded-sm"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#E0F4FF] text-navy">
                <pillar.icon size={20} />
              </div>
              <h3 className="font-bold text-navy">{pillar.title}</h3>
              <p className="mt-2 text-muted_foreground leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 text-center font-bold text-navy"
        >
          Responsibility becomes automatic.
        </motion.p>
      </div>
    </section>
  );
}
