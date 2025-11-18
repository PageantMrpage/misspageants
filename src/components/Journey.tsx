import { FileText, Trophy, Users, Sparkles } from 'lucide-react';

const journeySteps = [
  {
    title: 'Apply Online',
    description: 'Your journey begins here.',
    icon: FileText,
    image: '/unnamed (2).jpg',
  },
  {
    title: 'Weekly Challenges',
    description: 'Evolve through exciting tasks.',
    icon: Sparkles,
    image: '/WhatsApp Image 2025-11-01 at 23.46.14_9af66443.jpg',
  },
  {
    title: 'Bootcamp Training',
    description: 'Transform with expert guidance.',
    icon: Users,
    image: '/WhatsApp Image 2025-11-01 at 23.51.23_331c218d.jpg',
  },
  {
    title: 'Grand Finale',
    description: 'Shine on the global stage.',
    icon: Trophy,
    image: '/WhatsApp Image 2025-11-01 at 23.46.15_04b98c21.jpg',
  },
];

export default function Journey() {
  return (
    <section id="journey" className="relative py-24 px-4 md:px-12 bg-gradient-to-b from-[#0B0C20] to-[#1a1b35]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-['Playfair_Display'] text-5xl md:text-6xl font-bold text-white mb-4">
            The Journey
          </h2>
          <p className="text-[#E8C27E] text-xl md:text-2xl font-light tracking-wide">
            90 Days of Elegant Transformation
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00B8E6] to-[#8B4DFF] mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {journeySteps.map((step, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-[#1a1b35] to-[#0B0C20] rounded-xl overflow-hidden border border-[#8B4DFF]/20 hover:border-[#00B8E6] transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#00B8E6]/0 to-[#8B4DFF]/0 group-hover:from-[#00B8E6]/10 group-hover:to-[#8B4DFF]/10 transition-all duration-300" />

              <div className="relative h-64 overflow-hidden">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C20] via-[#0B0C20]/50 to-transparent" />
              </div>

              <div className="relative p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#00B8E6] to-[#8B4DFF] rounded-full mb-4 group-hover:shadow-[0_0_30px_rgba(139,77,255,0.6)] transition-shadow duration-300">
                  <step.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-white text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-[#CFCFD5] text-sm">{step.description}</p>
              </div>

              <div className="absolute top-4 left-4 w-12 h-12 bg-gradient-to-br from-[#00B8E6] to-[#8B4DFF] rounded-full flex items-center justify-center font-bold text-white text-lg">
                {index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
