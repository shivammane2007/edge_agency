
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SunIcon, MoonIcon } from './Icons';

interface HeaderProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ["Work", "Services", "Pricing", "FAQ"];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'top-4' : 'top-0'
      }`}
    >
      <div
        className={`
          container mx-auto max-w-5xl flex items-center justify-between p-2
          transition-all duration-300
          ${
            scrolled
              ? 'bg-white/50 dark:bg-black/50 backdrop-blur-lg rounded-full ring-1 ring-black/10 dark:ring-white/10'
              : 'bg-transparent'
          }
        `}
      >
        <div className="font-bold text-lg tracking-tighter">True Hives</div>
        <nav className="hidden md:flex items-center bg-gray-100/80 dark:bg-gray-900/80 p-1 rounded-full ring-1 ring-black/5 dark:ring-white/5">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="px-4 py-1.5 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
            >
              {link}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800 transition-colors"
            aria-label="Toggle theme"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={theme}
                initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                transition={{ duration: 0.25 }}
              >
                {theme === 'dark' ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
              </motion.div>
            </AnimatePresence>
          </button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 text-sm font-semibold rounded-full bg-black dark:bg-white text-white dark:text-black"
          >
            Book a Call
          </motion.button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
