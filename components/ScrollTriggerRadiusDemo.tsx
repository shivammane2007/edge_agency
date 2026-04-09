import { 
  ContainerScrollAnimation,
  ContainerScrollInset,
  ContainerScrollTranslate,
} from "./ui/scroll-trigger-animations";

export default function ScrollTriggerRadiusDemo() {
  return (
    <section className="py-32 bg-[#0A0A0A] overflow-hidden gpu">
      <div className="container mx-auto px-6 mb-16">
        <div className="max-w-xl">
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 mb-4 block">
            Motion Experience
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none mb-6">
            Identity in <br />
            <span className="text-gray-500">fluid motion.</span>
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed">
            We don't just build websites; we engineer digital environments that 
            react to your presence. Scroll to witness the transition.
          </p>
        </div>
      </div>

      <ContainerScrollAnimation>
        <ContainerScrollTranslate className="min-h-[80vh] flex justify-center items-center px-6">
          <ContainerScrollInset
            className="overflow-hidden aspect-square w-full max-w-2xl relative group"
            insetRangeY={[0, 0]}
            insetXRange={[0, 0]}
            roundednessRange={[1000, 32]}
          >
            {/* Overlay for premium look */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 pointer-events-none" />
            
            <img
              src="https://images.unsplash.com/photo-1608501078713-8e445a709b39?q=80&w=2670&auto=format&fit=crop"
              alt="tokyo spatial"
              className="size-full object-cover grayscale brightness-75 transition-all duration-700 group-hover:grayscale-0 group-hover:brightness-100 scale-110"
            />
            
            <div className="absolute bottom-12 left-12 z-20">
              <span className="text-[10px] uppercase tracking-[0.4em] text-white/40 mb-2 block">
                Spatial Design
              </span>
              <h3 className="text-3xl font-black text-white tracking-tight">
                V01. Genesis
              </h3>
            </div>
          </ContainerScrollInset>
        </ContainerScrollTranslate>
      </ContainerScrollAnimation>
    </section>
  );
}
