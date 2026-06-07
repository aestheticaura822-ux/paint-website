// src/utils/constants.js

// App Constants
export const APP_NAME = 'ColorSplash Paints';
export const APP_VERSION = '1.0.0';

// API Endpoints
export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/auth/login',
    LOGOUT: '/auth/logout',
    VERIFY: '/auth/verify'
  },
  PRODUCTS: {
    BASE: '/products',
    GET_ALL: '/products',
    GET_BY_ID: '/products/:id',
    CREATE: '/products',
    UPDATE: '/products/:id',
    DELETE: '/products/:id'
  },
  ORDERS: {
    BASE: '/orders',
    GET_ALL: '/orders',
    GET_BY_ID: '/orders/:id',
    CREATE: '/orders',
    UPDATE_STATUS: '/orders/:id/status'
  },
  CONTACTS: {
    BASE: '/contacts',
    GET_ALL: '/contacts',
    CREATE: '/contacts',
    DELETE: '/contacts/:id'
  }
};

// Product Categories
export const PRODUCT_CATEGORIES = [
  { id: 1, name: 'Wall Paints', slug: 'wall-paints' },
  { id: 2, name: 'Wood Finishes', slug: 'wood-finishes' },
  { id: 3, name: 'Metal Paints', slug: 'metal-paints' },
  { id: 4, name: 'Exterior Paints', slug: 'exterior-paints' }
];

// Paint Finishes
export const PAINT_FINISHES = [
  'Matte',
  'Gloss',
  'Satin',
  'Silk',
  'Eggshell',
  'Semi-Gloss'
];

// Order Statuses
export const ORDER_STATUSES = [
  { value: 'pending', label: 'Pending', color: 'bg-yellow-100 text-yellow-800' },
  { value: 'processing', label: 'Processing', color: 'bg-blue-100 text-blue-800' },
  { value: 'shipped', label: 'Shipped', color: 'bg-purple-100 text-purple-800' },
  { value: 'delivered', label: 'Delivered', color: 'bg-green-100 text-green-800' },
  { value: 'cancelled', label: 'Cancelled', color: 'bg-red-100 text-red-800' }
];

// Shipping Constants
export const FREE_SHIPPING_THRESHOLD = 5000;
export const SHIPPING_COST = 100;

// Pagination
export const PRODUCTS_PER_PAGE = 12;
export const ORDERS_PER_PAGE = 10;

// Admin Credentials (Demo)
export const DEMO_ADMIN = {
  email: 'admin@paint.com',
  password: 'Admin@123'
};

// Color Palette (Theme Colors)
export const THEME_COLORS = {
  primary: '#1E2A5A',
  secondary: '#FF9B50',
  accent: '#E6B800',
  dark: '#1a1a2e',
  light: '#F8F9FA',
  success: '#27AE60',
  error: '#E74C3C',
  warning: '#F39C12',
  info: '#3498DB'
};

// Social Links
export const SOCIAL_LINKS = {
  facebook: 'https://facebook.com/colorsplash',
  instagram: 'https://instagram.com/colorsplash',
  youtube: 'https://youtube.com/colorsplash',
  whatsapp: 'https://wa.me/923001234567'
};