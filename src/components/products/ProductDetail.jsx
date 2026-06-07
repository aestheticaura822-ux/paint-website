// src/components/products/ProductDetail.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingCart, Heart, Share2, Truck, Shield, RotateCcw } from 'lucide-react';
import ColorSwatch from './ColorSwatch';
import toast from 'react-hot-toast';

const ProductDetail = ({ product }) => {
  const navigate = useNavigate();
  const [selectedColor, setSelectedColor] = useState(product?.colors?.[0]);
  const [quantity, setQuantity] = useState(1);

  if (!product) return null;

  const handleBuyNow = () => {
    // Store product info in sessionStorage for checkout
    const buyItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images?.[0],
      quantity: quantity,
      color: selectedColor
    };
    sessionStorage.setItem('buyNowItem', JSON.stringify(buyItem));
    navigate('/checkout');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="bg-gray-100 rounded-2xl overflow-hidden">
            <img 
              src={product.images?.[0]} 
              alt={product.name}
              className="w-full h-[500px] object-cover"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {product.images?.slice(0, 4).map((img, idx) => (
              <div key={idx} className="bg-gray-100 rounded-lg overflow-hidden cursor-pointer hover:ring-2 hover:ring-[#FF9B50]">
                <img src={img} alt={`${product.name} ${idx + 1}`} className="w-full h-24 object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <p className="text-[#FF9B50] font-semibold mb-2">{product.category}</p>
          <h1 className="text-3xl md:text-4xl font-bold text-[#1E2A5A] mb-4">{product.name}</h1>
          

          <div className="mb-6">
            <span className="text-4xl font-bold text-[#FF9B50]">₹{product.price}</span>
            {product.old_price && (
              <span className="text-gray-400 line-through ml-3">₹{product.old_price}</span>
            )}
          </div>

          <p className="text-gray-700 mb-6">{product.description}</p>

          {product.colors && product.colors.length > 0 && (
            <div className="mb-6">
              <h3 className="font-semibold text-[#1E2A5A] mb-3">Select Color</h3>
              <ColorSwatch colors={product.colors} selected={selectedColor} onSelect={setSelectedColor} />
            </div>
          )}

          <div className="mb-6">
            <h3 className="font-semibold text-[#1E2A5A] mb-3">Quantity</h3>
            <div className="flex items-center gap-3">
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-10 h-10 border border-gray-300 rounded-lg hover:bg-gray-100"
              >
                -
              </button>
              <span className="w-16 text-center text-lg font-semibold">{quantity}</span>
              <button 
                onClick={() => setQuantity(quantity + 1)}
                className="w-10 h-10 border border-gray-300 rounded-lg hover:bg-gray-100"
              >
                +
              </button>
              <span className="text-gray-500 ml-2">({product.stock} available)</span>
            </div>
          </div>

          <div className="flex gap-4 mb-8">
            <button 
              onClick={handleBuyNow}
              className="flex-1 bg-[#1E2A5A] text-white py-3 rounded-lg font-semibold hover:bg-[#2C3E6A] transition flex items-center justify-center gap-2"
            >
              <ShoppingCart size={20} /> Buy Now
            </button>
            <button className="w-12 h-12 border border-gray-300 rounded-lg hover:bg-gray-100 transition flex items-center justify-center">
              <Heart size={20} />
            </button>
            <button className="w-12 h-12 border border-gray-300 rounded-lg hover:bg-gray-100 transition flex items-center justify-center">
              <Share2 size={20} />
            </button>
          </div>

          <div className="border-t pt-6 space-y-3">
            <div className="flex items-center gap-3">
              <Truck className="text-[#FF9B50]" size={20} />
              <span className="text-gray-700">Free shipping on orders above ₹5000</span>
            </div>
            <div className="flex items-center gap-3">
              <Shield className="text-[#FF9B50]" size={20} />
              <span className="text-gray-700">10 year warranty on premium paints</span>
            </div>
            <div className="flex items-center gap-3">
              <RotateCcw className="text-[#FF9B50]" size={20} />
              <span className="text-gray-700">7 days return policy</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;