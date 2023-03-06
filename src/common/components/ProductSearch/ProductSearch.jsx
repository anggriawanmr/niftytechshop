import { useEffect, useState } from 'react';
import { Pagination } from './Pagination';
import { Results } from './Results';

export const ProductSearch = () => {
  const [products, setProducts] = useState([]);
  const [totalResults, setTotalResults] = useState(0);

  const pageSize = 3;

  useEffect(() => {
    const search = async () => {
      const response = await fetch(`/api/search`);
      const data = await response.json();
      console.log('Search data: ', data);
      setProducts(data.products);
      setTotalResults(data.total);
    };
    search();
  }, []);

  return (
    <div>
      <Results products={products} />
      <Pagination totalPages={Math.ceil(totalResults / pageSize)} />
    </div>
  );
};
