export default function Gallery() {
  const galleryImages = [
    {
      url: '/WhatsApp Image 2025-11-01 at 23.46.13_dcc0e6db.jpg',
     
    },
    {
      url: '/WhatsApp Image 2025-11-01 at 23.46.14_2d043dbe.jpg',
     
    },
    {
      url: '/WhatsApp Image 2025-11-01 at 23.46.14_08446e23.jpg',
      
    },
    {
      url: '/WhatsApp Image 2025-11-01 at 23.46.14_b057c4bc.jpg',
      
    },
    {
      url: '/WhatsApp Image 2025-11-01 at 23.46.08_0377e19b.jpg',
     
    },
    {
      url: '/WhatsApp Image 2025-11-01 at 23.46.08_00daacf6.jpg',
     
    },
  ];

  return (
    <section id="gallery" className="relative py-24 px-4 md:px-12 bg-gradient-to-b from-[#1a1b35] to-[#0B0C20]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-['Playfair_Display'] text-5xl md:text-6xl font-bold text-white mb-4">
            Gallery
          </h2>
          <p className="text-[#CFCFD5] text-xl md:text-2xl font-light">
            Moments of Grace and Empowerment
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00B8E6] to-[#8B4DFF] mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl cursor-pointer aspect-[4/5]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#00B8E6]/20 to-[#8B4DFF]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

              <img
                src={item.url}
                alt={item.caption}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C20] via-[#0B0C20]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20">
                <div className="w-12 h-1 bg-gradient-to-r from-[#00B8E6] to-[#8B4DFF] mb-2" />
                <p className="text-white text-lg font-light">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
