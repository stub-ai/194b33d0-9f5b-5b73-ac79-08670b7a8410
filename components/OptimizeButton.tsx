import React from 'react';

const OptimizeButton: React.FC = () => {
  const handleOptimize = () => {
    // Here you can add the logic for creating the Etsy product template
    console.log('Optimize button clicked');
  };

  return (
    <button 
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={handleOptimize}
    >
      Optimize
    </button>
  );
};

export default OptimizeButton;