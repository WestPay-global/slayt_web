"use client";

const sections = [
  {
    number: 1,
    title: "Our Commitment",
    intro: "What we believe.",
    paragraphs: [
      "Slayt was designed for families.",
      "We do not sell personal data.",
      "We do not run ads inside the app.",
      "We do not allow public profiles or messaging between children.",
    ],
    closing: "Parents remain in control at all times.",
    bulletGroups: [],
    contact: null,
  },
  {
    number: 2,
    title: "What Information We Collect",
    intro: null,
    paragraphs: [],
    closing: null,
    bulletGroups: [
      {
        label: "From Parents:",
        items: [
          "Name",
          "Email address",
          "Account login details",
          "Subscription status (if applicable)",
        ],
      },
      {
        label: "From Children:",
        items: [
          "First name (or nickname)",
          "Task completion activity",
          "Points and reward data",
          "Habit progress metrics",
        ],
      },
      {
        label: "We do NOT collect:",
        items: [
          "Location data",
          "Contact lists",
          "Social media access",
          "Biometric data",
        ],
      },
    ],
    contact: null,
  },
  {
    number: 3,
    title: "How We Use Information",
    intro: "We use collected data only to:",
    paragraphs: [],
    closing: "We do not use data for advertising.",
    bulletGroups: [
      {
        label: null,
        items: [
          "Provide task and reward tracking",
          "Calculate habit progress metrics",
          "Deliver reminders and approvals",
          "Improve product functionality",
        ],
      },
    ],
    contact: null,
  },
  {
    number: 4,
    title: "Parent Control",
    intro: "Parents can:",
    paragraphs: [],
    closing: "Children cannot create accounts independently.",
    bulletGroups: [
      {
        label: null,
        items: [
          "View all child data",
          "Edit or delete tasks",
          "Delete child profiles",
          "Request full account deletion",
          "Export their data",
        ],
      },
    ],
    contact: null,
  },
  {
    number: 5,
    title: "Data Storage & Security",
    intro: null,
    paragraphs: [
      "We use secure cloud infrastructure.",
      "Data is encrypted in transit (HTTPS).",
      "Access is restricted to authorized personnel only.",
    ],
    closing: "We regularly review security practices.",
    bulletGroups: [],
    contact: null,
  },
  {
    number: 6,
    title: "Children's Privacy (COPPA Awareness Section)",
    intro: null,
    paragraphs: [
      "Slayt is designed for children under 13.",
      "All accounts are parent-created and parent-managed.",
      "We comply with applicable child data protection laws.",
      "We do not knowingly collect personal data directly from children without parental consent.",
    ],
    closing: null,
    bulletGroups: [],
    contact: null,
  },
  {
    number: 7,
    title: "Third-Party Services",
    intro: "We may use trusted services for:",
    paragraphs: [],
    closing: null,
    bulletGroups: [
      {
        label: null,
        items: [
          "Cloud hosting",
          "Analytics (non-identifiable usage)",
          "Crash reporting",
        ],
      },
    ],
    closingLines: [
      "These providers are bound by privacy agreements.",
      "We do not share personal child data with advertisers.",
    ],
    contact: null,
  },
  {
    number: 8,
    title: "Data Retention",
    intro: null,
    paragraphs: [
      "We retain data only as long as necessary to provide services.",
      "Parents may request deletion at any time.",
      "When an account is deleted, associated data is permanently removed within a reasonable time frame.",
    ],
    closing: null,
    bulletGroups: [],
    contact: null,
  },
  {
    number: 9,
    title: "Updates to This Policy",
    intro: null,
    paragraphs: [
      "We may update this policy from time to time.",
      "Parents will be notified of significant changes.",
    ],
    closing: null,
    bulletGroups: [],
    contact: null,
  },
  {
    number: 10,
    title: "Contact Information",
    intro: "If you have questions about privacy:",
    paragraphs: [],
    closing: null,
    bulletGroups: [],
    contact: {
      email: "support@slaytapp.com",
      note: "(Replace with real address)",
    },
  },
];

export default function PrivacyContent() {
  return (
    <section className="py-20 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="space-y-12">
          {sections.map((section) => (
            <div key={section.number} className="pt-2">
              {/* Numbered heading */}
              <h2 className="font-bold text-navy mb-4">
                <span className="mr-2">{section.number}.</span>
                {section.title}
              </h2>

              {/* Intro line */}
              {section.intro && (
                <p className="font-medium text-navy/80 mb-3">{section.intro}</p>
              )}

              {/* Paragraphs */}
              {section.paragraphs.map((p, i) => (
                <p key={i} className=" text-muted_foreground mb-1.5">
                  {p}
                </p>
              ))}

              {/* Bullet groups */}
              {section.bulletGroups.map((group, gi) => (
                <div key={gi} className="mt-4">
                  {group.label && (
                    <p className="font-medium text-navy/80 mb-2">
                      {group.label}
                    </p>
                  )}
                  <ul className="space-y-1.5 mb-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-[18px] text-muted_foreground"
                      >
                        <span className="mt-1.5 h-1 w-1 rounded-full bg-muted_foreground shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {/* Extra closing lines (section 7) */}
              {"closingLines" in section &&
                Array.isArray(section.closingLines) &&
                section.closingLines.map((line, i) => (
                  <p key={i} className=" text-muted_foreground mt-2">
                    {line}
                  </p>
                ))}

              {/* Closing line */}
              {section.closing && (
                <p className=" text-muted_foreground mt-3">{section.closing}</p>
              )}

              {/* Contact (section 10) */}
              {section.contact && (
                <p className="text-[16px] text-muted_foreground mt-2">
                  Email:{" "}
                  <a
                    href={`mailto:${section.contact.email}`}
                    className="text-blue hover:underline"
                  >
                    {section.contact.email}
                  </a>{" "}
                  <span className="text-muted_foreground/60">
                    {section.contact.note}
                  </span>
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
