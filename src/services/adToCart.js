import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: JSON.parse(localStorage.getItem('cartItems')) || [],

};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {

        addItemToCart: (state, action) => {
            const newItem = action.payload;
      
            const existing = state.items.find(item => item._id === newItem._id);
            if (existing) {
                existing.quantity += 1; 
            } else {
                state.items.push({ ...newItem, quantity: 1 });
            }
            localStorage.setItem(`cart_${id}`, JSON.stringify(state.items));
           
        },
            

        removeItemFromCart: (state, action) => {
            state.items = state.items.filter(item => item._id !== action.payload);
            localStorage.setItem('cartItems', JSON.stringify(state.items));
        },

        updateQuantity: (state, action) => {
            const { id, quantity } = action.payload;
            const item = state.items.find(item => item._id === id);
            if (item) {
                item.quantity = quantity;
            }
            localStorage.setItem('cartItems', JSON.stringify(state.items));
        },

       




    },
});

export const { addItemToCart, removeItemFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;