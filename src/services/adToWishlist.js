import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../utils/data";
// import { addLocalItem } from "./adToCart";


export const loadUserWishlist = createAsyncThunk("wishlist/loadUserWishlist", async () => {
    const res = await axios.get(`${BASE_URL}/api/user/wishlist`, { withCredentials: true });
    return res.data.wishlist.items.map(item => ({
        _id: item.productId._id,
        pname: item.productId.pname,
        image: item.productId.image,
        discountedPrice: item.productId.discountedPrice,
        orignalPrice: item.productId.orignalPrice,
        quantity: item.quantity
    }));
});

export const addToWishlistBackend = createAsyncThunk(
    "wishlist/addToWishlistBackend",
    async ({ product }, { dispatch }) => {
        dispatch(addLocalItem(product));

        const res = await axios.post(
            `${BASE_URL}/api/user/wishlist/add`,
            {
                productId: product._id,
                quantity: 1 },
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

export const removeFromWishlistBackend = createAsyncThunk("wishlist/removeFromWishlistBackend", async ({ productId }) => {
    await axios.post(`${BASE_URL}/api/user/wishlist/remove`, { productId }, { withCredentials: true });
    return productId;
});

export const updateQuantityyBackend = createAsyncThunk("cart/updateQuantityyBackend", async ({ productId, quantity }) => {
    await axios.post(`${BASE_URL}/api/user/wishlist/update`, { productId, quantity }, { withCredentials: true });
    return { productId, quantity };
});

const wishlistSlice = createSlice({
    name: "wishlist",
    initialState: {
        items: [],
        status: "idle"
    },
    reducers: {
        addLocalItem: (state, action) => {
            const existing = state.items.find(i => i._id === action.payload._id);
            if (existing) {
                existing.quantity += 1;
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }
        },
        updateLocalQuantity: (state, action) => {
            const { productId, quantity } = action.payload;
            const item = state.items.find(i => i._id === productId);
            if (item) item.quantity = quantity;
        }
    },
    extraReducers: builder => {
        builder
            .addCase(loadUserWishlist.fulfilled, (state, action) => {
                state.items = action.payload;
            })
            .addCase(addToWishlistBackend.fulfilled, (state, action) => {
                // const newItem = action.payload;
                // const existing = state.items.find(item => item._id === newItem._id);
                // if (existing) {
                //     existing.quantity += newItem.quantity;
                // } else {
                //     state.items.push(newItem);
                // }
            })
            .addCase(removeFromWishlistBackend.pending, (state, action) => {
                state.items = state.items.filter(item => item._id !== action.meta.arg.productId);
            })
            .addCase(updateQuantityyBackend.fulfilled, (state, action) => {
                const { productId, quantity } = action.payload;
                const item = state.items.find(i => i._id === productId);
                if (item) item.quantity = quantity;
            });
    }
});

export const { addLocalItem, updateLocalQuantity } = wishlistSlice.actions;
export default wishlistSlice.reducer; 
