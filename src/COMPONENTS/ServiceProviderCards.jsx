import React, { useState } from 'react';
import { Star, MapPin, Phone, Mail, Instagram, Globe, Clock } from 'lucide-react';

const ServiceProviderCards = ({ providers, category }) => {
  const [expandedProvider, setExpandedProvider] = useState(null);

  if (!providers || providers.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">No service providers available in this category yet.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">
        {category} Providers ({providers.length})
      </h3>
      
      <div className="grid grid-cols-1 gap-6">
        {providers.map((provider) => (
          <div 
            key={provider.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all"
          >
            {/* Provider Image */}
            {provider.image && (
              <div className="w-full h-48 overflow-hidden bg-gray-200">
                <img 
                  src={provider.image} 
                  alt={provider.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="200"%3E%3Crect fill="%23e5e7eb" width="400" height="200"/%3E%3Ctext x="50%25" y="50%25" font-size="16" fill="%236b7280" text-anchor="middle" dy=".3em"%3EImage not available%3C/text%3E%3C/svg%3E';
                  }}
                />
              </div>
            )}

            {/* Provider Header */}
            <div className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-lg font-bold text-gray-900">{provider.name}</h4>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium">{provider.rating}</span>
                    </div>
                    <span className="text-gray-400">•</span>
                    <span className="text-sm text-gray-600">{provider.yearsExperience} years experience</span>
                    {provider.featured && (
                      <>
                        <span className="text-gray-400">•</span>
                        <span className="bg-amber-100 text-amber-700 text-xs px-2 py-1 rounded-full">
                          Featured
                        </span>
                      </>
                    )}
                  </div>
                </div>
                <span className="bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full">
                  {provider.pricing}
                </span>
              </div>

              {/* Location */}
              <div className="flex items-center gap-1 mt-3 text-gray-600">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">{provider.location}</span>
              </div>

              {/* Services */}
              <div className="mt-4">
                <p className="text-sm font-medium text-gray-700 mb-2">Services:</p>
                <div className="flex flex-wrap gap-2">
                  {provider.services.map((service, idx) => (
                    <span 
                      key={idx}
                      className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mt-4 p-3 bg-amber-50 rounded-lg">
                <span className="text-sm font-medium text-amber-800">Price Range:</span>
                <span className="ml-2 text-amber-900 font-semibold">{provider.priceRange}</span>
              </div>

              {/* Expand/Collapse Button */}
              <button
                onClick={() => setExpandedProvider(expandedProvider === provider.id ? null : provider.id)}
                className="mt-4 text-amber-600 hover:text-amber-700 text-sm font-medium flex items-center gap-1"
              >
                {expandedProvider === provider.id ? 'Hide contact details' : 'Show contact details'}
                <span className="text-lg">{expandedProvider === provider.id ? '↑' : '↓'}</span>
              </button>

              {/* Contact Details (Expandable) */}
              {expandedProvider === provider.id && (
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-sm font-medium text-gray-700 mb-3">Contact Information:</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {/* Phone */}
                    <div className="flex items-center gap-2 text-gray-600">
                      <Phone className="w-4 h-4 text-amber-500" />
                      <a href={`tel:${provider.contact.phone}`} className="text-sm hover:text-amber-600">
                        {provider.contact.phone}
                      </a>
                    </div>
                    
                    {/* WhatsApp - Highlighted */}
                    <div className="flex items-center gap-2">
                      <span className="bg-green-500 text-white p-1 rounded-full w-5 h-5 flex items-center justify-center text-xs">
                        WA
                      </span>
                      <a 
                        href={`https://wa.me/${provider.contact.whatsapp.replace(/\D/g, '')}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm text-green-600 hover:text-green-700 font-medium"
                      >
                        {provider.contact.whatsapp}
                      </a>
                    </div>
                    
                    {/* Email */}
                    {provider.contact.email && (
                      <div className="flex items-center gap-2 text-gray-600">
                        <Mail className="w-4 h-4 text-amber-500" />
                        <a href={`mailto:${provider.contact.email}`} className="text-sm hover:text-amber-600">
                          {provider.contact.email}
                        </a>
                      </div>
                    )}
                    
                    {/* Website */}
                    {provider.contact.website && (
                      <div className="flex items-center gap-2 text-gray-600">
                        <Globe className="w-4 h-4 text-amber-500" />
                        <a href={`https://${provider.contact.website}`} target="_blank" rel="noopener noreferrer" className="text-sm hover:text-amber-600">
                          {provider.contact.website}
                        </a>
                      </div>
                    )}
                    
                    {/* Instagram */}
                    {provider.contact.instagram && (
                      <div className="flex items-center gap-2 text-gray-600">
                        <Instagram className="w-4 h-4 text-pink-600" />
                        <a href={`https://instagram.com/${provider.contact.instagram.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="text-sm hover:text-pink-600">
                          {provider.contact.instagram}
                        </a>
                      </div>
                    )}
                  </div>
                  
                  {/* Book Now Button */}
                  <div className="mt-4">
                    <a 
                      href={`https://wa.me/${provider.contact.whatsapp.replace(/\D/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                    >
                      <span className="text-lg">📱</span>
                      Book via WhatsApp
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceProviderCards;