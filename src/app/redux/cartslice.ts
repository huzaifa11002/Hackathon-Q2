'use client'
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Cart } from "../lib/type";

interface CartState {
    items: Cart[];
}

const initialState: CartState = {
    items: [],
};

const cartSlice = createSlice({
    name: "Cart",
    initialState,
    reducers: {
        add(state, action: PayloadAction<Cart>) {
            state.items.push(action.payload)
        },
        remove(state, action: PayloadAction<string>) {
            state.items = state.items.filter((item) => item._id !== action.payload)
        },
        clearCart(state) {
     state.items = []
},
    },
});

export const { add, remove, clearCart } = cartSlice.actions;
export default cartSlice.reducer;