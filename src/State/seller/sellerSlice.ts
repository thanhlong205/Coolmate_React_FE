// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import { api } from '../../config/api';

// export const fetchSellerProfile = createAsyncThunk(
//   '/sellers/fetchSellerProfile',
//   async (jwt: string, { rejectWithValue }) => {
//     try {
//       const response = await api.get('/sellers/fetchSellerProfile', {
//         headers: { Authorization: `Bearer ${jwt}` },
//       });

//       console.log('fetch seller profile success:', response.data);
//       return response.data;
//     } catch (error: any) {
//       console.log('error fetching profile:', error);
//       // Trả về error message thay vì toàn bộ object error (để tránh lỗi serializable)
//       return rejectWithValue(error.response?.data || error.message);
//     }
//   }
// );

// interface SellerState {
//   sellers: any[];
//   selectedSeller: any;
//   profile: any;
//   report: any;
//   loading: boolean;
//   error: any;
// }

// const initialState: SellerState = {
//   sellers: [],
//   selectedSeller: null,
//   profile: null,
//   report: null,
//   loading: false,
//   error: null,
// };

// const sellerSlice = createSlice({
//   name: 'sellers',
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       // Fetch Profile Cases
//       .addCase(fetchSellerProfile.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchSellerProfile.fulfilled, (state, action) => {
//         state.loading = false;
//         state.profile = action.payload; // Lưu dữ liệu vào state.profile
//       })
//       .addCase(fetchSellerProfile.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       });
//   },
// });

// // QUAN TRỌNG: Export reducer để nhét vào Store
// export default sellerSlice.reducer;

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { api } from '../../config/api';

export const fetchSellerProfile = createAsyncThunk(
  '/sellers/fetchSellerProfile',
  async (jwt: string, { rejectWithValue }) => {
    try {
      // --- SỬA LỖI TẠI ĐÂY ---
      // Sai: api.get('/sellers/fetchSellerProfile', ...)
      // Đúng: api.get('/sellers/profile', ...)
      const response = await api.get('/sellers/profile', {
        headers: { Authorization: `Bearer ${jwt}` },
      });

      console.log('fetch seller profile success:', response.data);
      return response.data;
    } catch (error: any) {
      console.log('error fetching profile:', error);
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

interface SellerState {
  sellers: any[];
  selectedSeller: any;
  profile: any;
  report: any;
  loading: boolean;
  error: any;
}

const initialState: SellerState = {
  sellers: [],
  selectedSeller: null,
  profile: null,
  report: null,
  loading: false,
  error: null,
};

const sellerSlice = createSlice({
  name: 'sellers',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSellerProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSellerProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.profile = action.payload;
      })
      .addCase(fetchSellerProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default sellerSlice.reducer;
