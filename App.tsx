
import React, { useEffect } from 'react';
import { useTheme } from './hooks/useTheme';
import Header from './components/Header';
import Hero from './components/Hero';
import WorkMarquee from './components/WorkMarquee';
import ServicesGrid from './components/ServicesGrid';
import CaseStudies from './components/CaseStudies';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

const App: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    // Apply theme class to document root
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
    
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
  }, [theme]);

  return (
    <div className={`
      bg-white dark:bg-[#0A0A0A] 
      text-black dark:text-white 
      transition-colors duration-500`
    }>
      <div className="fixed inset-0 z-[-1] bg-grid-pattern-light dark:bg-grid-pattern-dark"></div>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <WorkMarquee />
        <ServicesGrid />
        <CaseStudies />
        <Pricing theme={theme} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
