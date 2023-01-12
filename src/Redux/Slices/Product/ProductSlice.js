import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../../Config/api";
const initialState = {
    products:[],
    product: {},
    loading: false,
    error: null
}
export const fetchProducts =  createAsyncThunk(
    'product/getAll',
    async function(){
       return await fetch(`${BASE_URL}/product/getAll`)
       .then(res => res.json()).then(data => data.data)
    }
)
export const fetchProductById =  createAsyncThunk(
    'product/get',
    async (id) =>{
        return fetch(`${BASE_URL}/product/get/${id}`)
        .then(res => res.json()).then(product => product.data)
    }
)

const productSlice = createSlice({
    name: 'product',
    initialState,
    extraReducers:{
        [fetchProducts.pending]: (state,action) =>{
            state.loading = true
        },
        [fetchProducts.fulfilled]: (state, action) =>{
            state.products = action.payload
            state.loading = true
        },
        [fetchProducts.rejected] : (state, action) =>{
            state.error = action.payload
            state.loading = false
        },
        [fetchProductById.pending]: (state,action) =>{
            state.loading = true
        },
        [fetchProductById.fulfilled]: (state, action) =>{
            state.product = action.payload
            state.loading = true
        },
        [fetchProductById.rejected] : (state, action) =>{
            state.error = action.payload
            state.loading = false
        }
    }
})
export default productSlice.reducer