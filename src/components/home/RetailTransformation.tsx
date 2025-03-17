import React from 'react';

// Custom SVG icons instead of lucide-react
const ShoppingBagIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <path d="M16 10a4 4 0 0 1-8 0"></path>
  </svg>
);

const ShoppingCartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="21" r="1"></circle>
    <circle cx="20" cy="21" r="1"></circle>
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
  </svg>
);

const ZapIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
  </svg>
);

const RetailTransformation = () => {
  const stages = [
    { 
      name: "Traditional Stores", 
      icon: <ShoppingBagIcon />,
      iconClass: "text-gray-700",
      description: "Brick-and-mortar retail experience"
    },
    { 
      name: "E-Commerce", 
      icon: <ShoppingCartIcon />,
      iconClass: "text-blue-600",
      description: "Online shopping with day/week delivery"
    },
    { 
      name: "Q-Commerce", 
      icon: <ZapIcon />,
      iconClass: "text-green-600",
      description: "Sub-hour deliveries reshaping consumer habits"
    }
  ];

  return (
    <section className="bg-gradient-to-r from-red-50 to-blue-50 py-12 overflow-hidden">
      <div className="container mx-auto px-4 overflow-x-auto">
        <h2 className="text-2xl font-bold text-center mb-12 text-red-700">
          Retail Transformation Timeline
        </h2>
        
        {/* Timeline Progress Bar - horizontal on all screen sizes */}
        <div className="relative max-w-4xl mx-auto mb-16 px-4 min-w-full sm:min-w-0">
          {/* Horizontal progress bar for all screen sizes */}
          <div className="absolute top-1/2 left-0 right-0 h-2 bg-gray-200 transform -translate-y-1/2"></div>
          <div className="absolute top-1/2 left-0 w-full h-2 bg-gradient-to-r from-gray-500 via-blue-500 to-green-500 transform -translate-y-1/2"></div>
          
          {/* Always horizontal layout with improved spacing for mobile */}
          <div className="relative flex flex-row justify-between">
            {stages.map((stage, index) => (
              <div key={index} className="flex flex-col items-center" style={{ minWidth: '80px' }}>
                <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center shadow-lg z-10 ${stage.iconClass}`}>
                  {stage.icon}
                </div>
                <p className="mt-4 font-bold text-xs sm:text-sm md:text-base text-center px-1">
                  {stage.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RetailTransformation;