// frontend/src/pages/admin/OrdersAdmin.jsx
import { useState, useEffect } from 'react';
import OrderTable from '../../components/admin/OrderTable';
import OrderDetail from '../../components/admin/OrderDetail';
import { orderService } from '../../services/orderService';
import toast from 'react-hot-toast';

const OrdersAdmin = () => {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    setLoading(true);
    try {
      const data = await orderService.getAll();
      setOrders(data);
    } catch (error) {
      console.error('Error fetching orders:', error);
      toast.error('Failed to load orders');
    } finally {
      setLoading(false);
    }
  };

  const updateOrderStatus = async (orderId, newStatus) => {
    try {
      const updated = await orderService.updateStatus(orderId, newStatus);
      setOrders(orders.map(order => 
        order.id === orderId ? updated : order
      ));
      toast.success(`Order status updated to ${newStatus}`);
    } catch (error) {
      console.error('Error updating order:', error);
      toast.error('Failed to update order status');
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="w-12 h-12 border-4 border-[#1E2A5A] border-t-[#FF9B50] rounded-full animate-spin"></div>
      </div>
    );
  }

  if (selectedOrder) {
    return (
      <div>
        <button
          onClick={() => setSelectedOrder(null)}
          className="mb-4 text-[#FF9B50] hover:underline"
        >
          ← Back to Orders
        </button>
        <OrderDetail 
          order={selectedOrder}
          onStatusUpdate={updateOrderStatus}
        />
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-[#1E2A5A] mb-6">Orders Management</h1>
      <OrderTable 
        orders={orders}
        onStatusUpdate={updateOrderStatus}
        onViewOrder={(order) => setSelectedOrder(order)}
      />
    </div>
  );
};

export default OrdersAdmin;