import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './feature/cart/cartSlice';
import productSlice from './feature/products/productSlice';
import { apiSlice } from './api/apiSlice';
import userSlice from './user/userSlice';

const store = configureStore({
    reducer: {
        cart: cartSlice,
        product: productSlice,
        user: userSlice,
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;