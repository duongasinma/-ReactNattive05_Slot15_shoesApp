import { configureStore } from "@reduxjs/toolkit";
import HomeReducer from "./screen/home/HomeSlice";
export const store = configureStore({
    reducer:{
        home : HomeReducer
    }
})