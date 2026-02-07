import { About } from "@/components/about"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col bg-neutral-950 text-neutral-50 selection:bg-neutral-800 selection:text-white">
      <Navbar />
      <div className="pt-24 md:pt-32">
        <About />
      </div>
      <Footer />
    </main>
  )
}
