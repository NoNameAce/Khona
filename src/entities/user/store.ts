import  authReducer  from "@/features/auth/model/authSlice";
import  propertiesReducer  from "@/features/property/model/propertiesSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        properties: propertiesReducer,
        auth: authReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;