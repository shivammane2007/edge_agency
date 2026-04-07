
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ParallaxImage: React.FC<{ src: string; alt: string }> = ({ src, alt }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <div ref={ref} className="h-[500px] overflow-hidden rounded-3xl ring-1 ring-white/10">
      <motion.img
        src={src}
        alt={alt}
        className="w-full h-[140%] object-cover -translate-y-1/4"
        style={{ y }}
      />
    </div>
  );
};

const CaseStudies: React.FC = () => {
  const caseStudies = [
    { src: "https://picsum.photos/seed/case1/1600/1200", alt: "Case Study 1" },
    { src: "https://picsum.photos/seed/case2/1600/1200", alt: "Case Study 2" },
    { src: "https://picsum.photos/seed/case3/1600/1200", alt: "Case Study 3" },
  ];

  return (
    <section className="container mx-auto max-w-6xl px-4 py-16 space-y-8">
      {caseStudies.map((study, index) => (
        <ParallaxImage key={index} src={study.src} alt={study.alt} />
      ))}
    </section>
  );
};

export default CaseStudies;
