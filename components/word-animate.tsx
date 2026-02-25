"use client";

import { motion } from "framer-motion";

export function BouncingText({ text = "responsible kids" }: { text?: string }) {
  return (
    <span className="font-smooch text-blue pr-3">
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          animate={{ y: [0, -8, 0] }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            repeatDelay: 2,
            delay: i * 0.05,
            ease: "easeInOut",
          }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}
