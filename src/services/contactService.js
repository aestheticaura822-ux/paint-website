// frontend/src/services/contactService.js
import api from './api';

export const contactService = {
  // Get all messages (Admin only)
  getAll: async () => {
    const response = await api.get('/contacts');
    return response.data;
  },

  // Create new message
  create: async (messageData) => {
    const response = await api.post('/contacts', messageData);
    return response.data;
  },

  // Mark message as read (Admin only)
  markAsRead: async (id) => {
    const response = await api.put(`/contacts/${id}/read`);
    return response.data;
  },

  // Delete message (Admin only)
  delete: async (id) => {
    const response = await api.delete(`/contacts/${id}`);
    return response.data;
  }
};