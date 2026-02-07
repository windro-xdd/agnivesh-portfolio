"use client";

import { motion } from "framer-motion";

export function About() {
  return (
    <div className="container mx-auto px-6 max-w-6xl py-32">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-5"
        >
          <div className="relative aspect-[4/5] bg-neutral-900 overflow-hidden shadow-[20px_20px_60px_rgba(0,0,0,0.5)] group">
            <img 
              src="/agnivesh-portrait.png"
              alt="Agnivesh Sarang"
              className="w-full h-full object-cover grayscale transition-all duration-1000 ease-in-out group-hover:scale-105 group-hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="lg:col-span-7 space-y-10"
        >
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-[1px] w-8 bg-orange-600/50" />
              <span className="text-orange-500 text-[10px] font-bold tracking-[0.4em] uppercase">About Me</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-serif font-medium text-white leading-[1.1] tracking-tight">
              Award-Winning <br />
              Documentary Director <br />
              <span className="text-neutral-500 italic">& Visual Storyteller</span>
            </h2>
            <p className="text-neutral-500 font-medium tracking-wide text-sm flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-600" />
              Based in Stirling, Scotland, UK
            </p>
          </div>

          <div className="space-y-6 text-neutral-400 font-light leading-relaxed text-lg max-w-2xl">
            <p className="first-letter:text-5xl first-letter:font-serif first-letter:text-white first-letter:mr-3 first-letter:float-left">
              I am an award-winning documentary director and visual storyteller, currently studying <span className="text-white font-medium">Film and Media at the University of Stirling</span>. I bring a fresh perspective to every frame, blending technical precision with raw emotional narrative.
            </p>
            <p>
              My experience spans major broadcast productions, including factual projects with the <span className="text-white font-medium border-b border-white/10 pb-0.5">BBC</span> and the long-running reality series <span className="text-white italic">Love It or List It</span> for <span className="text-white font-medium border-b border-white/10 pb-0.5">Channel 4</span>.
            </p>
            <p>
              From the interactive choice-driven cinema of <span className="text-white italic underline decoration-orange-600/30 underline-offset-4">The Late Shift</span> to the cultural exploration in <span className="text-white italic underline decoration-orange-600/30 underline-offset-4">The Heir</span>, my work is a constant pursuit of the unseen. I specialize in <span className="text-white font-medium">Avid Media Composer</span> and cinematic cinematography.
            </p>
          </div>

          <div className="pt-10 border-t border-white/5 grid grid-cols-1 sm:grid-cols-2 gap-10">
            <div className="group">
              <h4 className="text-neutral-500 text-[10px] font-bold tracking-[0.3em] uppercase mb-4 group-hover:text-orange-600 transition-colors">Specialization</h4>
              <p className="text-sm text-neutral-300 font-medium tracking-wider leading-loose">
                Documentary Direction<br/>
                Content Strategy<br/>
                Visual Storytelling
              </p>
            </div>
            <div className="group">
              <h4 className="text-neutral-500 text-[10px] font-bold tracking-[0.3em] uppercase mb-4 group-hover:text-orange-600 transition-colors">Availability</h4>
              <p className="text-sm text-neutral-300 font-medium tracking-wider leading-loose">
                Stirling, UK / Worldwide<br/>
                Open for Commissions
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
