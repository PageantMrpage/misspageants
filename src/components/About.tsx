export default function About() {
  return (
    <section id="about" className="relative py-24 px-4 md:px-12 bg-[#0B0C20]">
      <div className="absolute inset-0 bg-gradient-radial from-[#8B4DFF]/10 via-transparent to-transparent opacity-50" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#00B8E6] to-[#8B4DFF] rounded-lg blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
            <img
              src="/Untitled design (2)[1].png"
              alt="Contestant"
              className="relative rounded-lg shadow-2xl w-full h-[600px] object-cover"
            />
          </div>

          <div className="space-y-6">
            <h2 className="font-['Playfair_Display'] text-5xl md:text-6xl font-bold text-white mb-4">
              About Us
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#00B8E6] to-[#8B4DFF]" />

            <p className="text-[#CFCFD5] text-lg leading-relaxed">
              Happi Miss Global is more than a pageant — it's a movement celebrating purpose-driven beauty.
            </p>

            <p className="text-[#CFCFD5] text-lg leading-relaxed">
              Through mentorship, grooming, and international exposure, we help participants transform confidence into charisma.
            </p>

            <p className="text-[#CFCFD5] text-lg leading-relaxed">
              Our mission: redefine what it means to be "beautiful" — blending intellect, empathy, and elegance.
            </p>

            <button
              onClick={() => document.getElementById('journey')?.scrollIntoView({ behavior: 'smooth' })}
              className="mt-8 px-10 py-3 bg-transparent border-2 border-[#00B8E6] text-[#00B8E6] uppercase tracking-[0.12em] font-semibold rounded-full hover:bg-[#00B8E6] hover:text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,184,230,0.5)]"
            >
              Discover More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
