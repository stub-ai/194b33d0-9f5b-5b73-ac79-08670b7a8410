import React from 'react';
import SEO from '../components/SEO';

const OptimizedTemplate: React.FC = () => {
  const seoTitle = 'Your SEO Optimized Title';
  const seoDescription = 'Your SEO Optimized Description';

  return (
    <div>
      <h1>Optimized Etsy Product Template</h1>
      <SEO productName={seoTitle} productDescription={seoDescription} />
    </div>
  );
};

export default OptimizedTemplate;