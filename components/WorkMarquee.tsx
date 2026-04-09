import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, BarChart2, Globe, Cpu, Layout } from 'lucide-react';
import DotPattern from './ui/dot-pattern-1';

// ─── Original marquee data & component ───
const logos = [
  "Google", "Stripe", "Figma", "Webflow", "Notion", "Linear", "Vercel", "OpenAI",
  "Anthropic", "Loom", "Framer", "Arc", "Supabase", "Resend", "Planetscale", "Raycast"
];

const MarqueeContent = () => (
  <div className="flex marquee-content space-x-16">
    {logos.map((logo, index) => (
      <span key={index} className="text-xl font-medium text-gray-400 whitespace-nowrap">
        {logo}
      </span>
    ))}
  </div>
);

// High-fidelity visual components for flagship projects
const VeritasVisual = () => (
  <div className="relative w-full h-full min-h-[180px] flex items-center justify-center bg-white/[0.02] rounded-xl border border-white/5 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-transparent" />
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      className="relative z-10 w-4/5 h-3/4 bg-black/40 backdrop-blur-md border border-white/10 rounded-lg p-4 shadow-2xl"
    >
      <div className="flex items-center gap-2 mb-4">
        <div className="w-2 h-2 rounded-full bg-red-400/40" />
        <div className="w-2 h-2 rounded-full bg-yellow-400/40" />
        <div className="w-2 h-2 rounded-full bg-green-400/40" />
      </div>
      <div className="space-y-3">
        <div className="h-2 w-full bg-white/5 rounded-full" />
        <div className="h-2 w-2/3 bg-white/5 rounded-full" />
        <div className="mt-4 flex items-end gap-1 h-12">
          {[0.4, 0.7, 0.5, 0.9, 0.6, 0.8].map((h, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              whileInView={{ height: `${h * 100}%` }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="flex-1 bg-indigo-500/30 rounded-t-sm"
            />
          ))}
        </div>
      </div>
    </motion.div>
    {/* Decorative axis lines */}
    <div className="absolute left-4 top-0 bottom-0 w-[1px] bg-white/5" />
    <div className="absolute left-0 right-0 bottom-4 h-[1px] bg-white/5" />
  </div>
);

const OrionVisual = () => (
  <div className="relative w-full h-full min-h-[180px] flex items-center justify-center">
    <div className="relative flex items-center justify-center">
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="w-32 h-32 md:w-40 md:h-40 rounded-full border border-dashed border-white/20"
      />
      <motion.div 
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute w-20 h-20 md:w-24 md:h-24 rounded-full border border-white/10"
      />
      <div className="absolute w-12 h-12 md:w-16 md:h-16 bg-white/5 backdrop-blur-xl border border-white/20 rounded-xl rotate-45 flex items-center justify-center">
        <Globe className="w-6 h-6 md:w-8 md:h-8 text-white/40 -rotate-45" />
      </div>
      {/* Target markers */}
      <div className="absolute -top-4 -left-4 w-4 h-4 border-l border-t border-white/40" />
      <div className="absolute -bottom-4 -right-4 w-4 h-4 border-r border-b border-white/40" />
    </div>
  </div>
);

// Project case studies
const projects = [
  {
    tag: "SaaS · Design System",
    title: "Veritas Dashboard",
    desc: "End-to-end UI/UX and engineering for a B2B analytics platform serving 200k+ users. Reduced onboarding drop-off by 43%.",
    metrics: ["43% ↓ churn", "200k+ users", "8 wks"],
    accent: "from-white/[0.04] to-white/[0.01]",
    size: "lg:col-span-2",
    visual: <VeritasVisual />
  },
  {
    tag: "Brand · Web",
    title: "Meridian Capital",
    desc: "Full rebrand and bespoke marketing site for a Series-B fintech. Built on Next.js 14 with Cinema-quality motion.",
    metrics: ["3.2s → 0.9s TTI", "98 Lighthouse", "4 wks"],
    accent: "from-white/[0.03] to-white/[0.01]",
    size: "lg:col-span-1",
  },
  {
    tag: "AI · Product",
    title: "Pulse AI",
    desc: "AI-native CRM interface with GPT-4o embedded intelligence, real-time deal scoring, and adaptive layout engine.",
    metrics: ["0→1 product", "AI-native", "12 wks"],
    accent: "from-white/[0.03] to-white/[0.01]",
    size: "lg:col-span-1",
  },
  {
    tag: "Spatial · AR",
    title: "Aether Spatial",
    desc: "Next-gen spatial computing interface for architectural visualization. Implemented with Three.js and real-time raytracing.",
    metrics: ["Volumetric UI", "WebXR", "10 wks"],
    accent: "from-white/[0.03] to-white/[0.01]",
    size: "lg:col-span-1",
  },
  {
    tag: "Bio-Tech · Data",
    title: "Neural Nexus",
    desc: "Advanced brain-computer interface dashboard for neural data collection. High-throughput data streaming and 3D mapping.",
    metrics: ["8ms Latency", "3D Mapping", "16 wks"],
    accent: "from-white/[0.03] to-white/[0.01]",
    size: "lg:col-span-1",
  },
  {
    tag: "Motion · Identity",
    title: "Orion Studio",
    desc: "Brand identity, motion guidelines, and a Framer-powered portfolio for a LA-based creative studio.",
    metrics: ["22 animations", "Framer", "3 wks"],
    accent: "from-white/[0.04] to-white/[0.01]",
    size: "lg:col-span-2",
    visual: <OrionVisual />
  },
];

// Stats
const stats = [
  { value: "48+", label: "Projects Shipped" },
  { value: "$12M+", label: "Client Revenue Generated" },
  { value: "98%", label: "Client Retention Rate" },
  { value: "< 3wk", label: "Average First Delivery" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] }
  }),
};

