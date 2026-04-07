"use client";
import React, { useRef, useState } from "react";
import { motion } from "motion/react";
import NumberFlow from "@number-flow/react";
import { Briefcase, CheckCheck, Database, Server, Zap, ShieldCheck, Headphones } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { TimelineContent } from "@/components/ui/timeline-animation";
import { VerticalCutReveal } from "@/components/ui/vertical-cut-reveal";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Standard",
    description:
      "Perfect for businesses needing a dedicated senior designer & developer.",
    price: 4995,
    yearlyPrice: 4495,
    buttonText: "Get Started",
    buttonVariant: "outline" as const,
    features: [
      { text: "One request at a time", icon: <Briefcase size={18} /> },
      { text: "Standard 48hr delivery", icon: <Zap size={18} /> },
      { text: "Unlimited brands & users", icon: <ShieldCheck size={18} /> },
    ],
    includes: [
      "Standard includes:",
      "UI/UX Design & Branding",
      "Webflow & Framer Development",
      "Unlimited Revisions",
      "Pause or cancel anytime",
      "Direct Slack access",
    ],
  },
  {
    name: "Pro",
    description:
      "For high-growth teams that need advanced AI and faster iteration.",
    price: 7995,
    yearlyPrice: 7195,
    buttonText: "Get Started",
    buttonVariant: "default" as const,
    popular: true,
    features: [
      { text: "Two requests at a time", icon: <Briefcase size={18} /> },
      { text: "Priority 24hr delivery", icon: <Zap size={18} /> },
      { text: "AI & LLM Integration", icon: <Server size={18} /> },
    ],
    includes: [
      "Everything in Standard, plus:",
      "Full-stack React/Next.js",
      "Custom AI Workflows",
      "Priority Support",
      "Database & Backend Dev",
      "Weekly Strategy Calls",
    ],
  },
  {
    name: "Enterprise",
    description:
      "Bespoke partnership for large-scale digital transformations.",
    price: 14995,
    yearlyPrice: 13495,
    buttonText: "Book a Call",
    buttonVariant: "outline" as const,
    features: [
      { text: "Unlimited requests", icon: <Briefcase size={18} /> },
      { text: "Dedicated full team", icon: <Headphones size={18} /> },
      { text: "On-site workshops", icon: <Database size={18} /> },
    ],
    includes: [
      "Everything in Pro, plus:",
      "Custom Contract & Terms",
      "Direct CTO Partnership",
      "Infrastructure Architecture",
      "White-glove 24/7 support",
      "Unlimited scale",
    ],
  },
];

