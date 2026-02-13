import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const CelebrationCarousel = ({ category }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Mock images for the carousel (in real app, fetch from API based on category)
  const carouselImages = [
    {
      id: 1,
      url: `https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&h=500&fit=crop`,
      title: `${category.title} Venue 1`
    },
    {
      id: 2,
      url: `https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1200&h=500&fit=crop`,
      title: `${category.title} Venue 2`
    },
    {
      id: 3,
      url: `https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1200&h=500&fit=crop`,
      title: `${category.title} Venue 3`
    },
    {
      id: 4,
      url: `https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1200&h=500&fit=crop`,
      title: `${category.title} Venue 4`
    }
  ];

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => 
          prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
        );
      }, 4000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentImageIndex((prevIndex) => 
      prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative group rounded-2xl overflow-hidden shadow-2xl mb-8">
      <div className="relative h-[400px] md:h-[500px]">
        {carouselImages.map((image, index) => (
          <div
            key={image.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out
              ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
          >
            <img 
              src={image.url} 
              alt={image.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="text-2xl font-bold">{image.title}</h3>
              <p className="text-lg opacity-90">{category.title} Celebration</p>
            </div>
          </div>
        ))}

        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsAutoPlaying(false);
              setCurrentImageIndex(index);
            }}
            className={`transition-all duration-300 rounded-full 
              ${index === currentImageIndex 
                ? 'w-8 h-2 bg-amber-500' 
                : 'w-2 h-2 bg-white/70 hover:bg-white'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default CelebrationCarousel;