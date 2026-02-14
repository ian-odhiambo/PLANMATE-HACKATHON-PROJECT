import React, { useState } from 'react';
import { ArrowLeft, Sparkles, Users, Calendar, MapPin, Palette, FileText, Lightbulb } from 'lucide-react';

const CustomEvent = ({ onBack }) => {
  const [eventName, setEventName] = useState('');
  const [guestCount, setGuestCount] = useState('');
  const [eventDescription, setEventDescription] = useState('');

  const features = [
    {
      icon: <Palette className="w-6 h-6 text-purple-500" />,
      title: "Full Customization",
      desc: "Design every aspect of your event"
    },
    {
      icon: <Users className="w-6 h-6 text-purple-500" />,
      title: "Guest Management",
      desc: "Invite, track RSVPs, and manage guests"
    },
    {
      icon: <Calendar className="w-6 h-6 text-purple-500" />,
      title: "Timeline Control",
      desc: "Plan every detail with a custom timeline"
    },
    {
      icon: <MapPin className="w-6 h-6 text-purple-500" />,
      title: "Venue Selection",
      desc: "Find vendors that match your vision"
    }
  ];

  const steps = [
    "Tell us about your unique event idea",
    "Customize budget and guest count",
    "Browse vendors matching your theme",
    "Create the perfect experience"
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log({ eventName, guestCount, eventDescription });
  };

  return (
    <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 min-h-screen py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <button 
          onClick={onBack}
          className="flex items-center text-purple-600 hover:text-purple-700 mb-8 group font-medium"
        >
          <span className="text-xl mr-2 group-hover:-translate-x-1 transition-transform">←</span>
          Back to Categories
        </button>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-8 rounded-2xl mb-12">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-5xl">✨</span>
            <h1 className="text-4xl font-bold">Custom Event Planning</h1>
          </div>
          <p className="text-lg opacity-90 max-w-2xl">
            Your event is unique. Plan it your way with our fully customizable event planning tools. 
            No templates, just your vision brought to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Form Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Lightbulb className="w-6 h-6 text-purple-500" />
                Tell Us About Your Event
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Event Name
                  </label>
                  <input
                    type="text"
                    value={eventName}
                    onChange={(e) => setEventName(e.target.value)}
                    placeholder="e.g., Tech Conference, Product Launch, Family Reunion..."
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Expected Guest Count
                  </label>
                  <input
                    type="number"
                    value={guestCount}
                    onChange={(e) => setGuestCount(e.target.value)}
                    placeholder="How many guests do you expect?"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Event Description
                  </label>
                  <textarea
                    value={eventDescription}
                    onChange={(e) => setEventDescription(e.target.value)}
                    placeholder="Describe your event idea, theme, vibe, and any special requirements..."
                    rows="5"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
                >
                  Create My Custom Event
                </button>
              </form>
            </div>
          </div>

          {/* Features Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-900 mb-4">What You Get</h3>
            {features.map((feature, idx) => (
              <div key={idx} className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">{feature.icon}</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">{feature.title}</h4>
                    <p className="text-gray-600 text-xs">{feature.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Steps Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {steps.map((step, idx) => (
              <div key={idx} className="text-center">
                <div className="bg-gradient-to-br from-purple-500 to-indigo-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                  {idx + 1}
                </div>
                <p className="text-gray-700 font-medium">{step}</p>
                {idx < steps.length - 1 && (
                  <div className="hidden md:block absolute right-0 top-1/3 text-gray-300 text-2xl">→</div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-purple-500">
            <h3 className="font-bold text-gray-900 mb-2">🎯 Flexible Budget</h3>
            <p className="text-gray-600 text-sm">Set your budget and find vendors within your range</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-indigo-500">
            <h3 className="font-bold text-gray-900 mb-2">🤝 Expert Matching</h3>
            <p className="text-gray-600 text-sm">We match you with vendors perfect for your vision</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-purple-500">
            <h3 className="font-bold text-gray-900 mb-2">📅 Full Timeline</h3>
            <p className="text-gray-600 text-sm">Plan from concept to execution with complete control</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-indigo-500">
            <h3 className="font-bold text-gray-900 mb-2">💬 Direct Support</h3>
            <p className="text-gray-600 text-sm">Chat directly with vendors and our planning team</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomEvent;