const PricingSwitch = ({
  onSwitch,
  className,
}: {
  onSwitch: (value: string) => void;
  className?: string;
}) => {
  const [selected, setSelected] = useState("0");

  const handleSwitch = (value: string) => {
    setSelected(value);
    onSwitch(value);
  };

  return (
    <div className={cn("flex justify-center", className)}>
      <div className="relative z-10 mx-auto flex w-fit rounded-full bg-white/5 border border-white/10 p-1 backdrop-blur-md">
        <button
          onClick={() => handleSwitch("0")}
          className={cn(
            "relative z-10 w-fit cursor-pointer h-10 rounded-full sm:px-6 px-4 font-bold transition-colors sm:text-sm text-xs",
            selected === "0"
              ? "text-black"
              : "text-gray-400 hover:text-white",
          )}
        >
          {selected === "0" && (
            <motion.span
              layoutId={"switch"}
              className="absolute inset-0 bg-white rounded-full shadow-[0_0_20px_rgba(255,255,255,0.3)]"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          <span className="relative">Monthly</span>
        </button>

        <button
          onClick={() => handleSwitch("1")}
          className={cn(
            "relative z-10 w-fit cursor-pointer h-10 flex-shrink-0 rounded-full sm:px-6 px-4 font-bold transition-colors sm:text-sm text-xs",
            selected === "1"
              ? "text-black"
              : "text-gray-400 hover:text-white",
          )}
        >
          {selected === "1" && (
            <motion.span
              layoutId={"switch"}
              className="absolute inset-0 bg-white rounded-full shadow-[0_0_20px_rgba(255,255,255,0.3)]"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          <span className="relative flex items-center gap-2">
            Quarterly
            <span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] uppercase font-black text-white border border-white/20">
              Save 10%
            </span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);
  const pricingRef = useRef<HTMLDivElement>(null);

  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1]
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: 30,
      opacity: 0,
    },
  };

  const togglePricingPeriod = (value: string) =>
    setIsYearly(Number.parseInt(value) === 1);

  return (
    <section 
      id="pricing"
      className="px-4 py-32 max-w-7xl mx-auto relative overflow-hidden"
      ref={pricingRef}
    >
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[120px] pointer-events-none rounded-full" />

      <article className="text-center mb-20 space-y-6 mx-auto">
        <h2 className="text-4xl md:text-7xl font-black tracking-tighter text-white">
          <VerticalCutReveal
            splitBy="words"
            staggerDuration={0.1}
            staggerFrom="center"
            containerClassName="justify-center"
          >
            Tiered services for high-speed teams.
          </VerticalCutReveal>
        </h2>

        <TimelineContent
          as="p"
          animationNum={0}
          timelineRef={pricingRef}
          customVariants={revealVariants}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-medium"
        >
          Elite design, development, and AI engineering at a flat monthly rate. 
          No surprises, just results.
        </TimelineContent>

        <TimelineContent
          as="div"
          animationNum={1}
          timelineRef={pricingRef}
          customVariants={revealVariants}
          className="flex justify-center pt-4"
        >
          <PricingSwitch onSwitch={togglePricingPeriod} />
        </TimelineContent>
      </article>

      <div className="grid md:grid-cols-3 gap-8 py-6 relative z-10">
        {plans.map((plan, index) => (
          <TimelineContent
            key={plan.name}
            as="div"
            animationNum={2 + index}
            timelineRef={pricingRef}
            customVariants={revealVariants}
          >
            <Card
              className={cn(
                "relative border border-white/5 bg-black/40 transition-all duration-500 overflow-hidden group hover:border-white/20",
                plan.popular && "ring-1 ring-white/10"
              )}
            >
              <CardHeader className="p-8 pb-0">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-black tracking-tighter text-white">
                    {plan.name}
                  </h3>
                  {plan.popular && (
                    <span className="bg-white text-black px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-[0_0_15px_rgba(255,255,255,0.4)]">
                      Popular
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-400 mb-8 font-medium leading-relaxed">
                  {plan.description}
                </p>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-black tracking-tighter text-white">
                    $
                    <NumberFlow
                      format={{
                        currency: "USD",
                        notation: "standard"
                      }}
                      value={isYearly ? plan.yearlyPrice : plan.price}
                      className="text-5xl font-black"
                    />
                  </span>
                  <span className="text-gray-500 font-bold">
                    /{isYearly ? "mo*" : "mo"}
                  </span>
                </div>
                {isYearly && (
                  <p className="mt-2 text-[10px] text-gray-500 font-bold uppercase tracking-widest">
                    *Billed quarterly
                  </p>
                )}
              </CardHeader>

              <CardContent className="p-8">
                <button
                  className={cn(
                    "w-full mb-8 p-4 text-sm font-black uppercase tracking-widest rounded-2xl transition-all duration-300",
                    plan.popular
                      ? "bg-white text-black hover:bg-gray-200 shadow-[0_0_30px_rgba(255,255,255,0.2)]"
                      : "bg-white/10 text-white border border-white/10 hover:bg-white/20"
                  )}
                >
                  {plan.buttonText}
                </button>

                <div className="space-y-4 pt-8 border-t border-white/10">
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-500">
                    {plan.includes[0]}
                  </h4>
                  <ul className="space-y-3">
                    {plan.includes.slice(1).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <CheckCheck className="h-4 w-4 text-white mt-0.5 shrink-0" />
                        <span className="text-sm text-gray-400 font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TimelineContent>
        ))}
      </div>
    </section>
  );
}
