"use client";

import { motion } from "framer-motion";
import { Timer, Swords, Heart } from "lucide-react";

const pillars = [
  {
    icon: Timer,
    title: "Consistency",
    description:
      "Showing up regularly builds automatic behaviour.  Slayt tracks task completion patterns, not just isolated wins.",
  },
  {
    icon: Swords,
    title: "Responsibility",
    description:
      "Completing tasks on time builds accountability.  Deadlines aren\u2019t pressure — they build awareness.",
  },
  {
    icon: Heart,
    title: "Independence",
    description:
      "Fewer reminders over time.  Slayt gradually reduces nudging as habits strengthen.",
  },
];

export default function Habit() {
  return (
    <section className="py-6 px-6">
      <div className="mx-auto max-w-[70rem]">
        <h2 className="font-bold text-navy text-balance">
          The Slayt Habit Framework
        </h2>
        <p className="mx-auto mt-3  text-muted_foreground">
          Slayt helps parents build responsibility through tasks,{" "}
          <br className="hidden md:block" />
          rewards and consistency.
        </p>

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
      </div>
    </section>
  );
}
