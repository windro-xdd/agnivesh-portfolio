"use client"

import { useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import type { DriveFile } from "@/lib/drive"

interface DriveImageProps {
  image: DriveFile
  fill?: boolean
  className?: string
  sizes?: string
  priority?: boolean
  quality?: number
}

export function DriveImage({ 
  image, 
  fill = false, 
  className,
  sizes,
  priority = false,
  quality
}: DriveImageProps) {
  const [isLoading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  
  const thumbnailBase = image.thumbnailLink ? image.thumbnailLink.split('=')[0] : `https://drive.google.com/thumbnail?id=${image.id}`
  const [imgSrc, setImgSrc] = useState(`${thumbnailBase}=s1200`)
  const [attempts, setAttempts] = useState(0)

  return (
    <>
      <Image
        src={imgSrc}
        alt={image.name}
        fill={fill}
        width={!fill ? (image.imageMediaMetadata?.width || 800) : undefined}
        height={!fill ? (image.imageMediaMetadata?.height || 600) : undefined}
        unoptimized
        className={cn(
          "object-cover transition-all duration-700",
          isLoading ? "blur-xl opacity-0" : "blur-0 opacity-100",
          className
        )}
        onLoad={() => setLoading(false)}
        onError={() => {
          if (attempts === 0) {
             setImgSrc(`https://drive.google.com/thumbnail?id=${image.id}&sz=w1200`)
             setAttempts(1)
          } else if (attempts === 1) {
             setImgSrc(`https://lh3.googleusercontent.com/d/${image.id}=s1200`)
             setAttempts(2)
          } else {
             setLoading(false)
             setError(true)
          }
        }}
        sizes={sizes}
        priority={priority}
        quality={quality}
        {...({ referrerPolicy: "no-referrer" } as any)}
      />
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-neutral-900 flex-col gap-2 z-10">
          <p className="text-[10px] text-neutral-600 uppercase tracking-widest px-4 text-center">Preview unavailable</p>
          <a 
            href={image.webContentLink || `https://drive.google.com/file/d/${image.id}/view`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[9px] text-orange-500 hover:underline z-20 pointer-events-auto px-4 py-2 border border-white/10 bg-black/50 backdrop-blur-sm rounded"
            onClick={(e) => e.stopPropagation()}
          >
            Open in Drive
          </a>
        </div>
      )}
    </>
  )
}

