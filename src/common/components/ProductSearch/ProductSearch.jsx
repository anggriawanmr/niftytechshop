import { useEffect, useState } from 'react';
import { Results } from './Results';

export const ProductSearch = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const search = async () => {
      const response = await fetch(`/api/search`);
      const data = await response.json();
      console.log('Search data: ', data);
      setProducts(data.products);
    };
    search();
  }, []);

  return (
    <div>
      <Results products={products} />
    </div>
  );
};
