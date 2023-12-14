import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';

const EtsyIntegration: React.FC = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('https://openapi.etsy.com/v2/shops/{shop_id}/listings/active', {
        params: {
          api_key: 'your_etsy_api_key',
        },
      });

      setProducts(result.data.results);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Your Etsy Products</h2>
      {products.map((product: any) => (
        <div key={product.listing_id}>
          <h3>{product.title}</h3> {/* This is where the product name is fetched */}
          <Image src={product.MainImage.url_570xN} alt={product.title} width={570} height={570} />
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  );
};

export default EtsyIntegration;