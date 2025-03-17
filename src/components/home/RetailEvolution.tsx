import React from 'react';
import Image from 'next/image';

const RetailEvolution = () => {
  // Market size data for graph
  const marketSizeData = [
    { year: 2024, value: 1.2, label: "$1.2 Trillion" },
    { year: 2032, value: 2.2, label: "$2.2 Trillion" }
  ];
  
  // Traditional retail market share data
  const retailShareData = { 
    traditional: 89, 
    modern: 11
  };

  return (
    <section className="bg-gradient-to-b from-red-50 to-green-red py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-red-600 text-center mb-12">
          India's Retail Evolution
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {/* Market size graph */}
          <div className="bg-white rounded-lg shadow-md p-6 transition-all hover:shadow-lg transform hover:-translate-y-1">
            <h3 className="text-red-600 font-medium mb-6 text-center">Market Size Growth</h3>
            
            <div className="h-64 flex items-end justify-center gap-16 mb-8">
              {marketSizeData.map((item) => (
                <div key={item.year} className="flex flex-col items-center relative">
                  <div className="absolute -top-10 w-full text-center">
                    <span className="font-bold text-lg">{item.label}</span>
                  </div>
                  <div 
                    className={`w-20 rounded-t-lg ${item.year === 2023 ? 'bg-gray-200 h-32' : 'bg-green-500 h-56'}`}
                  ></div>
                  <div className="text-sm font-medium mt-2">{item.year}</div>
                </div>
              ))}
            </div>
            
            <div className="text-center text-gray-600 mt-4">
              <p className="text-lg font-medium">Projected CAGR: 9.1%</p>
            </div>
          </div>
          
          {/* Market share pie chart */}
          <div className="bg-white rounded-lg shadow-md p-6 transition-all hover:shadow-lg transform hover:-translate-y-1">
            <h3 className="text-red-600 font-medium mb-6 text-center">Retail Market Share</h3>
            
            <div className="flex justify-center items-center mb-8">
              <div className="relative w-48 h-48">
                {/* Pie chart implementation with pure CSS */}
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  {/* Traditional retail slice (92%) */}
                  <circle cx="50" cy="50" r="50" fill="#10B981" />
                  
                  {/* Modern retail slice (8%) */}
                  <path 
                    d="M50,50 L50,0 A50,50 0 0,1 86.6,25 z" 
                    fill="#60A5FA"
                  />
                  
                  {/* Inner circle for donut effect */}
                  <circle cx="50" cy="50" r="25" fill="white" />
                </svg>
                
                {/* Text in center */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-2xl font-bold">{retailShareData.traditional}%</div>
                    <div className="text-xs text-gray-500">Traditional</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center gap-8 mt-4">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-green-500 rounded-sm mr-2"></div>
                <span>Traditional Retail</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-blue-400 rounded-sm mr-2"></div>
                <span>Modern Retail</span>
              </div>
            </div>
            
            <div className="text-center text-gray-600 mt-6">
              <p className="font-medium">Traditional retail faces increasing Q-commerce competition</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RetailEvolution;