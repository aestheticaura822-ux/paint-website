// frontend/src/components/admin/OrderDetail.jsx
import { Printer, Truck, CheckCircle, XCircle } from 'lucide-react';

const OrderDetail = ({ order, onStatusUpdate }) => {
  if (!order) return null;

  // Safe data extraction with fallbacks
  const orderNumber = order.order_number || order.orderNumber || 'N/A';
  const customerName = order.customer_name || order.customerName || 'N/A';
  const customerEmail = order.customer_email || order.customerEmail || 'Not provided';
  const customerPhone = order.customer_phone || order.customerPhone || 'N/A';
  const totalAmount = order.total_amount || order.totalAmount || 0;
  const status = order.status || 'pending';
  const createdAt = order.created_at || order.createdAt;
  const updatedAt = order.updated_at || order.updatedAt;
  const products = order.products || [];
  const shippingAddress = order.shipping_address || order.shippingAddress || {};

  const getStatusIcon = (status) => {
    switch(status) {
      case 'delivered': return <CheckCircle className="text-green-500" />;
      case 'cancelled': return <XCircle className="text-red-500" />;
      case 'shipped': return <Truck className="text-purple-500" />;
      default: return null;
    }
  };

  const formatDate = (date) => {
    if (!date) return 'N/A';
    return new Date(date).toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  return (
    <div className="space-y-6">
      {/* Order Header */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-2xl font-bold text-[#1E2A5A]">Order #{orderNumber}</h1>
            <p className="text-gray-500">Placed on {formatDate(createdAt)}</p>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50">
              <Printer size={18} /> Print
            </button>
            <select
              value={status}
              onChange={(e) => onStatusUpdate(order.id, e.target.value)}
              className="px-4 py-2 border rounded-lg font-semibold"
            >
              <option value="pending">Pending</option>
              <option value="processing">Processing</option>
              <option value="shipped">Shipped</option>
              <option value="delivered">Delivered</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Customer Info */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-lg font-semibold text-[#1E2A5A] mb-4">Customer Information</h2>
          <div className="space-y-2">
            <p><strong>Name:</strong> {customerName}</p>
            <p><strong>Email:</strong> {customerEmail}</p>
            <p><strong>Phone:</strong> {customerPhone}</p>
          </div>
        </div>

        {/* Shipping Address */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-lg font-semibold text-[#1E2A5A] mb-4">Shipping Address</h2>
          <div className="space-y-2">
            <p>{shippingAddress.address || 'N/A'}</p>
            <p>{shippingAddress.city || ''} {shippingAddress.postalCode || ''}</p>
          </div>
        </div>

        {/* Order Status */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-lg font-semibold text-[#1E2A5A] mb-4">Order Status</h2>
          <div className="flex items-center gap-3">
            {getStatusIcon(status)}
            <span className="capitalize font-semibold">{status}</span>
          </div>
          <p className="text-sm text-gray-500 mt-2">
            Last updated: {formatDate(updatedAt)}
          </p>
        </div>
      </div>

      {/* Order Items */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-lg font-semibold text-[#1E2A5A] mb-4">Order Items</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b">
              <tr className="text-left text-gray-500">
                <th className="pb-3">Product</th>
                <th className="pb-3">Price</th>
                <th className="pb-3">Quantity</th>
                <th className="pb-3">Total</th>
              </tr>
            </thead>
            <tbody>
              {products.map((item, idx) => (
                <tr key={idx} className="border-b">
                  <td className="py-3">
                    <div>
                      <p className="font-medium">{item.name}</p>
                      {item.color && (
                        <div className="flex items-center gap-1 mt-1">
                          <span className="text-sm text-gray-500">Color:</span>
                          <div 
                            className="w-4 h-4 rounded-full border"
                            style={{ backgroundColor: item.color }}
                          />
                        </div>
                      )}
                    </div>
                  </td>
                  <td className="py-3">₹{item.price}</td>
                  <td className="py-3">{item.quantity}</td>
                  <td className="py-3 font-semibold">₹{item.price * item.quantity}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="3" className="py-3 text-right font-bold">Total:</td>
                <td className="py-3 text-xl font-bold text-[#FF9B50]">₹{totalAmount}</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;