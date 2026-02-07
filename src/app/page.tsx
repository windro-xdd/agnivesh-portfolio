import { Hero } from "@/components/hero";
import { Gallery } from "@/components/gallery";
import { VideoSection } from "@/components/video-section";
import { About } from "@/components/about";
import { getPortfolioImages } from "@/lib/drive";

export default async function Home() {
  const images = await getPortfolioImages();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <div id="work" className="w-full">
        <Gallery images={images} />
      </div>
      <div id="films" className="w-full">
        <VideoSection />
      </div>
      <div id="about" className="w-full">
        <About />
      </div>
    </main>
  );
}