import React from 'react';

interface SEOProps {
  productName: string;
}

const SEO: React.FC<SEOProps> = ({ productName }) => {
  const seoTitle = `${productName} | Best Product on Etsy`;
  const seoDescription = `Buy ${productName}, the best product on Etsy. High quality, fast shipping, and great customer service.`;

  return (
    <div>
      <h2>SEO Optimized Title: {seoTitle}</h2>
      <p>SEO Optimized Description: {seoDescription}</p>
    </div>
  );
};

export default SEO;