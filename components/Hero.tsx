
import React from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

const Hero3DCard = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const width = 384; // Corresponds to md:w-96
  const height = 240; // Corresponds to md:h-60

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };
  
  const handleMouseLeave = () => {
    mouseX.set(width / 2);
    mouseY.set(height / 2);
  };

  const rotateX = useTransform(mouseY, [0, height], [10, -10]);
  const rotateY = useTransform(mouseX, [0, width], [-10, 10]);
  
  const springConfig = { stiffness: 400, damping: 30, mass: 1 };
  const rotateXSpring = useSpring(rotateX, springConfig);
  const rotateYSpring = useSpring(rotateY, springConfig);

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        transformStyle: "preserve-3d",
        perspective: "1000px",
        rotateX: rotateXSpring,
        rotateY: rotateYSpring,
      }}
      className="relative"
    >
      <div 
        style={{ transform: "translateZ(20px)" }}
        className="absolute inset-0 bg-black/20 rounded-2xl ring-1 ring-white/10 backdrop-blur-lg shadow-black/50"
      ></div>
      
      <div style={{ transform: "translateZ(60px)" }} className="absolute top-6 left-6 w-16 h-4 bg-gray-700/50 rounded-full"></div>
      <div style={{ transform: "translateZ(50px)" }} className="absolute top-14 left-6 w-32 h-2 bg-gray-700/50 rounded-full"></div>
      <div style={{ transform: "translateZ(40px)" }} className="absolute top-20 left-6 w-24 h-2 bg-gray-700/70 rounded-full"></div>
      
      <motion.div 
         style={{ transform: "translateZ(80px)" }}
         className="absolute bottom-6 right-6 w-20 h-8 bg-white rounded-lg flex items-center justify-center text-black text-xs font-bold"
      >
        Launch
      </motion.div>
      
      <motion.div 
        style={{ transform: "translateZ(70px)" }}
        className="absolute bottom-6 left-6 w-8 h-8 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full"
      ></motion.div>
    </motion.div>
  );
};


const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 pt-32 pb-16 overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-20"
        >
          <source src="/videos/galaxy.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50"></div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10"
      >
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-tight">
          Design. Dev. Intelligence.
        </h1>
        <p className="mt-6 max-w-xl mx-auto text-lg md:text-xl text-gray-400">
          We build digital ecosystems for the future. A productized agency for teams that need to scale their design & development without the overhead.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(255, 255, 255, 0.2)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-6 py-3 font-semibold rounded-full bg-white text-black"
          >
            View Pricing
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-6 py-3 font-semibold rounded-full bg-black/50 backdrop-blur-sm ring-1 ring-white/10"
          >
            See Our Work
          </motion.button>
        </div>
      </motion.div>
      <motion.div
        className="relative z-10 mt-20"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
      >
        <Hero3DCard />
      </motion.div>
    </section>
  );
};

export default Hero;
