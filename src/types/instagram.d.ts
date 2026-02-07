export interface BeholdImageSize {
  mediaUrl: string;
  height: number;
  width: number;
}

export interface BeholdSizes {
  small: BeholdImageSize;
  medium: BeholdImageSize;
  large: BeholdImageSize;
  full: BeholdImageSize;
}

export interface BeholdColorPalette {
  dominant: string;
  muted: string;
  mutedLight: string;
  mutedDark: string;
  vibrant: string;
  vibrantLight: string;
  vibrantDark: string;
}

export interface BeholdChild {
  id: string;
  mediaType: 'IMAGE' | 'VIDEO';
  mediaUrl: string;
  sizes: BeholdSizes;
  colorPalette: BeholdColorPalette;
  missingVideoThumbnail: boolean;
}

export interface BeholdPost {
  id: string;
  timestamp: string;
  permalink: string;
  mediaType: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
  isReel?: boolean;
  mediaUrl: string;
  thumbnailUrl?: string;
  sizes: BeholdSizes;
  caption: string;
  prunedCaption: string;
  hashtags: string[];
  mentions: string[];
  colorPalette: BeholdColorPalette;
  children?: BeholdChild[];
  missingVideoThumbnail: boolean;
  isSharedToFeed?: boolean;
}

export interface BeholdFeedResponse {
  username: string;
  biography: string;
  profilePictureUrl: string;
  website: string | null;
  followersCount: number;
  followsCount: number;
  posts: BeholdPost[];
}

export interface InstagramPost {
  id: string;
  media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
  is_reel: boolean;
  media_url: string;
  permalink: string;
  caption: string | null;
  pruned_caption: string | null;
  thumbnail_url: string | null;
  hashtags: string[];
  color_palette: BeholdColorPalette | null;
  sizes: BeholdSizes | null;
  children: BeholdChild[] | null;
  timestamp: string;
  created_at: string;
}
