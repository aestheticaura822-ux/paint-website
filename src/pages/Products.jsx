// frontend/src/pages/Products.jsx
import { useState, useEffect } from 'react';
import ProductGrid from '../components/products/ProductGrid';
import ProductFilter from '../components/products/ProductFilter';
import ProductSearch from '../components/products/ProductSearch';
import { productService } from '../services/productService';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    category: 'All',
    finish: 'All',
    priceRange: { label: 'All', min: 0, max: Infinity },
    sort: 'newest',
    search: ''
  });

  // REAL API CALL - Backend se products fetch karo
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const data = await productService.getAll();
        console.log('Products from API:', data);
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const handleFilterChange = (key, value) => {
    if (key === 'clear') {
      setFilters({
        category: 'All',
        finish: 'All',
        priceRange: { label: 'All', min: 0, max: Infinity },
        sort: 'newest',
        search: ''
      });
    } else {
      setFilters({ ...filters, [key]: value });
    }
  };

  // Filter products
  let filteredProducts = products.filter(product => {
    if (filters.category !== 'All' && product.category !== filters.category) return false;
    if (filters.finish !== 'All' && product.finish !== filters.finish) return false;
    if (product.price < filters.priceRange.min || product.price > filters.priceRange.max) return false;
    if (filters.search && !product.name.toLowerCase().includes(filters.search.toLowerCase())) return false;
    return true;
  });

  // Sort products
  switch (filters.sort) {
    case 'price-low':
      filteredProducts.sort((a, b) => a.price - b.price);
      break;
    case 'price-high':
      filteredProducts.sort((a, b) => b.price - a.price);
      break;
    default:
      filteredProducts.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold text-[#1E2A5A] text-center mb-8">
        Our Products
      </h1>

      <ProductSearch onSearch={(query) => handleFilterChange('search', query)} />

      <div className="flex flex-col lg:flex-row gap-8 mt-8">
        <div className="lg:w-1/4">
          <ProductFilter filters={filters} onFilterChange={handleFilterChange} />
        </div>
        <div className="lg:w-3/4">
          <ProductGrid products={filteredProducts} loading={loading} />
        </div>
      </div>
    </div>
  );
};

export default Products;