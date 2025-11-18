export default function Finale() {
  const finaleImages = [
    '/unnamed (1) copy.jpg',
    '/WhatsApp Image 2025-11-02 at 00.14.18_d5ce5efd.jpg',
    '/WhatsApp Image 2025-11-02 at 00.05.44_11ec5235.jpg',
  ];

  return (
    <section className="relative py-24 px-4 md:px-12 bg-[#0B0C20]">
      <div className="absolute inset-0 bg-gradient-radial from-[#00B8E6]/10 via-transparent to-transparent opacity-30" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-['Playfair_Display'] text-5xl md:text-6xl font-bold text-white mb-4">
            Finale Experience
          </h2>
          <p className="text-[#CFCFD5] text-xl md:text-2xl font-light">
            Every Crown Tells a Story of Grace and Grit
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00B8E6] to-[#8B4DFF] mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {finaleImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl aspect-[3/4] cursor-pointer"
              style={{
                animationDelay: `${index * 0.2}s`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#00B8E6] to-[#8B4DFF] opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-10" />

              <img
                src={image}
                alt={`Finale moment ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C20] via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <div className="w-16 h-1 bg-gradient-to-r from-[#00B8E6] to-[#8B4DFF] mb-3" />
                <p className="text-white text-lg font-light opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {index === 0 && 'Spotlight Moments'}
                  {index === 1 && 'Crown of Excellence'}
                  {index === 2 && 'Celebration of Grace'}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
