export const Results = ({ products }) => {
  return (
    <div className="max-w-5xl mx-auto grid grid-cols-3 gap-5 mb-10">
      {products.map((product) => (
        <div key={product.databaseId}>{product.title}</div>
      ))}
    </div>
  );
};
