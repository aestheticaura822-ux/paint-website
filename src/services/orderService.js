// frontend/src/services/orderService.js
import api from './api';

export const orderService = {
  // Get all orders (Admin only)
  getAll: async () => {
    const response = await api.get('/orders');
    return response.data;
  },

  // Create new order
  create: async (orderData) => {
    const response = await api.post('/orders', orderData);
    return response.data;
  },

  // Update order status (Admin only)
  updateStatus: async (id, status) => {
    const response = await api.put(`/orders/${id}/status`, { status });
    return response.data;
  }
};