export type FAQItem = {
  question: string;
  answer: string;
};

export type FAQSection = {
  title: string;
  items: FAQItem[];
};

export const faqData: FAQSection[] = [
  {
    title: "Most important question",
    items: [
      {
        question: "Will my child actually use this?",
        answer:
          "Yes – because Slayt is built around ownership, not reminders. Children check tasks themselves, earn visible points, and track streaks. Most families report noticeable changes within the first 7 days.",
      },
      {
        question: "What if my child ignores it?",
        answer:
          "Slayt is designed to be intuitive and engaging for kids. If your child ignores it at first, try involving them in setting up their tasks and rewards. The more ownership they feel, the more likely they are to use it consistently.",
      },
      {
        question: "Is this just another chore app?",
        answer:
          "Not at all. Slayt is built on behavioral science principles to create lasting habits. It’s not just about chores – it’s about teaching consistency, responsibility, and the connection between effort and outcomes.",
      },
      {
        question: "What age is this best for?",
        answer:
          "Slayt is designed for children ages 5 and up. The app is intuitive and engaging, making it easy for kids to use independently.",
      },
      {
        question: "Is slayt safe for my child?",
        answer:
          "Absolutely. Slayt is designed with children in mind. There are no ads, no social feeds, and no data sharing with third parties. Kids only see their own tasks and rewards.",
      },
    ],
  },
  {
    title: "Trust & Safety questions",
    items: [
      {
        question: "Does slayt replace parenting?",
        answer:
          "No. Slayt is a tool to support parents, not replace them. It’s designed to help you teach important life skills like consistency and responsibility, while giving you more time and less stress.",
      },
      {
        question: "Is there a lot of screen time involved?",
        answer:
          "Yes. Slayt is designed with children in mind. There are no ads, no social feeds, and no data sharing with third parties. Kids only see their own tasks and rewards.",
      },
    ],
  },
  {
    title: "Pricing questions",
    items: [
      {
        question: "Is slayt really free?",
        answer:
          "Yes. Slayt is completely free to use. We believe every family should have access to tools that help them thrive, without worrying about cost. There are no hidden fees or premium features – just download and start using it today.",
      },
      {
        question: "Will you charge later",
        answer:
          "No. We are committed to keeping Slayt free for all families. Our mission is to help parents and children build better habits together, and we believe that should be accessible to everyone, regardless of their financial situation.",
      },
      {
        question: "Can I cancel anytime?",
        answer:
          "Yes. You can cancel your subscription at any time through your account settings. If you have any questions or concerns, please contact us.",
      },
    ],
  },
  {
    title: "Practical questions",
    items: [
      {
        question: "How many children can i add?",
        answer:
          "You can add as many children as you like. All data is securely stored and can be deleted at any time.",
      },
      {
        question: "Can both parents use it?",
        answer:
          "Yes. Both parents can use Slayt with separate accounts. Each parent manages their own child's tasks and rewards, but all data is securely stored and can be deleted at any time.",
      },
      {
        question: "Does it work on iOS and Android?",
        answer:
          "Yes. Slayt is available on both iOS and Android devices. The app is designed to be intuitive and easy to use for children of all ages.",
      },
    ],
  },
  {
    title: "Results questions",
    items: [
      {
        question: "How long before I see results?",
        answer:
          "Results vary by child and family, but most parents see improvements in consistency and responsibility within a few weeks of consistent use.",
      },
      {
        question: "What makes rewards work in Slayt?",
        answer:
          "Rewards in Slayt are designed to be meaningful and motivating for children. They are tied directly to completed tasks and are customizable by parents. The key is that rewards are immediate and consistent, helping children associate effort with positive outcomes.",
      },
    ],
  },
];