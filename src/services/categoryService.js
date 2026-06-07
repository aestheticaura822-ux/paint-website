// frontend/src/services/categoryService.js
import api from './api';

export const categoryService = {
  // Get all categories
  getAll: async () => {
    const response = await api.get('/categories');
    return response.data;
  },

  // Get category by slug
  getBySlug: async (slug) => {
    const response = await api.get(`/categories/slug/${slug}`);
    return response.data;
  },

  // Get products by category
  getProductsByCategory: async (categoryName) => {
    const response = await api.get(`/products?category=${categoryName}`);
    return response.data;
  }
};