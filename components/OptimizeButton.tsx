import React from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

interface TemplateData {
  productName: string;
  productDescription: string;
  seoTitle?: string;
  seoDescription?: string;
}

const OptimizeButton: React.FC = () => {
  const router = useRouter();

  const handleOptimize = async () => {
    // Define your template data here
    const templateData: TemplateData = {
      productName: 'Your Product Name',
      productDescription: 'Your Product Description',
    };

    // Generate SEO optimized title and description
    const seoTitle = `${templateData.productName} | Best Product on Etsy`;
    const seoDescription = `${templateData.productDescription.substring(0, 160)}...`;

    // Update the template data with the SEO optimized title and description
    templateData.seoTitle = seoTitle;
    templateData.seoDescription = seoDescription;

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
      className="bg-blue-500 hover:bg-blue-700 py-2 px-4 rounded text-white font-bold"
      onClick={handleOptimize}
    >
      Optimize
    </button>
  );
};

export default OptimizeButton;