import { useEffect } from 'react';

export const ProductSearch = () => {
  useEffect(() => {
    const search = async () => {
      const response = await fetch(`/api/search`);
      const data = await response.json();
      console.log('Search data: ', data);
    };
    search();
  }, []);

  return <div>Product Search</div>;
};
