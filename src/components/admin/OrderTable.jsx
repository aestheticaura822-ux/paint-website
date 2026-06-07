// frontend/src/components/admin/OrderTable.jsx
import { useState } from 'react';
import { Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

const OrderTable = ({ orders, onStatusUpdate, onViewOrder }) => {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');

  const statuses = ['all', 'pending', 'processing', 'shipped', 'delivered', 'cancelled'];

  const filteredOrders = orders?.filter(order => {
    // Safe check - agar order undefined hai to skip
    if (!order) return false;
    
    const customerName = order.customer_name || order.customerName || '';
    const orderNumber = order.order_number || order.orderNumber || '';
    
    const matchesSearch = customerName.toLowerCase().includes(search.toLowerCase()) ||
                          orderNumber.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === 'all' || order.status === filter;
    return matchesSearch && matchesFilter;
  }) || [];

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

  return (
    <div className="bg-white rounded-xl shadow-lg">
      <div className="p-4 border-b flex flex-col sm:flex-row gap-3 justify-between">
        <input
          type="text"
          placeholder="Search by order ID or customer..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 border rounded-lg focus:outline-none focus:border-[#FF9B50] sm:w-80"
        />
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="px-4 py-2 border rounded-lg focus:outline-none focus:border-[#FF9B50]"
        >
          {statuses.map(s => (
            <option key={s} value={s}>{s.toUpperCase()}</option>
          ))}
        </select>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr className="text-left text-gray-600 text-sm">
              <th className="p-4">Order ID</th>
              <th className="p-4">Customer</th>
              <th className="p-4">Date</th>
              <th className="p-4">Total</th>
              <th className="p-4">Status</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.map((order) => (
              <tr key={order.id} className="border-b hover:bg-gray-50">
                <td className="p-4 font-medium">#{order.order_number || order.orderNumber}</td>
                <td className="p-4">{order.customer_name || order.customerName}</td>
                <td className="p-4 text-sm">
                  {new Date(order.created_at || order.createdAt).toLocaleDateString()}
                </td>
                <td className="p-4 font-semibold">₹{order.total_amount || order.totalAmount}</td>
                <td className="p-4">
                  <select
                    value={order.status}
                    onChange={(e) => onStatusUpdate(order.id, e.target.value)}
                    className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(order.status)} border-0 focus:ring-1`}
                  >
                    <option value="pending">Pending</option>
                    <option value="processing">Processing</option>
                    <option value="shipped">Shipped</option>
                    <option value="delivered">Delivered</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                </td>
                <td className="p-4">
                  <button 
                    onClick={() => onViewOrder(order)} 
                    className="text-blue-500 hover:text-blue-700"
                  >
                    <Eye size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {filteredOrders.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          No orders found
        </div>
      )}
    </div>
  );
};

export default OrderTable;