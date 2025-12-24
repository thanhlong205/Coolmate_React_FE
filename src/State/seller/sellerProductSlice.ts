import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { api } from '../../config/api';
import { Product } from '../../types/ProductType';

export const fetchSellerProducts = createAsyncThunk<Product[], any>(
  '/sellerProduct/fetchSellerProducts',
  async (jwt, { rejectWithValue }) => {
    try {
      const response = await api.get('/sellers/products', {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      console.log('product created', response.data);
      const data = response.data;
      return data;
    } catch (error) {
      console.log('error --- ', error);
      throw error;
    }
  }
);

export const createProduct = createAsyncThunk<
  Product,
  { request: any; jwt: string | null }
>('/sellerProduct/createProduct', async (args, { rejectWithValue }) => {
  const { request, jwt } = args;
  try {
    const response = await api.post('/sellers/products', request, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    console.log('Product created:', response.data);
    return response.data;
  } catch (error: any) {
    console.log('error creating product', error);
    return rejectWithValue(error.response?.data || error.message);
  }
});

interface SellerProductState {
  products: Product[];
  loading: boolean;
  error: string | null | undefined;
}

const initialState: SellerProductState = {
  products: [],
  loading: false,
  error: null,
};

const sellerProductSlice = createSlice({
  name: 'sellerProduct',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // --- FETCH CASES ---
      .addCase(fetchSellerProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSellerProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchSellerProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      }) // <--- KHÔNG CÓ DẤU PHẨY, KHÔNG NGẮT MẠCH

      // --- CREATE CASES ---
      // Nối tiếp luôn bằng dấu chấm (.)
      .addCase(createProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.products.push(action.payload);
      })
      .addCase(createProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      }); // <--- Chỉ dùng dấu chấm phẩy ở cái cuối cùng
  },
});

export default sellerProductSlice.reducer;
