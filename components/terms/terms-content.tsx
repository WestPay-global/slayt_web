"use client";

const sections = [
  {
    number: 1,
    title: "Introduction",
    paragraphs: [
      "Welcome to Slayt.",
      'These Terms & Conditions ("Terms") govern your use of the Slayt mobile application, website, and related services (collectively, the "Service").',
      "By creating an account or using Slayt, you agree to these Terms.",
      "If you do not agree, please do not use the Service.",
    ],
    bullets: [],
    closing: null,
  },
  {
    number: 2,
    title: "Who Can Use Slayt",
    paragraphs: ["Slayt is designed for families."],
    bullets: [
      "Parents or legal guardians must create and manage accounts.",
      "Children under 13 may only use Slayt under parental supervision.",
      "You must be at least 18 years old to create a parent account.",
    ],
    closing:
      "You are responsible for maintaining the confidentiality of your account information.",
  },
  {
    number: 3,
    title: "Description of Service",
    paragraphs: ["Slayt provides:"],
    bullets: [
      "Task assignment tools",
      "Reward tracking systems",
      "Habit progress insights",
      "Reminder and approval workflows",
    ],
    closing: "Slayt is intended to support parenting — not replace it.",
  },
  {
    number: 4,
    title: "Account Responsibility",
    paragraphs: ["You agree to:"],
    bullets: [
      "Provide accurate information",
      "Maintain the security of your login credentials",
      "Notify us of unauthorized access",
    ],
    closing:
      "Slayt is not responsible for loss resulting from unauthorized use of your account.",
  },
  {
    number: 5,
    title: "Parental Responsibility",
    paragraphs: ["Parents are fully responsible for:"],
    bullets: [
      "Tasks assigned to children",
      "Rewards offered",
      "Approval or rejection decisions",
      "Monitoring child activity within the app",
    ],
    closing: "Slayt does not monitor or intervene in parenting decisions.",
  },
  {
    number: 6,
    title: "Acceptable Use",
    paragraphs: ["You agree not to:"],
    bullets: [
      "Use Slayt for unlawful purposes",
      "Upload harmful or abusive content",
      "Attempt to disrupt or reverse-engineer the Service",
      "Share accounts with unauthorized users",
    ],
    closing:
      "We reserve the right to suspend accounts that violate these rules.",
  },
  {
    number: 7,
    title: "Intellectual Property",
    paragraphs: [
      "All content, design, graphics, branding, and software within Slayt are the property of Slayt and are protected by intellectual property laws.",
      "You may not copy, reproduce, or distribute any part of the Service without written permission.",
    ],
    bullets: [],
    closing: null,
  },
  {
    number: 8,
    title: "Data & Privacy",
    paragraphs: [
      "Your use of Slayt is also governed by our Privacy Policy.",
      "By using the Service, you consent to the collection and use of information as described in the Privacy Policy.",
    ],
    bullets: [],
    closing: null,
  },
  {
    number: 9,
    title: "Disclaimer of Warranties",
    paragraphs: [
      'Slayt is provided "as is" and "as available."',
      "We do not guarantee:",
    ],
    bullets: [
      "That results will be immediate",
      "That the Service will be uninterrupted",
      "That the Service will be error-free",
    ],
    closing: "Habit building takes time and consistency.",
  },
  {
    number: 10,
    title: "Limitation of Liability",
    paragraphs: [
      "To the maximum extent permitted by law, Slayt shall not be liable for:",
    ],
    bullets: [
      "Indirect damages",
      "Loss of data",
      "Parenting decisions made by users",
      "Disputes between parents and children",
    ],
    closing:
      "Our total liability shall not exceed the amount paid by you (if any) in the previous 12 months.",
  },
  {
    number: 11,
    title: "Subscription & Payment  (Future-Proof Clause)",
    paragraphs: [
      "Currently, Slayt offers a free version of its Service.",
      "If paid features are introduced in the future:",
    ],
    bullets: [
      "Pricing will be clearly disclosed",
      "Users may cancel at any time",
      "Billing terms will be transparent",
    ],
    closing: "We reserve the right to modify pricing with notice.",
  },
  {
    number: 12,
    title: "Termination",
    paragraphs: [
      "We may suspend or terminate accounts that violate these Terms.",
      "You may delete your account at any time through the app or by contacting support.",
    ],
    bullets: [],
    closing: null,
  },
  {
    number: 13,
    title: "Modifications to Terms",
    paragraphs: [
      "We may update these Terms from time to time.",
      "Significant changes will be communicated through the app or website.",
      "Continued use of the Service constitutes acceptance of updated Terms.",
    ],
    bullets: [],
    closing: null,
  },
  {
    number: 14,
    title: "Governing Law",
    paragraphs: [
      "These Terms are governed by the laws of [Insert Country/State].",
      "Any disputes shall be resolved under the applicable jurisdiction of that region.",
    ],
    bullets: [],
    closing: null,
  },
  {
    number: 15,
    title: "Contact Information",
    paragraphs: ["For questions regarding these Terms:"],
    bullets: [],
    closing: null,
    contact: {
      email: "support@theslayt.com",
      website: "https://theslayt.com/",
    },
  },
];

export default function TermsContent() {
  return (
    <section className="py-20 px-6">
      <div className="mx-auto max-w-6xl">
        {/* Effective dates */}
        <div className="mb-10 space-y-1 text-sm text-muted_foreground">
          <p>
            <span className="font-semibold text-navy">Effective Date:</span> May
            1, 2025
          </p>
          <p>
            <span className="font-semibold text-navy">Last Updated:</span>{" "}
            February 20, 2026
          </p>
        </div>

        <div className="space-y-12">
          {sections.map((section) => (
            <div key={section.number} className="pt-2">
              {/* Numbered heading */}
              <h2 className="font-bold text-navy mb-4">
                <span className="mr-2">{section.number}.</span>
                {section.title}
              </h2>

              {/* Paragraphs */}
              {section.paragraphs.map((p, i) => (
                <p key={i} className=" text-muted_foreground mb-2">
                  {p}
                </p>
              ))}

              {/* Bullet list */}
              {section.bullets.length > 0 && (
                <ul className="mt-3 space-y-1.5 mb-4">
                  {section.bullets.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-[16px] text-muted_foreground"
                    >
                      <span className="mt-1.5 h-1 w-1 rounded-full bg-muted_foreground shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              {/* Closing line */}
              {section.closing && (
                <p className="text-[16px] text-muted_foreground mt-2">
                  {section.closing}
                </p>
              )}

              {/* Contact links (section 15) */}
              {"contact" in section && section.contact && (
                <div className="my-3 space-y-1 text-[16px] text-muted_foreground">
                  <p>
                    Email:{" "}
                    <a
                      href={`mailto:${section.contact.email}`}
                      className="text-blue hover:underline"
                    >
                      {section.contact.email}
                    </a>
                  </p>
                  <p>
                    Website:{" "}
                    <a
                      href={section.contact.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue hover:underline"
                    >
                      {section.contact.website}
                    </a>
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
