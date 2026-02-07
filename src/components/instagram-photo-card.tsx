import Image from "next/image";
import Link from "next/link";
import { Layers } from "lucide-react";

interface InstagramMediaSize {
  mediaUrl: string;
  width: number;
  height: number;
}

interface InstagramPost {
  id: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  media_url: string;
  permalink: string;
  caption?: string;
  pruned_caption?: string;
  thumbnail_url?: string;
  timestamp: string;
  sizes: {
    small?: InstagramMediaSize;
    medium?: InstagramMediaSize;
    large?: InstagramMediaSize;
    full?: InstagramMediaSize;
  };
  children?: Array<{
    id: string;
    media_type: string;
    media_url: string;
  }>;
}

interface InstagramPhotoCardProps {
  post: InstagramPost;
}

export function InstagramPhotoCard({ post }: InstagramPhotoCardProps) {
  const imageSrc =
    post.sizes?.large?.mediaUrl ||
    post.sizes?.medium?.mediaUrl ||
    post.sizes?.full?.mediaUrl ||
    post.media_url;

  const isCarousel = post.media_type === "CAROUSEL_ALBUM";
  const childCount = post.children?.length || 0;

  return (
    <Link
      href={post.permalink}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block aspect-[4/5] overflow-hidden bg-neutral-900 border border-white/5"
    >
        {imageSrc && (
          <Image
            src={imageSrc}
            alt={post.caption || "Instagram photo"}
            fill
            unoptimized
            className="object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
          />
        )}

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 flex flex-col justify-end p-6">
        <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.2em] text-orange-500">
          Instagram
        </span>
        {post.pruned_caption && (
          <p className="line-clamp-2 font-serif text-sm text-white/90">
            {post.pruned_caption}
          </p>
        )}
      </div>

      {isCarousel && (
        <div className="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-black/50 px-2 py-1 backdrop-blur-sm">
          <Layers size={12} className="text-white" />
          {childCount > 0 && (
            <span className="text-[10px] font-medium text-white">
              {childCount}
            </span>
          )}
        </div>
      )}
    </Link>
  );
}
