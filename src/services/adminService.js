// frontend/src/services/adminService.js
import api from './api';

export const adminService = {
  // Admin login
  login: async (email, password) => {
    const response = await api.post('/admin/login', { email, password });
    if (response.data.token) {
      localStorage.setItem('adminToken', response.data.token);
    }
    return response.data;
  },

  // Verify admin token
  verify: async () => {
    const response = await api.get('/admin/verify');
    return response.data;
  },

  // Admin logout
  logout: () => {
    localStorage.removeItem('adminToken');
  },

  // Get dashboard stats
  getDashboardStats: async () => {
    const response = await api.get('/dashboard/stats');
    return response.data;
  },

  // Get sales chart data
  getSalesChart: async () => {
    const response = await api.get('/dashboard/sales-chart');
    return response.data;
  },

  // Get recent orders
  getRecentOrders: async () => {
    const response = await api.get('/dashboard/recent-orders');
    return response.data;
  }
};