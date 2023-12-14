import React from 'react';
import { useRouter } from 'next/router';

const OptimizeButton: React.FC = () => {
  const router = useRouter();

  const handleOptimize = () => {
    // Add your logic to create Etsy product template here
    // After creating the template, redirect to the optimized template page
    router.push('/optimized-template');
  };

  return (
    <button 
      className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
      onClick={handleOptimize}
    >
      Optimize
    </button>
  );
};

export default OptimizeButton;