import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchProducts = () => api.get('/products');
export const fetchCategories = () => api.get('/categories');
export const checkout = (items, userId) => api.post('/checkout', { items, userId });
