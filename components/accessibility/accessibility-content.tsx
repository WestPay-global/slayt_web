"use client";

import { CheckCircle2 } from "lucide-react";

const sections = [
  {
    number: 1,
    title: "Accessibility is not an afterthought.",
    paragraphs: [
      "Slayt was designed to support children with different learning styles, attention levels, and needs.",
      "We aim to make habit-building clear, calm, and inclusive.",
    ],
    bullets: [],
    features: [],
    callout: null,
  },
  {
    number: 2,
    title: "Clear. Calm. Easy to read.",
    paragraphs: ["Slayt includes:"],
    bullets: [
      "High-contrast interface",
      "Clear visual task structure",
      "Large tap targets",
      "Minimal clutter",
      "Adjustable reminder settings",
    ],
    features: [],
    callout: null,
    closing: "We prioritize readability over visual overload.",
  },
  {
    number: 3,
    title: "Support for different learning styles.",
    paragraphs: ["Slayt is helpful for families navigating:"],
    bullets: [
      "ADHD",
      "Executive function challenges",
      "Autism spectrum differences",
      "Sensory sensitivities",
      "Routine consistency difficulties",
    ],
    features: [
      "Predictable task structure",
      "Visual task lists",
      "Gradual reminder reduction",
      "Reduced motion options",
      "Clear completion signals",
    ],
    callout:
      "Slayt is not a medical tool — but it supports structure and routine.",
  },
  {
    number: 4,
    title: "Reduced motion support.",
    paragraphs: ["Users can:"],
    bullets: [
      "Disable celebration animations",
      "Reduce motion transitions",
      "Turn off sound effects",
      "Adjust reminder intensity",
    ],
    features: [],
    callout: null,
  },
  {
    number: 5,
    title: "Works with assistive technologies.",
    paragraphs: ["Slayt is built to support:"],
    bullets: [
      "Screen readers (VoiceOver, TalkBack)",
      "Accessible navigation patterns",
      "Standard mobile accessibility guidelines",
      "Clear focus states for interactive elements",
    ],
    features: [],
    callout: null,
  },
  {
    number: 6,
    title: "We are always improving.",
    paragraphs: [
      "Accessibility is a continuous process.",
      "We welcome feedback to make Slayt better for all families.",
      "Contact:  accessibility@slaytapp.com",
    ],
    bullets: [],
    features: [],
    callout: null,
  },
];

export default function AccessibilityContent() {
  return (
    <section className="py-20 px-6">
      <div className="mx-auto max-w-5xl">
        <div className="mt-2 space-y-12">
          {sections.map((section) => (
            <div key={section.number} className="">
              {/* Numbered heading */}
              <h2 className="font-bold text-navy mb-4">
                <span className="mr-2">{section.number}.</span>
                {section.title}
              </h2>

              {/* Opening paragraphs */}
              {section.paragraphs.map((p, i) => (
                <p key={i} className="text-muted_foreground mb-2">
                  {p}
                </p>
              ))}

              {/* Bullet list */}
              {section.bullets.length > 0 && (
                <ul className="mt-3 space-y-1.5 mb-4">
                  {section.bullets.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-muted_foreground"
                    >
                      <span className="mt-1.5 h-1 w-1 rounded-full bg-muted_foreground shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              {/* Closing line (section 2) */}
              {"closing" in section && section.closing && (
                <p className="text-sm text-muted_foreground mt-2">
                  {section.closing}
                </p>
              )}

              {/* Feature list with check icons */}
              {section.features.length > 0 && (
                <>
                  <p className="text-sm text-muted_foreground mt-4 mb-3">
                    Features that help:
                  </p>
                  <ul className="space-y-3">
                    {section.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-muted_foreground"
                      >
                        <CheckCircle2
                          size={16}
                          className="text-blue shrink-0"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {/* Callout */}
              {section.callout && (
                <p className="mt-6 text-sm font-semibold text-blue">
                  {section.callout}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
