import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../config/api';

export const sellerLogin = createAsyncThunk(
  '/auth/sellerLogin', // Tên action Redux (đặt tên khác chút cho đỡ nhầm với URL)
  async (loginRequest: any, { rejectWithValue }) => {
    try {
      // --- SỬA LỖI TẠI ĐÂY ---
      // Code cũ (Sai): await api.post('/auth/login', ...);
      // Code mới (Đúng): Phải là '/auth/signin'
      const response = await api.post('/auth/signin', loginRequest);

      console.log('Login success:', response.data);

      // QUAN TRỌNG: Nhớ return data để Redux nhận được kết quả
      if (response.data.jwt) {
        localStorage.setItem('jwt', response.data.jwt);
      }
      return response.data;
    } catch (error: any) {
      console.log('Login error:', error);
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);
