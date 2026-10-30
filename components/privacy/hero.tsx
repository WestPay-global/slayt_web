"use client";

import { ShieldCheckIcon } from "lucide-react";

export default function PrivacyHero() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="motion-safe:animate-hero-rise">
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
        </div>
      </div>
    </section>
  );
}
