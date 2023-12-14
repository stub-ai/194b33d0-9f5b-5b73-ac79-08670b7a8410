import React from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

const OptimizeButton: React.FC = () => {
  const router = useRouter();

  const handleOptimize = async () => {
    // Add your logic to create Etsy product template here
    const templateData = {
      // Add your template data here
    };

    try {
      const response = await axios.post('https://openapi.etsy.com/v2/listings', templateData, {
        params: {
          api_key: 'your_etsy_api_key',
        },
      });

      if (response.status === 200) {
        // After creating the template, store it in local storage
        localStorage.setItem('optimizedTemplate', JSON.stringify(response.data));

        // Then, redirect to the optimized template page
        router.push('/optimized-template');
      } else {
        console.error('Failed to create Etsy product template');
      }
    } catch (error) {
      console.error('Error creating Etsy product template:', error);
    }
  };

  return (
    <button 
      className="py-2 px-4 rounded text-white font-bold bg-blue-500 hover:bg-blue-700"
      onClick={handleOptimize}
    >
      Optimize
    </button>
  );
};

export default OptimizeButton;