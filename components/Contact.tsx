"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  CheckCircle,
  Loader2,
} from "lucide-react";

interface ContactPageProps {
  onClose: () => void;
}

const services = [
  "UI/UX Design",
  "Web Development",
  "AI Workflows",
  "Brand & Identity",
  "Motion & Animation",
  "Full Product Build",
];

const budgets = ["< $5k", "$5k–$15k", "$15k–$50k", "$50k+"];

export default function ContactPage({ onClose }: ContactPageProps) {
  const [step, setStep] = useState<"form" | "success">("form");
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState<string[]>([]);
  const [budget, setBudget] = useState("");
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });

  // Lock body scroll while contact page is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const toggleService = (s: string) =>
    setSelected((prev) => (prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1600));
    setLoading(false);
    setStep("success");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[9999] bg-[#060606] overflow-y-scroll"
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" } as React.CSSProperties}
    >
      <style>{`div::-webkit-scrollbar { display: none; }`}</style>
      {/* Subtle grid */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03]"
        style={{ backgroundImage: "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

      {/* Ambient glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-white/[0.03] rounded-full blur-3xl pointer-events-none" />

      {/* Close button */}
      <button
        onClick={onClose}
        className="fixed top-6 right-6 z-10 flex items-center gap-2 border border-white/10 rounded-full px-4 py-2 text-gray-400 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all text-xs font-black uppercase tracking-widest"
      >
        <X className="h-3.5 w-3.5" /> Close
      </button>

      <AnimatePresence mode="wait">
        {step === "success" ? (
          /* ── Success State ── */
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="min-h-screen flex flex-col items-center justify-center text-center px-6"
          >
            <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6">
              <CheckCircle className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-white mb-3">
              We&apos;ll be in touch.
            </h2>
            <p className="text-gray-500 max-w-md mb-8">
              Thanks for reaching out. We review every inquiry personally and
              typically respond within one business day.
            </p>
            <button
              onClick={onClose}
              className="flex items-center gap-2 bg-white text-black text-sm font-black px-6 py-3 rounded-full hover:bg-gray-100 transition-all"
            >
              Back to Site <ArrowRight className="h-4 w-4" />
            </button>
          </motion.div>
        ) : (
          /* ── Form ── */
          <motion.div
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mx-auto max-w-6xl px-6 py-24"
          >
            {/* Header */}
            <div className="mb-14 max-w-2xl">
              <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400 mb-4">
                Edge Agency · Contact
              </p>
              <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-white leading-[1.05]">
                Let&apos;s build<br />
                <span className="text-gray-500">something elite.</span>
              </h1>
              <p className="text-gray-500 mt-4 text-base max-w-lg">
                Tell us about your project. We&apos;ll review it and get back to you
                within 24 hours with a tailored response.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* ── Left: Form ── */}
              <form onSubmit={handleSubmit} className="lg:col-span-7 space-y-6">

                {/* Name + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {(["name", "email"] as const).map((field) => (
                    <div key={field}>
                      <label className="block text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-2">
                        {field === "name" ? "Your Name *" : "Email Address *"}
                      </label>
                      <input
                        type={field === "email" ? "email" : "text"}
                        required
                        placeholder={field === "name" ? "Alex Johnson" : "alex@company.co"}
                        value={form[field]}
                        onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                        className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-white/30 transition-colors"
                      />
                    </div>
                  ))}
                </div>

                {/* Company */}
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-2">
                    Company / Project
                  </label>
                  <input
                    type="text"
                    placeholder="Acme Inc."
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-white/30 transition-colors"
                  />
                </div>

                {/* Services */}
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-3">
                    Services Needed
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {services.map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => toggleService(s)}
                        className={`text-xs font-bold px-4 py-2 rounded-full border transition-all duration-200 ${
                          selected.includes(s)
                            ? "bg-white text-black border-white"
                            : "bg-transparent text-gray-500 border-white/10 hover:border-white/30 hover:text-white"
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Budget */}
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-3">
                    Estimated Budget
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {budgets.map((b) => (
                      <button
                        key={b}
                        type="button"
                        onClick={() => setBudget(b)}
                        className={`text-xs font-bold px-4 py-2 rounded-full border transition-all duration-200 ${
                          budget === b
                            ? "bg-white text-black border-white"
                            : "bg-transparent text-gray-500 border-white/10 hover:border-white/30 hover:text-white"
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-2">
                    Tell Us More *
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Describe your project, goals, timeline..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-white/30 transition-colors resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="flex items-center justify-center gap-2 w-full bg-white text-black font-black text-sm py-4 rounded-full hover:bg-gray-100 transition-all hover:scale-[1.01] disabled:opacity-70 disabled:scale-100"
                >
                  {loading ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" /> Sending...
                    </>
                  ) : (
                    <>
                      Send Inquiry <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </button>
              </form>

              {/* ── Right: Info ── */}
              <div className="lg:col-span-5 space-y-8">
                {/* Info cards */}
                <div className="space-y-3">
                  {[
                    { icon: Mail, label: "Email Us", value: "hello@edgeagency.co", href: "mailto:hello@edgeagency.co" },
                    { icon: Phone, label: "Phone / WhatsApp", value: "+1 (555) 000-1234", href: "tel:+15550001234" },
                    { icon: MapPin, label: "Based In", value: "Remote · Worldwide", href: null },
                  ].map(({ icon: Icon, label, value, href }) => (
                    <div
                      key={label}
                      className="flex items-center gap-4 bg-white/[0.02] border border-white/5 rounded-2xl p-4"
                    >
                      <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                        <Icon className="h-4 w-4 text-gray-400" />
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.15em] text-gray-400">{label}</p>
                        {href ? (
                          <a href={href} className="text-sm text-white font-bold hover:text-gray-300 transition-colors">{value}</a>
                        ) : (
                          <p className="text-sm text-white font-bold">{value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Process */}
                <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-5">Our Process</p>
                  <ol className="space-y-4">
                    {[
                      ["01 — Inquiry", "Fill out the form. We review every submission personally."],
                      ["02 — Discovery Call", "30-min video call to align on scope, budget, and timeline."],
                      ["03 — Proposal", "Tailored proposal with deliverables and milestones."],
                      ["04 — Kickoff", "Project begins within days of signing."],
                    ].map(([title, desc]) => (
                      <li key={title} className="flex gap-3">
                        <span className="w-1 h-1 rounded-full bg-white/40 mt-2 shrink-0" />
                        <div>
                          <p className="text-xs font-black text-white">{title}</p>
                          <p className="text-xs text-gray-400 mt-0.5">{desc}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Response time badge */}
                <div className="flex items-center gap-2 px-4 py-3 bg-white/[0.02] border border-white/5 rounded-full w-fit">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <p className="text-xs text-gray-500 font-bold">Usually responds within 24 hours</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
