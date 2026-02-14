import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const ServiceProviderCarousel = ({ providers }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [loadedImages, setLoadedImages] = useState(new Set());
  const [failedImages, setFailedImages] = useState(new Set());

  // Preload images on component mount
  useEffect(() => {
    if (!providers || providers.length === 0) return;

    providers.forEach((provider) => {
      if (!provider.image) {
        console.warn(`No image URL for provider: ${provider.name}`);
        return;
      }

      const img = new Image();
      img.onload = () => {
        console.log(`✅ Image loaded successfully: ${provider.name}`);
        setLoadedImages(prev => new Set([...prev, provider.id]));
      };
      img.onerror = () => {
        console.error(`❌ Image failed to load: ${provider.image}`);
        setFailedImages(prev => new Set([...prev, provider.id]));
      };
      img.src = provider.image;
    });
  }, [providers]);

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

  const handleImageLoad = (providerId) => {
    setLoadedImages(prev => new Set([...prev, providerId]));
  };

  const handleImageError = (providerId) => {
    console.warn(`❌ Image failed to load for provider ID: ${providerId}`);
    setFailedImages(prev => new Set([...prev, providerId]));
  };

  if (!providers || providers.length === 0) {
    return null;
  }

  const currentProvider = providers[currentIndex];
  const imageUrl = currentProvider?.image;
  const isImageAvailable = imageUrl && !failedImages.has(currentProvider.id) && loadedImages.has(currentProvider.id);

  console.log(`Current Provider: ${currentProvider.name}, Image Loaded: ${isImageAvailable}, URL: ${imageUrl}`);

  return (
    <div className="mb-8 relative group">
      <div className="relative h-[300px] md:h-[350px] rounded-2xl overflow-hidden shadow-xl bg-gray-200">
        {/* Preload all images off-screen to detect loading/errors */}
        {providers.map((provider) => (
          <img
            key={`preload-${provider.id}`}
            src={provider.image}
            alt=""
            style={{ display: 'none' }}
            onLoad={() => {
              console.log(`✅ Image loaded for provider: ${provider.name}`);
              handleImageLoad(provider.id);
            }}
            onError={() => handleImageError(provider.id)}
          />
        ))}

        {/* Current Provider Image */}
        {currentProvider && (
          <div className="relative h-full w-full">
            {isImageAvailable ? (
              <img 
                src={imageUrl}
                alt={currentProvider.name}
                className="w-full h-full object-cover transition-all duration-500"
                onError={() => handleImageError(currentProvider.id)}
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex flex-col items-center justify-center">
                <span className="text-gray-600 text-lg font-semibold">Loading image...</span>
                <span className="text-gray-500 text-sm mt-2">({currentProvider.name})</span>
              </div>
            )}
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            {/* Text Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-2 drop-shadow-lg text-center">
                {currentProvider.name}
              </h2>
              <div className="flex items-center gap-2 mb-3">
                <div className="flex items-center gap-1 bg-amber-500 px-3 py-1 rounded-full">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="font-semibold">{currentProvider.rating}</span>
                </div>
                <span className="bg-black bg-opacity-40 px-3 py-1 rounded-full text-sm">
                  {currentProvider.yearsExperience}+ years
                </span>
              </div>
              <p className="text-lg mb-2 drop-shadow-md">{currentProvider.location}</p>
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm backdrop-blur-sm">
                {currentProvider.priceRange}
              </span>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 text-gray-800 p-2 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100"
          aria-label="Previous provider"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 text-gray-800 p-2 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100"
          aria-label="Next provider"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Dot Indicators */}
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
            aria-label={`Go to provider ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ServiceProviderCarousel;