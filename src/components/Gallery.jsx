import React from 'react';

const Gallery = () => {
  const images = [
    { src: 'https://placehold.co/600x400/72A0C1/white?text=Field+Work', title: 'Field Work' },
    { src: 'https://placehold.co/400x600/006D77/white?text=Conference', title: 'Conference' },
    { src: 'https://placehold.co/600x400/72A0C1/white?text=Advocacy', title: 'Advocacy' },
    { src: 'https://placehold.co/400x600/006D77/white?text=Research', title: 'Research' },
    { src: 'https://placehold.co/600x400/72A0C1/white?text=Community', title: 'Community' },
    { src: 'https://placehold.co/400x600/006D77/white?text=Youth', title: 'Youth Engagement' },
  ];

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-deep-teal)] mb-4">
            Gallery
          </h2>
          <div className="w-24 h-1 bg-[var(--color-air-blue)] mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Capturing moments from field work, conferences, and advocacy events.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <div 
              key={index} 
              className="relative group overflow-hidden rounded-xl shadow-lg aspect-video md:aspect-auto"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <img 
                src={img.src} 
                alt={img.title} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <h3 className="text-white text-xl font-bold">{img.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
