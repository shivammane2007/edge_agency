
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
    <div ref={ref} className="h-[500px] overflow-hidden rounded-3xl ring-1 ring-white/10 gpu">
      <motion.img
        src={src}
        alt={alt}
        className="w-full h-[140%] object-cover -translate-y-1/4 will-change-transform"
        style={{ y }}
        loading="lazy"
      />
    </div>
  );
};

const CaseStudies: React.FC = React.memo(() => {
  const caseStudies = [
    { src: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1600&h=1200", alt: "Modern Technology Infrastructure" },
    { src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1600&h=1200", alt: "Minimalist Workspace Design" },
    { src: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1600&h=1200", alt: "Futuristic AI Interface" },
  ];

  return (
    <section id="work" className="container mx-auto max-w-6xl px-4 py-16 space-y-8 gpu">
      {caseStudies.map((study, index) => (
        <ParallaxImage key={index} src={study.src} alt={study.alt} />
      ))}
    </section>
  );
});

export default CaseStudies;
