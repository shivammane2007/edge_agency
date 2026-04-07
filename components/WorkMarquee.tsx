
import React from 'react';

const logos = [
  "Google", "Stripe", "Figma", "Webflow", "Notion", "Linear", "Vercel", "OpenAI"
];

const MarqueeContent = () => (
    <div className="flex marquee-content space-x-16">
      {logos.map((logo, index) => (
        <span key={index} className="text-xl font-medium text-gray-500 dark:text-gray-400 whitespace-nowrap">
          {logo}
        </span>
      ))}
    </div>
);

const WorkMarquee: React.FC = () => {
  return (
    <section id="work" className="py-16 overflow-hidden">
      <div className="relative flex items-center">
        <MarqueeContent />
        <MarqueeContent />
      </div>
    </section>
  );
};

export default WorkMarquee;
