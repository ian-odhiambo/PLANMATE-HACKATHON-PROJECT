import React, { useState } from 'react';

const CardGrid = ({ features, onCardClick }) => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {features.map((feature) => (
        <div
          key={feature.id}
          className="bg-white rounded-xl shadow-md p-6 transition-all duration-300 cursor-pointer relative
            hover:scale-105 hover:shadow-xl"
          onMouseEnter={() => setHoveredCard(feature.id)}
          onMouseLeave={() => setHoveredCard(null)}
          onClick={() => onCardClick(feature.slug)}
        >
          <span className="absolute top-4 right-4 bg-amber-100 text-amber-700 text-xs px-3 py-1 rounded-full">
            {feature.badge}
          </span>
          <div className="mb-3">{feature.icon}</div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            {feature.title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            {feature.shortDesc}
          </p>
          <div className={`mt-4 flex items-center text-amber-500 text-sm font-medium transition-opacity duration-300 
            ${hoveredCard === feature.id ? 'opacity-100' : 'opacity-0'}`}>
            <span>Click to learn more →</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardGrid;