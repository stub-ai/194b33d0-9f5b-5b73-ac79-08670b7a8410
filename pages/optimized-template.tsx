import React from 'react';
import SEO from '../components/SEO';

interface OptimizedTemplateProps {
  seoTitle: string;
  seoDescription: string;
}

const OptimizedTemplate: React.FC<OptimizedTemplateProps> = ({ seoTitle, seoDescription }) => {
  return (
    <div>
      <h1>Optimized Etsy Product Template</h1>
      <SEO productName={seoTitle} productDescription={seoDescription} />
    </div>
  );
};

export async function getStaticProps() {
  const seoTitle = 'Your SEO Optimized Title';
  const seoDescription = 'Your SEO Optimized Description';

  return {
    props: {
      seoTitle,
      seoDescription,
    },
  };
}

export default OptimizedTemplate;