import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
    'product/fetchProducts',
    async () => {
        console.log("Kiem tra fetchProducts")
        const resp = await fetch('http://svcy3.myclass.vn/api/Product')
        const json = await resp.json()

        return json.content
    }
)
/*async (thamso, thunkAPI )
thunkAPI [Object] : dispatch, getState()
truyen nhieu tham so thui su dung dang object {
    username: value,
    password: value
}
*/
export const fetchProductByCategoryId = createAsyncThunk(
    'product/fetchProductByCategoryId', 
    async (category) => {
        // console.log(getState().home.isLoading)
        const resp = await fetch(`http://svcy3.myclass.vn/api/Product/getProductByCategory?categoryId=${category.id}`)
        if(resp.status == 200 || resp.status == 201 ){
            const json = await resp.json()
            return json.content
        } 
        else{
            return []
        }
        // dispatch(fetchProducts())    
    }
)

export const fetchCategories = createAsyncThunk(
    'category/fetchCategories',
    async (_, {dispatch,getState}) => {
        const resp = await fetch('http://svcy3.myclass.vn/api/Product/getAllCategory')
        const json = await resp.json()

        dispatch(fetchProductByCategoryId({id: getState().home.categorySelected}) )

        return json.content
    }
)
