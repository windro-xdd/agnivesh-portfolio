import { VideoSection } from "@/components/video-section"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { supabase, isSupabaseConfigured } from "@/lib/supabase"

export const revalidate = 3600

async function getInstagramReels() {
  if (!isSupabaseConfigured) return [];
  
  try {
    const { data, error } = await supabase
      .from("instagram_posts")
      .select("*")
      .eq("media_type", "VIDEO")
      .order("timestamp", { ascending: false });
    
    if (error) throw error;
    return data || [];
  } catch (e) {
    console.error("Failed to fetch IG reels:", e);
    return [];
  }
}

export default async function VideosPage() {
  const igReels = await getInstagramReels();

  return (
    <main className="flex min-h-screen flex-col bg-neutral-950 text-neutral-50 selection:bg-neutral-800 selection:text-white">
      <Navbar />
      <div className="container mx-auto px-6 py-24 md:py-32">
        <div className="mb-20 space-y-4">
          <div className="flex items-center gap-3">
            <div className="h-[1px] w-8 bg-orange-600/50" />
            <span className="text-orange-500 text-[10px] font-bold tracking-[0.4em] uppercase">Portfolio</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-serif font-medium text-white tracking-tight">
            Video <span className="text-neutral-500 italic">Reel</span>
          </h1>
        </div>
        <VideoSection />

        {igReels.length > 0 && (
          <div className="mt-32 border-t border-neutral-800/50 pt-24">
            <div className="mb-16 text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-[1px] w-8 bg-orange-600/50" />
                <span className="text-orange-500 text-[10px] font-bold tracking-[0.4em] uppercase">Latest</span>
                <div className="h-[1px] w-8 bg-orange-600/50" />
              </div>
              <h2 className="font-serif text-4xl font-light tracking-wide text-white md:text-5xl">
                Instagram <span className="text-neutral-500 italic">Reels</span>
              </h2>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {igReels.map((reel) => {
                const thumbnailSrc =
                  reel.sizes?.large?.mediaUrl ||
                  reel.sizes?.medium?.mediaUrl ||
                  reel.sizes?.full?.mediaUrl ||
                  reel.thumbnail_url ||
                  reel.media_url;
                
                const caption = reel.pruned_caption || reel.caption || "";
                const firstLine = caption.split('\n')[0].slice(0, 60);
                
                return (
                  <a
                    key={reel.id}
                    href={reel.permalink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative block aspect-[9/16] overflow-hidden bg-neutral-900 ring-1 ring-white/5 hover:ring-orange-500/30 transition-all duration-500"
                  >
                    {thumbnailSrc && (
                      <img
                        src={thumbnailSrc}
                        alt={caption || "Instagram reel"}
                        className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                      />
                    )}
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-black/40 backdrop-blur-sm ring-1 ring-white/20 group-hover:ring-orange-500/50 group-hover:bg-orange-500/20 transition-all duration-500 group-hover:scale-110">
                        <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                    
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <span className="block text-[9px] font-bold uppercase tracking-[0.2em] text-orange-400 mb-1">Reel</span>
                      {firstLine && (
                        <p className="text-xs text-white/90 font-light leading-relaxed line-clamp-2">
                          {firstLine}
                        </p>
                      )}
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </main>
  )
}
