
import { configureStore } from '@reduxjs/toolkit';
import { userApi } from '../services/userApi';
import { productApi } from '../services/productApi';

import { setupListeners } from '@reduxjs/toolkit/query';
import cartReducer from '../services/adToCart';

export const store = configureStore({
    reducer: {
       
        [userApi.reducerPath]: userApi.reducer,
    
        [productApi.reducerPath]: productApi.reducer,
        cart: cartReducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(userApi.middleware)
            .concat(productApi.middleware),
});







setupListeners(store.dispatch);
