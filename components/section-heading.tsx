"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  className = "",
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`text-center ${className}`}
    >
      <h2 className="font-bold text-navy text-balance">{title}</h2>
      {subtitle && (
        <p className="mx-auto mt-3 max-w-lg text-muted_foreground">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
