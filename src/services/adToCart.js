import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../utils/data";


export const loadUserCart = createAsyncThunk("cart/loadUserCart", async () => {
    const res = await axios.get(`${BASE_URL}/api/user/cart`, { withCredentials: true });
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
            `${BASE_URL}/api/user/cart/add`,
            { productId, quantity },
            { withCredentials: true }
        );
       
        const addedItem = res.data.item;

        if (!addedItem) {
            throw new Error("Added item not found in backend response");
        }

        return {
            _id: addedItem._id ?? "",
            pname: addedItem.pname ?? "",
            image: addedItem.image ?? "",
            discountedPrice: addedItem.discountedPrice ?? "0",
            orignalPrice: addedItem.orignalPrice ?? "0",
            quantity: addedItem.quantity ?? 1
        };
    }
);

export const removeFromCartBackend = createAsyncThunk("cart/removeFromCartBackend", async ({ productId }) => {
    await axios.post(`${BASE_URL}/api/user/cart/remove`, { productId }, { withCredentials: true });
    return productId;
});

export const updateQuantityBackend = createAsyncThunk("cart/updateQuantityBackend", async ({ productId, quantity }) => {
    await axios.post(`${BASE_URL}/api/user/cart/update`, { productId, quantity }, { withCredentials: true });
    return { productId, quantity };
});

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

export default cartSlice.reducer; 
