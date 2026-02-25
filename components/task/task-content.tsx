"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import ArrowMobile from "@/images/arrow-mobile.png";
import ArrowDesktop from "@/images/arrow-big.png";

const effortSteps = [
  "Complete task",
  "Earn points",
  "Track streak",
  "Unlock reward",
];

const howItWorksCard = [
  { label: "Make Your Bed", tag: "10 points" },
  { label: "7-day streak", tag: "Bonus points" },
  { label: "Movie Night", tag: "Earned reward" },
];

const progressMetrics = [
  "Completion rate",
  "On-time rate",
  "Independence growth",
];

const beforeItems = [
  "Parent repeats task.",
  "Child resists.",
  "Reward becomes negotiation.",
];

const afterItems = [
  "Reminder triggers.",
  "Child completes.",
  "Parent approves.",
  "Points earned.",
  "Evening calm.",
];

export default function TaskContent() {
  return (
    <section className="py-20 px-6">
      <div className="mx-auto max-w-[70rem] space-y-24">
        {/* ── Section 1: Effort → Points → Rewards ── */}
        <div>
          <h2 className=" font-bold text-navy mb-8">
            Effort → Points → Rewards
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left: steps + callout */}
            <div>
              <ul className="space-y-3 mb-6">
                {effortSteps.map((step) => (
                  <li
                    key={step}
                    className="flex items-center gap-2 text-[18px] text-muted_foreground"
                  >
                    <CheckCircle2 size={16} className="text-blue shrink-0" />
                    {step}
                  </li>
                ))}
              </ul>
              <p className="text-[18px] font-semibold text-blue">
                Responsibility becomes automatic.
              </p>
            </div>

            {/* Right: "How it works" card with arrow */}
            <div className="relative">
              {/* ── Desktop: side by side ── */}
              <div className="hidden md:flex items-center gap-4">
                {/* Label + arrow */}
                <div className="flex flex-col items-start shrink-0 relative">
                  <h3 className="text-[35px] font-semibold text-navy italic">
                    How it works
                  </h3>
                  <Image
                    src={ArrowDesktop}
                    alt="Arrow pointing right"
                    className="h-auto w-[70%] object-contain absolute top-5 left-[4rem]"
                  />
                </div>

                {/* Card */}
                <div className="rounded-xl shadow-lg overflow-hidden flex w-full max-w-[20rem]">
                  <div className="flex flex-col flex-1 bg-white">
                    {howItWorksCard.map((row) => (
                      <div
                        key={row.label}
                        className="flex items-center px-4 h-14 border-b border-border last:border-0"
                      >
                        <span className="text-[16px] text-muted_foreground">
                          {row.label}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col bg-teal">
                    {howItWorksCard.map((row) => (
                      <div
                        key={row.tag}
                        className="flex items-center justify-center px-5 h-14 border-b border-white/20 last:border-0"
                      >
                        <span className="text-[16px] font-semibold text-white whitespace-nowrap">
                          {row.tag}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* ── Mobile: stacked, arrow points down to card ── */}
              <div className="flex flex-col items-start md:hidden">
                {/* Label + downward arrow */}
                <p className="text-[20px] font-semibold text-navy italic">
                  How it works
                </p>
                <Image
                  src={ArrowMobile}
                  alt="Arrow pointing down"
                  className="mt-1"
                />

                {/* Card below */}
                <div className="rounded-xl shadow-lg overflow-hidden flex w-full max-w-[18rem] mt-1">
                  <div className="flex flex-col flex-1 bg-white">
                    {howItWorksCard.map((row) => (
                      <div
                        key={row.label}
                        className="flex items-center px-4 h-14 border-b border-border last:border-0"
                      >
                        <span className="text-[15px] text-muted_foreground">
                          {row.label}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col bg-teal">
                    {howItWorksCard.map((row) => (
                      <div
                        key={row.tag}
                        className="flex items-center justify-center px-5 h-14 border-b border-white/20 last:border-0"
                      >
                        <span className="text-[15px] font-semibold text-white whitespace-nowrap">
                          {row.tag}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* Right: "How it works" + card */}
          </div>
        </div>

        {/* ── Section 2: Track real progress ── */}
        <div>
          <h2 className="font-bold text-navy mb-4">
            Track real progress — not just tasks.
          </h2>
          <p className="text-[18px] text-muted_foreground mb-4">
            Slayt measures:
          </p>
          <ul className="space-y-3">
            {progressMetrics.map((metric) => (
              <li
                key={metric}
                className="flex items-center gap-2 text-[18px] text-muted_foreground"
              >
                <CheckCircle2 size={16} className="text-blue shrink-0" />
                {metric}
              </li>
            ))}
          </ul>
        </div>

        {/* ── Section 3: What it looks like at home ── */}
        <div>
          <h2 className="font-bold text-navy mb-8 line">
            What it looks like at home.
          </h2>

          {/* Centered, no stacking on mobile — shrinks but stays side by side */}
          <div className="flex justify-center">
            <div className="flex rounded-xl overflow-hidden shadow-lg border border-border w-full max-w-sm">
              {/* Before */}
              <div className="bg-[#3e525c] p-4 flex flex-col min-w-0 flex-1">
                <p className="text-[18px] font-bold text-navy uppercase mb-4 bg-background px-3 py-1.5 rounded-md ">
                  Before
                </p>
                <ul className="space-y-3 flex-1">
                  {beforeItems.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-[16px] text-white/80"
                    >
                      <CheckCircle2
                        size={13}
                        className="text-white/40 shrink-0 mt-0.5"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
                {/* Three arrows at bottom */}
                <div className="mt-6 flex gap-1">
                  {[0, 1, 2].map((i) => (
                    <svg
                      key={i}
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                    >
                      <path
                        d="M3 7h8M8 4l3 3-3 3"
                        stroke="white"
                        strokeOpacity="0.5"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ))}
                </div>
              </div>

              {/* After */}
              <div className="bg-white p-4 flex flex-col min-w-0 flex-1">
                <p className="text-[18px] font-bold text-navy uppercase mb-4 bg-teal px-3 py-1.5 rounded-md ">
                  After
                </p>
                <ul className="space-y-0 mt-1">
                  {afterItems.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-[16px] text-navy/70 border-b border-border py-2 last:border-0"
                    >
                      <CheckCircle2 size={13} className="text-teal shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
