import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";

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

interface InstagramReelCardProps {
  post: InstagramPost;
}

export function InstagramReelCard({ post }: InstagramReelCardProps) {
  const thumbnailSrc =
    post.sizes?.large?.mediaUrl ||
    post.sizes?.medium?.mediaUrl ||
    post.sizes?.full?.mediaUrl ||
    post.thumbnail_url ||
    post.media_url;

  return (
    <Link
      href={post.permalink}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block aspect-[9/16] overflow-hidden bg-neutral-900 border border-white/5"
    >
      {thumbnailSrc && (
        <Image
          src={thumbnailSrc}
          alt={post.caption || "Instagram reel"}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
        />
      )}

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-orange-500/80">
          <Play size={20} className="fill-white text-white ml-1" />
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 flex flex-col justify-end p-6">
        <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.2em] text-orange-500">
          Reel
        </span>
        {post.pruned_caption && (
          <p className="line-clamp-2 font-serif text-sm text-white/90">
            {post.pruned_caption}
          </p>
        )}
      </div>
    </Link>
  );
}
