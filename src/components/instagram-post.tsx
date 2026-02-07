"use client";

import { InstagramEmbed } from "react-social-media-embed";

interface InstagramPostProps {
  url: string;
  width?: number | string;
  caption?: boolean;
}

export function InstagramPost({
  url,
  width = 328,
  caption = false,
}: InstagramPostProps) {
  return (
    <div className="flex justify-center my-8">
      <InstagramEmbed url={url} width={width} captioned={caption} />
    </div>
  );
}
