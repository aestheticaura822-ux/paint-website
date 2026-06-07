// frontend/src/pages/Checkout.jsx
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CheckoutForm from '../components/checkout/CheckoutForm';  // ← PATH CHANGE

import { orderService } from '../services/orderService';
import toast from 'react-hot-toast';

const Checkout = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [buyItem, setBuyItem] = useState(null);

  useEffect(() => {
    // Get item from sessionStorage (set by Buy Now button)
    const item = sessionStorage.getItem('buyNowItem');
    if (item) {
      setBuyItem(JSON.parse(item));
    } else {
      // No item found, go back to products
      navigate('/products');
    }
  }, [navigate]);

  if (!buyItem) {
    return (
      <div className="bg-gray-50 min-h-screen py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-500">No item selected. Please go back and select a product.</p>
          <button 
            onClick={() => navigate('/products')}
            className="mt-4 bg-[#1E2A5A] text-white px-6 py-2 rounded-lg"
          >
            Back to Products
          </button>
        </div>
      </div>
    );
  }

  const total = buyItem.price * buyItem.quantity;

  const handlePlaceOrder = async (orderData) => {
    setLoading(true);
    
    const orderPayload = {
      customerName: orderData.fullName,
      customerEmail: orderData.email,
      customerPhone: orderData.phone,
      products: [{
        productId: buyItem.id,
        name: buyItem.name,
        price: buyItem.price,
        quantity: buyItem.quantity,
        color: buyItem.color
      }],
      totalAmount: total,
      shippingAddress: {
        address: orderData.address,
        city: orderData.city,
        postalCode: orderData.postalCode
      },
      paymentMethod: orderData.paymentMethod
    };
const response = await orderService.create(orderPayload);

// Make sure response has products
if (response && !response.products) {
  response.products = orderPayload.products;
}

navigate('/order-confirmation', { state: { order: response } });
    try {
      const response = await orderService.create(orderPayload);
      // Clear session storage
      sessionStorage.removeItem('buyNowItem');
      toast.success('Order placed successfully!');
      navigate('/order-confirmation', { state: { order: response } });
    } catch (error) {
      console.error('Order error:', error);
      toast.error(error.response?.data?.message || 'Failed to place order');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[#1E2A5A]">Checkout</h1>
          <p className="text-gray-600 mt-2">Complete your order</p>
        </div>
        
        {/* Order Summary */}
        <div className="max-w-md mx-auto mb-6 bg-white rounded-xl shadow-lg p-4">
          <h2 className="font-semibold text-[#1E2A5A] mb-2">Order Summary</h2>
          <div className="flex gap-4">
            <img 
              src={buyItem.image} 
              alt={buyItem.name}
              className="w-20 h-20 object-cover rounded-lg"
            />
            <div className="flex-1">
              <p className="font-semibold">{buyItem.name}</p>
              <p className="text-gray-500 text-sm">Quantity: {buyItem.quantity}</p>
              {buyItem.color && (
                <div className="flex items-center gap-1 mt-1">
                  <span className="text-sm text-gray-500">Color:</span>
                  <div 
                    className="w-4 h-4 rounded-full border"
                    style={{ backgroundColor: buyItem.color }}
                  />
                </div>
              )}
              <p className="text-[#FF9B50] font-bold mt-1">₹{buyItem.price * buyItem.quantity}</p>
            </div>
          </div>
        </div>
        
        <CheckoutForm 
          cartItems={[buyItem]}
          total={total}
          onPlaceOrder={handlePlaceOrder}
          loading={loading}
        />
      </div>
    </div>
  );
};

export default Checkout;