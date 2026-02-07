export function About() {
  return (
    <div className="container mx-auto px-6 max-w-5xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="relative aspect-[3/4] bg-neutral-800 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2787&auto=format&fit=crop" 
            alt="Agnivesh Sarang"
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
          />
        </div>

        <div className="space-y-8">
          <div className="space-y-2">
            <span className="text-orange-500 text-xs font-bold tracking-[0.2em] uppercase">About Me</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">
              Visual Storyteller based in Kerala
            </h2>
          </div>

          <div className="space-y-6 text-neutral-400 font-light leading-relaxed text-lg">
            <p>
              I am a cinematographer and photographer with a deep passion for documenting folklore, 
              ancient art forms, and the people who have mastered them in today's world.
            </p>
            <p>
              My work spans from interactive films like <span className="text-white italic">The Late Shift</span> to 
              documentaries such as <span className="text-white italic">The Heir</span>, which explores the legacy of Kathakali.
            </p>
            <p>
              I have also worked on broadcast productions including <span className="text-white italic">Love It or List It</span> by 
              Raise the Roof Productions for Channel 4.
            </p>
          </div>

          <div className="pt-4 grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-white font-serif text-xl mb-2">Role</h4>
              <p className="text-sm text-neutral-500 uppercase tracking-wider">Cinematographer<br/>Editor<br/>Colorist</p>
            </div>
            <div>
              <h4 className="text-white font-serif text-xl mb-2">Location</h4>
              <p className="text-sm text-neutral-500 uppercase tracking-wider">Kerala, India<br/>Available Worldwide</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}