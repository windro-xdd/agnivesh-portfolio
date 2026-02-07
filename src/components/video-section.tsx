"use client"

export function VideoSection() {
  return (
    <div className="flex flex-col gap-16">
      {/* The Late Shift - Stornaway Interactive */}
      <div className="w-full">
        <h3 className="mb-4 text-2xl font-serif text-white">The Late Shift</h3>
        <p className="mb-6 text-neutral-400">Interactive Film • Stornaway.io</p>
        <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-neutral-800 bg-neutral-900 shadow-2xl">
          <iframe 
            src="https://player.stornaway.io/watch/ad9fdf24" 
            className="absolute inset-0 h-full w-full"
            allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="The Late Shift - Interactive Film"
          />
        </div>
      </div>

      {/* The Heir - YouTube Documentary */}
      <div className="w-full">
        <h3 className="mb-4 text-2xl font-serif text-white">The Heir</h3>
        <p className="mb-6 text-neutral-400">A documentary about Kathakali | Kalamandalam Premkumar</p>
        <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-neutral-800 bg-neutral-900 shadow-2xl">
          <iframe 
            src="https://www.youtube.com/embed/1ZiAIkBzrIE?si=S39llVZ1Zg1B-7yr" 
            className="absolute inset-0 h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen
            title="The Heir - Kathakali Documentary"
          />
        </div>
      </div>
    </div>
  )
}