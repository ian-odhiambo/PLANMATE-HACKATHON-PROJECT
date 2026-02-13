import React, { useState } from 'react';
import { Star, MapPin, Phone, Mail, MessageCircle, Users, Calendar, DollarSign, Wifi, Coffee, Car, Music } from 'lucide-react';

const VenueCards = ({ venues, category }) => {
  const [expandedVenue, setExpandedVenue] = useState(null);

  const getAmenityIcon = (amenity) => {
    const icons = {
      'Parking': <Car className="w-4 h-4" />,
      'WiFi': <Wifi className="w-4 h-4" />,
      'Catering': <Coffee className="w-4 h-4" />,
      'Sound System': <Music className="w-4 h-4" />
    };
    return icons[amenity] || <Calendar className="w-4 h-4" />;
  };

  const filteredVenues = venues.filter(venue => 
    category === 'All' || venue.category === category
  );

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        {category} Venues ({filteredVenues.length})
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredVenues.map((venue) => (
          <div 
            key={venue.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
          >
            {/* Venue Image */}
            <div className="relative h-48">
              <img 
                src={venue.images[0]} 
                alt={venue.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                {venue.rating} ★
              </div>
            </div>

            {/* Venue Details */}
            <div className="p-6">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold text-gray-900">{venue.name}</h3>
                <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full">
                  Verified
                </span>
              </div>

              <div className="flex items-center gap-2 text-gray-600 mb-2">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">{venue.location}</span>
              </div>

              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1 text-sm text-gray-600">
                  <Users className="w-4 h-4" />
                  <span>{venue.capacity}</span>
                </div>
                <div className="flex items-center gap-1 text-sm text-gray-600">
                  <DollarSign className="w-4 h-4" />
                  <span>{venue.priceRange}</span>
                </div>
              </div>

              {/* Owner Profile */}
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl mb-4">
                <img 
                  src={venue.owner.profileImage} 
                  alt={venue.owner.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-amber-200"
                />
                <div>
                  <p className="font-medium text-gray-900">{venue.owner.name}</p>
                  <p className="text-xs text-gray-500">Owner since {venue.owner.since}</p>
                </div>
              </div>

              {/* Amenities */}
              <div className="mb-4">
                <p className="text-sm font-medium text-gray-700 mb-2">Amenities:</p>
                <div className="flex flex-wrap gap-2">
                  {venue.amenities.slice(0, 3).map((amenity, idx) => (
                    <span key={idx} className="flex items-center gap-1 bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
                      {getAmenityIcon(amenity)}
                      {amenity}
                    </span>
                  ))}
                  {venue.amenities.length > 3 && (
                    <span className="text-xs text-gray-500">+{venue.amenities.length - 3} more</span>
                  )}
                </div>
              </div>

              {/* Expand/Collapse Button */}
              <button
                onClick={() => setExpandedVenue(expandedVenue === venue.id ? null : venue.id)}
                className="w-full text-amber-600 hover:text-amber-700 text-sm font-medium py-2 border-t border-gray-100"
              >
                {expandedVenue === venue.id ? 'Hide contact details ↑' : 'Show contact details ↓'}
              </button>

              {/* Contact Details (Expandable) */}
              {expandedVenue === venue.id && (
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-gray-600">
                      <Phone className="w-4 h-4 text-amber-500" />
                      <a href={`tel:${venue.owner.phone}`} className="text-sm hover:text-amber-600">
                        {venue.owner.phone}
                      </a>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <MessageCircle className="w-4 h-4 text-green-500" />
                      <a 
                        href={`https://wa.me/${venue.owner.whatsapp.replace(/\D/g, '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-green-600 hover:text-green-700 font-medium"
                      >
                        {venue.owner.whatsapp} (WhatsApp)
                      </a>
                    </div>
                    
                    <div className="flex items-center gap-3 text-gray-600">
                      <Mail className="w-4 h-4 text-amber-500" />
                      <a href={`mailto:${venue.owner.email}`} className="text-sm hover:text-amber-600">
                        {venue.owner.email}
                      </a>
                    </div>
                  </div>

                  <div className="mt-4 flex gap-2">
                    <a 
                      href={`https://wa.me/${venue.owner.whatsapp.replace(/\D/g, '')}?text=Hello%20${venue.owner.name.split(' ')[0]}%2C%20I'm%20interested%20in%20${venue.name}%20for%20a%20${category}%20event`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-green-500 hover:bg-green-600 text-white text-center py-2 rounded-lg text-sm font-medium transition-colors"
                    >
                      Book via WhatsApp
                    </a>
                    <button className="flex-1 bg-amber-500 hover:bg-amber-600 text-white py-2 rounded-lg text-sm font-medium transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {filteredVenues.length === 0 && (
        <div className="text-center py-12 bg-white rounded-2xl">
          <p className="text-gray-500">No venues found for {category} category</p>
        </div>
      )}
    </div>
  );
};

export default VenueCards;