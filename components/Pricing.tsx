
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Plan = 'monthly' | 'quarterly';

interface PricingProps {
}

const pricingData = {
  monthly: [
    { name: 'Standard', price: '$4,995', features: ['One request at a time', 'Avg. 48hr turnaround', 'Unlimited brands', 'Webflow development'] },
    { name: 'Pro', price: '$7,995', features: ['Two requests at a time', 'Avg. 24hr turnaround', 'AI & Automation', 'React/Next.js dev'], pro: true },
    { name: 'Enterprise', price: 'Let\'s Talk', features: ['Custom requests', 'Dedicated account manager', 'Priority support', 'Shared Slack channel'] },
  ],
  quarterly: [
    { name: 'Standard', price: '$4,495', features: ['One request at a time', 'Avg. 48hr turnaround', 'Unlimited brands', 'Webflow development'] },
    { name: 'Pro', price: '$7,195', features: ['Two requests at a time', 'Avg. 24hr turnaround', 'AI & Automation', 'React/Next.js dev'], pro: true },
    { name: 'Enterprise', price: 'Let\'s Talk', features: ['Custom requests', 'Dedicated account manager', 'Priority support', 'Shared Slack channel'] },
  ],
};

const Pricing: React.FC<PricingProps> = () => {
  const [plan, setPlan] = useState<Plan>('monthly');

  return (
    <section id="pricing" className="container mx-auto max-w-6xl px-4 py-24">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-black tracking-tighter">Simple, transparent pricing.</h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">Choose the plan that's right for you. Pause or cancel anytime.</p>
      </div>

      <div className="flex justify-center mb-10">
        <div className="relative flex items-center p-1 rounded-full bg-gray-900 ring-1 ring-white/10">
          <button onClick={() => setPlan('monthly')} className={`relative z-10 px-6 py-2 text-sm font-semibold rounded-full transition-colors ${plan === 'monthly' ? 'text-white' : 'text-gray-500 hover:text-white'}`}>Monthly</button>
          <button onClick={() => setPlan('quarterly')} className={`relative z-10 px-6 py-2 text-sm font-semibold rounded-full transition-colors ${plan === 'quarterly' ? 'text-white' : 'text-gray-500 hover:text-white'}`}>Quarterly</button>
          <motion.div
            layout
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="absolute h-[calc(100%-8px)] w-[calc(50%-4px)] top-[4px] bg-gray-800 rounded-full shadow-sm"
            animate={{ x: plan === 'monthly' ? '4px' : 'calc(100% - 4px)' }}
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <AnimatePresence mode="wait">
        {pricingData[plan].map((card, i) => (
          <motion.div
            key={card.name + plan}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.4, ease: "easeOut" } }}
            exit={{ opacity: 0, y: -30, transition: { duration: 0.2, ease: "easeIn" } }}
            whileHover={{ scale: 1.05, y: -8, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
            className={`relative p-8 rounded-3xl cursor-pointer overflow-hidden ${
              card.pro
                ? `bg-gray-900/80 apple-glow-dark`
                : 'bg-gray-900/50'
            } ring-1 ring-white/10 backdrop-blur-sm`}
          >
            {card.pro && (
              <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
                <div className="px-3 py-1 text-sm font-semibold text-white bg-indigo-500 rounded-full shadow-md">
                  Most Popular
                </div>
              </div>
            )}
            <h3 className="text-lg font-semibold">{card.name}</h3>
            <p className="mt-2 text-4xl font-bold tracking-tight">
              {card.price}
              {card.price.startsWith('$') && <span className="text-sm font-medium text-gray-500"> /mo</span>}
            </p>
            <button className={`w-full mt-8 py-3 font-semibold rounded-full transition-colors ${
              card.pro
                ? 'bg-white text-black'
                : 'bg-gray-800 text-white ring-1 ring-inset ring-white/10'
            }`}>
              {card.price.startsWith('$') ? 'Get Started' : 'Contact Us'}
            </button>
            <ul className="mt-8 space-y-3 text-sm text-gray-400">
              {card.features.map(feature => (
                <li key={feature} className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-indigo-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Pricing;
