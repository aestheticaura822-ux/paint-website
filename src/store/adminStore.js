// frontend/src/store/adminStore.js
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useAdminStore = create(
  persist(
    (set, get) => ({
      isAuthenticated: false,
      admin: null,

      login: async (email, password) => {
        // Fixed admin credentials
        if (email === 'admin@paint.com' && password === 'Admin@123') {
          set({ isAuthenticated: true, admin: { email, name: 'Admin User' } });
          return true;
        }
        return false;
      },

      logout: () => {
        set({ isAuthenticated: false, admin: null });
        localStorage.removeItem('adminToken');
      },

      checkAuth: () => {
        return get().isAuthenticated;
      }
    }),
    {
      name: 'admin-storage',
    }
  )
);

export default useAdminStore;