import React from 'react';
import { useRouter } from 'next/router';

const OptimizeButton: React.FC = () => {
  const router = useRouter();

  const handleOptimize = () => {
    router.push('/optimized-template');
  };

  return (
    <button 
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" // Corrected order of Tailwind CSS classnames
      onClick={handleOptimize}
    >
      Optimize
    </button>
  );
};

export default OptimizeButton;