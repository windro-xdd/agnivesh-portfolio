"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useRef } from "react";

const LETTER_ANIMATION = {
  initial: { y: 400 },
  animate: { y: 0 },
  transition: { ease: [0.6, 0.01, -0.05, 0.95], duration: 1 }
};

const STAGGER_CHILDREN = {
  animate: {
    transition: {
      staggerChildren: 0.04
    }
  }
};

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 500], [1, 1.1]);

  const smoothY1 = useSpring(y1, { stiffness: 100, damping: 30 });
  const smoothY2 = useSpring(y2, { stiffness: 100, damping: 30 });

  return (
    <section ref={containerRef} className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-neutral-950 text-white">
      <motion.div 
        style={{ y: smoothY1, scale }}
        className="absolute inset-0 z-0"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-60 grayscale contrast-125 brightness-75 scale-105"
        >
          <source src="https://videos.pexels.com/video-files/4038482/4038482-uhd_2560_1440_25fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-neutral-950/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/80 via-transparent to-neutral-950" />
      </motion.div>

      <div className="relative z-10 text-center space-y-12 px-4 max-w-7xl w-full">
        <motion.div
          style={{ y: smoothY2, opacity }}
          className="space-y-6"
        >
          <motion.h2 
            initial={{ opacity: 0, letterSpacing: "1em" }}
            animate={{ opacity: 1, letterSpacing: "0.5em" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="text-[10px] md:text-xs font-bold uppercase text-orange-500 mb-8"
          >
            Director • Cinematographer • Editor
          </motion.h2>

          <div className="overflow-hidden">
            <motion.h1 
              className="text-7xl md:text-[10rem] font-serif font-medium tracking-tighter text-white leading-[0.9] flex flex-col items-center justify-center"
              variants={STAGGER_CHILDREN}
              initial="initial"
              animate="animate"
            >
              <div className="overflow-hidden flex py-2">
                {Array.from("Agnivesh").map((letter, i) => (
                  <motion.span key={i} variants={LETTER_ANIMATION} className="inline-block">
                    {letter}
                  </motion.span>
                ))}
              </div>
              <div className="overflow-hidden flex pt-4 pb-12 -mt-4 md:-mt-8">
                {Array.from("Sarang").map((letter, i) => (
                  <motion.span 
                    key={i} 
                    variants={LETTER_ANIMATION} 
                    className="inline-block italic text-neutral-400 pb-4"
                  >
                    {letter}
                  </motion.span>
                ))}
              </div>
            </motion.h1>
          </div>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1 }}
          className="max-w-xl mx-auto text-neutral-400 text-sm md:text-base font-light tracking-widest uppercase leading-relaxed mix-blend-difference"
        >
          Crafting visual narratives through light, shadow, and motion.
        </motion.p>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        style={{ opacity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 cursor-pointer"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-500 font-bold rotate-90 mb-8 origin-left hover:text-orange-500 transition-colors duration-300">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-orange-600 to-transparent animate-pulse" />
      </motion.div>
    </section>
  );
}
