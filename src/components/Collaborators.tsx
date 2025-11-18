import { Camera, Sparkles, ShoppingBag, Gem, Dumbbell, Building2, Tv, Palette } from 'lucide-react';

const collaborators = [
  { name: 'Photographers', icon: Camera, image: '/unnamed (4).jpg' },
  { name: 'Makeup Artists', icon: Sparkles, image: '/unnamed.jpg' },
  { name: 'Boutiques', icon: ShoppingBag, image: '/unnamed (1).jpg' },
  { name: 'Jewelry Brands', icon: Gem, image: '/unnamed (7).jpg' },
  { name: 'Fitness Centers', icon: Dumbbell, image: '/unnamed (6).jpg' },
  { name: 'Hotels & Resorts', icon: Building2, image: '/unnamed (5).jpg' },
  { name: 'Media Partners', icon: Tv, image: '/unnamed (3).jpg' },
  { name: 'Beauty Brands', icon: Palette, image: '/unnamed (2) copy.jpg' },
];

export default function Collaborators() {
  return (
    <section className="relative py-24 px-4 md:px-12 bg-[#0B0C20]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-['Playfair_Display'] text-5xl md:text-6xl font-bold text-white mb-4">
            Our Global Collaborators
          </h2>
          <p className="text-[#CFCFD5] text-xl md:text-2xl font-light">
            Empowering beauty with purpose through strategic alliances
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00B8E6] to-[#8B4DFF] mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {collaborators.map((partner, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-[#1a1b35] to-[#0B0C20] rounded-xl p-6 border border-[#8B4DFF]/20 hover:border-[#00B8E6] transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#00B8E6]/0 to-[#8B4DFF]/0 group-hover:from-[#00B8E6]/10 group-hover:to-[#8B4DFF]/10 transition-all duration-300" />

              <div className="relative z-10">
                <div className="w-full h-32 mb-4 rounded-lg overflow-hidden">
                  <img
                    src={partner.image}
                    alt={partner.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="flex items-center justify-center mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#00B8E6] to-[#8B4DFF] rounded-full flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(139,77,255,0.6)] transition-shadow duration-300">
                    <partner.icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                <h3 className="text-white text-center font-semibold text-sm">
                  {partner.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-12 py-4 bg-gradient-to-r from-[#00B8E6] to-[#8B4DFF] text-white uppercase tracking-[0.12em] font-semibold rounded-full hover:scale-105 hover:shadow-[0_0_30px_rgba(139,77,255,0.6)] transition-all duration-300"
          >
            Partner With Us
          </button>
        </div>
      </div>
    </section>
  );
}
