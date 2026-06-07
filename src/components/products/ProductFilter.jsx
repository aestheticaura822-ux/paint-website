// src/components/products/ProductFilter.jsx
import { useState } from 'react';
import {  Filter, X } from 'lucide-react';

const ProductFilter = ({ filters, onFilterChange}) => {
  const [isOpen, setIsOpen] = useState(false);

  const categories = ['All', 'Wall Paints', 'Wood Finishes', 'Metal Paints', 'Exterior Paints'];
  const finishes = ['All', 'Matte', 'Gloss', 'Satin', 'Silk'];
  const priceRanges = [
    { label: 'All', min: 0, max: Infinity },
    { label: 'Under ₹1000', min: 0, max: 1000 },
    { label: '₹1000 - ₹2500', min: 1000, max: 2500 },
    { label: '₹2500 - ₹5000', min: 2500, max: 5000 },
    { label: 'Above ₹5000', min: 5000, max: Infinity },
  ];

  const FilterContent = () => (
    <div className="space-y-6">
      {/* Categories */}
      <div>
        <h3 className="font-semibold text-[#1E2A5A] mb-3">Categories</h3>
        <div className="space-y-2">
          {categories.map((cat) => (
            <label key={cat} className="flex items-center gap-2 cursor-pointer">
              <input 
                type="radio" 
                name="category" 
                value={cat}
                checked={filters.category === cat}
                onChange={(e) => onFilterChange('category', e.target.value)}
                className="text-[#FF9B50]"
              />
              <span className="text-gray-700">{cat}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Finishes */}
      <div>
        <h3 className="font-semibold text-[#1E2A5A] mb-3">Finish Type</h3>
        <div className="space-y-2">
          {finishes.map((finish) => (
            <label key={finish} className="flex items-center gap-2 cursor-pointer">
              <input 
                type="radio" 
                name="finish" 
                value={finish}
                checked={filters.finish === finish}
                onChange={(e) => onFilterChange('finish', e.target.value)}
              />
              <span className="text-gray-700">{finish}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h3 className="font-semibold text-[#1E2A5A] mb-3">Price Range</h3>
        <div className="space-y-2">
          {priceRanges.map((range) => (
            <label key={range.label} className="flex items-center gap-2 cursor-pointer">
              <input 
                type="radio" 
                name="price"
                checked={filters.priceRange === range.label}
                onChange={() => onFilterChange('priceRange', range)}
              />
              <span className="text-gray-700">{range.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Sort By */}
      <div>
        <h3 className="font-semibold text-[#1E2A5A] mb-3">Sort By</h3>
        <select 
          value={filters.sort}
          onChange={(e) => onFilterChange('sort', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#FF9B50]"
        >
          <option value="newest">Newest First</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="popular">Most Popular</option>
          <option value="rating">Highest Rated</option>
        </select>
      </div>

      {/* Clear Filters */}
      <button 
        onClick={() => onFilterChange('clear', null)}
        className="w-full bg-gray-100 text-gray-700 py-2 rounded-lg hover:bg-gray-200 transition"
      >
        Clear All Filters
      </button>
    </div>
  );

  return (
    <>
      {/* Mobile Filter Button */}
      <div className="lg:hidden mb-4">
        <button 
          onClick={() => setIsOpen(true)}
          className="w-full bg-[#1E2A5A] text-white py-3 rounded-lg flex items-center justify-center gap-2"
        >
          <Filter size={20} /> Filters
        </button>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden lg:block bg-white rounded-lg shadow-lg p-6 sticky top-24">
        <FilterContent />
      </div>

      {/* Mobile Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setIsOpen(false)}></div>
          <div className="absolute right-0 top-0 h-full w-full max-w-sm bg-white shadow-xl p-6 overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-[#1E2A5A]">Filters</h2>
              <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-gray-100 rounded-lg">
                <X size={24} />
              </button>
            </div>
            <FilterContent />
          </div>
        </div>
      )}
    </>
  );
};

export default ProductFilter;