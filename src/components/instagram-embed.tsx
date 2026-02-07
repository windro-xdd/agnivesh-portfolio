"use client";

import { useEffect, useRef } from "react";

interface InstagramEmbedProps {
  url: string;
  caption?: boolean;
}

export function InstagramEmbed({ url, caption = false }: InstagramEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if script is already loaded
    if (!document.querySelector('script[src="//www.instagram.com/embed.js"]')) {
      const script = document.createElement("script");
      script.async = true;
      script.src = "//www.instagram.com/embed.js";
      document.body.appendChild(script);
    }

// Process embeds
      if ((window as any).instgrm) {
        (window as any).instgrm.Embeds.process();
      }
  }, [url]);

  // Extract post ID from URL to construct the embed code
  // URL formats: https://www.instagram.com/p/POST_ID/ or https://www.instagram.com/reel/POST_ID/
  const getPostId = (url: string) => {
    const match = url.match(/(?:p|reel)\/([a-zA-Z0-9_-]+)/);
    return match ? match[1] : null;
  };

  const postId = getPostId(url);

  if (!postId) {
    return <div className="text-red-500">Invalid Instagram URL</div>;
  }

  const embedUrl = `https://www.instagram.com/${url.includes("reel") ? "reel" : "p"}/${postId}/`;

  return (
    <div className="flex justify-center w-full my-8" ref={containerRef}>
      <blockquote
        className="instagram-media"
        data-instgrm-captioned={caption}
        data-instgrm-permalink={embedUrl}
        data-instgrm-version="14"
        style={{
          background: "#FFF",
          border: 0,
          borderRadius: "3px",
          boxShadow: "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
          margin: "1px",
          maxWidth: "540px",
          minWidth: "326px",
          padding: 0,
          width: "calc(100% - 2px)",
        }}
      >
      </blockquote>
    </div>
  );
}
