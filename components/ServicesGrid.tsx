import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform, Variants } from 'framer-motion';
import { 
  ArrowUpRight, 
  Cpu, 
  Code2, 
  Layout, 
  Zap, 
  Terminal,
  MousePointer2,
  BarChart3
} from 'lucide-react';
import DotPattern from './ui/dot-pattern-1';

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * i,
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1]
    }
  })
};

const SpotlightCard: React.FC<{
  children: React.ReactNode;
  className?: string;
  delay?: number;
}> = ({ children, className = "", delay = 0 }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={onMouseMove}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      custom={delay}
      variants={cardVariants}
      className={`group relative isolate overflow-hidden rounded-[2rem] border border-white/[0.08] p-10 md:p-14 transition-colors hover:border-white/[0.15] ${className}`}
    >
      {/* ── Layer -10: Background Color ── */}
      <div className="absolute inset-0 z-[-10] bg-[#0A0A0A]" />

      {/* ── Layer 0: Decorations (Dots, corners, spotlight) ── */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-[2rem]">
        {/* Dot Pattern Texture */}
        <DotPattern
          width={8}
          height={8}
          cx={1}
          cy={1}
          cr={1}
          className="fill-white/[0.01] group-hover:fill-white/[0.02] transition-colors [mask-image:radial-gradient(400px_circle_at_center,white,transparent)]"
        />

        {/* Technical Corners (Drafting Style) - Expanded for breathing room */}
        <div className="absolute -left-2 -top-2 h-4 w-4 border-l border-t border-white/20 group-hover:border-white/50 transition-colors" />
        <div className="absolute -right-2 -top-2 h-4 w-4 border-r border-t border-white/20 group-hover:border-white/50 transition-colors" />
        <div className="absolute -left-2 -bottom-2 h-4 w-4 border-l border-b border-white/20 group-hover:border-white/50 transition-colors" />
        <div className="absolute -right-2 -bottom-2 h-4 w-4 border-r border-b border-white/20 group-hover:border-white/50 transition-colors" />

        {/* Corner accent blocks */}
        <div className="absolute -left-[6px] -top-[6px] h-2 w-2 bg-white/10 group-hover:bg-white/30 transition-colors" />
        <div className="absolute -right-[6px] -top-[6px] h-2 w-2 bg-white/10 group-hover:bg-white/30 transition-colors" />
        <div className="absolute -left-[6px] -bottom-[6px] h-2 w-2 bg-white/10 group-hover:bg-white/30 transition-colors" />
        <div className="absolute -right-[6px] -bottom-[6px] h-2 w-2 bg-white/10 group-hover:bg-white/30 transition-colors" />

        {/* Spotlight effect */}
        <motion.div
          className="absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
          style={{
            background: useTransform(
              [mouseX, mouseY],
              ([x, y]) => `radial-gradient(600px circle at ${x}px ${y}px, rgba(255,255,255,0.06), transparent 40%)`
            ),
          }}
        />
      </div>
      
      {/* ── Layer 10: Absolute Content Layer ── */}
      <div className="relative z-10 h-full w-full">
        {children}
      </div>
    </motion.div>
  );
};

