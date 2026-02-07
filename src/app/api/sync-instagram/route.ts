import { NextResponse } from 'next/server';
import { supabase, isSupabaseConfigured } from '@/lib/supabase';
import type { BeholdFeedResponse } from '@/types/instagram';

export async function GET() {
  if (!isSupabaseConfigured) {
    return NextResponse.json(
      { error: 'Supabase is not configured' },
      { status: 500 }
    );
  }

  const feedId = process.env.BEHOLD_FEED_ID;

  if (!feedId) {
    return NextResponse.json(
      { error: 'Behold Feed ID not configured' },
      { status: 500 }
    );
  }

  try {
    const response = await fetch(`https://feeds.behold.so/${feedId}`, {
      next: { revalidate: 0 },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch Behold feed: ${response.status}`);
    }

    const feed: BeholdFeedResponse = await response.json();

    const formattedPosts = feed.posts.map((post) => ({
      id: post.id,
      media_type: post.mediaType,
      is_reel: post.isReel ?? false,
      media_url: post.mediaUrl,
      permalink: post.permalink,
      caption: post.caption,
      pruned_caption: post.prunedCaption,
      thumbnail_url: post.thumbnailUrl ?? null,
      hashtags: post.hashtags,
      color_palette: post.colorPalette,
      sizes: post.sizes,
      children: post.children ?? null,
      timestamp: post.timestamp,
    }));

    const { error } = await supabase
      .from('instagram_posts')
      .upsert(formattedPosts, { onConflict: 'id' });

    if (error) throw error;

    return NextResponse.json({
      success: true,
      count: feed.posts.length,
      username: feed.username,
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
