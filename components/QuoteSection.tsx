"use client";

import React from "react";
import DotPattern from "@/components/ui/dot-pattern-1";
import { motion } from "framer-motion";

export const QuoteSection = React.memo(() => {
  return (
    <section className="py-24 bg-[#0A0A0A] overflow-hidden gpu">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex flex-col items-center border border-white/10 rounded-[2rem] overflow-hidden bg-gradient-to-b from-white/[0.02] to-transparent"
        >
          {/* Dot Pattern Background */}
          <DotPattern 
            width={12} 
            height={12} 
            className="fill-white/[0.03] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" 
          />

          {/* Technical Corner Blocks (Edge Style) */}
          <div className="absolute -left-1 -top-1 h-4 w-4 bg-white/20 rounded-sm" />
          <div className="absolute -left-1 -bottom-1 h-4 w-4 bg-white/20 rounded-sm" />
          <div className="absolute -right-1 -top-1 h-4 w-4 bg-white/20 rounded-sm" />
          <div className="absolute -right-1 -bottom-1 h-4 w-4 bg-white/20 rounded-sm" />

          {/* Corner Line Accents */}
          <div className="absolute -left-4 -top-4 h-8 w-8 border-l border-t border-white/30" />
          <div className="absolute -right-4 -top-4 h-8 w-8 border-r border-t border-white/30" />
          <div className="absolute -left-4 -bottom-4 h-8 w-8 border-l border-b border-white/30" />
          <div className="absolute -right-4 -bottom-4 h-8 w-8 border-r border-b border-white/30" />

          <div className="relative z-20 mx-auto max-w-5xl px-8 py-16 md:p-20 xl:py-24 text-center">
            <p className="text-[10px] uppercase tracking-[0.4em] text-gray-500 mb-8 font-black">
              Agency Philosophy
            </p>
            
            <div className="text-3xl md:text-5xl lg:text-7xl font-black tracking-tighter text-white leading-[1.1]">
              <div className="flex flex-wrap justify-center gap-x-4">
                <span className="text-white opacity-40">"</span>
                <span>Design should be</span>
                <span className="text-gray-500 font-light italic">easy to</span>
              </div>
              <div className="flex flex-wrap justify-center gap-x-4">
                <span className="text-gray-500 font-light italic">understand</span>
                <span>because</span>
                <span className="text-gray-500 font-light italic">simple</span>
              </div>
              <div className="flex flex-wrap justify-center gap-x-4">
                <span className="text-gray-500 font-light italic">ideas</span>
                <span>are quicker to</span>
                <span className="text-gray-500 font-light italic">grasp</span>
                <span className="text-white opacity-40">..."</span>
              </div>
            </div>
            
            <div className="mt-12 h-px w-24 bg-gradient-to-r from-transparent via-white/20 to-transparent mx-auto" />
            <p className="mt-8 text-xs font-black uppercase tracking-[0.3em] text-gray-500">
              Edge Collective · Est. 2024
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
});

export default QuoteSection;
