import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../slices/cartSlice";

const appStore = configureStore({
    // This is the big reducer which collects all the reducers from all the different slices 
    reducer: {
        cart: cartReducer
    }
});

export default appStore;