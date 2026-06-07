// frontend/src/components/admin/RecentOrders.jsx
import { Link } from 'react-router-dom';

const RecentOrders = ({ orders }) => {
  const getStatusColor = (status) => {
    const colors = {
      pending: 'bg-yellow-100 text-yellow-800',
      processing: 'bg-blue-100 text-blue-800',
      shipped: 'bg-purple-100 text-purple-800',
      delivered: 'bg-green-100 text-green-800',
      cancelled: 'bg-red-100 text-red-800'
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  };

  const formatDate = (date) => {
    if (!date) return 'N/A';
    return new Date(date).toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  if (!orders || orders.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-4 md:p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-[#1E2A5A]">Recent Orders</h2>
          <Link to="/admin/orders" className="text-[#FF9B50] hover:underline text-sm">
            View All
          </Link>
        </div>
        <div className="text-center py-8 text-gray-500">
          No orders found
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-4 md:p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-[#1E2A5A]">Recent Orders</h2>
        <Link to="/admin/orders" className="text-[#FF9B50] hover:underline text-sm">
          View All
        </Link>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="border-b">
            <tr className="text-left text-gray-500 text-sm">
              <th className="pb-3">Order ID</th>
              <th className="pb-3">Customer</th>
              <th className="pb-3">Date</th>
              <th className="pb-3">Total</th>
              <th className="pb-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b hover:bg-gray-50">
                <td className="py-3 font-medium">
                  #{order.order_number || order.orderNumber}
                </td>
                <td className="py-3">{order.customer_name || order.customerName}</td>
                <td className="py-3 text-sm">
                  {formatDate(order.created_at || order.createdAt)}
                </td>
                <td className="py-3 font-semibold">
                  ₹{order.total_amount || order.totalAmount}
                </td>
                <td className="py-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(order.status)}`}>
                    {order.status}
                  </span>
                </td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentOrders;