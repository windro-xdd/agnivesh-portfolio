export function About() {
  return (
    <div className="container mx-auto px-6 max-w-5xl py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        <div className="relative aspect-[3/4] bg-neutral-900 overflow-hidden shadow-2xl">
          <img 
            src="/agnivesh-portrait.jpg"
            alt="Agnivesh Sarang"
            className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700 ease-in-out"
          />
        </div>

        <div className="space-y-12">
          <div className="space-y-6">
            <span className="text-orange-600 text-xs font-bold tracking-[0.2em] uppercase">About Me</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white leading-tight">
              Award-Winning Documentary Director & Visual Storyteller
            </h2>
            <p className="text-neutral-500 font-light text-lg">
              Based in Stirling, Scotland, UK
            </p>
          </div>

          <div className="space-y-6 text-neutral-400 font-light leading-relaxed text-lg">
            <p>
              I am an award-winning documentary director and visual storyteller, currently studying <span className="text-white font-medium">Film and Media at the University of Stirling</span>.
            </p>
            <p>
              My passion lies in crafting compelling narratives that bridge cultures and histories. I have experience working on major broadcast productions, including a guided factual project with the <span className="text-white font-medium">BBC</span> and the long-running reality show <span className="text-white italic">Love It or List It</span> for <span className="text-white font-medium">Channel 4</span> (Raise the Roof Productions).
            </p>
            <p>
              My work spans from interactive films like <span className="text-white italic">The Late Shift</span> to documentaries such as <span className="text-white italic">The Heir</span>, which explores the legacy of Kathakali. I am constantly seeking new perspectives in film production, combining technical expertise in <span className="text-white font-medium">Avid Media Composer</span> with a creative eye for cinematography.
            </p>
          </div>

          <div className="pt-8 border-t border-neutral-900 grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-white font-serif text-xl mb-3">Role</h4>
              <p className="text-sm text-neutral-500 uppercase tracking-wider leading-loose">
                Documentary Director<br/>
                Content Creator<br/>
                Visual Storyteller
              </p>
            </div>
            <div>
              <h4 className="text-white font-serif text-xl mb-3">Location</h4>
              <p className="text-sm text-neutral-500 uppercase tracking-wider leading-loose">
                Stirling, UK<br/>
                Available Worldwide
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}