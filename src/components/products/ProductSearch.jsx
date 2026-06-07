// src/components/products/ProductSearch.jsx
import { useState } from 'react';
import { Search, X } from 'lucide-react';

const ProductSearch = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  const handleClear = () => {
    setQuery('');
    onSearch('');
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search products by name, category, or color..."
          className="w-full px-5 py-3 pl-12 pr-12 border border-gray-300 rounded-full focus:outline-none focus:border-[#FF9B50] focus:ring-2 focus:ring-[#FF9B50]/20"
        />
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        {query && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            <X size={20} />
          </button>
        )}
      </div>
      <button type="submit" className="hidden">Search</button>
    </form>
  );
};

export default ProductSearch;