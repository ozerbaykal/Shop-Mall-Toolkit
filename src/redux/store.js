import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./categorySlice";
import ProductSlice from "./ProductSlice";
import cartSlice from "./cartSlice";


export const store = configureStore({
    reducer: {
        categories: categorySlice,
        products: ProductSlice,
        carts: cartSlice,



    },

})