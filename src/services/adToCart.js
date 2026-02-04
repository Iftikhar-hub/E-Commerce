import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// ======== Async Thunks ========
export const loadUserCart = createAsyncThunk("cart/loadUserCart", async () => {
    const res = await axios.get("https://e-commerce-backend-production-6436.up.railway.app/api/user/cart", { withCredentials: true });
    return res.data.cart.items.map(item => ({
        _id: item.productId._id,
        pname: item.productId.pname,
        image: item.productId.image,
        discountedPrice: item.productId.discountedPrice,
        orignalPrice: item.productId.orignalPrice,
        quantity: item.quantity
    }));
});

export const addToCartBackend = createAsyncThunk(
    "cart/addToCartBackend",
    async ({ productId, quantity }) => {
        const res = await axios.post(
            "https://e-commerce-backend-production-6436.up.railway.app/api/user/cart/add",
            { productId, quantity },
            { withCredentials: true }
        );

        // Get the added/updated item from backend cart
        const addedItem = res.data.cart.items.find(item => item.productId._id === productId);

        return {
            _id: addedItem.productId._id,
            pname: addedItem.productId.pname,
            image: addedItem.productId.image,
            discountedPrice: addedItem.productId.discountedPrice,
            orignalPrice: addedItem.productId.orignalPrice,
            quantity: addedItem.quantity
        };
    }
);

export const removeFromCartBackend = createAsyncThunk("cart/removeFromCartBackend", async ({ productId }) => {
    await axios.post("https://e-commerce-backend-production-6436.up.railway.app/api/user/cart/remove", { productId }, { withCredentials: true });
    return productId;
});

export const updateQuantityBackend = createAsyncThunk("cart/updateQuantityBackend", async ({ productId, quantity }) => {
    await axios.post("https://e-commerce-backend-production-6436.up.railway.app/api/user/cart/update", { productId, quantity }, { withCredentials: true });
    return { productId, quantity };
});

// ======== Slice ========
const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        status: "idle"
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(loadUserCart.fulfilled, (state, action) => {
                state.items = action.payload;
            })
            .addCase(addToCartBackend.fulfilled, (state, action) => {
                const newItem = action.payload;
                const existing = state.items.find(item => item._id === newItem._id);
                if (existing) {
                    existing.quantity += newItem.quantity;
                } else {
                    state.items.push(newItem);
                }
            })
            .addCase(removeFromCartBackend.fulfilled, (state, action) => {
                state.items = state.items.filter(item => item._id !== action.payload);
            })
            .addCase(updateQuantityBackend.fulfilled, (state, action) => {
                const { productId, quantity } = action.payload;
                const item = state.items.find(i => i._id === productId);
                if (item) item.quantity = quantity;
            });
    }
});

export default cartSlice.reducer; // ✅ default export
