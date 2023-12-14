import React, { useEffect, useState } from 'react';
import SEO from '../components/SEO';

interface OptimizedTemplateProps {
  seoTitle: string;
  seoDescription: string;
}

const OptimizedTemplate: React.FC<OptimizedTemplateProps> = ({ seoTitle, seoDescription }) => {
  const [template, setTemplate] = useState(null);

  useEffect(() => {
    // Fetch the SEO optimized template from local storage
    const storedTemplate = localStorage.getItem('optimizedTemplate');
    if (storedTemplate) {
      setTemplate(JSON.parse(storedTemplate));
    }
  }, []);

  return (
    <div>
      <h1>Optimized Etsy Product Template</h1>
      <SEO productName={seoTitle} productDescription={seoDescription} />
      {template && (
        <div>
          <h2>Template:</h2>
          <pre>{JSON.stringify(template, null, 2)}</pre>
        </div>
      )}
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