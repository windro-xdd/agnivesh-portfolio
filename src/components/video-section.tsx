"use client"

import { Play } from "lucide-react"

const videos = [
  {
    title: "The Late Shift",
    description: "Interactive Film • Stornaway.io",
    thumbnail: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2825&auto=format&fit=crop",
    link: "https://player.stornaway.io/watch/ad9fdf24",
    type: "Interactive"
  },
  {
    title: "The Heir",
    description: "Documentary • Kathakali",
    thumbnail: "https://images.unsplash.com/photo-1518134594632-15f5cc17a3a3?q=80&w=2866&auto=format&fit=crop",
    link: "https://youtu.be/1ZiAlkBzrlE?si=S39llVZ1Zg1B-7yr",
    type: "Documentary"
  },
  {
    title: "Love It or List It",
    description: "Broadcast • Channel 4",
    thumbnail: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2940&auto=format&fit=crop",
    link: "#",
    type: "Broadcast"
  }
]

export function VideoSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {videos.map((video, idx) => (
        <a 
          key={idx}
          href={video.link}
          target="_blank"
          rel="noreferrer"
          className="group relative block aspect-video overflow-hidden bg-neutral-800"
        >
          <div className="absolute inset-0">
             <img 
               src={video.thumbnail} 
               alt={video.title}
               className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-40"
             />
          </div>

          <div className="absolute inset-0 p-6 flex flex-col justify-end items-start z-10">
            <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <span className="text-xs font-bold text-orange-500 uppercase tracking-widest mb-2 block">
                {video.type}
              </span>
              <h3 className="text-2xl font-serif font-bold text-white mb-1">
                {video.title}
              </h3>
              <p className="text-sm text-neutral-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                {video.description}
              </p>
            </div>
          </div>

          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-16 h-16 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-sm bg-white/10">
              <Play className="w-6 h-6 text-white ml-1" fill="currentColor" />
            </div>
          </div>
        </a>
      ))}
    </div>
  )
}