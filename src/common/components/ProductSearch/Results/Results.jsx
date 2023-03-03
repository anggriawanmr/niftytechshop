import ProductCard from './ProductCard/ProductCard';

export const Results = ({ products }) => {
  return (
    <div className="max-w-5xl mx-auto grid grid-cols-3 gap-5 mb-10">
      {products.map((product) => (
        <ProductCard
          key={product.databaseId}
          title={product.title}
          destination={product.uri}
          price={product.productFeatures.price}
          core={product.productFeatures.core}
          ram={product.productFeatures.ram}
          memory={product.productFeatures.memory}
          image={product.featuredImage?.node?.sourceUrl}
        />
      ))}
    </div>
  );
};
