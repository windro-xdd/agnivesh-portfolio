"use client"

import { motion } from "framer-motion"

export function VideoSection() {
  const videos = [
    {
      title: "The Late Shift",
      type: "Interactive Film",
      platform: "Stornaway.io",
      url: "https://player.stornaway.io/watch/ad9fdf24",
      description: "An interactive cinematic experience where choices define the narrative."
    },
    {
      title: "The Heir",
      type: "Documentary",
      platform: "YouTube",
      url: "https://www.youtube.com/embed/1ZiAIkBzrIE?si=S39llVZ1Zg1B-7yr",
      description: "A documentary exploring the legacy and artistry of Kathakali through Kalamandalam Premkumar."
    }
  ]

  return (
    <div className="space-y-24">
      {videos.map((video, index) => (
        <motion.div 
          key={video.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: index * 0.2 }}
          className="group grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
        >
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <div className="h-[1px] w-6 bg-orange-600/50" />
              <span className="text-orange-500 text-[9px] font-bold tracking-[0.4em] uppercase">{video.type}</span>
            </div>
            <h3 className="text-4xl font-serif font-medium text-white tracking-tight">{video.title}</h3>
            <p className="text-neutral-500 text-sm font-light leading-relaxed max-w-sm italic">
              {video.description}
            </p>
            <div className="pt-4 flex items-center gap-2">
               <span className="text-[10px] text-neutral-600 font-bold uppercase tracking-widest">Platform:</span>
               <span className="text-[10px] text-neutral-400 font-medium uppercase tracking-widest">{video.platform}</span>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="relative aspect-video w-full overflow-hidden bg-neutral-900 shadow-[0_0_100px_rgba(0,0,0,0.8)] ring-1 ring-white/5 group-hover:ring-orange-600/20 transition-all duration-700">
              <iframe 
                src={video.url} 
                className="absolute inset-0 h-full w-full grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
                allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                scrolling="no"
                title={video.title}
              />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
