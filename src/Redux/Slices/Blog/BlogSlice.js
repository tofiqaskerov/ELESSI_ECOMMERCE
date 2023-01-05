import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../../Config/api";
const initialState = {
    blogs:[],
    status: 'idle',
    error: null
}
export const fetchBlogs = createAsyncThunk(
    'blog/getAll',
    async function(){
       
       return await fetch(`${BASE_URL}/blog/getAll`)
       .then(res => res.json()).then(data => data.data)
    }
)

const blogSlice = createSlice({
    name: 'blog',
    initialState,
    extraReducers:{
        [fetchBlogs.pending]: (state,action) =>{
            state.status = "Loading"   
        },
        [fetchBlogs.fulfilled]: (state, {payload}) =>{
            state.blogs = payload
            state.status = "completed"
        },
        [fetchBlogs.rejected] : (state, action) =>{
            state.status = "Failed "
        }
    }
})
export default blogSlice.reducer