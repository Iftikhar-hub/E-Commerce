import { createSlice } from '@reduxjs/toolkit';

const getUserId = () => localStorage.getItem("userId");

const initialState = {
    items: JSON.parse(localStorage.getItem(`cartItems_${getUserId()}`)) || [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {

        loadUserCart: (state) => {
            const userId = getUserId();
            state.items = JSON.parse(localStorage.getItem(`cartItems_${userId}`)) || [];
        },

        addItemToCart: (state, action) => {
            const newItem = action.payload;
            const existing = state.items.find(item => item._id === newItem._id);

            if (existing) {
                existing.quantity += 1;
            } else {
                state.items.push({ ...newItem, quantity: 1 });
            }

            const userId = getUserId();
            localStorage.setItem(`cartItems_${userId}`, JSON.stringify(state.items));
        },

        removeItemFromCart: (state, action) => {
            state.items = state.items.filter(item => item._id !== action.payload);

            const userId = getUserId();
            localStorage.setItem(`cartItems_${userId}`, JSON.stringify(state.items));
        },

        updateQuantity: (state, action) => {
            const { id, quantity } = action.payload;
            const item = state.items.find(item => item._id === id);

            if (item) {
                item.quantity = quantity;
            }

            const userId = getUserId();
            localStorage.setItem(`cartItems_${userId}`, JSON.stringify(state.items));
        },

        clearCart: (state) => {
            const userId = getUserId();
            state.items = [];
            localStorage.removeItem(`cartItems_${userId}`);
        },
    },
});

export const {
    addItemToCart,
    removeItemFromCart,
    updateQuantity,
    loadUserCart,
    clearCart
} = cartSlice.actions;

export default cartSlice.reducer;