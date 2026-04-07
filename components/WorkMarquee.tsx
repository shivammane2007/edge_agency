
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

// ─── Original marquee data & component (unchanged) ───
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
// ─────────────────────────────────────────────────────

// Project case studies
const projects = [
  {
    tag: "SaaS · Design System",
    title: "Veritas Dashboard",
    desc: "End-to-end UI/UX and engineering for a B2B analytics platform serving 200k+ users. Reduced onboarding drop-off by 43%.",
    metrics: ["43% ↓ churn", "200k+ users", "8 wks"],
    accent: "from-white/[0.04] to-white/[0.01]",
    size: "lg:col-span-2",
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
    tag: "Motion · Identity",
    title: "Orion Studio",
    desc: "Brand identity, motion guidelines, and a Framer-powered portfolio for a LA-based creative studio.",
    metrics: ["22 animations", "Framer", "3 wks"],
    accent: "from-white/[0.04] to-white/[0.01]",
    size: "lg:col-span-2",
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

const WorkMarquee: React.FC = () => {
  return (
    <section id="work" className="py-24 overflow-hidden">

      {/* ── Section header ── */}
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

      {/* ── Original marquee (code 100% unchanged) ── */}
      <div className="relative flex items-center mb-20">
        <MarqueeContent />
        <MarqueeContent />
      </div>

      {/* ── Project grid ── */}
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              className={`group relative bg-gradient-to-br ${p.accent} border border-white/[0.06] rounded-2xl p-7 flex flex-col justify-between gap-5 cursor-pointer hover:border-white/[0.15] transition-all duration-300 ${p.size}`}
            >
              {/* Arrow */}
              <div className="absolute top-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <ArrowUpRight className="h-4 w-4 text-white" />
              </div>

              {/* Tag */}
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">
                {p.tag}
              </span>

              {/* Title + desc */}
              <div>
                <h3 className="text-lg font-black text-white tracking-tight mb-2">
                  {p.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">{p.desc}</p>
              </div>

              {/* Metrics pills */}
              <div className="flex flex-wrap gap-2">
                {p.metrics.map((m) => (
                  <span
                    key={m}
                    className="text-[10px] font-bold uppercase tracking-widest border border-white/10 rounded-full px-3 py-1 text-gray-400 bg-white/[0.02]"
                  >
                    {m}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Stats strip ── */}
        <div className="border-t border-white/5 pt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="flex flex-col gap-1"
            >
              <span className="text-3xl md:text-4xl font-black tracking-tighter text-white">
                {s.value}
              </span>
              <span className="text-xs text-gray-500 uppercase tracking-[0.15em]">
                {s.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default WorkMarquee;