const ServicesGrid: React.FC = () => {
  return (
    <section id="services" className="relative py-16 md:py-32 overflow-hidden bg-[#0A0A0A]">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[800px] h-[300px] md:h-[800px] bg-white/[0.02] blur-[80px] md:blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-16 md:mb-24 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500">
              Capabilities
            </span>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8">
              <h2 className="text-3xl md:text-7xl font-black tracking-tighter text-white leading-[1.1] md:leading-none">
                Elite solutions.<br />
                <span className="text-gray-500">Edge perspective.</span>
              </h2>
              <p className="max-w-xs text-gray-500 text-xs md:text-sm leading-relaxed mb-1 mx-auto md:mx-0">
                We bridge the gap between imagination and execution with cutting-edge 
                technology and bespoke design systems.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 md:gap-8 md:auto-rows-fr">
          
          {/* UI/UX Design - Large Focal Card */}
          <SpotlightCard delay={1} className="md:col-span-2 md:row-span-2 flex flex-col justify-between min-h-[320px] md:min-h-[480px]">
            <div className="relative z-20">
              <div className="h-10 w-10 md:h-14 md:w-14 rounded-xl md:rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center mb-6 md:mb-8 group-hover:scale-110 transition-transform duration-500">
                <Layout className="w-5 h-5 md:w-7 md:h-7 text-white" />
              </div>
              <h3 className="text-xl md:text-4xl font-black tracking-tight text-white mb-3 md:mb-4">
                Product Design
              </h3>
              <p className="text-gray-400 text-xs md:text-base leading-relaxed max-w-sm">
                Crafting immersive digital experiences that convert. We architect 
                user journeys that feel native to your brand.
              </p>
            </div>
            
            {/* Visual Element: Floating UI Elements */}
            <div className="mt-8 relative h-32 md:h-56 w-full overflow-hidden rounded-xl bg-white/[0.02] border border-white/5 p-4 flex items-center justify-center z-20">
               <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
               <motion.div 
                 animate={{ y: [0, -10, 0] }}
                 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                 className="w-full md:w-4/5 h-full md:h-3/4 rounded-lg bg-white/5 border border-white/10 p-4 shadow-2xl backdrop-blur-sm"
               >
                 <div className="flex gap-2 mb-4">
                   <div className="w-2 h-2 rounded-full bg-red-500/50" />
                   <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                   <div className="w-2 h-2 rounded-full bg-green-500/50" />
                 </div>
                 <div className="space-y-2 md:space-y-3">
                   <div className="h-1.5 md:h-2 w-2/3 bg-white/10 rounded-full" />
                   <div className="h-1.5 md:h-2 w-full bg-white/5 rounded-full" />
                   <div className="h-10 md:h-14 w-full bg-white/5 rounded-lg border border-white/5 mt-4" />
                 </div>
               </motion.div>
            </div>
          </SpotlightCard>

          {/* AI Engineering - Wide Card */}
          <SpotlightCard delay={2} className="md:col-span-2 md:row-span-1 flex flex-col justify-between min-h-0">
            <div className="flex justify-between items-start relative z-20">
              <div>
                <div className="h-10 w-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-4 md:mb-6 group-hover:rotate-12 transition-transform duration-500">
                  <Cpu className="w-5 h-5 text-indigo-400" />
                </div>
                <h3 className="text-lg md:text-2xl font-black tracking-tight text-white mb-2">
                  AI Engineering
                </h3>
                <p className="text-gray-500 text-[11px] md:text-xs leading-relaxed max-w-xs">
                  Native integration of LLMs and custom ML models into your 
                  existing workflows for hyper-efficiency.
                </p>
              </div>
              <Zap className="w-5 h-5 text-yellow-500/20 group-hover:text-yellow-500/80 transition-colors duration-500" />
            </div>

            {/* Neural Flow visualization */}
            <div className="mt-6 flex gap-1 h-3 md:h-4 items-end relative z-20">
              {[...Array(24)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ height: ["20%", "100%", "20%"] }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: Infinity, 
                    delay: i * 0.05,
                    ease: "easeInOut" 
                  }}
                  className="flex-1 bg-gradient-to-t from-indigo-500/20 to-indigo-500/80 rounded-full"
                />
              ))}
            </div>
          </SpotlightCard>

          {/* Engineering - Tall/Small Card */}
          <SpotlightCard delay={3} className="md:col-span-1 md:row-span-1 flex flex-col justify-between min-h-0">
            <div className="relative z-20">
              <Terminal className="w-5 h-5 text-emerald-400 mb-4 md:mb-6" />
              <h3 className="text-lg md:text-xl font-black tracking-tight text-white mb-2">
                Engineering
              </h3>
              <p className="text-gray-500 text-[11px] md:text-xs leading-relaxed">
                Clean, scalable codebases built with Next.js 14.
              </p>
            </div>
            
            <motion.div 
              className="mt-6 font-mono text-[9px] md:text-[10px] text-emerald-500/40 bg-black/40 p-3 rounded-lg border border-white/5 overflow-hidden relative z-20"
            >
              <code className="block">const edge = () ={">"} true;</code>
              <code className="block opacity-50">v1.2 production</code>
            </motion.div>
          </SpotlightCard>

          {/* Growth - Small Card */}
          <SpotlightCard delay={4} className="md:col-span-1 md:row-span-1 flex flex-col justify-between min-h-0">
            <div className="relative z-20">
              <BarChart3 className="w-5 h-5 text-blue-400 mb-4 md:mb-6" />
              <h3 className="text-lg md:text-xl font-black tracking-tight text-white mb-2">
                Strategy
              </h3>
              <p className="text-gray-500 text-[11px] md:text-xs leading-relaxed">
                Metric-driven growth strategies.
              </p>
            </div>
            
            <div className="mt-6 flex items-end gap-1 relative z-20">
               <motion.div 
                 initial={{ scaleY: 0.2 }}
                 whileInView={{ scaleY: 1 }}
                 transition={{ duration: 1, delay: 0.5 }}
                 className="flex-1 h-8 md:h-10 bg-white/5 rounded-sm origin-bottom" 
               />
               <motion.div 
                 initial={{ scaleY: 0.4 }}
                 whileInView={{ scaleY: 0.8 }}
                 transition={{ duration: 1, delay: 0.6 }}
                 className="flex-1 h-12 md:h-14 bg-white/10 rounded-sm origin-bottom" 
               />
               <motion.div 
                 initial={{ scaleY: 0.1 }}
                 whileInView={{ scaleY: 1.2 }}
                 transition={{ duration: 1, delay: 0.7 }}
                 className="flex-1 h-10 md:h-12 bg-white/20 rounded-sm origin-bottom" 
               />
            </div>
          </SpotlightCard>

        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;