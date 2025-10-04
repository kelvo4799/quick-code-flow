// API Configuration and Service Layer
import axios, { AxiosError } from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://api.example.com';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
}

export interface ResetPasswordRequest {
  email: string;
}

async function fetchApi<T>(
  endpoint: string,
  options: { method?: string; data?: any } = {}
): Promise<ApiResponse<T>> {
  try {
    const response = await apiClient.request<any>({
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
    if (error instanceof AxiosError) {
      return {
        success: false,
        error: error.response?.data?.message || error.response?.data?.error || error.message || 'An error occurred',
      };
    }
    
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Network error occurred',
    };
  }
}

export const authApi = {
  login: async (credentials: LoginRequest) => {
    return fetchApi<{ token: string; user: any }>('/auth/login', {
      method: 'POST',
      data: credentials,
    });
  },

  register: async (userData: RegisterRequest) => {
    return fetchApi<{ token: string; user: any }>('/auth/register', {
      method: 'POST',
      data: userData,
    });
  },

  resetPassword: async (data: ResetPasswordRequest) => {
    return fetchApi<{ message: string }>('/auth/reset-password', {
      method: 'POST',
      data: data,
    });
  },

  socialLogin: async (provider: 'google' | 'github') => {
    // Redirect to OAuth provider
    window.location.href = `${API_BASE_URL}/auth/${provider}`;
  },
};
