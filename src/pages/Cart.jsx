// src/pages/Cart.jsx
import { Link } from 'react-router-dom';
import { ShoppingBag} from 'lucide-react';
import CartItem from '../components/cart/CartItem';
import useCartStore from '../store/cartStore';

const Cart = () => {
  const { items, updateQuantity, removeItem, clearCart } = useCartStore();
  
  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 5000 ? 0 : 100;
  const total = subtotal + shipping;

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <ShoppingBag size={80} className="mx-auto text-gray-300 mb-4" />
        <h2 className="text-2xl font-bold text-[#1E2A5A] mb-2">Your Cart is Empty</h2>
        <p className="text-gray-500 mb-6">Looks like you haven't added any items yet</p>
        <Link 
          to="/products"
          className="inline-block bg-[#FF9B50] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#E88A3A] transition"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-[#1E2A5A] mb-8">Shopping Cart</h1>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Cart Items */}
        <div className="flex-1">
          <div className="bg-white rounded-xl shadow-lg p-6">
            {items.map((item) => (
              <CartItem 
                key={item.id}
                item={item}
                onUpdateQuantity={updateQuantity}
                onRemove={removeItem}
              />
            ))}
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:w-96">
          <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
            <h2 className="text-xl font-bold text-[#1E2A5A] mb-4">Order Summary</h2>
            
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{subtotal}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>{shipping === 0 ? 'Free' : `₹${shipping}`}</span>
              </div>
              {subtotal > 0 && subtotal < 5000 && (
                <p className="text-sm text-green-600">
                  Add ₹{5000 - subtotal} more for free shipping
                </p>
              )}
              <div className="border-t pt-3">
                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span className="text-[#FF9B50]">₹{total}</span>
                </div>
              </div>
            </div>

            <Link 
              to="/checkout"
              className="block w-full mt-6 bg-[#1E2A5A] text-white text-center py-3 rounded-lg font-semibold hover:bg-[#2C3E6A] transition"
            >
              Proceed to Checkout
            </Link>

            <button 
              onClick={clearCart}
              className="w-full mt-3 text-red-500 text-center py-2 hover:text-red-700 transition"
            >
              Clear Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;