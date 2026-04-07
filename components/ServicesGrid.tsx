import React from 'react';
// Fix: Import `Variants` type from framer-motion and apply it to `cardVariants`.
import { motion, Variants } from 'framer-motion';

const cardVariants: Variants = {
  offscreen: {
    y: 50,
    opacity: 0
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};

const GridCard: React.FC<{ className?: string; children: React.ReactNode; }> = ({ className = '', children }) => (
  <motion.div
    variants={cardVariants}
    className={`relative overflow-hidden rounded-3xl p-8 bg-gray-900/50 ring-1 ring-white/10 transition-all duration-300 hover:scale-[1.02] hover:ring-white/20 ${className}`}
  >
    {children}
  </motion.div>
);

const ServicesGrid: React.FC = () => {
  return (
    <motion.section 
      id="services"
      className="container mx-auto max-w-6xl px-4 py-16"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.2 }}
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-black tracking-tighter">Everything you need.</h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">One subscription. Unlimited scale.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <GridCard className="md:col-span-2">
          <h3 className="text-2xl font-bold">UI/UX Design</h3>
          <p className="mt-2 text-gray-400">From wireframes to pixel-perfect designs, we create intuitive and beautiful interfaces.</p>
          <div className="mt-8 h-48 rounded-xl bg-black/50 p-4 ring-1 ring-inset ring-white/10">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="mt-4 h-2 w-24 bg-gray-700 rounded-full"></div>
            <div className="mt-2 h-2 w-32 bg-gray-700 rounded-full"></div>
            <div className="mt-4 flex gap-2">
                <div className="flex-1 h-16 bg-gray-700 rounded-lg"></div>
                <div className="flex-1 h-16 bg-gray-700 rounded-lg"></div>
            </div>
          </div>
        </GridCard>
        
        <GridCard>
          <h3 className="text-2xl font-bold">AI Automation</h3>
          <p className="mt-2 text-gray-400">Integrate intelligent systems to automate workflows and enhance capabilities.</p>
          <div className="mt-8 h-48 flex items-center justify-center">
            <div className="relative w-24 h-24">
              <motion.div 
                className="absolute inset-0 rounded-full bg-indigo-500/20"
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              ></motion.div>
              <div className="absolute inset-2 rounded-full bg-indigo-500/30"></div>
              <div className="absolute inset-4 rounded-full bg-indigo-500 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
            </div>
          </div>
        </GridCard>

        <GridCard className="md:col-span-3">
          <h3 className="text-2xl font-bold">Development</h3>
          <p className="mt-2 text-gray-400">High-performance web applications built with modern frameworks like React and Next.js.</p>
          <div className="mt-8 h-48 rounded-xl bg-[#0d1117] font-mono text-sm text-gray-300 p-4 overflow-hidden">
            <pre><code>
              <span className="text-[#c9d1d9]">import</span> React <span className="text-[#c9d1d9]">from</span> <span className="text-[#a5d6ff]">'react'</span>;

              <span className="text-[#ff7b72]">const</span> <span className="text-[#d2a8ff]">Component</span> = () {'=>'} (
                <span className="text-[#79c0ff]">{'<'}div{'>'}</span>
                  Hello, Edge Agency!
                <span className="text-[#79c0ff]">{'<'}/div{'>'}</span>
              );
            </code></pre>
          </div>
        </GridCard>
      </div>
    </motion.section>
  );
};

export default ServicesGrid;