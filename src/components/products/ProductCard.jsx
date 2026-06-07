// src/components/products/ProductCard.jsx
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Eye, Heart } from 'lucide-react';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0] || '#FF9B50');

  const handleBuyNow = () => {
    // Store product info for checkout
    const buyItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images?.[0],
      quantity: 1,
      color: selectedColor
    };
    sessionStorage.setItem('buyNowItem', JSON.stringify(buyItem));
    navigate('/checkout');
  };

  return (
    <div 
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image */}
      <div className="relative h-64 overflow-hidden bg-gray-100">
        <img 
          src={product.images?.[0] || 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f'} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
        />
        
        {product.is_new && (
          <span className="absolute top-4 left-4 bg-[#FF9B50] text-white px-3 py-1 rounded-full text-xs font-semibold z-10">
            NEW
          </span>
        )}

        <div className={`absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-3 transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <Link 
            to={`/products/${product.id}`}
            className="bg-white p-3 rounded-full hover:bg-[#FF9B50] hover:text-white transition"
          >
            <Eye size={20} />
          </Link>
          <button 
            onClick={handleBuyNow}
            className="bg-white p-3 rounded-full hover:bg-[#FF9B50] hover:text-white transition"
          >
            <ShoppingCart size={20} />
          </button>
          <button className="bg-white p-3 rounded-full hover:bg-[#FF9B50] hover:text-white transition">
            <Heart size={20} />
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <p className="text-sm text-gray-500 mb-1">{product.category}</p>
        
        <Link to={`/products/${product.id}`}>
          <h3 className="font-semibold text-lg text-[#1E2A5A] mb-2 hover:text-[#FF9B50] transition line-clamp-1">
            {product.name}
          </h3>
        </Link>

        {product.colors && product.colors.length > 0 && (
          <div className="flex gap-2 mb-3">
            {product.colors.slice(0, 4).map((color, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedColor(color)}
                className={`w-6 h-6 rounded-full border-2 transition hover:scale-110 ${
                  selectedColor === color ? 'border-[#1E2A5A] scale-110' : 'border-gray-300'
                }`}
                style={{ backgroundColor: color }}
              />
            ))}
            {product.colors.length > 4 && (
              <span className="text-xs text-gray-500">+{product.colors.length - 4}</span>
            )}
          </div>
        )}

        

        <div className="flex items-center gap-2 mb-3">
          <span className="text-2xl font-bold text-[#FF9B50]">₹{product.price}</span>
          {product.old_price && (
            <span className="text-gray-400 line-through">₹{product.old_price}</span>
          )}
        </div>

        <div className="flex items-center justify-between">
          <span className={`text-sm ${product.stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
            {product.stock > 0 ? `In Stock (${product.stock})` : 'Out of Stock'}
          </span>
          <button 
            onClick={handleBuyNow}
            disabled={product.stock === 0}
            className={`px-4 py-2 rounded-lg font-semibold transition ${
              product.stock > 0 
                ? 'bg-[#1E2A5A] text-white hover:bg-[#2C3E6A]' 
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;