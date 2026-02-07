"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import type { DriveFile } from "@/lib/drive"

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
      <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
        {images.map((image, index) => (
          <motion.div
            key={image.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="break-inside-avoid relative group cursor-pointer overflow-hidden bg-neutral-900"
            onClick={() => setSelectedImage(index)}
          >
            <div className="aspect-auto w-full relative">
              <img
                src={image.webContentLink || image.thumbnailLink?.replace('=s220', '=s1200')}
                alt={image.name}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105 group-hover:opacity-90"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
            >
              <X size={32} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation()
                setSelectedImage(prev => prev !== null && prev > 0 ? prev - 1 : images.length - 1)
              }}
              className="absolute left-4 md:left-8 text-white/50 hover:text-white transition-colors"
            >
              <ChevronLeft size={40} />
            </button>

            <div className="relative w-full max-w-6xl max-h-[90vh] flex items-center justify-center">
              <img
                src={images[selectedImage].webContentLink || images[selectedImage].thumbnailLink?.replace('=s220', '=s2000')}
                alt={images[selectedImage].name}
                className="max-w-full max-h-[85vh] object-contain shadow-2xl"
              />
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation()
                setSelectedImage(prev => prev !== null && prev < images.length - 1 ? prev + 1 : 0)
              }}
              className="absolute right-4 md:right-8 text-white/50 hover:text-white transition-colors"
            >
              <ChevronRight size={40} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}