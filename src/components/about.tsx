"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 5]);

  return (
    <div ref={containerRef} className="container mx-auto px-6 max-w-7xl py-32 md:py-48">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
        <motion.div 
          style={{ y, rotate }}
          className="lg:col-span-5 relative z-10"
        >
          <div className="relative aspect-[3/4] bg-neutral-900 overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.5)] group border border-white/5">
            <img 
              src="/agnivesh-portrait.png"
              alt="Agnivesh Sarang"
              className="w-full h-full object-cover grayscale brightness-75 contrast-125 transition-all duration-1000 ease-in-out group-hover:scale-105 group-hover:grayscale-0 group-hover:brightness-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
            <div className="absolute bottom-6 left-6 right-6 border-t border-white/20 pt-4">
               <p className="text-[10px] uppercase tracking-[0.3em] text-white/50">Director / Editor</p>
            </div>
          </div>
          {/* Decorative element behind */}
          <div className="absolute -top-10 -left-10 w-full h-full border border-orange-600/20 -z-10 hidden md:block" />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="lg:col-span-7 space-y-16 relative"
        >
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <span className="h-[1px] w-12 bg-orange-600" />
              <span className="text-orange-500 text-xs font-bold tracking-[0.5em] uppercase">The Story</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-serif font-medium text-white leading-[1] tracking-tight">
              Capturing the <br />
              <span className="italic text-neutral-600">Unseen & Unspoken</span>
            </h2>
          </div>

          <div className="space-y-8 text-neutral-400 font-light leading-relaxed text-lg md:text-xl max-w-3xl">
            <p>
              I am an award-winning documentary director and visual storyteller, a graduate of <span className="text-white font-medium border-b border-orange-600/30">Film and Media from the University of Stirling</span>. I bring a fresh perspective to every frame, blending technical precision with raw emotional narrative.
            </p>
            <p>
              My experience spans major broadcast productions, including factual projects with the <span className="text-white font-medium">BBC</span> and the long-running reality series <span className="text-white italic">Love It or List It</span> for <span className="text-white font-medium">Channel 4</span>.
            </p>
            <p>
              From the interactive choice-driven cinema of <span className="text-white italic">The Late Shift</span> to the cultural exploration in <span className="text-white italic">The Heir</span>, my work is a constant pursuit of the unseen. I specialize in <span className="text-white font-medium">Avid Media Composer</span> and cinematic cinematography.
            </p>
          </div>

          <div className="pt-12 border-t border-white/5 grid grid-cols-2 gap-12">
            <div>
              <h4 className="text-white text-xs font-bold tracking-[0.3em] uppercase mb-6">Focus</h4>
              <ul className="space-y-3 text-sm text-neutral-500 font-medium tracking-widest uppercase">
                <li>Documentary</li>
                <li>Cinematography</li>
                <li>Visual Storytelling</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-xs font-bold tracking-[0.3em] uppercase mb-6">Location</h4>
              <ul className="space-y-3 text-sm text-neutral-500 font-medium tracking-widest uppercase">
                <li>Stirling, UK</li>
                <li>Remote</li>
                <li>Worldwide</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
