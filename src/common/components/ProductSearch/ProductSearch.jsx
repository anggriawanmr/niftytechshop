import queryString from 'query-string';

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Pagination } from './Pagination';
import { Results } from './Results';

export const ProductSearch = () => {
  const [products, setProducts] = useState([]);
  const [totalResults, setTotalResults] = useState(0);

  const pageSize = 3;
  const router = useRouter();

  const search = async () => {
    const { page } = queryString.parse(window.location.search);
    const response = await fetch(`/api/search`, {
      method: 'POST',
      body: JSON.stringify({
        page: parseInt(page || '1'),
      }),
    });
    const data = await response.json();
    console.log('Search data: ', data);
    setProducts(data.products);
    setTotalResults(data.total);
  };

  const handlePageClick = async (pageNumber) => {
    await router.push(
      `${router.query.slug.join('/')}?page=${pageNumber}`,
      null,
      {
        shallow: true,
      }
    );
    search();
  };

  useEffect(() => {
    search();
  }, []);

  return (
    <div>
      <Results products={products} />
      <Pagination
        onPageClick={handlePageClick}
        totalPages={Math.ceil(totalResults / pageSize)}
      />
    </div>
  );
};
