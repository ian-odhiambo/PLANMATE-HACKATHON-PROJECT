import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import celebrationCategories from "../celebrationCategories.json"
import howItWorks from '../howItWorks.json';
import venuesData from '../venuesData.json';
import CelebrationCarousel from './CelebrationCarousel';
import VenueCards from './VenuCards';
import CreateEventForm from './CreateEventForm';
import ManageDashboard from './ManageDashboard';

const PlanmateEventsMain = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedHowItWorks, setSelectedHowItWorks] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSelectedHowItWorks(null);
  };

  const handleHowItWorksClick = (item) => {
    setSelectedHowItWorks(item);
    setSelectedCategory(null);
  };

  const handleBack = () => {
    setSelectedCategory(null);
    setSelectedHowItWorks(null);
  };

  // Render based on selection
  if (selectedHowItWorks) {
    switch(selectedHowItWorks.slug) {
      case 'create-event':
        return (
          <div className="bg-gray-50 min-h-screen py-12 px-6">
            <div className="max-w-4xl mx-auto">
              <button 
                onClick={handleBack}
                className="flex items-center text-amber-600 hover:text-amber-700 mb-6 group"
              >
                <span className="text-xl mr-2 group-hover:-translate-x-1 transition-transform">←</span>
                Back to How It Works
              </button>
              
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-8 rounded-2xl mb-8">
                <h1 className="text-3xl font-bold mb-2">{selectedHowItWorks.title}</h1>
                <p className="text-lg opacity-90">{selectedHowItWorks.description}</p>
              </div>
              
              <CreateEventForm onBack={handleBack} />
            </div>
          </div>
        );
      
      case 'browse-vendors':
        return (
          <div className="bg-gray-50 min-h-screen py-12 px-6">
            <div className="max-w-7xl mx-auto">
              <button 
                onClick={handleBack}
                className="flex items-center text-amber-600 hover:text-amber-700 mb-6 group"
              >
                <span className="text-xl mr-2 group-hover:-translate-x-1 transition-transform">←</span>
                Back to How It Works
              </button>
              
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-8 rounded-2xl mb-8">
                <h1 className="text-3xl font-bold mb-2">Browse & Compare Vendors</h1>
                <p className="text-lg opacity-90">Explore our curated selection of verified vendors</p>
              </div>
              
              {/* Show celebration categories again but with different context */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
                {celebrationCategories.map(cat => (
                  <div
                    key={cat.id}
                    onClick={() => handleCategoryClick(cat)}
                    className="bg-white rounded-xl shadow p-4 text-center cursor-pointer hover:shadow-lg transition-all hover:-translate-y-1"
                  >
                    <div className="text-3xl mb-2">{cat.icon}</div>
                    <h3 className="font-semibold text-gray-900 text-sm">{cat.title}</h3>
                  </div>
                ))}
              </div>
              
              <VenueCards venues={venuesData} category="All" />
            </div>
          </div>
        );
      
      case 'book-favorites':
        return (
          <div className="bg-gray-50 min-h-screen py-12 px-6">
            <div className="max-w-7xl mx-auto">
              <button 
                onClick={handleBack}
                className="flex items-center text-amber-600 hover:text-amber-700 mb-6 group"
              >
                <span className="text-xl mr-2 group-hover:-translate-x-1 transition-transform">←</span>
                Back to How It Works
              </button>
              
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white p-8 rounded-2xl mb-8">
                <h1 className="text-3xl font-bold mb-2">Book Your Favorites</h1>
                <p className="text-lg opacity-90">Chat with vendors, get quotes, and book the ones that match your vision</p>
              </div>
              
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Your Shortlisted Vendors</h2>
                
                <div className="space-y-4">
                  {venuesData.slice(0, 3).map(venue => (
                    <div key={venue.id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                      <img src={venue.images[0]} alt={venue.name} className="w-20 h-20 rounded-lg object-cover" />
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">{venue.name}</h3>
                        <p className="text-sm text-gray-600">{venue.location}</p>
                        <p className="text-sm font-medium text-gray-900 mt-1">{venue.priceRange}</p>
                      </div>
                      <div className="flex gap-2">
                        <a 
                          href={`https://wa.me/${venue.owner.whatsapp.replace(/\D/g, '')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm"
                        >
                          WhatsApp
                        </a>
                        <button className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg text-sm">
                          Book Now
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'manage-everything':
        return (
          <div className="bg-gray-50 min-h-screen py-12 px-6">
            <div className="max-w-7xl mx-auto">
              <button 
                onClick={handleBack}
                className="flex items-center text-amber-600 hover:text-amber-700 mb-6 group"
              >
                <span className="text-xl mr-2 group-hover:-translate-x-1 transition-transform">←</span>
                Back to How It Works
              </button>
              
              <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-8 rounded-2xl mb-8">
                <h1 className="text-3xl font-bold mb-2">Manage Everything</h1>
                <p className="text-lg opacity-90">Track bookings, payments, and communicate with vendors in one place</p>
              </div>
              
              <ManageDashboard onBack={handleBack} />
            </div>
          </div>
        );
      
      default:
        return null;
    }
  }

  if (selectedCategory) {
    return (
      <div className="bg-gray-50 min-h-screen py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <button 
            onClick={handleBack}
            className="flex items-center text-amber-600 hover:text-amber-700 mb-6 group"
          >
            <span className="text-xl mr-2 group-hover:-translate-x-1 transition-transform">←</span>
            Back to Categories
          </button>

          {/* Category Header */}
          <div className={`bg-gradient-to-r ${selectedCategory.color} text-white p-8 rounded-2xl mb-8`}>
            <div className="flex items-center gap-4">
              <span className="text-5xl">{selectedCategory.icon}</span>
              <div>
                <h1 className="text-3xl font-bold mb-2">{selectedCategory.title}</h1>
                <p className="text-lg opacity-90">{selectedCategory.description}</p>
              </div>
            </div>
          </div>

          {/* Carousel */}
          <CelebrationCarousel category={selectedCategory} />

          {/* Venue Cards */}
          <VenueCards venues={venuesData} category={selectedCategory.title} />
        </div>
      </div>
    );
  }

  // Default view: Show both sections
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section 1: What are you celebrating? */}
        <div className="mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center">
            What are you celebrating?
          </h1>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Whether it's a wedding, birthday, or corporate event, we have the vendors to make it special.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {celebrationCategories.map((category) => (
              <div
                key={category.id}
                onClick={() => handleCategoryClick(category)}
                onMouseEnter={() => setHoveredCard(category.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className="bg-white rounded-xl shadow-md p-6 cursor-pointer transition-all duration-300 relative overflow-hidden group"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity`}></div>
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {category.title}
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  {category.description}
                </p>
                <div className={`flex items-center text-amber-500 text-sm font-medium transition-opacity duration-300 
                  ${hoveredCard === category.id ? 'opacity-100' : 'opacity-0'}`}>
                  <span>View venues →</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: How It Works */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">How It Works</h2>
          <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Four simple steps to plan your perfect event
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.map((item) => (
              <div
                key={item.id}
                onClick={() => handleHowItWorksClick(item)}
                onMouseEnter={() => setHoveredCard(`how-${item.id}`)}
                onMouseLeave={() => setHoveredCard(null)}
                className="bg-white rounded-2xl shadow-lg p-6 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl relative overflow-hidden group"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity`}></div>
                
                <span className="text-5xl font-bold text-amber-200 mb-4 block">
                  {item.step}
                </span>
                
                <div className="text-4xl mb-4">{item.icon}</div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4">
                  {item.description}
                </p>
                
                <div className={`flex items-center text-amber-500 text-sm font-medium transition-opacity duration-300 
                  ${hoveredCard === `how-${item.id}` ? 'opacity-100' : 'opacity-0'}`}>
                  <span>Get started →</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanmateEventsMain;