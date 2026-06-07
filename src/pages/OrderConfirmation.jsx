// frontend/src/pages/OrderConfirmation.jsx
import { useLocation, Link } from 'react-router-dom';
import { CheckCircle, Package, Home } from 'lucide-react';

const OrderConfirmation = () => {
  const location = useLocation();
  const order = location.state?.order;

  // Agar order nahi hai to redirect
  if (!order) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <p className="text-gray-500">No order found</p>
        <Link to="/" className="text-[#FF9B50] hover:underline">Go Home</Link>
      </div>
    );
  }

  // Safely get products array
  const products = order.products || [];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto text-center">
        <CheckCircle size={80} className="text-green-500 mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-[#1E2A5A] mb-2">Order Confirmed!</h1>
        <p className="text-gray-600 mb-2">Thank you for your purchase</p>
        <p className="text-gray-500 mb-6">Order #{order.order_number || order.orderNumber}</p>

        <div className="bg-white rounded-xl shadow-lg p-6 mb-6 text-left">
          <h2 className="text-lg font-semibold text-[#1E2A5A] mb-4">Order Summary</h2>
          
          <div className="space-y-3 mb-4">
            {products.map((item, idx) => (
              <div key={idx} className="flex justify-between">
                <span>{item.name} x {item.quantity}</span>
                <span>₹{item.price * item.quantity}</span>
              </div>
            ))}
            <div className="border-t pt-3">
              <div className="flex justify-between font-bold">
                <span>Total</span>
                <span className="text-[#FF9B50]">₹{order.total_amount || order.totalAmount}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-4 justify-center">
          <Link to="/products" className="bg-[#1E2A5A] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#2C3E6A] transition flex items-center gap-2">
            <Package size={18} /> Continue Shopping
          </Link>
          <Link to="/" className="border border-[#1E2A5A] text-[#1E2A5A] px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition flex items-center gap-2">
            <Home size={18} /> Go Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;