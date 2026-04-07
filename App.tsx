
import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WorkMarquee from './components/WorkMarquee';
import ServicesGrid from './components/ServicesGrid';
import CaseStudies from './components/CaseStudies';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
const App: React.FC = () => {

  useEffect(() => {
    // Apply dark theme class to document root
    document.documentElement.classList.add('dark');
    
    // Basic smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId) {
          document.querySelector(targetId)?.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <div className="bg-[#0A0A0A] text-white transition-colors duration-500">
      <div className="fixed inset-0 z-[-1] bg-grid-pattern-dark"></div>
      <Header />
      <main>
        <Hero />
        <WorkMarquee />
        <ServicesGrid />
        <CaseStudies />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
};

export default App;
