
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface HeaderProps {
}

const Header: React.FC<HeaderProps> = () => {
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
              ? 'bg-black/50 backdrop-blur-lg rounded-full ring-1 ring-white/10'
              : 'bg-transparent'
          }
        `}
      >
        <div className="font-bold text-lg tracking-tighter">Edge Agency</div>
        <nav className="hidden md:flex items-center bg-gray-900/80 p-1 rounded-full ring-1 ring-white/5">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="px-4 py-1.5 text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              {link}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 text-sm font-semibold rounded-full bg-white text-black"
          >
            Book a Call
          </motion.button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
