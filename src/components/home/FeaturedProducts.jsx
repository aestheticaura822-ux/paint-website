// src/components/home/FeaturedProducts.jsx
import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Eye, Sparkles, TrendingUp, Star, ChevronRight } from 'lucide-react';

const FeaturedProducts = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Premium Matte Wall Paint",
      price: 2499,
      oldPrice: 3499,
      image: "https://images.unsplash.com/photo-1525909002-1b05e0c869d8?w=500&auto=format&fit=crop&q=60",
      colors: ["#FF5733", "#33FF57", "#3357FF", "#F1C40F"],
      isNew: true,
      rating: 4.8,
      reviews: 234,
      isTrending: true
    },
    {
      id: 2,
      name: "Luxury Silk Emulsion",
      price: 3499,
      oldPrice: 4999,
      image: "https://plus.unsplash.com/premium_photo-1726812075913-af89b672932b?w=500&auto=format&fit=crop&q=60",
      colors: ["#E74C3C", "#2ECC71", "#3498DB", "#9B59B6"],
      isNew: false,
      rating: 4.9,
      reviews: 189,
      isTrending: true
    },
    {
      id: 3,
      name: "Exterior Weatherproof Paint",
      price: 3999,
      oldPrice: 5499,
      image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828",
      colors: ["#1ABC9C", "#E67E22", "#7F8C8D", "#95A5A6"],
      isNew: true,
      rating: 4.7,
      reviews: 156,
      isTrending: false
    },
    {
      id: 4,
      name: "Eco-Friendly Distemper",
      price: 1899,
      oldPrice: 2499,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC01Dei7KcsxpCPEV6pmd3eoeAKks-7cXnww&s",
      colors: ["#FF6B6B", "#4ECDC4", "#45B7D1", "#96CEB4"],
      isNew: false,
      rating: 4.6,
      reviews: 98,
      isTrending: false
    }
  ]);

  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [selectedColor, setSelectedColor] = useState({});
  const [isVisible, setIsVisible] = useState({});
  const sectionRef = useRef(null);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.dataset.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll('.product-card');
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  // Buy Now Handler
  const handleBuyNow = (product) => {
    const selectedColorValue = selectedColor[product.id] || product.colors[0];
    
    const buyItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
      color: selectedColorValue
    };
    
    sessionStorage.setItem('buyNowItem', JSON.stringify(buyItem));
    navigate('/checkout');
  };

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#FF9B50] rounded-full blur-3xl opacity-10 animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#1E2A5A] rounded-full blur-3xl opacity-10 animate-pulse-slow animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-[#FF9B50]/5 to-transparent animate-shimmer"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header with Animation */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FF9B50]/10 to-[#1E2A5A]/10 rounded-full px-4 py-2 mb-4 backdrop-blur-sm">
            <Sparkles className="text-[#FF9B50] animate-pulse" size={18} />
            <span className="text-sm font-semibold text-[#1E2A5A]">Premium Collection</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#1E2A5A] to-[#FF9B50] bg-clip-text text-transparent mb-4">
            Featured Products
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Discover our most popular paints loved by thousands of customers
          </p>
          <div className="relative w-24 h-1 bg-gradient-to-r from-[#FF9B50] to-[#1E2A5A] mx-auto mt-6 rounded-full overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-shimmer"></div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              data-id={product.id}
              className={`product-card transform transition-all duration-700 ${
                isVisible[product.id] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 group relative">
                {/* Trending Badge Animation */}
                {product.isTrending && (
                  <div className="absolute top-4 right-4 z-20 animate-bounce-slow">
                    <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 shadow-lg">
                      <TrendingUp size={12} />
                      Trending
                    </div>
                  </div>
                )}

                {/* Product Image with 3D Tilt Effect */}
                <div 
                  className="relative h-72 overflow-hidden cursor-pointer"
                  style={{
                    transform: hoveredProduct === product.id ? 'scale(1.02)' : 'scale(1)',
                    transition: 'transform 0.3s ease'
                  }}
                >
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* New Badge with Animation */}
                  {product.isNew && (
                    <div className="absolute top-4 left-4 z-20 animate-pulse">
                      <div className="bg-gradient-to-r from-[#FF9B50] to-[#FF6B35] text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 shadow-lg">
                        <Sparkles size={12} />
                        NEW ARRIVAL
                      </div>
                    </div>
                  )}

                  {/* Hover Actions */}
                  <div className={`absolute inset-0 flex items-center justify-center gap-4 transition-all duration-500 ${
                    hoveredProduct === product.id ? 'opacity-100 backdrop-blur-sm' : 'opacity-0'
                  }`}>
                    <button 
                      className="bg-white p-3 rounded-full hover:bg-[#FF9B50] hover:text-white transition-all duration-300 transform hover:scale-110 shadow-xl"
                      onClick={() => navigate(`/products/${product.id}`)}
                    >
                      <Eye size={20} />
                    </button>
                    <button 
                      className="bg-white p-3 rounded-full hover:bg-[#FF9B50] hover:text-white transition-all duration-300 transform hover:scale-110 shadow-xl"
                      onClick={() => handleBuyNow(product)}
                    >
                      <ShoppingCart size={20} />
                    </button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-5 relative">
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={`${
                          i < Math.floor(product.rating)
                            ? 'text-yellow-400 fill-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                    <span className="text-xs text-gray-500 ml-1">({product.reviews})</span>
                  </div>

                  <h3 className="font-bold text-lg text-[#1E2A5A] mb-2 line-clamp-1 group-hover:text-[#FF9B50] transition-colors">
                    {product.name}
                  </h3>
                  
                  {/* Color Swatches with Animation */}
                  <div className="flex gap-2 mb-3">
                    {product.colors.map((color, idx) => (
                      <div 
                        key={idx}
                        className={`w-7 h-7 rounded-full border-2 cursor-pointer transition-all duration-300 transform hover:scale-125 ${
                          selectedColor[product.id] === color 
                            ? 'border-[#FF9B50] ring-2 ring-[#FF9B50]/50 scale-110' 
                            : 'border-gray-300 hover:border-[#FF9B50]'
                        }`}
                        style={{ backgroundColor: color }}
                        onClick={() => setSelectedColor({ ...selectedColor, [product.id]: color })}
                      >
                        {selectedColor[product.id] === color && (
                          <div className="w-full h-full rounded-full flex items-center justify-center">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Price with Animation */}
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-3xl font-bold bg-gradient-to-r from-[#FF9B50] to-[#FF6B35] bg-clip-text text-transparent">
                      ₹{product.price.toLocaleString()}
                    </span>
                    <span className="text-gray-400 line-through text-sm">₹{product.oldPrice.toLocaleString()}</span>
                    <span className="text-green-500 text-xs font-semibold ml-2">
                      {Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}% OFF
                    </span>
                  </div>

                  {/* Buy Now Button */}
                  <button 
                    className="relative w-full bg-gradient-to-r from-[#1E2A5A] to-[#2C3E6A] text-white py-3 rounded-xl hover:from-[#FF9B50] hover:to-[#FF6B35] transition-all duration-300 font-semibold overflow-hidden group overflow-hidden"
                    onClick={() => handleBuyNow(product)}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Buy Now
                      <ShoppingCart size={18} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#FF9B50] to-[#FF6B35] transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                  </button>

                  {/* Animated Border on Hover */}
                  <div className={`absolute inset-0 rounded-2xl pointer-events-none transition-all duration-500 ${
                    hoveredProduct === product.id ? 'border-2 border-[#FF9B50]' : ''
                  }`}></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button with Animation */}
        <div className="text-center mt-16">
          <Link 
            to="/products" 
            className="group inline-flex items-center gap-2 bg-gradient-to-r from-[#1E2A5A] to-[#2C3E6A] text-white px-8 py-3 rounded-full font-semibold hover:from-[#FF9B50] hover:to-[#FF6B35] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <span>View All Products</span>
            <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;