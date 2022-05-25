import { createSlice } from "@reduxjs/toolkit";
import { fetchCategories, fetchProducts, fetchProductByCategoryId } from "./HomeThunk";

const initialState = {
    isLoading: false,
    dataProducts: [],
    dataCategories: [],
    categorySelected: ""
}
/*
    addCase(trạng thái tương ứng với promise (fetch), (state trên store, action (dispath dc gọi từ thunk)))
*/

const homeSlice = createSlice({
    name: 'homeSlice',
    initialState: initialState,
    reducers: {
        onSelectCategory: (state, action) => {
            state.categorySelected = action.payload
            console.log(`onSelect ${action.payload}`)
        }
    },
    extraReducers: (builder) => {
        /*update data tra ra tu thunk len store chung*/

        builder.addCase(fetchProducts.pending, (state, action) => {
            console.log(`pending`)
            state.isLoading = true
        }).addCase(fetchProducts.fulfilled, (state, action) => {
            console.log(`Fullfill`)
            // console.log(action)
            state.dataProducts = action.payload
        }).addCase(fetchCategories.pending, (state, action) =>{
            // làm loading
        }).addCase(fetchCategories.fulfilled, (state, action) =>{
            state.dataCategories = action.payload
        }).addCase(fetchProductByCategoryId.fulfilled, (state, action)=>{
            console.log(`Fetch Product fullfill`)
            state.dataProducts = action.payload
        })
    }
})
export const {onSelectCategory} = homeSlice.actions
export default homeSlice.reducer