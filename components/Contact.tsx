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
  Globe,
  MessageSquare
} from "lucide-react";
import DotPattern from "./ui/dot-pattern-1";

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

// ─── Technical Input Sub-component ───
const TechnicalInput = ({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement> & React.TextareaHTMLAttributes<HTMLTextAreaElement>) => {
  const isTextArea = props.rows !== undefined;
  const InputComponent = isTextArea ? 'textarea' : 'input';
  
  return (
    <div className="group/input relative">
      <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 mb-2 group-focus-within/input:text-white transition-colors">
        {label}
      </label>
      <div className="relative">
        {/* @ts-ignore */}
        <InputComponent
          {...props}
          className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-5 py-4 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-white/40 focus:bg-white/[0.04] transition-all duration-300 resize-none"
        />
        {/* Focus drafting line */}
        <motion.div 
          initial={{ scaleX: 0 }}
          whileFocus={{ scaleX: 1 }}
          className="absolute bottom-0 left-5 right-5 h-[1px] bg-white/20 origin-left"
        />
      </div>
    </div>
  );
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function ContactPage({ onClose }: ContactPageProps) {
  const [step, setStep] = useState<"form" | "success">("form");
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState<string[]>([]);
  const [budget, setBudget] = useState("");
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });

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
      className="fixed inset-0 z-[9999] bg-[#060606] overflow-y-auto selection:bg-white selection:text-black no-scrollbar"
      data-lenis-prevent
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" } as React.CSSProperties}
    >
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      {/* ── Background Infrastructure ── */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <DotPattern 
          width={12} 
          height={12} 
          className="fill-white/[0.03] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" 
        />
        {/* Corner drafting marks for the whole screen viewport */}
        <div className="absolute left-8 top-8 w-12 h-12 border-l border-t border-white/10" />
        <div className="absolute right-8 top-8 w-12 h-12 border-r border-t border-white/10" />
        <div className="absolute left-8 bottom-8 w-12 h-12 border-l border-b border-white/10" />
        <div className="absolute right-8 bottom-8 w-12 h-12 border-r border-b border-white/10" />
      </div>

      {/* Close button */}
      <button
        onClick={onClose}
        className="fixed top-8 right-8 z-50 flex items-center gap-3 border border-white/10 rounded-full px-5 py-2.5 text-gray-400 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all text-[10px] font-black uppercase tracking-[0.2em] backdrop-blur-md"
      >
        <X className="h-3.5 w-3.5" /> Close
      </button>

      <div className="flex flex-col min-h-screen relative z-10">
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 flex-1 flex flex-col">
        <AnimatePresence mode="wait">
          {step === "success" ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center text-center max-w-lg mx-auto"
            >
              <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 relative">
                <CheckCircle className="h-10 w-10 text-white" />
                <div className="absolute -inset-4 bg-white/5 blur-2xl rounded-full -z-10" />
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white mb-4">
                Transmission <br /> <span className="text-gray-500">Received.</span>
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-10">
                Your inquiry has been logged in our system. An agent will review the
                technical requirements and reach out within 24 business hours.
              </p>
              <button
                onClick={onClose}
                className="group flex items-center gap-3 bg-white text-black text-[10px] font-black uppercase tracking-widest px-8 py-4 rounded-full hover:bg-gray-100 transition-all"
              >
                Return to Site <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="form-container"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24"
            >
              {/* ── Header Area ── */}
              <motion.div variants={itemVariants} className="lg:col-span-5 space-y-12">
                <div className="max-w-md">
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-500 mb-6 block">
                    Available for Q3 '24
                  </span>
                  <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white leading-[0.9] mb-8">
                    Let's Build <br />
                    <span className="text-gray-500">Elite.</span>
                  </h1>
                  <p className="text-gray-500 text-sm leading-relaxed max-w-sm ml-1 border-l border-white/10 pl-6">
                    We only take on 3 projects per quarter to ensure 
                    unrivaled quality and engineering depth. 
                    Tell us why yours should be one of them.
                  </p>
                </div>

                {/* Info blocks with drafting corners */}
                <div className="grid grid-cols-1 gap-4 relative isolate">
                  {[
                    { icon: Mail, label: "Direct Transmission", value: "hello@edgeagency.co", href: "mailto:hello@edgeagency.co" },
                    { icon: Globe, label: "Operating Area", value: "Global / Remote", href: null },
                  ].map(({ icon: Icon, label, value, href }) => (
                    <div
                      key={label}
                      className="group relative bg-[#0A0A0A] border border-white/5 rounded-2xl p-6 hover:border-white/20 transition-all duration-500"
                    >
                      <div className="absolute -left-1 -top-1 w-2 h-2 border-l border-t border-white/40" />
                      <div className="flex items-center gap-5">
                        <div className="w-12 h-12 rounded-xl bg-white/[0.03] flex items-center justify-center transition-colors group-hover:bg-white/[0.08]">
                          <Icon className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" />
                        </div>
                        <div>
                          <p className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-500 mb-1">{label}</p>
                          {href ? (
                            <a href={href} className="text-sm text-white font-bold tracking-tight">{value}</a>
                          ) : (
                            <p className="text-sm text-white font-bold tracking-tight">{value}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Progress Visual */}
                <div className="hidden lg:block pt-8">
                  <p className="text-[9px] font-black uppercase tracking-[0.3em] text-gray-600 mb-4">Drafting Progress</p>
                  <div className="h-[1px] w-full bg-white/5 relative">
                    <motion.div 
                      className="absolute inset-0 bg-white/40 origin-left"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: form.name && form.email ? 0.3 : form.message ? 0.8 : 0.1 }}
                    />
                  </div>
                </div>
              </motion.div>

              {/* ── Form Area ── */}
              <motion.div variants={itemVariants} className="lg:col-span-7">
                <form onSubmit={handleSubmit} className="space-y-10">
                  {/* Name + Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <TechnicalInput 
                      label="Principal Name" 
                      placeholder="e.g. Satoshi Nakamoto" 
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                    <TechnicalInput 
                      label="Contact Email" 
                      type="email" 
                      placeholder="principal@nexus.io"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                  </div>

                  {/* Company */}
                  <TechnicalInput 
                    label="Project or Company" 
                    placeholder="Edge Agency / Global Network"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                  />

                  {/* Services Needed */}
                  <div className="space-y-4">
                    <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">
                      Objective Scope
                    </label>
                    <div className="flex flex-wrap gap-2.5">
                      {services.map((s) => (
                        <button
                          key={s}
                          type="button"
                          onClick={() => toggleService(s)}
                          className={`text-[10px] font-bold px-5 py-2.5 rounded-full border transition-all duration-300 tracking-tight ${
                            selected.includes(s)
                              ? "bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.15)]"
                              : "bg-white/[0.02] text-gray-500 border-white/5 hover:border-white/20 hover:text-white"
                          }`}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Budget */}
                  <div className="space-y-4">
                    <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">
                      Capital Allocation
                    </label>
                    <div className="flex flex-wrap gap-2.5">
                      {budgets.map((b) => (
                        <button
                          key={b}
                          type="button"
                          onClick={() => setBudget(b)}
                          className={`text-[10px] font-bold px-6 py-2.5 rounded-full border transition-all duration-300 tracking-tight ${
                            budget === b
                              ? "bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.15)]"
                              : "bg-white/[0.02] text-gray-500 border-white/5 hover:border-white/20 hover:text-white"
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <TechnicalInput 
                    label="Brief Description" 
                    rows={4} 
                    placeholder="Tell us about the vision..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />

                  {/* Submit Button */}
                  <div className="relative pt-6">
                    <button
                      type="submit"
                      disabled={loading}
                      className="group relative flex items-center justify-center gap-3 w-full bg-white text-black font-black text-[11px] uppercase tracking-[0.3em] py-5 rounded-2xl hover:bg-gray-100 transition-all hover:scale-[1.01] disabled:opacity-70 active:scale-95"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" /> Logged...
                        </>
                      ) : (
                        <>
                          Establish Connection <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>
                    {/* Visual drafting detail for button */}
                    <div className="absolute right-0 bottom-0 translate-y-full flex gap-2 pt-2 opacity-20 pointer-events-none">
                      <div className="h-[1px] w-8 bg-white" />
                      <div className="h-[1px] w-2 bg-white" />
                    </div>
                  </div>
                </form>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <footer className="relative z-10 px-8 py-12 border-t border-white/5 mt-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 max-w-7xl mx-auto">
          <p className="text-[9px] font-black uppercase tracking-[0.3em] text-gray-600">
            © 2024 Edge Agency · All Systems Operational
          </p>
          <div className="flex gap-8">
            {["X / Twitter", "LinkedIn", "Layers"].map((link) => (
              <a key={link} href="#" className="text-[9px] font-black uppercase tracking-[0.3em] text-gray-600 hover:text-white transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
    </motion.div>
  );
}
