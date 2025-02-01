'use client'
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Cart } from "../lib/type";


const cartSlice = createSlice({
    name: "Cart",
    initialState: [] as Cart[],
    reducers: {
        add(state, action: PayloadAction<Cart>) {
            state.push(action.payload)
        },
        remove(state, action: PayloadAction<string>) {
            return state.filter((item) => item._id !== action.payload)
        },
        clearCart(state) {
    return state = []
},
    },
});

export const { add, remove, clearCart } = cartSlice.actions;
export default cartSlice.reducer;