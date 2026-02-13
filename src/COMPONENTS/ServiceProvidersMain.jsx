import React, { useState, useEffect } from 'react';
import { Search, Grid, List, ChevronRight } from 'lucide-react';
import serviceProvidersData from "../serviceProvidersData.json"
import ServiceProviderCarousel from './ServiceProviderCarousel';
import ServiceProviderCards from './ServiceProviderCards';

const ServiceProvidersMain = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState('grid'); // grid or list
  const [filteredCategories, setFilteredCategories] = useState([]);

  const categories = serviceProvidersData.categories;

  useEffect(() => {
    if (searchTerm) {
      const filtered = categories.filter(cat => 
        cat.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        cat.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredCategories(filtered);
    } else {
      setFilteredCategories(categories);
    }
  }, [searchTerm, categories]);

  // If a category is selected, show its details
  if (selectedCategory) {
    return (
      <div className="bg-gray-50 min-h-screen py-12 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Back button */}
          <button 
            onClick={() => setSelectedCategory(null)}
            className="flex items-center text-amber-600 hover:text-amber-700 mb-6 group"
          >
            <span className="text-xl mr-2 group-hover:-translate-x-1 transition-transform">←</span>
            Back to All Categories
          </button>

          {/* Category Header */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="flex items-center gap-4">
              <div className="bg-amber-100 w-16 h-16 rounded-2xl flex items-center justify-center text-3xl">
                {selectedCategory.icon}
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">{selectedCategory.category}</h1>
                <p className="text-gray-600 mt-1">{selectedCategory.description}</p>
              </div>
            </div>
          </div>

          {/* Hero Carousel */}
          <ServiceProviderCarousel providers={selectedCategory.providers} />

          {/* Service Provider Cards with Contact Details */}
          <ServiceProviderCards 
            providers={selectedCategory.providers} 
            category={selectedCategory.category}
          />
        </div>
      </div>
    );
  }

  // Show all categories grid
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            All Vendor Categories Welcome
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            No matter your specialty, there's a place for you on Planmate.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search categories..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              onClick={() => setSelectedCategory(category)}
              className="bg-white rounded-xl shadow-md p-6 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl group"
            >
              {/* Icon */}
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                {category.icon}
              </div>
              
              {/* Category Name */}
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {category.category}
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 text-sm mb-4">
                {category.description}
              </p>
              
              {/* Provider Count */}
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">
                  {category.providers.length} provider{category.providers.length !== 1 ? 's' : ''}
                </span>
                <span className="text-amber-500 text-sm font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  View vendors
                  <ChevronRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredCategories.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No categories found matching "{searchTerm}"</p>
          </div>
        )}

        {/* Table View (Alternative to match screenshot) */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8 hidden md:block">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">All Categories at a Glance</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Providers</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {categories.map((category) => (
                  <tr 
                    key={category.id} 
                    onClick={() => setSelectedCategory(category)}
                    className="hover:bg-gray-50 cursor-pointer transition-colors"
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      <span className="mr-2">{category.icon}</span>
                      {category.category}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {category.description}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {category.providers.length} providers
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceProvidersMain;