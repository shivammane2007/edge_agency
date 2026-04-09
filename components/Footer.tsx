"use client";

import React from "react";
import { ArrowUp, Moon, Sun, Heart, Zap, Mail, ArrowRight } from "lucide-react";

function handleScrollTop() {
  window.scroll({ top: 0, behavior: "smooth" });
}

// Inline SVG social icons (lucide-react v1.7 has no brand icons)
const XIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.741l7.733-8.835L1.254 2.25H8.08l4.253 5.622 5.92-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);
const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);
const GithubIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const services = [
  "UI/UX Design",
  "Web Development",
  "AI Workflows",
  "Brand Strategy",
  "Motion Design",
  "Product Engineering",
];

const techStack = ["React", "Next.js", "TypeScript", "Tailwind", "Framer", "Node.js", "Python", "OpenAI"];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#0A0A0A] overflow-hidden">

      {/* ── Top CTA Band ── */}
      <div className="border-b border-white/5">
        <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-3">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-white font-black text-lg tracking-tight">Ready to build something elite?</p>
              <p className="text-gray-500 text-sm">Let&apos;s turn your vision into market authority.</p>
            </div>
          </div>
          <a
            href="mailto:hello@edgeagency.co"
            className="flex items-center gap-2 bg-white text-black text-sm font-black px-6 py-3 rounded-full hover:bg-gray-100 transition-all hover:scale-105 shrink-0"
          >
            Book a Call <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>

      {/* ── Main Grid ── */}
      <div className="mx-auto max-w-7xl px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-10">

        {/* Brand Column */}
        <div className="md:col-span-4 flex flex-col gap-5">
          <div>
            <p className="text-white font-black text-2xl tracking-tighter">Edge Agency</p>
            <p className="text-gray-500 text-xs uppercase tracking-[0.2em] mt-1">Boutique Digital Engineering</p>
          </div>
          <p className="text-gray-500 text-sm leading-relaxed">
            We partner with ambitious founders and companies to ship high-end digital products.
            Precision design, engineered to perform.
          </p>
          {/* Email */}
          <a
            href="mailto:hello@edgeagency.co"
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm group"
          >
            <Mail className="h-4 w-4" />
            <span>hello@edgeagency.co</span>
          </a>
          {/* Socials */}
          <div className="flex items-center gap-2 mt-1">
            {[
              { label: "X / Twitter", icon: <XIcon />, href: "#" },
              { label: "Instagram", icon: <InstagramIcon />, href: "#" },
              { label: "LinkedIn", icon: <LinkedInIcon />, href: "#" },
              { label: "GitHub", icon: <GithubIcon />, href: "#" },
            ].map(({ label, icon, href }) => (
              <a
                key={label}
                aria-label={label}
                href={href}
                className="border border-white/10 rounded-full p-2 text-gray-400 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all duration-200"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Nav Columns */}
        <div className="md:col-span-12 lg:col-span-5 grid grid-cols-2 sm:grid-cols-3 gap-6">
          {[
            {
              title: "Agency",
              links: ["Work", "Services", "Pricing", "FAQ"],
              hrefs: ["#work", "#services", "#pricing", "#faq"],
            },
            {
              title: "Company",
              links: ["About", "Careers", "Blog", "Contact"],
              hrefs: ["#", "#", "#", "#"],
            },
            {
              title: "Legal",
              links: ["Terms", "Privacy", "Cookies"],
              hrefs: ["#", "#", "#"],
            },
          ].map((col) => (
            <div key={col.title}>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white mb-4">{col.title}</p>
              <ul className="space-y-3">
                {col.links.map((link, i) => (
                  <li key={link}>
                    <a
                      href={col.hrefs[i]}
                      className="text-sm text-gray-500 hover:text-white transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Services Column */}
        <div className="md:col-span-3">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white mb-4">What We Do</p>
          <ul className="space-y-2">
            {services.map((s) => (
              <li key={s} className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-white/30 shrink-0" />
                <span className="text-sm text-gray-500">{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ── Tech Stack Strip ── */}
      <div className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[10px] uppercase tracking-[0.2em] text-gray-600 shrink-0">Our Stack</p>
          <div className="flex flex-wrap items-center gap-2 justify-center sm:justify-end">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="text-[10px] font-bold uppercase tracking-widest text-gray-600 border border-white/5 rounded-full px-3 py-1 bg-white/[0.02]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[10px] font-black uppercase tracking-widest text-gray-600">
            &copy; {new Date().getFullYear()}{" "}
            <span className="text-white">Edge Agency</span>{" "}
            <span className="opacity-30 mx-1">|</span> Boutique Intelligence{" "}
            <Heart className="inline h-3 w-3 text-white animate-pulse ml-1" />
          </p>

          <button
            type="button"
            onClick={handleScrollTop}
            className="flex items-center gap-2 border border-white/10 rounded-full px-4 py-2 text-gray-500 hover:text-white hover:border-white/20 hover:bg-white/5 transition-all text-[10px] font-black uppercase tracking-widest"
          >
            <ArrowUp className="h-3 w-3" />
            Back to Top
          </button>
        </div>
      </div>

    </footer>
  );
}
