// frontend/src/services/productService.js
import api from './api';

export const productService = {
  // Get all products from backend
  getAll: async () => {
    const response = await api.get('/products');
    return response.data;
  },

  // Get single product
  getById: async (id) => {
    const response = await api.get(`/products/${id}`);
    return response.data;
  },

  // Create product (Admin only)
  create: async (productData) => {
    console.log('📤 Sending to backend:', productData); // Debug
    const response = await api.post('/products', productData);
    console.log('✅ Response:', response.data); // Debug
    return response.data;
  },

  // Update product (Admin only)
  update: async (id, productData) => {
    const response = await api.put(`/products/${id}`, productData);
    return response.data;
  },

  // Delete product (Admin only)
  delete: async (id) => {
    const response = await api.delete(`/products/${id}`);
    return response.data;
  }
};