'use client'

import { Provider as ReduxProvider } from "react-redux"
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from "./store"

interface ProviderProps {
    children: React.ReactNode
}

const Provider = ({ children }: ProviderProps) => {
    return(
    <ReduxProvider store={store}>
        <PersistGate persistor={persistor}>
            {children}
        </PersistGate>
    </ReduxProvider>
);
}

export default Provider