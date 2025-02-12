'use client'
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Cart } from "../types/type";

const initialState: Cart[] = []

const cartSlice = createSlice({
    name: "Cart",
    initialState,
    reducers: {
        add(state, action: PayloadAction<Cart>) {
            state.push(action.payload)
        },
        remove(state, action: PayloadAction<string>) {
           return state = state.filter((item) => item._id !== action.payload)
        },
        removeAll(state) {
            state.length = 0
            localStorage.removeItem('Cart')
        }
    },
});

export const { add, remove, removeAll } = cartSlice.actions;
export default cartSlice.reducer;