"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { DriveFile } from "@/lib/drive";
import { ParallaxText } from "@/components/ui/parallax-text";
import { DriveImage } from "@/components/drive-image";

interface FeaturedGalleryProps {
  images: DriveFile[];
}

export function FeaturedGallery({ images }: FeaturedGalleryProps) {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-85%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-neutral-950">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4 px-4 md:gap-16 md:px-16 items-center h-full">
          <div className="flex w-[80vw] md:w-[40vw] flex-col justify-center gap-8 shrink-0 pl-16">
             <div className="space-y-4">
               <div className="flex items-center gap-3">
                 <div className="h-[1px] w-8 bg-orange-600/50" />
                 <span className="text-orange-500 text-[10px] font-bold tracking-[0.4em] uppercase">Visuals</span>
               </div>
               <h2 className="text-5xl md:text-7xl font-serif font-medium text-white tracking-tight leading-tight">
                 Featured <br />
                 <span className="italic text-neutral-500">Gallery</span>
               </h2>
               <p className="text-neutral-400 max-w-md font-light text-sm md:text-base leading-relaxed">
                 A curated selection of visual stories capturing moments of raw emotion and cinematic beauty.
               </p>
               <div className="pt-8">
                <Link 
                  href="/photos" 
                  className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-white hover:text-orange-500 transition-colors pb-2 border-b border-white/20 hover:border-orange-600/50"
                >
                  Explore Full Gallery <ArrowRight size={14} />
                </Link>
               </div>
             </div>
          </div>

          {images.map((image, index) => (
            <div key={image.id} className="relative h-[60vh] md:h-[70vh] aspect-[2/3] shrink-0 overflow-hidden bg-neutral-900 group border border-white/5">
              <DriveImage 
                image={image}
                fill
                className="group-hover:scale-110"
                sizes="(max-width: 768px) 80vw, 60vh"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <span className="text-orange-500 text-[10px] font-bold tracking-[0.2em] uppercase block mb-2">0{index + 1}</span>
                <p className="text-white font-serif text-2xl truncate max-w-full">{image.name}</p>
              </div>
            </div>
          ))}

          <div className="flex h-[60vh] md:h-[70vh] aspect-square shrink-0 justify-center items-center bg-neutral-900/20 border border-white/5 hover:bg-neutral-900/40 transition-colors duration-500">
             <Link href="/photos" className="group flex flex-col items-center gap-6 p-12 text-center">
                <div className="h-24 w-24 rounded-full border border-white/20 flex items-center justify-center group-hover:border-orange-500/50 group-hover:bg-orange-500/10 transition-all duration-500">
                  <ArrowRight className="text-white group-hover:text-orange-500 transition-colors" size={32} />
                </div>
                <span className="text-white text-xs font-bold tracking-[0.3em] uppercase group-hover:text-orange-500 transition-colors">View All Works</span>
             </Link>
          </div>
          
          <div className="w-[10vw] shrink-0" /> 
        </motion.div>
        
        <div className="absolute bottom-12 left-0 w-full overflow-hidden opacity-5 pointer-events-none mix-blend-overlay">
           <ParallaxText baseVelocity={1.5}>Cinematography Photography Direction Visuals Storytelling</ParallaxText>
        </div>
      </div>
    </section>
  );
}
