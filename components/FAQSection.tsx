import React from 'react';
import { FAQ } from './ui/faq-tabs';

const FAQSection: React.FC = () => {
  const categories = {
    "process": "Our Process",
    "services": "Services", 
    "pricing": "Pricing & Plans",
    "agency": "The Agency"
  };

  const faqData = {
    "process": [
      {
        question: "How does the subscription work?",
        answer: "Once subscribed, you can add as many design and development requests to your queue as you'd like, and they will be delivered one by one. You can pause or cancel your subscription at any time."
      },
      {
        question: "How fast will I receive my designs?",
        answer: "On average, most requests are completed in just two days or less. However, more complex requests (like full web applications or AI integrations) can take longer but are broken down into smaller, actionable milestones."
      },
      {
        question: "What is the revision process?",
        answer: "Revision is built into our core. We continue to refine the designs and code until you're 100% satisfied. There is no limit on the number of revisions you can request."
      }
    ],
    "services": [
      {
        question: "What specific services do you offer?",
        answer: "We offer a full suite of digital solutions including UI/UX Design, Full-stack Web Development (React/Next.js/Node.js), AI Integration & LLM workflows, Branding, and Framer/Webflow development."
      },
      {
        question: "Do you offer AI-specific consulting?",
        answer: "Yes. We help teams integrate LLMs like Gemini or GPT directly into their products, automate internal workflows with AI, and build bespoke AI-driven dashboards."
      }
    ],
    "pricing": [
      {
        question: "Why not just hire a full-time designer/developer?",
        answer: "The annual cost of a full-time senior-level designer or developer now exceeds $120,000, plus benefits. Aside from that, you may not always have enough work to keep them busy at all times, so you're stuck paying for time you aren't able to utilize."
      },
      {
        question: "Are there any hidden fees?",
        answer: "No. The subscription fixed price covers everything from design to deployment. There are no additional project management fees or surprise invoices."
      }
    ],
    "agency": [
      {
        question: "Who are the designers and developers?",
        answer: "You'll work directly with the founders and our elite, boutique team of senior specialists. We don't farm out work to juniors or external agencies; everything is handled in-house to maintain our premium quality bar."
      },
      {
        question: "Is there a limit on how many requests I can have?",
        answer: "There's no limit on the total number of requests. We work through your queue one at a time, ensuring each piece of work gets our full attention and meets our high standards."
      }
    ]
  };

  return (
    <FAQ 
      id="faq"
      title="Common Questions"
      subtitle="Full Transparency"
      categories={categories}
      faqData={faqData}
    />
  );
};

export default FAQSection;
