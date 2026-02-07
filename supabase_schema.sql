-- Run this in the Supabase SQL Editor

CREATE TABLE IF NOT EXISTS instagram_posts (
  id TEXT PRIMARY KEY,
  media_type TEXT NOT NULL,
  is_reel BOOLEAN DEFAULT FALSE,
  media_url TEXT,
  permalink TEXT NOT NULL,
  caption TEXT,
  pruned_caption TEXT,
  thumbnail_url TEXT,
  hashtags TEXT[] DEFAULT '{}',
  color_palette JSONB,
  sizes JSONB,
  children JSONB,
  timestamp TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Index for faster sorting
CREATE INDEX IF NOT EXISTS idx_instagram_posts_timestamp ON instagram_posts (timestamp DESC);

-- Index for filtering by media type
CREATE INDEX IF NOT EXISTS idx_instagram_posts_media_type ON instagram_posts (media_type);

-- Migration: If the table already exists with old schema, run these ALTER statements instead:
-- ALTER TABLE instagram_posts ADD COLUMN IF NOT EXISTS is_reel BOOLEAN DEFAULT FALSE;
-- ALTER TABLE instagram_posts ADD COLUMN IF NOT EXISTS pruned_caption TEXT;
-- ALTER TABLE instagram_posts ADD COLUMN IF NOT EXISTS hashtags TEXT[] DEFAULT '{}';
-- ALTER TABLE instagram_posts ADD COLUMN IF NOT EXISTS color_palette JSONB;
-- ALTER TABLE instagram_posts ADD COLUMN IF NOT EXISTS sizes JSONB;
-- ALTER TABLE instagram_posts ADD COLUMN IF NOT EXISTS children JSONB;
-- CREATE INDEX IF NOT EXISTS idx_instagram_posts_media_type ON instagram_posts (media_type);
