import { VideoSection } from "@/components/video-section"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { InstagramPost } from "@/components/instagram-post"

export default function VideosPage() {
  return (
    <main className="flex min-h-screen flex-col bg-neutral-950 text-neutral-50 selection:bg-neutral-800 selection:text-white">
      <Navbar />
      <div className="container mx-auto px-6 py-24 md:py-32">
        <h1 className="mb-12 text-center font-serif text-4xl font-light tracking-wide text-white md:text-5xl">
          Video Portfolio
        </h1>
        <VideoSection />

        <div className="mt-24 border-t border-neutral-900 pt-24">
          <h2 className="mb-12 text-center font-serif text-3xl font-light tracking-wide text-white md:text-4xl">
            Instagram Reels
          </h2>
          <div className="grid grid-cols-1 justify-items-center gap-8 md:grid-cols-2 lg:grid-cols-3">
             {/* Replace these URLs with your actual Instagram Reel URLs */}
            <div className="w-full max-w-[328px]">
              <div className="flex aspect-[9/16] w-full items-center justify-center rounded-lg border border-neutral-800 bg-neutral-900 text-neutral-500">
                <span className="p-4 text-center text-sm">Add Instagram Reel URL in src/app/videos/page.tsx</span>
              </div>
            </div>
             {/* Example usage once you have links:
            <InstagramPost url="https://www.instagram.com/reel/CoMpLeXCoDe/" />
            <InstagramPost url="https://www.instagram.com/reel/AnOtHeRcOdE/" />
            */}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
