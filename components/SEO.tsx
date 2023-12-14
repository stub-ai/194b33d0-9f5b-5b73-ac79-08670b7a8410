import React from 'react';

interface SEOProps {
  productName: string;
  productDescription: string;
}

const SEO: React.FC<SEOProps> = ({ productName, productDescription }) => {
  const seoTitle = `${productName} | Best Product on Etsy`;
  const seoDescription = productDescription;

  return (
    <div>
      <h2>SEO Optimized Title: {seoTitle}</h2>
      <p>SEO Optimized Description: {seoDescription}</p>
    </div>
  );
};

export default SEO;