import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const ServiceProviderCarousel = ({ providers }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    let interval;
    if (isAutoPlaying && providers?.length > 0) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === providers.length - 1 ? 0 : prevIndex + 1
        );
      }, 4000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, providers]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? providers.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => 
      prevIndex === providers.length - 1 ? 0 : prevIndex + 1
    );
  };

  if (!providers || providers.length === 0) {
    return null;
  }

  return (
    <div className="mb-8 relative group">
      <div className="relative h-[300px] md:h-[350px] rounded-2xl overflow-hidden shadow-xl">
        {providers.map((provider, index) => (
          <div
            key={provider.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out
              ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${provider.image})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            </div>
            
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-2 drop-shadow-lg text-center">
                {provider.name}
              </h2>
              <div className="flex items-center gap-2 mb-3">
                <div className="flex items-center gap-1 bg-amber-500 px-3 py-1 rounded-full">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="font-semibold">{provider.rating}</span>
                </div>
                <span className="bg-black bg-opacity-40 px-3 py-1 rounded-full text-sm">
                  {provider.yearsExperience}+ years
                </span>
              </div>
              <p className="text-lg mb-2 drop-shadow-md">{provider.location}</p>
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm backdrop-blur-sm">
                {provider.priceRange}
              </span>
            </div>
          </div>
        ))}

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
      </div>

      <div className="flex justify-center gap-2 mt-4">
        {providers.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsAutoPlaying(false);
              setCurrentIndex(index);
            }}
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

export default ServiceProviderCarousel;