// API Configuration and Service Layer
import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://api.example.com';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

async function fetchApi(endpoint, options = {}) {
  try {
    const response = await apiClient.request({
      url: endpoint,
      method: options.method || 'GET',
      data: options.data,
    });

    return {
      success: true,
      data: response.data.data || response.data,
      message: response.data.message,
    };
  } catch (error) {
    if (error.response) {
      return {
        success: false,
        error: error.response.data?.message || error.response.data?.error || error.message || 'An error occurred',
      };
    }
    
    return {
      success: false,
      error: error.message || 'Network error occurred',
    };
  }
}

export const authApi = {
  login: async (credentials) => {
    return fetchApi('/auth/login', {
      method: 'POST',
      data: credentials,
    });
  },

  register: async (userData) => {
    return fetchApi('/auth/register', {
      method: 'POST',
      data: userData,
    });
  },

  resetPassword: async (data) => {
    return fetchApi('/auth/reset-password', {
      method: 'POST',
      data: data,
    });
  },

  socialLogin: (provider) => {
    window.location.href = `${API_BASE_URL}/auth/${provider}`;
  },

  logout: async () => {
    return fetchApi('/auth/logout', {
      method: 'POST',
    });
  },
};
