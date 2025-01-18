'use client'

import { configureStore, combineReducers } from "@reduxjs/toolkit"
import CartReducer from "./cartslice"
import storage from "redux-persist/lib/storage"
import { persistReducer, persistStore } from 'redux-persist'

const persistConfig = {
    key: "root",
    version: 1,
    storage
}

const reducer = combineReducers({
    cart: CartReducer
})

const persistedReducer = persistReducer(persistConfig, reducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    })
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);

export default store;

