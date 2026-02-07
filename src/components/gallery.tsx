"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import Masonry from "react-masonry-css"
import type { DriveFile } from "@/lib/drive"
import { cn } from "@/lib/utils"

interface GalleryProps {
  images: DriveFile[]
}

const breakpointColumnsObj = {
  default: 3,
  1100: 3,
  700: 2,
  500: 1
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
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex w-auto -ml-4"
        columnClassName="pl-4 bg-clip-padding"
      >
        {images.map((image, index) => (
          <motion.div
            key={image.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-4 relative group cursor-pointer overflow-hidden bg-neutral-900"
            onClick={() => setSelectedImage(index)}
          >
            <div className="relative w-full">
              <BlurImage image={image} />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 pointer-events-none" />
            </div>
          </motion.div>
        ))}
      </Masonry>

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
                setSelectedImage(prev => prev !== null && prev > 0 ? prev - 1 : images.length - 1)
              }}
              className="absolute left-4 md:left-8 text-white/50 hover:text-white transition-colors z-[70]"
            >
              <ChevronLeft size={40} />
            </button>

            <div className="relative w-full max-w-7xl h-full flex items-center justify-center p-4" onClick={(e) => e.stopPropagation()}>
               <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={images[selectedImage].thumbnailLink?.replace('=s220', '=s2000') || images[selectedImage].webContentLink || ''}
                    alt={images[selectedImage].name}
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
                setSelectedImage(prev => prev !== null && prev < images.length - 1 ? prev + 1 : 0)
              }}
              className="absolute right-4 md:right-8 text-white/50 hover:text-white transition-colors z-[70]"
            >
              <ChevronRight size={40} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

function BlurImage({ image }: { image: DriveFile }) {
  const [isLoading, setLoading] = useState(true)

  const width = image.imageMediaMetadata?.width || 800
  const height = image.imageMediaMetadata?.height || 600
  const aspectRatio = width / height

  return (
    <div className="relative w-full overflow-hidden bg-neutral-800" style={{ aspectRatio }}>
      <Image
        src={image.thumbnailLink?.replace('=s220', '=s1200') || `https://drive.google.com/thumbnail?id=${image.id}&sz=w800`}
        alt={image.name}
        fill
        className={cn(
          "object-cover duration-700 ease-in-out group-hover:scale-105",
          isLoading ? "scale-110 blur-2xl grayscale" : "scale-100 blur-0 grayscale-0"
        )}
        onLoad={() => setLoading(false)}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  )
}