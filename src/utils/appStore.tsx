import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../slices/cartSlice";

const appStore = configureStore({
    // This is the big reducer which collects all the reducers from all the different slices 
    reducer: {
        cart: cartReducer,
    }
});

export default appStore;

// AppDispatch tell the exact type of dispatch funtion in redux to TS, so that invalid actions could be dispatched 
export type AppDispatch = typeof appStore.dispatch;
