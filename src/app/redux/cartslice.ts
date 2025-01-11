'use client'

import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface CartType {
    title: string,
    price: number,
    quantity: number,
    image: string,
    slug:{
        current: string,
      },
}

const cartSlice = createSlice({
    name:"Cart",
    initialState:[] as CartType[],
    reducers:{
        add(state, action:PayloadAction<CartType>){
            state.push(action.payload)
        },
        remove(state, action:PayloadAction<string>){
           return state.filter((item)=> item.slug.current !== action.payload)
        },
    },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;