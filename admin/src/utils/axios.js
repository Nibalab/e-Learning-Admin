// src/utils/axios.js
import axios from 'axios';
import { getToken } from './auth';

const instance = axios.create({
  baseURL: 'http://localhost:8080', // Adjust the base URL according to your backend
});

// Request interceptor to add the token to request headers
instance.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // Set the Authorization header
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
