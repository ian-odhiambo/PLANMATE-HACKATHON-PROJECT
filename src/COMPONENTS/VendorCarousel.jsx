import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import vendorImages from "../vendorCarouselData.json"

const VendorCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === vendorImages.length - 1 ? 0 : prevIndex + 1
        );
      }, 4000); // Change every 4 seconds
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? vendorImages.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => 
      prevIndex === vendorImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <div className="mb-8 relative group">
      {/* Carousel container */}
      <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-xl">
        {/* Images */}
        {vendorImages.map((vendor, index) => (
          <div
            key={vendor.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out
              ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
          >
            {/* Background image with overlay */}
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${vendor.image})` }}
            >
              {/* Dark overlay for better text readability */}
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            </div>
            
            {/* Content centered on image */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-2 drop-shadow-lg">
                {vendor.title}
              </h2>
              <p className="text-lg md:text-xl mb-2 drop-shadow-md">
                {vendor.category}
              </p>
              <div className="flex items-center gap-1 bg-black bg-opacity-30 px-3 py-1 rounded-full">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span className="font-semibold">{vendor.rating}</span>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 text-gray-800 p-2 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 text-gray-800 p-2 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Pause/Play indicator */}
        <div className="absolute top-4 right-4 bg-black bg-opacity-50 text-white text-xs px-3 py-1 rounded-full">
          {isAutoPlaying ? 'Auto-playing' : 'Paused'}
        </div>
      </div>

      {/* Dots indicator */}
      <div className="flex justify-center gap-2 mt-4">
        {vendorImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full 
              ${index === currentIndex 
                ? 'w-8 h-2 bg-amber-500' 
                : 'w-2 h-2 bg-gray-300 hover:bg-amber-300'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default VendorCarousel;