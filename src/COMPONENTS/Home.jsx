import React, { useState } from 'react';
import { featuresData } from '../featuresData'; 

import CardGrid from './HOMECARDS/CardGrid';
import VerifiedVendors from './HOMECARDS/VerifiedVendors';
import SmartInvite from './HOMECARDS/SmartInvite';

const Home = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (slug) => {
    setSelectedCard(slug);
  };

  const handleBackToHome = () => {
    setSelectedCard(null);
  };

  // Render  page if a card is selected
  if (selectedCard) {
    switch(selectedCard) {
      case 'verified-vendors':
        return <VerifiedVendors onBack={handleBackToHome} />;
      case 'transparent-pricing':
        return <TransparentPricing onBack={handleBackToHome} />;
      case 'real-reviews':
        return <RealReviews onBack={handleBackToHome} />;
      case 'smart-invite':
        return <SmartInvite onBack={handleBackToHome} />;
      case 'direct-communication':
        return <DirectCommunication onBack={handleBackToHome} />;
      case 'event-dashboard':
        return <EventDashboard onBack={handleBackToHome} />;
      default:
        return null;
    }
  }

  // Render homepage with cards
  return (
    <div className="bg-gray-50 min-h-screen py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            EVERTHING YOU NEED IN ONE PLACE
          </h1>
          <p className="text-xl text-gray-600">
            Planmate gives you all the tools to plan and execute the perfect event.
          </p>
        </div>
        
        <CardGrid features={featuresData} onCardClick={handleCardClick} />
      </div>
    </div>
  );
};

export default Home;