// src/pages/CategoryProducts.jsx
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductGrid from '../components/products/ProductGrid';

const CategoryProducts = () => {
  const { slug } = useParams();
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      // Simulate API call
      setTimeout(() => {
        const categoryMap = {
          'wall-paints': { name: 'Wall Paints', products: [
            { id: 1, name: 'Premium Matte Wall Paint', price: 2499, image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f', category: 'Wall Paints' },
            { id: 2, name: 'Luxury Silk Emulsion', price: 3499, image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828', category: 'Wall Paints' },
          ]},
          'wood-finishes': { name: 'Wood Finishes', products: [] },
          'metal-paints': { name: 'Metal Paints', products: [] },
          'exterior-paints': { name: 'Exterior Paints', products: [] },
        };
        const data = categoryMap[slug] || { name: 'Products', products: [] };
        setCategory(data);
        setProducts(data.products);
        setLoading(false);
      }, 500);
    };
    fetchProducts();
  }, [slug]);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#1E2A5A]">{category?.name}</h1>
        <p className="text-gray-600 mt-2">Browse our collection of {category?.name?.toLowerCase()}</p>
      </div>
      <ProductGrid products={products} loading={loading} />
    </div>
  );
};

export default CategoryProducts;