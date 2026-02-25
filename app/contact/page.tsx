"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { motion } from "framer-motion";
import CTASection from "@/components/cta-section";

export default function ContactPage() {
  return (
    <main>
      <Navbar />
      <section className="px-6 py-20 md:py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-bold text-navy">Contact</h1>
            <p className="mt-4 max-w-lg text-muted_foreground ">
              Slayt is built to support children &mdash; not exploit them
            </p>
          </motion.div>
        </div>
      </section>
      <CTASection
        heading="Build habits that works for your family."
        subtitle=""
        note="No credit card required"
      />
      <Footer />
    </main>
  );
}
