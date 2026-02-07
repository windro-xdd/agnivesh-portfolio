import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-neutral-950 text-white">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-40 grayscale"
        >
          {/* Placeholder video - replace with actual portfolio reel */}
          <source src="https://videos.pexels.com/video-files/3195394/3195394-hd_1920_1080_25fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-neutral-950/50" />
      </div>

      <div className="relative z-10 text-center space-y-8 px-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both">
        <h2 className="text-sm md:text-base font-bold tracking-[0.3em] uppercase text-orange-500 mb-4">
          Cinematographer • Editor • Colorist
        </h2>
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold tracking-tighter text-white mix-blend-difference">
          AGNIVESH
          <br />
          SARANG
        </h1>
        <p className="max-w-xl mx-auto text-neutral-300 text-lg md:text-xl font-light leading-relaxed">
          Crafting visual narratives through light, shadow, and motion.
        </p>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce duration-2000">
        <ArrowDown className="w-6 h-6 text-white/50" />
      </div>
    </section>
  );
}
