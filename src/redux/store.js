import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./categorySlice";
import ProductSlice from "./ProductSlice";


export const store = configureStore({
    reducer: {
        categories: categorySlice,
        products: ProductSlice,



    },

})