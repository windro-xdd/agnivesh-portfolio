import { Hero } from "@/components/hero";
import { FeaturedGallery } from "@/components/featured-gallery";
import { VideoSection } from "@/components/video-section";
import { About } from "@/components/about";
import { getPortfolioImages } from "@/lib/drive";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const revalidate = 3600;

export default async function Home() {
  const images = await getPortfolioImages();
  const featuredImages = images.slice(0, 8);

  return (
    <main className="flex min-h-screen flex-col bg-neutral-950">
      <Hero />
      
      <FeaturedGallery images={featuredImages} />

      <section className="w-full py-32 bg-neutral-950 border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-600/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-6 text-right md:text-left">
            <div className="space-y-4 md:order-1">
              <div className="flex items-center gap-3 md:justify-start">
                <div className="h-[1px] w-8 bg-orange-600/50" />
                <span className="text-orange-500 text-[10px] font-bold tracking-[0.4em] uppercase">Cinematography</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-serif font-medium text-white tracking-tight">Film Portfolio</h2>
            </div>
            <Link 
              href="/videos" 
              className="md:order-2 group flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-neutral-400 hover:text-white transition-colors pb-2 border-b border-transparent hover:border-orange-600/50"
            >
              View All Films <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <VideoSection />
        </div>
      </section>

      <section id="about" className="w-full bg-background border-t border-white/5">
        <About />
      </section>

      <section className="w-full py-40 bg-neutral-950 flex flex-col items-center justify-center text-center px-6">
        <div className="max-w-3xl space-y-10">
          <h2 className="text-4xl md:text-6xl font-serif font-light text-white leading-tight">
            Let's create something <br />
            <span className="italic text-neutral-500">unforgettable together.</span>
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
            <a 
              href="mailto:contact@agniveshsarang.com" 
              className="px-12 py-5 bg-white text-black text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-orange-600 hover:text-white transition-all duration-500"
            >
              Get In Touch
            </a>
            <Link 
              href="/photos" 
              className="px-12 py-5 border border-white/10 text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-white/5 transition-all duration-500"
            >
              View Gallery
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
