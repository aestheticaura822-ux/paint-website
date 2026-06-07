// src/components/products/RelatedProducts.jsx
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';

const RelatedProducts = ({ products }) => {
  if (!products || products.length === 0) return null;

  return (
    <div className="mt-16">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-[#1E2A5A] mb-2">
          You May Also Like
        </h2>
        <div className="w-20 h-1 bg-[#FF9B50] mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.slice(0, 4).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;