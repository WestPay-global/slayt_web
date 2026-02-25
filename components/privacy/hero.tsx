"use client";

import { motion } from "framer-motion";
import { ShieldCheckIcon } from "lucide-react";

export default function PrivacyHero() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-bold text-navy ">
            Your family's privacy. <br className="hidden md:block" />
            <span className="text-blue">matters</span>
          </h1>
          <p className="mt-4 max-w-lg text-muted_foreground ">
            Slayt is built to support &mdash; not exploit them.
          </p>
          <div className="mt-4">
            <span className="flex items-center gap-1.5 text-muted_foreground">
              <ShieldCheckIcon size={14} className="text-blue" />
              No Ads. No data selling. Parents controlled.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
