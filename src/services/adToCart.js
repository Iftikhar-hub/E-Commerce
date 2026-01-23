import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: []

};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {

        addItemToCart: (state, action) => {
            // const newItem = action.payload;
            // state.items.push(newItem)
       
            // console.log('carts', newItem)

            console.log('Carts', action.payload)
            state.items.push(action.payload)
            

        },




    },
});

export const { addItemToCart } = cartSlice.actions;
export default cartSlice.reducer;