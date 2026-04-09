import React, { useEffect, useState, lazy, Suspense } from 'react';
import { AnimatePresence, LazyMotion, domMax } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import { useSmoothScroll } from './components/ui/scroll-trigger-animations';

// Lazy loaded components for code splitting
const WorkMarquee = lazy(() => import('./components/WorkMarquee'));
const ServicesGrid = lazy(() => import('./components/ServicesGrid'));
const CaseStudies = lazy(() => import('./components/CaseStudies'));
const Pricing = lazy(() => import('./components/Pricing'));
const FAQSection = lazy(() => import('./components/FAQSection'));
const Footer = lazy(() => import('./components/Footer'));
const ContactPage = lazy(() => import('./components/Contact'));
const QuoteSection = lazy(() => import('./components/QuoteSection'));
const ScrollTriggerRadiusDemo = lazy(() => import('./components/ScrollTriggerRadiusDemo'));

const App: React.FC = () => {
  const [contactOpen, setContactOpen] = useState(false);
  
  // Initialize global smooth scroll
  useSmoothScroll();

  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <LazyMotion features={domMax}>
      <div className="relative min-h-screen overflow-x-hidden">
        <AnimatePresence>
          {contactOpen && (
            <Suspense fallback={null}>
              <ContactPage onClose={() => setContactOpen(false)} />
            </Suspense>
          )}
        </AnimatePresence>

        <div className="relative bg-[#0A0A0A] text-white transition-colors duration-500">
          <div className="fixed inset-0 z-[-1] bg-grid-pattern-dark" />
          <Header onOpenContact={() => setContactOpen(true)} />
          <main className="relative">
            <Hero />
            <Suspense fallback={<div className="h-96 w-full animate-pulse bg-white/[0.02]" />}>
              <WorkMarquee />
              <ServicesGrid />
              <QuoteSection />
              <ScrollTriggerRadiusDemo />
              <CaseStudies />
              <Pricing />
              <FAQSection />
            </Suspense>
          </main>
          <Suspense fallback={<div className="h-40 w-full bg-[#0A0A0A]" />}>
            <Footer />
          </Suspense>
        </div>
      </div>
    </LazyMotion>
  );
};

export default App;
