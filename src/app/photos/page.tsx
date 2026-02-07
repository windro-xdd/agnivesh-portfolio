import { Gallery } from "@/components/gallery"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { InstagramPhotoCard } from "@/components/instagram-photo-card"
import { getPortfolioImages } from "@/lib/drive"
import { supabase, isSupabaseConfigured } from "@/lib/supabase"

export const revalidate = 3600

async function getInstagramPhotos() {
  if (!isSupabaseConfigured) return [];

  try {
    const { data, error } = await supabase
      .from("instagram_posts")
      .select("*")
      .in("media_type", ["IMAGE", "CAROUSEL_ALBUM"])
      .order("timestamp", { ascending: false });

    if (error) throw error;
    return data || [];
  } catch (e) {
    console.error("Failed to fetch IG photos from Supabase:", e);
    return [];
  }
}

export default async function PhotosPage() {
  const images = await getPortfolioImages()
  const igPhotos = await getInstagramPhotos()

  return (
    <main className="flex min-h-screen flex-col bg-neutral-950 text-neutral-50 selection:bg-neutral-800 selection:text-white">
      <Navbar />
      <div className="container mx-auto px-6 py-24 md:py-32">
        <div className="mb-20 space-y-4">
          <div className="flex items-center gap-3">
            <div className="h-[1px] w-8 bg-orange-600/50" />
            <span className="text-orange-500 text-[10px] font-bold tracking-[0.4em] uppercase">Visuals</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-serif font-medium text-white tracking-tight">
            Photo <span className="text-neutral-500 italic">Gallery</span>
          </h1>
        </div>
        <Gallery images={images} />

        {igPhotos.length > 0 && (
          <div className="mt-32 border-t border-neutral-800/50 pt-24">
            <div className="mb-16 text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-[1px] w-8 bg-orange-600/50" />
                <span className="text-orange-500 text-[10px] font-bold tracking-[0.4em] uppercase">Social</span>
                <div className="h-[1px] w-8 bg-orange-600/50" />
              </div>
              <h2 className="font-serif text-4xl font-light tracking-wide text-white md:text-5xl">
                Latest from <span className="text-neutral-500 italic">Instagram</span>
              </h2>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {igPhotos.map((post) => (
                <InstagramPhotoCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </main>
  )
}
