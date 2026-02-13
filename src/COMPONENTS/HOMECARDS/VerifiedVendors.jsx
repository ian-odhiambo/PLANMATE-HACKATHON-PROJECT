import React, { useState, useEffect } from 'react';
import { Shield, CheckCircle, Star, Users, Clock, Award } from 'lucide-react';
import { featuresData } from '../../featuresData';
import VendorCarousel from '../VendorCarousel';

const VerifiedVendors = ({ onBack }) => {
  const [loading, setLoading] = useState(true);
  const [vendorData, setVendorData] = useState(null);

  // Get current feature data
  const feature = featuresData.find(f => f.slug === 'verified-vendors');

  useEffect(() => {
    // Simulate API call to fetch vendor data
    const fetchVendorData = async () => {
      setLoading(true);
      try {
        // Simulate network request
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Mock data
        setVendorData({
          totalVendors: 500,
          verifiedToday: 12,
          categories: ['Caterers', 'Photographers', 'Venues', 'Decorators'],
          topRated: ['Elite Catering', 'DreamCapture Photos', 'Grand Venues'],
          verificationProcess: [
            'Business license verification',
            'Background check',
            'Portfolio review',
            'Customer feedback analysis'
          ]
        });
      } catch (error) {
        console.error('Error fetching vendor data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchVendorData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Shield className="w-16 h-16 text-amber-500 animate-pulse mx-auto mb-4" />
          <p className="text-gray-600">Loading verified vendors...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Back button */}
        <button 
          onClick={onBack}
          className="flex items-center text-amber-600 hover:text-amber-700 mb-8"
        >
          ← Back to Home
        </button>

        {/* ===== CAROUSEL ADDED HERE ===== */}
        <VendorCarousel />

        {/* Header */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-amber-100 p-3 rounded-xl">
              <Shield className="w-10 h-10 text-amber-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{feature.title}</h1>
              <p className="text-gray-600 mt-1">{feature.description}</p>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-md p-6">
            <Users className="w-8 h-8 text-amber-500 mb-2" />
            <div className="text-2xl font-bold text-gray-900">{vendorData.totalVendors}+</div>
            <div className="text-gray-600">Verified Vendors</div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6">
            <Clock className="w-8 h-8 text-amber-500 mb-2" />
            <div className="text-2xl font-bold text-gray-900">{vendorData.verifiedToday}</div>
            <div className="text-gray-600">Verified Today</div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6">
            <Award className="w-8 h-8 text-amber-500 mb-2" />
            <div className="text-2xl font-bold text-gray-900">100%</div>
            <div className="text-gray-600">Verified Guarantee</div>
          </div>
        </div>

        {/* Rest of your code remains exactly the same... */}
        {/* Verification Process */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Our Verification Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {vendorData.verificationProcess.map((step, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">{step}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Vendor Categories */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Vendor Categories</h2>
          <div className="flex flex-wrap gap-3">
            {vendorData.categories.map((category, index) => (
              <span key={index} className="bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm">
                {category}
              </span>
            ))}
          </div>
          
          <div className="mt-6 pt-6 border-t border-gray-100">
            <h3 className="font-medium text-gray-900 mb-3">Top Rated Vendors</h3>
            <div className="space-y-2">
              {vendorData.topRated.map((vendor, index) => (
                <div key={index} className="flex items-center gap-2 text-gray-700">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  {vendor}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifiedVendors;