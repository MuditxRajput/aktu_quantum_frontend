import React from 'react';

const Shimmer = () => {
  const number = [1, 2, 3, 4, 5, 6];  // Adjusted the number of placeholders to fit common grid layouts better

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 p-5 gap-4">
      {number.map((val, index) => (
        <div key={index} className="p-4">
          <div className="h-full border-2 border-gray-200 rounded-lg overflow-hidden shadow-lg animate-pulse">
            <div className="lg:h-48 bg-gray-300 md:h-36 w-full object-cover object-center"></div>
            <div className="p-6">
              <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
              <div className="h-6 bg-gray-400 rounded w-1/2 mb-4"></div>
              <div className="h-3 bg-gray-300 rounded w-full mb-2"></div>
              <div className="h-3 bg-gray-300 rounded w-2/3 mb-2"></div>
              <div className="h-3 bg-gray-300 rounded w-1/2 mb-2"></div>
              <div className="flex justify-between">
                <div className="h-4 bg-indigo-300 rounded w-24 mt-2"></div>
                <div className="h-4 bg-indigo-300 rounded w-16 mt-2"></div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
