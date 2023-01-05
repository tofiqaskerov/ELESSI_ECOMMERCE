import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../../Config/api";
const initialState = {
    products:[],
    status: 'idle',
    error: null
}
export const fetchProducts = createAsyncThunk(
    'product/getAll',
    async function(){
       
       return await fetch(`${BASE_URL}/product/getAll`)
       .then(res => res.json()).then(data => data.data)
    }
)

const productSlice = createSlice({
    name: 'product',
    initialState,
    extraReducers:{
        [fetchProducts.pending]: (state,action) =>{
            state.status = "Loading"   
        },
        [fetchProducts.fulfilled]: (state, {payload}) =>{
            state.products = payload
            state.status = "completed"

        },
        [fetchProducts.rejected] : (state, action) =>{
            state.status = "Failed "
        }
    }
})
export default productSlice.reducer