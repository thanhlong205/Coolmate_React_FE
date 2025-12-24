import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import authReducer from './AuthSlice'; // Import cái vừa export ở trên
import sellerSlice from './seller/sellerSlice';
import sellerProductSlice from './seller/sellerProductSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  seller: sellerSlice,
  sellerProduct: sellerProductSlice,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
