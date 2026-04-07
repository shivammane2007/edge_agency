
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { DockDemo } from './ui/dock-demo';

interface HeaderProps {
}

const Header: React.FC<HeaderProps> = () => {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true); // scrolling down
    } else {
      setHidden(false); // scrolling up
    }
  });

  const scrolled = scrollY.get() > 10;

  const navLinks = ["Work", "Services", "Pricing", "FAQ"];

  return (
    <>
      <motion.header
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: -100, opacity: 0 }
        }}
        initial="visible"
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed top-4 md:top-6 left-0 right-0 z-50 px-4 pointer-events-none"
      >
        <div className="container mx-auto flex items-center justify-between">
          {/* Brand Logo */}
          <div className="font-black text-lg md:text-2xl tracking-tighter pointer-events-auto bg-black/50 backdrop-blur-md px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-white/10 shadow-2xl shrink-0">
            Edge Agency
          </div>

          {/* Desktop Dock - Right side top */}
          <div className="hidden md:block pointer-events-auto">
            <DockDemo tooltipSide="bottom" />
          </div>

          {/* Mobile Dock - Right side top */}
          <div className="md:hidden pointer-events-auto">
            <DockDemo tooltipSide="bottom" />
          </div>
        </div>
      </motion.header>

    </>
  );
};

export default Header;
