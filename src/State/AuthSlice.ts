// import { createAsyncThunk } from '@reduxjs/toolkit';
// import { api } from '../config/api';

// export const sendLoginSignupOtp = createAsyncThunk(
//   '/auth/sendLoginSignupOtp',
//   async ({ email }: { email: string }, { rejectWithValue }) => {
//     try {
//       const response = await api.get('/auth/sent/login-signup-otp');
//       console.log('fetch seller profile', response);
//     } catch (error) {
//       console.log('error---', error);
//     }
//   }
// );

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../config/api';

// Action Login
export const login = createAsyncThunk(
  '/auth/signin',
  async (loginData: any, { rejectWithValue }) => {
    try {
      // Đảm bảo URL là /signin (không có g)
      const response = await api.post('/auth/signin', loginData);
      console.log('Login success:', response.data);
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

export const sendLoginSignupOtp = createAsyncThunk(
  '/auth/sendLoginSignupOtp',
  async ({ email }: { email: string }, { rejectWithValue }) => {
    try {
      const response = await api.post('/auth/sent/login-signup-otp', { email });
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  jwt: null,
  loading: false,
  error: null,
  otpSent: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.jwt = action.payload.jwt;
      })
      .addCase(sendLoginSignupOtp.fulfilled, (state) => {
        state.loading = false;
        state.otpSent = true;
      });
  },
});

// BẮT BUỘC PHẢI CÓ DÒNG NÀY
export default authSlice.reducer;