const WorkMarquee: React.FC = React.memo(() => {
  return (
    <section id="work" className="relative py-24 overflow-hidden border-t border-white/5 gpu">

      {/* ─── Section header ─── */}
      <div className="mx-auto max-w-7xl px-6 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <p className="text-[10px] uppercase tracking-[0.3em] text-gray-500 mb-3">
            Selected Work
          </p>
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-white leading-tight">
            Proof over<br />
            <span className="text-gray-500">promises.</span>
          </h2>
        </div>
        <p className="text-gray-500 text-sm max-w-xs md:text-right leading-relaxed">
          A curated collection of client work spanning product design, engineering,
          brand identity, and AI integration.
        </p>
      </div>

      {/* ─── Marquee ─── */}
      <div className="relative flex items-center mb-20 opacity-30 select-none grayscale">
        <MarqueeContent />
        <MarqueeContent />
      </div>

      {/* ─── Project grid ─── */}
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-24">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              className={`group relative bg-[#0A0A0A] border border-white/[0.08] rounded-2xl p-10 md:p-14 transition-all duration-300 ${p.size}`}
            >
              <div className={`flex flex-col lg:flex-row h-full gap-10 ${p.size.includes('col-span-2') ? '' : 'flex-col'}`}>
                
                {/* Content Side */}
                <div className="flex-1 flex flex-col justify-between gap-8 relative z-10">
                  {/* Dot Pattern Texture (Only behind content for clarity) */}
                  <DotPattern 
                    width={8} 
                    height={8} 
                    className="fill-white/[0.02] group-hover:fill-white/[0.04] transition-colors [mask-image:radial-gradient(circle_at_top_left,white,transparent,transparent)]" 
                  />

                  {/* Technical Corners (Drafting Style) - Offset for breathing room */}
                  <div className="absolute -left-2 -top-2 h-4 w-4 border-l border-t border-white/20 group-hover:border-white/50 transition-colors" />
                  <div className="absolute -right-2 -top-2 h-4 w-4 border-r border-t border-white/20 group-hover:border-white/50 transition-colors" />
                  <div className="absolute -left-2 -bottom-2 h-4 w-4 border-l border-b border-white/20 group-hover:border-white/50 transition-colors" />
                  <div className="absolute -right-2 -bottom-2 h-4 w-4 border-r border-b border-white/20 group-hover:border-white/50 transition-colors" />

                  {/* Corner accent blocks */}
                  <div className="absolute -left-[6px] -top-[6px] h-2 w-2 bg-white/10 group-hover:bg-white/30 transition-colors" />
                  <div className="absolute -right-[6px] -top-[6px] h-2 w-2 bg-white/10 group-hover:bg-white/30 transition-colors" />
                  <div className="absolute -left-[6px] -bottom-[6px] h-2 w-2 bg-white/10 group-hover:bg-white/30 transition-colors" />
                  <div className="absolute -right-[6px] -bottom-[6px] h-2 w-2 bg-white/10 group-hover:bg-white/30 transition-colors" />

                  <div>
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 mb-4 block">
                      {p.tag}
                    </span>
                    <h3 className="text-2xl font-black text-white tracking-tight mb-3">
                      {p.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed max-w-md">{p.desc}</p>
                  </div>

                  {/* Metrics */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {p.metrics.map((m) => (
                      <span
                        key={m}
                        className="text-[9px] font-black uppercase tracking-[0.1em] border border-white/[0.08] rounded-full px-3 py-1 text-gray-400 bg-white/[0.02]"
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Visual Side (Targeted specifically to the blank space) */}
                {p.visual && (
                  <div className="flex-1 hidden lg:flex items-center justify-center p-2 relative z-10 border-l border-white/5">
                    {p.visual}
                  </div>
                )}
              </div>

              {/* Arrow */}
              <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 z-20">
                <ArrowUpRight className="h-5 w-5 text-white" />
              </div>

              {/* Functional Drafting markers */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-1 pr-1 opacity-20">
                <div className="h-4 w-[1px] bg-white" />
                <div className="h-1 w-[1px] bg-white" />
                <div className="h-1 w-[1px] bg-white" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* ─── Stats strip ─── */}
        <div className="border-t border-white/5 pt-16 grid grid-cols-2 md:grid-cols-4 gap-12 mb-12">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              className="flex flex-col gap-2"
            >
              <span className="text-4xl md:text-5xl font-black tracking-tighter text-white">
                {s.value}
              </span>
              <span className="text-[10px] text-gray-500 uppercase tracking-[0.3em] font-medium">
                {s.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
});

export default WorkMarquee;
