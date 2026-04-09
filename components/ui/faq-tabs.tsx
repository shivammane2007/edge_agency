import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FAQItemProps {
  question: string;
  answer: string;
}

interface FAQListProps {
  faqData: Record<string, FAQItemProps[]>;
  selected: string;
}

interface FAQTabsProps {
  categories: Record<string, string>;
  selected: string;
  setSelected: (key: string) => void;
}

interface FAQProps {
  title?: string;
  subtitle?: string;
  categories: Record<string, string>;
  faqData: Record<string, FAQItemProps[]>;
  className?: string;
  id?: string;
}

// Main reusable FAQ component
export const FAQ: React.FC<FAQProps> = ({ 
  title = "FAQs",
  subtitle = "Frequently Asked Questions",
  categories,
  faqData,
  className,
  id,
  ...props 
}) => {
  const categoryKeys = Object.keys(categories);
  const [selectedCategory, setSelectedCategory] = useState(categoryKeys[0]);

  return (
    <section 
      id={id}
      className={cn(
        "relative overflow-hidden bg-background px-4 py-24 text-foreground",
        className
      )}
      {...props}
    >
      <FAQHeader title={title} subtitle={subtitle} />
      <FAQTabs 
        categories={categories}
        selected={selectedCategory} 
        setSelected={setSelectedCategory} 
      />
      <FAQList 
        faqData={faqData}
        selected={selectedCategory} 
      />
    </section>
  );
};

const FAQHeader: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
  <div className="relative z-10 flex flex-col items-center justify-center text-center">
    <span className="mb-4 text-sm font-bold uppercase tracking-widest text-primary/60">
      {subtitle}
    </span>
    <h2 className="mb-12 text-3xl sm:text-5xl md:text-6xl font-black tracking-tighter">{title}</h2>
    <div className="absolute -top-[350px] left-[50%] z-0 h-[500px] w-[600px] -translate-x-[50%] rounded-full bg-primary/5 blur-[120px]" />
  </div>
);

const FAQTabs: React.FC<FAQTabsProps> = ({ categories, selected, setSelected }) => (
  <div className="relative z-10 flex flex-wrap items-center justify-center gap-2 md:gap-4">
    {Object.entries(categories).map(([key, label]) => (
      <button
        key={key}
        onClick={() => setSelected(key)}
        className={cn(
          "relative overflow-hidden whitespace-nowrap rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-300",
          selected === key
            ? "border-white text-black"
            : "border-white/10 bg-white/5 text-gray-400 hover:text-white"
        )}
      >
        <span className="relative z-10">{label}</span>
        <AnimatePresence>
          {selected === key && (
            <motion.span
              layoutId="faq-tab-bg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 z-0 bg-white"
            />
          )}
        </AnimatePresence>
      </button>
    ))}
  </div>
);

const FAQList: React.FC<FAQListProps> = ({ faqData, selected }) => (
  <div className="relative mx-auto mt-16 max-w-3xl">
    <AnimatePresence mode="wait">
      {Object.entries(faqData).map(([category, questions]: [string, FAQItemProps[]]) => {
        if (selected === category) {
          return (
            <motion.div
              key={category}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-4"
            >
              {questions.map((faq, index) => (
                <FAQItem key={index} {...faq} />
              ))}
            </motion.div>
          );
        }
        return null;
      })}
    </AnimatePresence>
  </div>
);

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      animate={isOpen ? "open" : "closed"}
      className={cn(
        "rounded-2xl border transition-all duration-300 overflow-hidden",
        isOpen ? "bg-white/5 border-white/20" : "bg-black/20 border-white/5 hover:border-white/10"
      )}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between gap-4 p-6 text-left"
      >
        <span
          className={cn(
            "text-lg font-bold transition-colors",
            isOpen ? "text-white" : "text-gray-400"
          )}
        >
          {question}
        </span>
        <motion.span
          variants={{
            open: { rotate: "45deg" },
            closed: { rotate: "0deg" },
          }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <Plus
            className={cn(
              "h-5 w-5 transition-colors",
              isOpen ? "text-white" : "text-gray-500"
            )}
          />
        </motion.span>
      </button>
      <motion.div
        initial={false}
        animate={{ 
          height: isOpen ? "auto" : "0px", 
          opacity: isOpen ? 1 : 0
        }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-6 pt-0">
          <p className="text-gray-400 leading-relaxed font-medium">{answer}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};
