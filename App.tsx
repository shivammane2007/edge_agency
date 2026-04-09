import React, { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import WorkMarquee from './components/WorkMarquee';
import ServicesGrid from './components/ServicesGrid';
import CaseStudies from './components/CaseStudies';
import Pricing from './components/Pricing';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import ContactPage from './components/Contact';
import QuoteSection from './components/QuoteSection';
import ScrollTriggerRadiusDemo from './components/ScrollTriggerRadiusDemo';
import { useSmoothScroll } from './components/ui/scroll-trigger-animations';

const App: React.FC = () => {
  const [contactOpen, setContactOpen] = useState(false);
  
  // Initialize global smooth scroll
  useSmoothScroll();

  useEffect(() => {
    document.documentElement.classList.add('dark');

    // Remove manual smooth scroll as Lenis handles it better
    /*
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (this: HTMLAnchorElement, e: Event) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId) {
          document.querySelector(targetId)?.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
    */
  }, []);

  return (
    <>
      <AnimatePresence>
        {contactOpen && (
          <ContactPage onClose={() => setContactOpen(false)} />
        )}
      </AnimatePresence>

      <div className="bg-[#0A0A0A] text-white transition-colors duration-500">
        <div className="fixed inset-0 z-[-1] bg-grid-pattern-dark" />
        <Header onOpenContact={() => setContactOpen(true)} />
        <main>
          <Hero />
          <WorkMarquee />
          <ServicesGrid />
          <QuoteSection />
          <ScrollTriggerRadiusDemo />
          <CaseStudies />
          <Pricing />
          <FAQSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default App;
