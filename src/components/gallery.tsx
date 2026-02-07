"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import type { DriveFile } from "@/lib/drive"
import { DriveImage } from "@/components/drive-image"

interface GalleryProps {
  images: DriveFile[]
}

export function Gallery({ images }: GalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  if (!images || images.length === 0) {
    return (
      <div className="text-center py-20 text-neutral-500">
        <p>No images found in the connected drive folder.</p>
      </div>
    )
  }

  return (
    <>
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {images.map((image, index) => (
          <ParallaxImage 
            key={image.id} 
            image={image} 
            index={index}
            onClick={() => setSelectedImage(index)}
          />
        ))}
      </div>
      <Lightbox 
        selectedImage={selectedImage} 
        setSelectedImage={setSelectedImage} 
        images={images} 
      />
    </>
  )
}

function ParallaxImage({ 
  image, 
  index, 
  onClick 
}: { 
  image: DriveFile
  index: number
  onClick: () => void 
}) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  // Parallax: image moves slower than scroll (creates depth effect)
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"])
  
  const width = image.imageMediaMetadata?.width || 800
  const height = image.imageMediaMetadata?.height || 600
  const aspectRatio = width / height

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.7, 
        ease: [0.21, 0.47, 0.32, 0.98],
        delay: (index % 3) * 0.08
      }}
      className="relative group cursor-pointer overflow-hidden bg-neutral-900 break-inside-avoid"
      style={{ aspectRatio }}
      onClick={onClick}
    >
      {/* Parallax container - larger than visible area */}
      <motion.div 
        className="absolute inset-[-15%] w-[130%] h-[130%]"
        style={{ y }}
      >
        <DriveImage 
          image={image} 
          fill 
          className="object-cover group-hover:scale-105 transition-transform duration-700" 
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </motion.div>
      
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 pointer-events-none z-10" />
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center pointer-events-none z-10">
        <p className="text-white/80 tracking-widest text-xs uppercase font-light translate-y-4 group-hover:translate-y-0 transition-transform duration-500">View</p>
      </div>
    </motion.div>
  )
}

function Lightbox({ 
  selectedImage, 
  setSelectedImage, 
  images 
}: { 
  selectedImage: number | null, 
  setSelectedImage: (val: number | null) => void,
  images: DriveFile[]
}) {
  return (
    <AnimatePresence>
      {selectedImage !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-[70]"
          >
            <X size={32} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation()
              setSelectedImage(selectedImage > 0 ? selectedImage - 1 : images.length - 1)
            }}
            className="absolute left-4 md:left-8 text-white/50 hover:text-white transition-colors z-[70]"
          >
            <ChevronLeft size={40} />
          </button>

          <div className="relative w-full max-w-7xl h-full flex items-center justify-center p-4" onClick={(e) => e.stopPropagation()}>
             <div className="relative w-full h-full flex items-center justify-center">
                <DriveImage 
                  image={images[selectedImage]}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                  quality={90}
                />
             </div>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation()
              setSelectedImage(selectedImage < images.length - 1 ? selectedImage + 1 : 0)
            }}
            className="absolute right-4 md:right-8 text-white/50 hover:text-white transition-colors z-[70]"
          >
            <ChevronRight size={40} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
